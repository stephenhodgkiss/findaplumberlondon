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

// Keywords that must be present in the business name or category
const requiredTerms: string[] = [];  // Removed strict name filtering

// Terms that indicate irrelevant businesses
const excludedTerms = ['scrap', 'metal', 'library', 'school', 'church', 'museum'];

interface HerePlace {
  id: string;
  title: string;
  address?: {
    label?: string;
  };
  position?: {
    lat: number;
    lng: number;
  };
  distance?: number;  // Distance in meters from the search location
  categories?: Array<{
    name: string;
    id: string;
  }>;
  contacts?: Array<{
    phone?: Array<{
      value: string;
    }>;
    www?: Array<{
      value: string;
    }>;
  }>;
  openingHours?: Array<{
    text?: string[];
    isOpen?: boolean;
  }>;
  rating?: {
    value?: number;
    count?: number;
  };
}

const HERE_CATEGORIES = {
  primary: ['plumber', 'plumbing'],
  secondary: ['heating', 'gas', 'boiler', 'drain', 'emergency']
};

export class HerePlacesProvider implements PlaceProvider {
  private readonly apiKey: string;
  readonly name = 'HERE Places';
  private readonly baseUrl = 'https://discover.search.hereapi.com/v1/discover';  // Fixed endpoint
  private readonly EXCLUDED_CATEGORIES = [
    'Professional Cleaning',
    'Carpenter',
    'Landscaping',
    'Gardening',
    'Electrician',
    'Flooring',
    'General Contractor',
    'Car Repair',
    'Auto Service',
    'Locksmiths and Security Systems Services',
    'Maid Services',
    'ATM'
  ];

  constructor() {
    const apiKey = process.env.HERE_API_KEY;
    
    if (!apiKey) {
      throw new Error('HERE Places API key not configured');
    }
    this.apiKey = apiKey.trim();
  }

  private hasExcludedCategory(result: any): boolean {
    if (!result.categories || !Array.isArray(result.categories)) {
      return false;
    }

    return result.categories.some((category: any) => 
      this.EXCLUDED_CATEGORIES.some(excluded => 
        category.name.toLowerCase().includes(excluded.toLowerCase())
      )
    );
  }

  // Change from private to public to match the interface
  public async searchPlaces(query: string, options: SearchOptions): Promise<Place[]> {
    // Ensure we use the correct location format
    const at = `${options.location.lat},${options.location.lng}`;

    // Add the API key to the search parameters instead of using Bearer token
    const searchParams = new URLSearchParams({
      at,
      q: `${query}`,  // Use the full query which includes the service type
      limit: '50',
      radius: '10000',
      apiKey: this.apiKey  // HERE API expects the key as a parameter
    });

    const url = `${this.baseUrl}?${searchParams.toString()}`;
    // console.log('HERE request:', {
    //   url: url.replace(this.apiKey, '[REDACTED]'),
    //   params: Object.fromEntries(searchParams.entries())
    // });

    try {
      // Remove Authorization header since we're using apiKey parameter
      const response = await fetch(url);

      const responseHeaders = Object.fromEntries(response.headers.entries());
      // console.log('HERE response headers:', responseHeaders);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('HERE API error:', {
          status: response.status,
          statusText: response.statusText,
          headers: responseHeaders,
          error: errorText
        });
        return [];
      }

      const data = await response.json();
      // console.log('HERE raw response:', {
      //   resultsCount: data.items?.length || 0,
      //   results: data.items?.slice(0, 3)?.map((r: any) => ({
      //     name: r.title,
      //     address: r.address,
      //     categories: r.categories
      //   }))
      // });

      // Filter out results with excluded categories
      const filteredResults = data.items?.filter((result: any) => !this.hasExcludedCategory(result)) || [];

      return filteredResults.map((result: any) => {
        // Convert distance from meters to km first, then let config handle the rest
        const distanceInKm = result.distance / 1000;
        const { value: distance } = convertDistance(distanceInKm);

        // Extract phone and website from contacts
        const phone = result.contacts?.[0]?.phone?.[0]?.value || '';
        const website = result.contacts?.[0]?.www?.[0]?.value || '';

        // Get categories and primary category
        const categories = result.categories?.map((cat: any) => cat.name) || [];
        const primaryCategory = categories[0] || 'Plumbing Service';

        return ({
          id: result.id,
          name: result.title.split(',')[0],  // Only use the business name part
          place_id: result.id,
          phone: phone,
          website: website,
          // Remove business name from the address
          vicinity: result.address?.label?.split(',').slice(1).join(',').trim() || '',
          geometry: {
            location: {
              lat: result.position?.lat || 0,
              lng: result.position?.lng || 0
            }
          },
          location: {
            latitude: result.position?.lat || 0,
            longitude: result.position?.lng || 0
          },
          distance: distance, // Change this line to directly use the distance value
          categories,
          types: categories,
          primaryCategory,
          provider: 'here',
          rating: result.rating?.value || 0,
          user_ratings_total: result.rating?.count || 0
        })
      }) || [];

    } catch (error) {
      console.error('Error fetching from HERE:', error);
      return [];
    }
  }

  async searchPlacesOriginal(query: string, options: SearchOptions): Promise<Place[]> {
    const searchParams = new URLSearchParams({
      at: `${options.location.lat},${options.location.lng}`,
      q: `${query}`,
      limit: '50',
      categories: HERE_CATEGORIES.primary.join(','),
      radius: '10000'  // Increased to 10km radius
    });

    // console.log('HERE search params:', {
    //   at: `${options.location.lat},${options.location.lng}`,
    //   q: 'plumber',
    //   limit: '50',
    //   categories: HERE_CATEGORIES.primary.join(','),
    //   radius: '10000'
    // });

    try {
      const response = await fetch(
        `${this.baseUrl}?${searchParams.toString()}`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      );

      if (!response.ok) {
        console.error('HERE API error:', {
          status: response.status,
          statusText: response.statusText,
          url: `${this.baseUrl}?${searchParams.toString()}`.replace(this.apiKey, '[REDACTED]')
        });
        return [];
      }

      const data = await response.json();
      // console.log('HERE raw results count:', data.items?.length || 0);

      return this.processResults(data.items || []);
    } catch (error) {
      console.error('Error fetching from HERE:', error);
      return [];
    }
  }

  private processResults(results: any[]): Place[] {
    // console.log('Processing HERE results, count:', results.length);
    
    const processed = results
      .filter(result => {
        // Check if any categories match our primary categories
        const resultCategories = result.categories?.map((c: any) => c.id) || [];
        const hasValidCategory = resultCategories.some(
          (catId: string) => HERE_CATEGORIES.primary.includes(catId)
        );

        // Check if name or categories contain excluded terms
        const hasExcludedTerm = excludedTerms.some(term => 
          result.title.toLowerCase().includes(term) ||
          result.categories?.some((cat: any) => 
            cat.name.toLowerCase().includes(term)
          )
        );

        // Check if place has either a phone number or website
        let hasContactInfo = false;
        hasContactInfo = result.contacts?.[0]?.phone?.[0]?.value || result.contacts?.[0]?.www?.[0]?.value;
        // filter out where the contact info contains business.data.gov.uk or blogspot.com
        hasContactInfo = hasContactInfo && !result.contacts?.[0]?.www?.[0]?.value?.includes('business.data.gov.uk') && !result.contacts?.[0]?.www?.[0]?.value?.includes('blogspot.com');

        const isValid = hasValidCategory && !hasExcludedTerm && hasContactInfo;
        
        // console.log('Processing HERE result:', {
        //   name: result.title,
        //   categories: result.categories?.map((c: any) => ({ id: c.id, name: c.name })),
        //   hasValidCategory,
        //   hasExcludedTerm,
        //   hasContactInfo,
        //   isValid
        // });

        return isValid;
      })
      .map(result => {
        // Convert distance from meters to km first, then let config handle the rest
        const distanceInKm = result.distance / 1000;
        const { value: distance } = convertDistance(distanceInKm);
        return ({
          id: result.id,
          name: result.title.split(',')[0],  // Only use the business name part
          place_id: result.id,
          phone: result.contacts?.[0]?.phone?.[0]?.value || '',
          website: result.contacts?.[0]?.www?.[0]?.value || '',
          // Remove business name from the address
          vicinity: result.address?.label?.split(',').slice(1).join(',').trim() || '',
          geometry: {
            location: {
              lat: result.position.lat,
              lng: result.position.lng
            }
          },
          location: {
            lat: result.position.lat,
            lng: result.position.lng
          },
          distance: distance, // Change this line to directly use the distance value
          categories: result.categories?.map((cat: any) => cat.name) || [],
          types: result.categories?.map((cat: any) => cat.name) || [],
          provider: 'here',
          rating: result.rating?.value || 0,
          user_ratings_total: result.rating?.count || 0
        })
      });

    // console.log('Processed HERE results count:', processed.length);
    return processed;
  }

  async getPlaceDetails(placeId: string): Promise<PlaceDetails | null> {
    // During static build, return null
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      return null;
    }

    const lookupUrl = new URL(`${this.baseUrl}/lookup`);
    lookupUrl.searchParams.set('apiKey', this.apiKey);
    lookupUrl.searchParams.set('id', placeId);

    const response = await fetch(lookupUrl.toString());
    if (!response.ok) {
      throw new Error(`HERE Places API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return this.mapHereItemToPlaceDetails(data);
  }

  private mapHereItemToPlaceDetails(item: any): PlaceDetails {
    return {
      id: item.id,
      name: item.title,
      vicinity: item.address?.label || '',
      geometry: {
        location: {
          lat: item.position?.lat || 0,
          lng: item.position?.lng || 0
        }
      },
      distance: item.distance || 0,
      rating: item.rating?.value || 0,
      user_ratings_total: item.rating?.count || 0,
      types: item.categories?.map((cat: any) => cat.name) || [],
      opening_hours: {
        open_now: item.openingHours?.[0]?.isOpen || false,
        weekday_text: item.openingHours?.[0]?.text || []
      },
      formatted_address: item.address?.label || '',
      formatted_phone_number: item.contacts?.[0]?.phone?.[0]?.value || '',
      website: item.contacts?.[0]?.www?.[0]?.value || '',
      reviews: [],
      description: '',
      place_id: item.id
    };
  }
}
