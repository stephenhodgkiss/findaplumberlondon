import { NextApiRequest, NextApiResponse } from 'next';
import { searchPlaces } from '@/lib/places';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // During static build, return empty results
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      return res.status(200).json([]);
    }

    const { query, location, radius, type, maxResults } = req.body;

    if (!query || !location || !radius) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    const places = await searchPlaces(query, {
      location,
      radius,
      type,
      maxResults
    });

    res.status(200).json(places);
  } catch (error) {
    console.error('Search places error:', error);
    res.status(500).json({ message: 'Failed to search places' });
  }
}
