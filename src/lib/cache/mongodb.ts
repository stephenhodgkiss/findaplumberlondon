import { getDatabase } from '../mongodb';
import { Place } from '@/types';
import { SearchOptions } from '../places/types';

export interface CachedSearchResult {
  _id: string;
  places: Place[];
  timestamp: number;
  query: string;
  options: SearchOptions;
}

// Cache expiry time - 24 hours
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function getCachedResults(cacheKey: string): Promise<Place[] | null> {
  try {
    const db = await getDatabase();
    const collection = db.collection<CachedSearchResult>('places_cache');
    
    const result = await collection.findOne({
      _id: cacheKey,
      timestamp: { $gt: Date.now() - CACHE_EXPIRY_MS }
    });

    if (result) {
      console.log('MongoDB cache hit for key:', cacheKey);
      return result.places;
    }
    
    console.log('MongoDB cache miss for key:', cacheKey);
    return null;
  } catch (error) {
    console.error('Error accessing MongoDB cache:', error);
    return null;
  }
}

export async function cacheResults(
  cacheKey: string,
  query: string,
  options: SearchOptions,
  places: Place[]
): Promise<void> {
  try {
    const db = await getDatabase();
    const collection = db.collection<CachedSearchResult>('places_cache');
    
    await collection.updateOne(
      { _id: cacheKey },
      {
        $set: {
          places,
          timestamp: Date.now(),
          query,
          options
        }
      },
      { upsert: true }
    );
    
    console.log('Successfully cached results in MongoDB for key:', cacheKey);
  } catch (error) {
    console.error('Error caching results in MongoDB:', error);
  }
}
