import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDatabase } from '@/lib/mongodb';
import { searchPlaces } from '@/lib/places';
import { Place } from '@/types';
import { getCoordinatesForLocation } from '@/lib/geolocation';
import SafeImage from '@/components/SafeImage';
import PlaceCard from '@/components/PlaceCard';

interface CacheEntry {
  _id: string;
  places: Place[];
  timestamp: Date;
  location: string;
  service: string;
}

interface Props {
  location: string;
  service: string;
  places: Place[];
  error?: string;
}

const SERVICE_TYPES = [
  'residential-plumbing',
  'commercial-plumbing',
  'emergency-plumbing',
  'gas-plumbing',
  'bathroom-plumbing',
  'drain-cleaning'
];

const LONDON_AREAS = [
  'central-london',
  'north-london',
  'south-london',
  'east-london',
  'west-london',
  'barnet',
  'camden',
  'islington',
  'hackney',
  'tower-hamlets',
  'greenwich',
  'lewisham',
  'southwark',
  'lambeth',
  'wandsworth',
  'hammersmith',
  'fulham',
  'kensington',
  'chelsea',
  'westminster',
  'city-of-london'
];

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  if (!params?.location || !params?.service) {
    return { notFound: true };
  }

  const location = params.location as string;
  const service = params.service as string;
  const cacheEnabled = process.env.ENABLE_CACHING === 'true';

  console.log('Cache status:', { 
    cacheEnabled, 
    ENABLE_CACHING: process.env.ENABLE_CACHING,
    NODE_ENV: process.env.NODE_ENV 
  });

  try {
    // Normalize service type
    const normalizedService = service.toLowerCase().replace(/\s+/g, '-');
    if (!SERVICE_TYPES.includes(normalizedService)) {
      return { notFound: true };
    }

    // Set cache headers for 24 hours
    if (cacheEnabled) {
      res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=86400');
    }

    let places: Place[] = [];

    if (cacheEnabled) {
      console.log('Attempting to use MongoDB cache');
      const db = await getDatabase();
      const cacheCollection = db.collection<CacheEntry>('places_cache');
      
      // Try to get cached data
      const cacheKey = `${location}_${normalizedService}`;
      console.log('Looking for cache with key:', cacheKey);
      
      const cachedData = await cacheCollection.findOne({ 
        _id: cacheKey,
        timestamp: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Less than 24 hours old
      });

      console.log('Cache lookup result:', { 
        found: !!cachedData,
        timestamp: cachedData?.timestamp,
        numPlaces: cachedData?.places?.length
      });

      if (cachedData) {
        console.log('Using cached data');
        places = cachedData.places;
      } else {
        console.log('Cache miss - fetching fresh data');
        // Get fresh data if no cache
        const locationData = await getCoordinatesForLocation(location);
        if (!locationData?.coordinates) {
          throw new Error('Failed to get coordinates for location');
        }

        places = await searchPlaces(
          `${service}`,
          {
            location: locationData.coordinates,
            radius: 10000,
            maxResults: 15,
            type: normalizedService
          }
        );

        if (Array.isArray(places)) {
          console.log('Caching fresh data:', { numPlaces: places.length });
          // Cache the results
          try {
            await cacheCollection.updateOne(
              { _id: cacheKey },
              { 
                $set: { 
                  places,
                  timestamp: new Date(),
                  location,
                  service: normalizedService
                }
              },
              { upsert: true }
            );
            console.log('Successfully cached data');
          } catch (cacheError) {
            console.error('Error caching data:', cacheError);
          }
        } else {
          console.warn('Places data is not an array, skipping cache');
        }
      }
    } else {
      console.log('Caching disabled - fetching fresh data');
      // No caching, just get fresh data
      const locationData = await getCoordinatesForLocation(location);
      if (!locationData?.coordinates) {
        throw new Error('Failed to get coordinates for location');
      }

      places = await searchPlaces(
        `${service}`,
        {
          location: locationData.coordinates,
          radius: 10000,
          maxResults: 15,
          type: normalizedService
        }
      );
    }

    if (!Array.isArray(places)) {
      throw new Error('Invalid places data returned');
    }

    console.log('Returning data:', { numPlaces: places.length });

    return {
      props: {
        location,
        service: normalizedService,
        places: places || [],
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        location,
        service,
        places: [],
        error: 'Failed to load plumbers. Please try again later.'
      }
    };
  }
};

const LocationServicePage = ({ location, service, places, error }: Props) => {
  const router = useRouter();

  const formattedLocation = location.replace(/-/g, ' ');
  const formattedService = service.replace(/-/g, ' ');
  const title = `${formattedService} in ${formattedLocation}`;
  const description = `Find reliable ${formattedService} services in ${formattedLocation}. Professional plumbers available 24/7 for all your plumbing needs. Quick response times and competitive rates.`;

  // Get service-specific content
  const serviceContent = {
    'residential-plumbing': {
      image: '/images/plumbing-services-homes-residential-properties.webp',
      description: `Expert residential plumbing services in ${formattedLocation}. Our professional plumbers specialize in home repairs, installations, and maintenance.`,
      features: [
        'Emergency repairs and maintenance',
        'Bathroom and kitchen installations',
        'Pipe repairs and replacements',
        'Leak detection and repairs',
        'Water heater services',
        'Drain cleaning'
      ]
    },
    'commercial-plumbing': {
      image: '/images/plumbing-solutions-businesses-commercial-properties.webp',
      description: `Professional commercial plumbing solutions in ${formattedLocation}. Serving businesses, offices, and commercial properties.`,
      features: [
        'Commercial installations and repairs',
        'Preventive maintenance',
        'Emergency plumbing services',
        'Water system optimization',
        'Code compliance',
        'Large-scale projects'
      ]
    },
    'emergency-plumbing': {
      image: '/images/emergency-plumbing-services.webp',
      description: `24/7 emergency plumbing services in ${formattedLocation}. Fast response times for urgent plumbing issues.`,
      features: [
        'Available 24/7',
        'Rapid response times',
        'Burst pipe repairs',
        'Emergency leak repairs',
        'Blocked drain clearance',
        'No call-out charges'
      ]
    },
    'gas-plumbing': {
      image: '/images/licensed-gas-plumbing-services-installations-repairs.webp',
      description: `Licensed gas plumbing services in ${formattedLocation}. Gas Safe registered engineers for all gas-related work.`,
      features: [
        'Gas Safe registered engineers',
        'Boiler installations and repairs',
        'Gas pipe installations',
        'Safety inspections',
        'Central heating services',
        'Gas appliance servicing'
      ]
    },
    'drain-cleaning': {
      image: '/images/drain-cleaning-maintenance-services.webp',
      description: `Professional drain cleaning services in ${formattedLocation}. Advanced equipment and techniques for all drain issues.`,
      features: [
        'CCTV drain surveys',
        'High-pressure water jetting',
        'Drain unblocking',
        'Root removal',
        'Drain repairs',
        'Preventive maintenance'
      ]
    },
    'water-heating': {
      image: '/images/installation-repair-maintenance-water-heaters.webp',
      description: `Professional water heater services in ${formattedLocation}. Reliable and efficient water heater repairs.`,
      features: [
        'Water heater installations',
        'Water heater repairs',
        'Water heater maintenance',
        'Water heater diagnostics',
        'Water heater replacement'
      ]
    }
  }[service] || {
    image: '/images/plumbing-1.jpg',
    description: `Professional plumbing services in ${formattedLocation}. Available 24/7 for all your plumbing needs.`,
    features: [
      'Emergency services',
      'Professional plumbers',
      'Quick response times',
      'Competitive rates',
      'Licensed and insured',
      'Satisfaction guaranteed'
    ]
  };

  return (
    <>
      <Head>
        <title>{title} | Find a Plumber London</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <SafeImage
            src={serviceContent.image}
            alt={`${formattedService} in ${formattedLocation}`}
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
                  {formattedService} in {formattedLocation}
                </h1>
                <p className="text-xl mb-8">
                  {serviceContent.description}
                </p>
                {/* <Link
                  href="tel:020XXXXXXXX"
                  className="bg-[rgb(6,144,196)] hover:bg-[rgb(5,129,176)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-block shadow-lg transform hover:scale-105"
                >
                  Call Now
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Service Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Services Include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {serviceContent.features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                    <div className="text-[rgb(6,144,196)] mb-3">✓</div>
                    <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Available Plumbers</h2>
              {error ? (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 max-w-2xl mx-auto">
                  <p className="text-red-700">{error}</p>
                </div>
              ) : places.length === 0 ? (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 max-w-2xl mx-auto">
                  <p className="text-yellow-700">No plumbers found in this area. Please try a different location or service.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {places.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                  ))}
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[rgb(6,144,196)] to-blue-600 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need a Plumber in {formattedLocation}?</h2>
              <p className="text-lg mb-8 opacity-90">
                Our network of professional plumbers is ready to help you with any plumbing issue, big or small.
                Available 24/7 for emergencies.
              </p>
              <Link
                href="tel:020XXXXXXXX"
                className="bg-white text-[rgb(6,144,196)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              >
                Call 020 XXXX XXXX
              </Link>
            </div>

            {/* SEO Content */}
            <div className="mt-16 max-w-4xl mx-auto prose prose-lg">
              <h2>Professional {formattedService} in {formattedLocation}</h2>
              <p>
                Looking for reliable {formattedService} services in {formattedLocation}? Our network of professional 
                plumbers provides comprehensive plumbing solutions for all your needs. With years of experience and 
                a commitment to quality service, our plumbers are available 24/7 for emergencies and scheduled appointments.
              </p>
              <h3>Why Choose Our {formattedService} Services?</h3>
              <ul>
                <li>Fast response times and reliable service</li>
                <li>Fully qualified and insured plumbers</li>
                <li>Competitive and transparent pricing</li>
                <li>Available 24/7 for emergencies</li>
                <li>Comprehensive plumbing solutions</li>
                <li>Satisfaction guaranteed</li>
              </ul>
              <p>
                Whether you need emergency repairs, routine maintenance, or new installations, our professional plumbers 
                in {formattedLocation} are here to help. Contact us today for fast, reliable service at competitive rates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LocationServicePage;
