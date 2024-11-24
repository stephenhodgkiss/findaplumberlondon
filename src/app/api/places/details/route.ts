import { NextRequest, NextResponse } from 'next/server';
import { PlacesService } from '@/lib/places/places-service';

// Initialize service
let placesService: PlacesService | null = null;

async function ensureInitialized() {
  if (!placesService) {
    placesService = new PlacesService();
  }
  return placesService;
}

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get URL parameters using the newer NextRequest
    const placeId = request.nextUrl.searchParams.get('placeId');

    if (!placeId) {
      return NextResponse.json({ 
        error: 'Missing placeId parameter'
      }, { status: 400 });
    }

    const service = await ensureInitialized();
    const details = await service.getPlaceDetails(placeId);

    if (!details) {
      return NextResponse.json({ 
        error: 'Place not found',
        placeId
      }, { status: 404 });
    }

    return NextResponse.json({ details });

  } catch (error) {
    console.error('Error in place details API:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
