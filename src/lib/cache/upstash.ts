import { Redis } from '@upstash/redis'
import { Place } from '@/types';
import { SearchOptions } from '../places/types';

let redis: Redis | null = null;

export interface CachedSearchResult {
  places: Place[];
  timestamp: number;
  query: string;
  options: SearchOptions;
}

export async function getUpstashClient() {
  if (!redis) {
    if (!process.env.UPSTASH_REDIS_URL || !process.env.UPSTASH_REDIS_TOKEN) {
      throw new Error('Upstash Redis configuration missing');
    }

    redis = new Redis({
      url: process.env.UPSTASH_REDIS_URL,
      token: process.env.UPSTASH_REDIS_TOKEN,
    });
  }
  return redis;
}

// Cache expiry time - 24 hours in milliseconds and seconds
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const CACHE_EXPIRY_SECONDS = 24 * 60 * 60; // 24 hours in seconds

export async function getCachedResults(cacheKey: string): Promise<Place[] | null> {
  try {
    const client = await getUpstashClient();
    const result = await client.get<CachedSearchResult>(cacheKey);

    if (result && result.timestamp > Date.now() - CACHE_EXPIRY_MS) {
      console.log('Upstash cache hit for key:', cacheKey);
      return result.places;
    }

    console.log('Upstash cache miss for key:', cacheKey);
    return null;
  } catch (error) {
    console.error('Error accessing Upstash cache:', error);
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
    const client = await getUpstashClient();
    await client.set(cacheKey, {
      places,
      timestamp: Date.now(),
      query,
      options,
    }, {
      ex: CACHE_EXPIRY_SECONDS // Set TTL in seconds
    });
    console.log('Successfully cached results in Upstash for key:', cacheKey);
  } catch (error) {
    console.error('Error caching results in Upstash:', error);
  }
}
