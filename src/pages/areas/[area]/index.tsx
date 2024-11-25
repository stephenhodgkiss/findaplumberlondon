import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAreaInfo } from '@/lib/areas';
import { serviceContent } from '@/lib/services';
import SafeImage from '@/components/SafeImage';

interface AreaPageProps {
  area: string;
  areaInfo: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const AreaPage: NextPage<AreaPageProps> = ({ area, areaInfo }) => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{`Plumbing Services in ${areaInfo.name} | Find a Plumber London`}</title>
        <meta 
          name="description" 
          content={`Find reliable plumbers in ${areaInfo.name}. Emergency plumbing, commercial services, residential repairs and more. Available 24/7.`}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <SafeImage
            src="/images/plumbing-1.jpg"
            alt={`Plumbing Services in ${areaInfo.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Plumbing Services in {areaInfo.name}</h1>
                <p className="text-xl">
                  Professional plumbers available 24/7 for all your plumbing needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services in {areaInfo.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(serviceContent).map(([serviceType, service]) => (
                <Link
                  key={serviceType}
                  href={`/areas/${area}/${serviceType}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <SafeImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-blue-600 font-semibold hover:text-blue-700">CLICK FOR MORE INFORMATION →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our {areaInfo.name} Plumbers?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Local Expertise</h3>
                <p>Our plumbers know {areaInfo.name} inside and out, ensuring quick response times and efficient service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
                <p>Emergency plumbing services available around the clock for when you need us most.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Qualified Professionals</h3>
                <p>All our plumbers are fully qualified, insured, and experienced in handling any plumbing issue.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps({ params }: { params: { area: string } }) {
  if (!params?.area || typeof params.area !== 'string') {
    return { notFound: true };
  }

  // Format area name to match our data format (lowercase with hyphens)
  const formattedArea = params.area.toLowerCase().replace(/\s+/g, '-');

  // Get area info
  const areaInfo = getAreaInfo(formattedArea);
  if (!areaInfo) {
    return { notFound: true };
  }

  return {
    props: {
      area: formattedArea,
      areaInfo
    }
  };
}

export default AreaPage;
