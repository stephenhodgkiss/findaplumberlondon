import { Place } from '@/types'
import { SearchOptions } from '@/lib/places/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function searchPlaces(
  query: string,
  options: SearchOptions
): Promise<Place[]> {
  const response = await fetch(`${API_BASE_URL}/api/search-places`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      location: options.location,
      radius: options.radius,
      type: options.type,
      maxResults: options.maxResults
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to fetch places')
  }

  return response.json()
}