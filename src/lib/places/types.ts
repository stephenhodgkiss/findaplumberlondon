import { Place, PlaceDetails } from '@/types';

export interface SearchOptions {
  location: {
    lat: number;
    lng: number;
  };
  radius?: number;
  maxResults?: number;
  type?: string;
}

export const DEFAULT_OPTIONS: Required<SearchOptions> = {
  location: {
    lat: 51.5074,
    lng: -0.1278
  },
  radius: 10000,  // Increased from 5000m to 10000m
  maxResults: 20, // Increased from 9 to 20
  type: 'plumber'
};

export interface PlaceProvider {
  name: string;
  searchPlaces(query: string, options: SearchOptions): Promise<Place[]>;
  getPlaceDetails(placeId: string): Promise<PlaceDetails | null>;
}
