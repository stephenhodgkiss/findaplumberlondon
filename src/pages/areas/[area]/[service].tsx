import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Place } from '@/types';
import { searchPlaces } from '@/lib/api';
import { getAreaInfo, getAllAreas } from '@/lib/areas';
import { serviceContent, ServiceType } from '@/lib/services';
import PlaceCard from '@/components/PlaceCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';

interface AreaServicePageProps {
  area: string;
  service: ServiceType;
  areaInfo: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  serviceInfo: {
    title: string;
    description: string;
  };
  initialPlaces: Place[];
}

const AreaServicePage: NextPage<AreaServicePageProps> = ({ area, service, areaInfo, serviceInfo, initialPlaces }) => {
  const [searchResults, setSearchResults] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (initialPlaces.length === 0) {
      fetchPlaces();
    }
  }, [areaInfo.coordinates, areaInfo.name, service, serviceInfo.title, initialPlaces]);

  const fetchPlaces = async () => {
    try {
      setIsLoading(true);
      setSearchError('');
      const results = await searchPlaces(
        `${serviceInfo.title} in ${areaInfo.name}`,
        {
          location: areaInfo.coordinates,
          type: service,
          radius: 10000,
          maxResults: 50
        }
      );
      setSearchResults(results);
      if (results.length === 0) {
        setSearchError('No plumbers found in this area. Please try again later or contact us for assistance.');
      }
    } catch (error) {
      console.error('Error fetching places:', error);
      setSearchError('Failed to load plumbers. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{`${serviceInfo.title} in ${areaInfo.name} | Find a Plumber London`}</title>
        <meta 
          name="description" 
          content={`Find reliable ${serviceInfo.title.toLowerCase()} services in ${areaInfo.name}. View ratings, reviews, and contact information for local plumbers.`} 
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">{serviceInfo.title} in {areaInfo.name}</h1>
          <p className="text-gray-600 mt-2">{serviceInfo.description}</p>
        </header>

        <section aria-label="Search Results" className="min-h-[200px]">
          {isLoading ? (
            <LoadingSpinner />
          ) : searchError ? (
            <ErrorMessage message={searchError} />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }: { params: { area: string; service: string } }) {
  if (!params?.area || !params?.service || typeof params.area !== 'string' || typeof params.service !== 'string') {
    return { notFound: true };
  }

  const { area, service } = params;

  // Format area name to match our data format (lowercase with hyphens)
  const formattedArea = area.toLowerCase().replace(/\s+/g, '-');

  // Get area info
  const areaInfo = getAreaInfo(formattedArea);
  if (!areaInfo) {
    return { notFound: true };
  }

  // Validate service
  if (!Object.keys(serviceContent).includes(service)) {
    return { notFound: true };
  }

  // Type assertion is safe here because we validated the service above
  const serviceType = service as ServiceType;

  try {
    // Fetch the places data server-side
    const initialPlaces = await searchPlaces(
      `${serviceContent[serviceType].title} in ${areaInfo.name}`,
      {
        location: areaInfo.coordinates,
        type: serviceType,
        radius: 10000,
        maxResults: 50
      }
    );

    return {
      props: {
        area: formattedArea,
        service: serviceType,
        areaInfo,
        serviceInfo: serviceContent[serviceType],
        initialPlaces
      }
    };
  } catch (error) {
    console.error('Error fetching places:', error);
    // Return empty places if fetching fails
    return {
      props: {
        area: formattedArea,
        service: serviceType,
        areaInfo,
        serviceInfo: serviceContent[serviceType],
        initialPlaces: []
      }
    };
  }
}

export default AreaServicePage;
