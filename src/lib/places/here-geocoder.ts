import { Location } from '@/types';

export class HereGeocoder {
  private readonly baseUrl = 'https://geocoder.api.here.com/6.2/geocode.json';
  private readonly appId: string;
  private readonly apiKey: string;

  constructor() {
    // During static build, initialize with empty credentials
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      this.appId = '';
      this.apiKey = '';
      return;
    }

    const appId = process.env.HERE_APP_ID;
    const apiKey = process.env.HERE_API_KEY;

    if (!appId || !apiKey) {
      throw new Error('Missing HERE credentials');
    }

    this.appId = appId;
    this.apiKey = apiKey;
  }

  async geocode(address: string): Promise<Location | null> {
    // During static build, return null
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      console.log('Static build detected - skipping geocoding');
      return null;
    }

    try {
      const url = new URL(this.baseUrl);
      url.searchParams.append('app_id', this.appId);
      url.searchParams.append('app_code', this.apiKey);
      url.searchParams.append('searchtext', `${address}, London, UK`);
      url.searchParams.append('gen', '9');
      url.searchParams.append('locationattributes', 'none');
      url.searchParams.append('political', 'true');

      const response = await fetch(url.toString());
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`HERE Geocoding API error: ${data.error || 'Unknown error'}`);
      }

      const result = data?.Response?.View?.[0]?.Result?.[0]?.Location?.DisplayPosition;
      if (!result) {
        console.warn('No results found for address:', address);
        return null;
      }

      return {
        lat: result.Latitude,
        lng: result.Longitude
      };
    } catch (error) {
      console.error('Error in HERE geocoding:', error);
      return null;
    }
  }
}
