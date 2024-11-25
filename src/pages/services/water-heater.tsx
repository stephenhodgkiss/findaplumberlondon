import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'
import AreasList from '@/components/AreasList'

export default function WaterHeater() {
  return (
    <>
      <Head>
        <title>Water Heater Services in London | Find a Plumber London</title>
        <meta
          name="description"
          content="Expert water heater services in London. Professional installation, repair, and maintenance of all types of water heaters. Fast and reliable service."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <SafeImage
            src="/images/installation-repair-maintenance-water-heaters.webp"
            alt="Water Heater Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Water Heater Services</h1>
                <p className="text-xl mb-8">
                  Expert water heater solutions for homes and businesses. Professional service you can trust.
                </p>
                {/* <Link
                  href="tel:020XXXXXXXX"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                  hover:bg-blue-700 transition-all duration-200 inline-block shadow-lg 
                  transform hover:scale-105"
                >
                  Call Now
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Water Heater Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                <p className="text-gray-600">
                  Specialized in all types of water heaters
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  Quick response for emergency repairs
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Quality Work</h3>
                <p className="text-gray-600">
                  Guaranteed satisfaction on all services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Water Heater Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional water heater installation
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Repairs</h3>
                <p className="text-gray-600">
                  Expert repairs for all heater types
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Maintenance</h3>
                <p className="text-gray-600">
                  Regular maintenance and servicing
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Replacement</h3>
                <p className="text-gray-600">
                  Complete water heater replacement
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
                <p className="text-gray-600">
                  24/7 emergency repair service
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">System Upgrades</h3>
                <p className="text-gray-600">
                  Energy-efficient system upgrades
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <AreasList />

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Need Water Heater Service?</h2>
              <p className="text-xl mb-8">
                Our expert technicians are ready to help with all your water heater needs.
                Contact us now for professional service.
              </p>
              {/* <Link
                href="tel:020XXXXXXXX"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold 
                hover:bg-blue-50 transition-all duration-200 inline-block shadow-lg 
                transform hover:scale-105"
              >
                Call Now
              </Link> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
