import { Place, Location, PlaceDetails } from '@/types';
import { PlaceProvider, SearchOptions } from './types';
import { isWithinLondonBounds, calculateDistance } from '../geolocation';
import { convertDistance } from '../config';

const serviceKeywords = {
  'commercial-plumbing': 'plumber commercial',
  'emergency-plumbing': 'plumber emergency',
  'residential-plumbing': 'plumber residential',
  'gas-plumbing': 'plumber gas heating',
  'water-heater': 'plumber boiler',
  'drain-cleaning': 'plumber drain'
};

// Constants
const FOURSQUARE_API_BASE = 'https://api.foursquare.com/v3';
const PLACE_FIELDS = 'fsq_id,name,location,geocodes,tel,website,hours,rating,photos,categories,stats,distance,features,hours_popular,verified';

// Foursquare category IDs for plumbing services
const FOURSQUARE_CATEGORIES = {
  primary: ['11096'],  // Plumber
  secondary: [
    '11096'  // Plumber
  ]
};

// Keywords that must be present in the business name or category
const requiredTerms: string[] = [];  // Removed strict name filtering

// Terms that indicate irrelevant businesses
const excludedTerms = [
  'scrap', 'metal', 'library', 'school', 'church', 'museum'
];

interface FoursquarePlace {
  fsq_id: string;
  name: string;
  location?: {
    formatted_address?: string;
    address?: string;
    locality?: string;
    region?: string;
    country?: string;
    postcode?: string;
  };
  geocodes?: {
    main?: {
      latitude: number;
      longitude: number;
    };
  };
  categories?: Array<{
    id: number;
    name: string;
    icon?: {
      prefix?: string;
      suffix?: string;
    };
  }>;
  tel?: string;
  website?: string;
  hours?: {
    display?: string;
    is_local_holiday?: boolean;
    open_now?: boolean;
    regular?: Array<{
      close: string;
      day: string;
      open: string;
    }>;
  };
  hours_popular?: Array<{
    close: string;
    day: string;
    open: string;
  }>;
  rating?: number;
  stats?: {
    total_photos?: number;
    total_ratings?: number;
    total_tips?: number;
  };
  distance?: number;
  features?: {
    payment?: {
      credit_cards?: {
        accepts_credit_cards?: boolean;
      };
    };
    services?: {
      delivery?: boolean;
      takeout?: boolean;
    };
  };
  verified?: boolean;
}

export class FoursquarePlacesProvider implements PlaceProvider {
  private readonly apiKey: string;
  readonly name = 'Foursquare Places';
  private readonly INCLUDED_CATEGORIES = [
    'Plumber',
    'Heating, Ventilating and Air Conditioning Contractor'
  ];

  constructor() {
    const apiKey = process.env.FOURSQUARE_API_KEY;
    
    if (!apiKey) {
      throw new Error('Foursquare Places API key not configured');
    }
    this.apiKey = decodeURIComponent(apiKey.trim());
  }

  private async fetchFromFoursquare(url: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Authorization': `${this.apiKey}`,
          'Accept': 'application/json'
        },
        keepalive: true,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Foursquare API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
          url: url.replace(this.apiKey, '[REDACTED]')
        });
        
        if (response.status === 429) {
          throw new Error('Rate limit exceeded');
        } else if (response.status === 401) {
          throw new Error('Authentication failed - please check API key');
        } else if (response.status >= 500) {
          throw new Error('Foursquare server error');
        }
        
        throw new Error(`Foursquare API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      // Log response headers for debugging
      const headers: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      // console.log('Foursquare response headers:', headers);

      return response;
    } catch (error: any) {
      clearTimeout(timeoutId); // Ensure timeout is cleared on error
      
      // Enhanced error handling
      if (error.name === 'AbortError') {
        throw new Error('Request timed out');
      } else if (error.code === 'UND_ERR_SOCKET') {
        throw new Error('Connection error - please try again');
      } else if (error.cause?.code === 'UND_ERR_SOCKET') {
        throw new Error('Connection closed by server - possible rate limiting');
      }
      
      throw error;
    }
  }

  async searchPlaces(query: string, options: SearchOptions): Promise<Place[]> {
    const ll = `${options.location.lat},${options.location.lng}`;
    
    try {
      const searchParams = new URLSearchParams({
        ll,
        query: `${query}`,
        radius: '10000',
        limit: '50',
        sort: 'DISTANCE',
        fields: PLACE_FIELDS,
        categories: FOURSQUARE_CATEGORIES.primary.join(',')
      });

      const url = `${FOURSQUARE_API_BASE}/places/search?${searchParams.toString()}`;
      // console.log('Foursquare request params:', Object.fromEntries(searchParams.entries()));

      // Add retries for connection issues
      let retries = 3;
      let lastError: Error | null = null;
      let delay = 2000; // Start with 2 second delay
      
      while (retries > 0) {
        try {
          const response = await this.fetchFromFoursquare(url);
          const data = await response.json();
          
          if (!data.results || !Array.isArray(data.results)) {
            console.warn('Unexpected Foursquare response format:', data);
            return [];
          }

          // console.log('Foursquare raw results count:', data.results.length);
          
          // Filter out excluded categories
          const filteredResults = data.results.filter((place: FoursquarePlace) => this.hasIncludedCategory(place));
          
          const places = filteredResults
            .filter((place: FoursquarePlace) => this.isValidPlace(place))
            .map((place: FoursquarePlace) => this.transformPlace(place, options.location));

          console.log('Foursquare processed results count:', places.length);
          
          return places;
        } catch (error) {
          lastError = error as Error;
          retries--;
          
          if (retries > 0) {
            console.warn(`Retrying Foursquare request in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Exponential backoff
          }
        }
      }
      
      throw lastError || new Error('Failed to fetch places from Foursquare');
    } catch (error) {
      console.error('Error fetching places from Foursquare:', error);
      return [];
    }
  }

  async getPlaceDetails(placeId: string): Promise<PlaceDetails | null> {
    try {
      const response = await this.fetchFromFoursquare(
        `${FOURSQUARE_API_BASE}/places/${placeId}?fields=${PLACE_FIELDS}`
      );

      const place = await response.json();
      if (!place || !place.geocodes?.main) {
        return null;
      }

      const { latitude, longitude } = place.geocodes.main;
      const location: Location = {
        lat: latitude,
        lng: longitude
      };

      return this.transformPlace(place, location);
    } catch (error: any) {
      console.error('Error getting place details:', error);
      return null;
    }
  }

  private hasExcludedTerms(text: string): boolean {
    const lowerText = text.toLowerCase();
    const hasExcluded = excludedTerms.some(term => lowerText.includes(term));
    if (hasExcluded) {
      // console.log('Found excluded term in:', text);
    }
    return hasExcluded;
  }

  private hasIncludedCategory(place: FoursquarePlace): boolean {
    // if (place.categories && place.categories.length > 0) {
    //   console.log(`Categories for "${place.name}" (ID: ${place.fsq_id}):`, 
    //     place.categories.map(cat => `${cat.name} (${cat.id})`));
    // }
    return place.categories?.some(category => 
      this.INCLUDED_CATEGORIES.includes(category.name)
    ) ?? false;
  }

  private isValidPlace(place: FoursquarePlace): boolean {
    // Ensure place has valid location data
    if (!place.geocodes?.main) {
      // console.log('Skipping place without location:', place.name);
      return false;
    }
    
    // Check if within London bounds
    const { latitude, longitude } = place.geocodes.main;
    const isInLondon = isWithinLondonBounds({ lat: latitude, lng: longitude });
    if (!isInLondon) {
      // console.log('Skipping place outside London:', place.name);
      return false;
    }

    // Check if place has either a phone number or website
    if (!place.tel && !place.website) {
      // console.log('Skipping place without contact info:', place.name);
      return false;
    }

    if (!place.tel && place.website && (place.website?.includes('business.data.gov.uk') || place.website?.includes('blogspot.com'))) {
      // console.log('Skipping place without contact info:', place.name);
      return false;
    }
    
    return !this.hasExcludedTerms(place.name);
  }

  private transformPlace(place: FoursquarePlace, searchLocation: Location): Place {
    if (!place.geocodes?.main) {
      throw new Error('Place has no location data');
    }

    const { latitude, longitude } = place.geocodes.main;
    const location: Location = {
      lat: latitude,
      lng: longitude
    };

    const distance = calculateDistance(
      searchLocation,
      location
    );

    const { value: distanceValue } = convertDistance(distance);

    return {
      id: place.fsq_id,
      place_id: place.fsq_id,
      name: place.name,
      vicinity: place.location?.formatted_address || '',
      formatted_address: place.location?.formatted_address,
      formatted_phone_number: place.tel,
      website: place.website,
      rating: place.rating,
      geometry: {
        location
      },
      types: place.categories?.map(cat => cat.name) || [],
      categories: place.categories?.map(cat => cat.name) || [],
      primaryCategory: place.categories?.[0]?.name,
      distance: distanceValue,
      opening_hours: place.hours ? {
        open_now: place.hours.open_now || false,
        weekday_text: place.hours.display ? [place.hours.display] : undefined
      } : undefined
    };
  }

  private formatAddress(location: any): string {
    if (!location) return '';
    
    // Skip the business name and start with the street address
    const parts = [
      location.address,
      location.cross_street,
      location.locality,
      location.region,
      location.postcode,
      location.country
    ].filter(Boolean);
    
    return parts.join(', ');
  }
}