import { Location } from '@/types';
import { HereGeocoder } from './places/here-geocoder';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface LocationData {
  coordinates: Coordinates;
  bounds?: {
    northeast: Coordinates;
    southwest: Coordinates;
  };
}

// London coordinates
export const LONDON_CENTER: Location = {
  lat: 51.5074,
  lng: -0.1278
};

export const LONDON_BOUNDS = {
  northeast: { lat: 51.6918741, lng: 0.3340155 },
  southwest: { lat: 51.2867602, lng: -0.5103751 }
};

// London area coordinates
export const LONDON_AREAS: { [key: string]: { coordinates: Location, bounds?: typeof LONDON_BOUNDS } } = {
  'central-london': {
    coordinates: LONDON_CENTER,
    bounds: LONDON_BOUNDS
  },
  'north-london': {
    coordinates: { lat: 51.5904, lng: -0.1534 }
  },
  'south-london': {
    coordinates: { lat: 51.4613, lng: -0.1156 }
  },
  'east-london': {
    coordinates: { lat: 51.5387, lng: 0.0209 }
  },
  'west-london': {
    coordinates: { lat: 51.5101, lng: -0.2837 }
  },
  'barnet': { coordinates: { lat: 51.6504, lng: -0.1932 } },
  'camden': { coordinates: { lat: 51.5290, lng: -0.1255 } },
  'islington': { coordinates: { lat: 51.5416, lng: -0.1022 } },
  'hackney': { coordinates: { lat: 51.5450, lng: -0.0553 } },
  'tower-hamlets': { coordinates: { lat: 51.5150, lng: -0.0172 } },
  'greenwich': { coordinates: { lat: 51.4892, lng: 0.0648 } },
  'lewisham': { coordinates: { lat: 51.4452, lng: -0.0209 } },
  'southwark': { coordinates: { lat: 51.5034, lng: -0.0807 } },
  'lambeth': { coordinates: { lat: 51.4961, lng: -0.1183 } },
  'wandsworth': { coordinates: { lat: 51.4571, lng: -0.1906 } },
  'hammersmith': { coordinates: { lat: 51.4927, lng: -0.2248 } },
  'fulham': { coordinates: { lat: 51.4800, lng: -0.1950 } },
  'kensington': { coordinates: { lat: 51.5017, lng: -0.1907 } },
  'chelsea': { coordinates: { lat: 51.4875, lng: -0.1687 } },
  'westminster': { coordinates: { lat: 51.4975, lng: -0.1357 } },
  'city-of-london': { coordinates: { lat: 51.5156, lng: -0.0919 } }
};

// Cache for geocoding results
const geocodingCache = new Map<string, Location>();

export function isWithinLondonBounds(location: Location): boolean {
  const { lat, lng } = location;
  const { northeast, southwest } = LONDON_BOUNDS;

  return (
    lat >= southwest.lat &&
    lat <= northeast.lat &&
    lng >= southwest.lng &&
    lng <= northeast.lng
  );
}

/**
 * Geocode a location string to coordinates
 */
export async function geocodeLocation(location: string): Promise<Location> {
  // Check cache first
  const cachedLocation = geocodingCache.get(location);
  if (cachedLocation) {
    console.log('Using cached coordinates for:', location);
    return cachedLocation;
  }

  try {
    const geocoder = new HereGeocoder();
    const coords = await geocoder.geocode(location);

    if (!coords || !isWithinLondonBounds(coords)) {
      console.warn(`Location ${location} is outside London bounds or not found, using central London coordinates`);
      return LONDON_CENTER;
    }

    // Cache the result
    geocodingCache.set(location, coords);
    return coords;
  } catch (error) {
    console.error('Error geocoding location:', error);
    return LONDON_CENTER;
  }
}

/**
 * Calculate distance between two points in kilometers
 */
export function calculateDistance(point1: Location, point2: Location): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(point2.lat - point1.lat);
  const dLon = toRad(point2.lng - point1.lng);
  const lat1 = toRad(point1.lat);
  const lat2 = toRad(point2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(value: number): number {
  return (value * Math.PI) / 180;
}

/**
 * Validates if coordinates are valid numbers within reasonable bounds
 */
export function isValidCoordinates(coords: Coordinates): boolean {
  return (
    typeof coords.lat === 'number' &&
    typeof coords.lng === 'number' &&
    !isNaN(coords.lat) &&
    !isNaN(coords.lng) &&
    coords.lat >= -90 &&
    coords.lat <= 90 &&
    coords.lng >= -180 &&
    coords.lng <= 180
  );
}

/**
 * Checks if coordinates are within London bounds
 */
export function isWithinLondonBoundsCoords(coords: Coordinates): boolean {
  if (!isValidCoordinates(coords)) {
    return false;
  }

  return (
    coords.lat >= LONDON_BOUNDS.southwest.lat &&
    coords.lat <= LONDON_BOUNDS.northeast.lat &&
    coords.lng >= LONDON_BOUNDS.southwest.lng &&
    coords.lng <= LONDON_BOUNDS.northeast.lng
  );
}

/**
 * Calculates distance between two coordinates in kilometers
 */
export function calculateDistanceCoords(coords1: Coordinates, coords2: Coordinates): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLng = toRad(coords2.lng - coords1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coords1.lat)) * Math.cos(toRad(coords2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Gets coordinates for a given location in London
 */
export async function getCoordinatesForLocation(location: string): Promise<{ coordinates: Location; bounds?: typeof LONDON_BOUNDS }> {
  try {
    // Normalize location string
    const normalizedLocation = location.toLowerCase().trim().replace(/\s+/g, '-');

    // Check if it's a predefined London area
    if (normalizedLocation in LONDON_AREAS) {
      return LONDON_AREAS[normalizedLocation];
    }

    // If not found in predefined areas, try geocoding with HERE
    const locationData = await geocodeLocation(location);

    // If geocoding failed or coordinates are outside London bounds
    if (!locationData || !isWithinLondonBounds(locationData)) {
      console.warn(`Location ${location} is outside London bounds or not found, using central London coordinates`);
      return {
        coordinates: LONDON_CENTER,
        bounds: LONDON_BOUNDS
      };
    }

    return {
      coordinates: locationData,
      bounds: LONDON_BOUNDS
    };
  } catch (error) {
    console.error('Error in getCoordinatesForLocation:', error);
    // Return central London coordinates as fallback
    return {
      coordinates: LONDON_CENTER,
      bounds: LONDON_BOUNDS
    };
  }
}

/**
 * Gets the nearest predefined London area to given coordinates
 */
export function getNearestArea(coords: Coordinates): string {
  if (!isValidCoordinates(coords)) {
    return 'central-london';
  }

  let nearestArea = 'central-london';
  let shortestDistance = Number.MAX_VALUE;

  for (const [area, data] of Object.entries(LONDON_AREAS)) {
    const distance = calculateDistanceCoords(coords, data.coordinates);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestArea = area;
    }
  }

  return nearestArea;
}

export const DEFAULT_COORDINATES = LONDON_CENTER;
export const DEFAULT_BOUNDS = LONDON_BOUNDS;
