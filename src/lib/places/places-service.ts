import { Place, Location, PlaceDetails } from '@/types';
import { PlaceProvider, SearchOptions } from './types';
import { HerePlacesProvider } from './here-provider';
import { FoursquarePlacesProvider } from './foursquare-provider';
import { isWithinLondonBounds } from '../geolocation';
import { getDatabase } from '../mongodb';
import { getCachedResults as getMongoDBResults, cacheResults as cacheMongoDBResults } from '../cache/mongodb';
import { getCachedResults as getUpstashResults, cacheResults as cacheUpstashResults } from '../cache/upstash';

interface CachedSearchResult {
  _id: string;
  places: Place[];
  timestamp: number;
  query: string;
  options: SearchOptions;
}

export class PlacesService {
  private readonly providers: PlaceProvider[] = [];
  private readonly enableCaching: boolean;
  private cacheSource: string;

  constructor() {
    console.log('Initializing PlacesService...');
    this.enableCaching = process.env.ENABLE_CACHING === 'true';
    console.log('Cache configuration:', {
      ENABLE_CACHING: process.env.ENABLE_CACHING,
      CACHE_SOURCE: process.env.CACHE_SOURCE
    });
    this.cacheSource = process.env.CACHE_SOURCE || 'MONGODB';

    // Initialize providers
    try {
      if (process.env.HERE_API_KEY) {
        const hereProvider = new HerePlacesProvider();
        if (hereProvider) {
          this.providers.push(hereProvider);
        }
      }
      if (process.env.FOURSQUARE_API_KEY) {
        const foursquareProvider = new FoursquarePlacesProvider();
        if (foursquareProvider) {
          this.providers.push(foursquareProvider);
        }
      }
    } catch (error) {
      console.error('Error initializing providers:', error);
    }

    if (this.providers.length === 0) {
      console.warn('No place providers could be initialized');
    } else {
      console.log('\nPlacesService initialized with', this.providers.length, 'providers');
      console.log('Providers:', this.providers.map(p => p.name).join(', '));
      console.log('Caching enabled:', this.enableCaching);
      console.log('==================================\n');
    }
  }

  private getCacheKey(query: string, options: SearchOptions): string {
    // Normalize the location coordinates to 4 decimal places to ensure consistent keys
    const normalizedLocation = {
      lat: Number(options.location.lat.toFixed(4)),
      lng: Number(options.location.lng.toFixed(4))
    };

    // Sort any object properties to ensure consistent order
    const keyObj = {
      query: query.toLowerCase().trim(),
      location: normalizedLocation,
      radius: options.radius || 10000,
      type: (options.type || 'plumber').toLowerCase()
    };

    // Create a stable JSON string (properties always in same order)
    const keyString = JSON.stringify(keyObj);
    console.log('Generated cache key from:', keyString);
    
    return Buffer.from(keyString).toString('base64');
  }

  private async getCachedResults(cacheKey: string): Promise<Place[] | null> {
    if (!this.enableCaching) return null;

    try {
      if (this.cacheSource === 'UPSTASH') {
        return await getUpstashResults(cacheKey);
      } else {
        return await getMongoDBResults(cacheKey);
      }
    } catch (error) {
      console.error('Error accessing cache:', error);
      return null;
    }
  }

  private async cacheResults(cacheKey: string, query: string, options: SearchOptions, places: Place[]): Promise<void> {
    if (!this.enableCaching) return;

    try {
      if (this.cacheSource === 'UPSTASH') {
        await cacheUpstashResults(cacheKey, query, options, places);
      } else {
        await cacheMongoDBResults(cacheKey, query, options, places);
      }
    } catch (error) {
      console.error('Error caching results:', error);
    }
  }

  async searchPlaces(query: string, options: SearchOptions): Promise<Place[]> {
    console.log('\nSearching places with:', { query, options });

    // Validate location
    if (!options.location || !isWithinLondonBounds(options.location)) {
      console.warn('Location out of bounds:', options.location);
      return [];
    }

    // Normalize options to ensure consistent caching
    const normalizedOptions = {
      ...options,
      location: {
        lat: Number(options.location.lat.toFixed(4)),
        lng: Number(options.location.lng.toFixed(4))
      },
      radius: options.radius || 10000,
      type: (options.type || 'plumber').toLowerCase()
    };

    const cacheKey = this.getCacheKey(query, normalizedOptions);
    
    // Try to get cached results
    const cachedResults = await this.getCachedResults(cacheKey);
    if (cachedResults) {
      console.log('Found cached results');
      return cachedResults;
    }

    console.log('\nSearching places across all providers...');
    console.log('Query:', query);
    console.log('Options:', JSON.stringify(normalizedOptions, null, 2));
    console.log('\nQuerying providers:', this.providers.map(p => p.name).join(', '));

    // Query all providers in parallel
    const results = await Promise.all(
      this.providers.map(async provider => {
        console.log(`\nQuerying ${provider.name}...`);
        console.log('Search query:', query);
        console.log('Search options:', JSON.stringify(normalizedOptions, null, 2));
        
        try {
          return await provider.searchPlaces(query, normalizedOptions);
        } catch (error) {
          console.error(`Error from ${provider.name}:`, error);
          return [];
        }
      })
    );

    // Combine and deduplicate results
    const allPlaces = results.flat();
    console.log('\nTotal results from all providers:', allPlaces.length);

    // Sort by distance and limit results before caching
    const sortedPlaces = allPlaces
      .sort((a, b) => (a.distance || 0) - (b.distance || 0))
      .slice(0, normalizedOptions.maxResults || 50);

    // Cache the sorted and filtered results
    await this.cacheResults(cacheKey, query, normalizedOptions, sortedPlaces);
    console.log('Results cached');

    console.log('Returning', sortedPlaces.length, 'results after sorting and limiting');
    return sortedPlaces;
  }

  async getPlaceDetails(placeId: string): Promise<PlaceDetails | null> {
    for (const provider of this.providers) {
      try {
        const details = await provider.getPlaceDetails(placeId);
        if (details) {
          return details;
        }
      } catch (error) {
        console.error(`Error getting place details from ${provider.name}:`, error);
      }
    }
    return null;
  }
}
