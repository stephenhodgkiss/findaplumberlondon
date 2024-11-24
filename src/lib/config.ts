export type DistanceUnit = 'KM' | 'MILES';

export const DISTANCE_UNIT: DistanceUnit = (process.env.DISTANCE_UNITS as DistanceUnit) || 'MILES';

export function convertDistance(distanceInKm: number): { value: number; unit: string } {
  if (DISTANCE_UNIT === 'MILES') {
    return {
      value: distanceInKm * 0.621371, // Convert km to miles
      unit: 'miles'
    };
  }
  return {
    value: distanceInKm,
    unit: 'km'
  };
}
