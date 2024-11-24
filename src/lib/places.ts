import { getDatabase } from './mongodb';
import { Place, Location } from '@/types';
import { isWithinLondonBounds } from './geolocation';
import { PlacesService } from './places/places-service';
import { SearchOptions } from './places/types';

// Initialize singleton instance
let placesService: PlacesService | null = null;

// Cache expiry time - 3 hour for better performance while maintaining reasonable freshness
const CACHE_EXPIRY = 10800000; // 3 hour in milliseconds

async function ensureInitialized() {
  if (!placesService) {
    console.log('==================================');
    console.log('Initializing PlacesService...');
    console.log('Time:', new Date().toISOString());
    console.log('==================================\n');
    
    placesService = new PlacesService();
  }
  return placesService;
}

function normalizeLocation(location: any): Location | null {
  if (typeof location === 'object' && location !== null) {
    const lat = parseFloat(location.lat);
    const lng = parseFloat(location.lng);

    if (!isNaN(lat) && !isNaN(lng)) {
      return { lat, lng };
    }
  }

  return null;
}

export async function searchPlaces(
  query: string,
  options: SearchOptions
): Promise<Place[]> {
  try {
    const service = await ensureInitialized();
    const normalizedLocation = normalizeLocation(options.location);

    if (!normalizedLocation) {
      throw new Error('Invalid location provided');
    }

    // Validate location is within London bounds
    if (!isWithinLondonBounds(normalizedLocation)) {
      console.warn('Location outside London bounds, using central London coordinates');
      return [];
    }

    return service.searchPlaces(query, {
      ...options,
      location: normalizedLocation
    });
  } catch (error) {
    console.error('Error searching places:', error);
    return [];
  }
}

export async function getPlaceDetails(placeId: string): Promise<Place | null> {
  try {
    const service = await ensureInitialized();
    return service.getPlaceDetails(placeId);
  } catch (error) {
    console.error('Error getting place details:', error);
    return null;
  }
}
