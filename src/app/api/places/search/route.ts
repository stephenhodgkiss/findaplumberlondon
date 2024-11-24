import { NextResponse } from 'next/server';
import { PlacesService } from '@/lib/places/places-service';
import { isWithinLondonBounds } from '@/lib/geolocation';

// Initialize service
let placesService: PlacesService | null = null;

async function ensureInitialized() {
  if (!placesService) {
    placesService = new PlacesService();
  }
  return placesService;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const lat = parseFloat(searchParams.get('lat') || '');
    const lng = parseFloat(searchParams.get('lng') || '');
    const radius = parseInt(searchParams.get('radius') || '5000');
    const serviceType = searchParams.get('type') || 'plumber';
    const maxResults = parseInt(searchParams.get('maxResults') || '9');

    // Validate required parameters
    if (!query) {
      return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
    }

    if (isNaN(lat) || isNaN(lng)) {
      return NextResponse.json({ error: 'Invalid location coordinates' }, { status: 400 });
    }

    const location = { lat, lng };
    if (!isWithinLondonBounds(location)) {
      return NextResponse.json({ error: 'Location is outside London bounds' }, { status: 400 });
    }

    const service = await ensureInitialized();
    const places = await service.searchPlaces(query, {
      location,
      radius,
      type: serviceType,
      maxResults
    });

    return NextResponse.json({ places });
  } catch (error) {
    console.error('Error in GET /api/places/search:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Support both GET and POST methods
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { query, location, radius = 5000, type = 'emergency-plumbing' } = body;

    // Validate required parameters
    if (!query || !location?.lat || !location?.lng) {
      return NextResponse.json({ 
        error: 'Missing required parameters',
        required: ['query', 'location.lat', 'location.lng'],
        received: { query, location }
      }, { status: 400 });
    }

    const service = await ensureInitialized();
    const results = await service.searchPlaces(
      query,
      {
        location,
        radius,
        type
      }
    );

    return NextResponse.json({ results });

  } catch (error) {
    console.error('Error in places search API:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
