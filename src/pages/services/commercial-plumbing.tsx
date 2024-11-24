import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'

export default function CommercialPlumbingPage() {
  return (
    <>
      <Head>
        <title>Commercial Plumbing Services in London | Find a Plumber London</title>
        <meta
          name="description"
          content="Professional commercial plumbing services in London. Expert solutions for businesses, offices, and industrial properties. Fast response and reliable service."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <SafeImage
            src="/images/plumbing-solutions-businesses-commercial-properties.webp"
            alt="Commercial Plumbing Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Commercial Plumbing Services</h1>
                <p className="text-xl mb-8">
                  Professional plumbing solutions for businesses. Expert service you can rely on.
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
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Commercial Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2">Business Experts</h3>
                <p className="text-gray-600">
                  Specialized in commercial plumbing solutions
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Minimal Disruption</h3>
                <p className="text-gray-600">
                  Fast service to keep your business running
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-2">Compliance</h3>
                <p className="text-gray-600">
                  Full compliance with commercial regulations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Commercial Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">System Installation</h3>
                <p className="text-gray-600">
                  Complete commercial plumbing system installation
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Emergency Repairs</h3>
                <p className="text-gray-600">
                  24/7 emergency commercial plumbing repairs
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Maintenance</h3>
                <p className="text-gray-600">
                  Regular maintenance and servicing plans
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Compliance Checks</h3>
                <p className="text-gray-600">
                  Regular inspections and compliance checks
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Water Systems</h3>
                <p className="text-gray-600">
                  Commercial water system solutions
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Drainage Solutions</h3>
                <p className="text-gray-600">
                  Commercial drainage and waste management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Areas We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link
                href="/areas/central-london/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Central London
              </Link>
              <Link
                href="/areas/north-london/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                North London
              </Link>
              <Link
                href="/areas/south-london/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                South London
              </Link>
              <Link
                href="/areas/east-london/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                East London
              </Link>
              <Link
                href="/areas/west-london/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                West London
              </Link>
              <Link
                href="/areas/camden/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Camden
              </Link>
              <Link
                href="/areas/islington/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Islington
              </Link>
              <Link
                href="/areas/hackney/commercial-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Hackney
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Need Commercial Plumbing Services?</h2>
              <p className="text-xl mb-8">
                Our expert commercial plumbers are ready to help with all your business plumbing needs.
                Contact us now for professional service.
              </p>
              <Link
                href="tel:020XXXXXXXX"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold 
                hover:bg-blue-50 transition-all duration-200 inline-block shadow-lg 
                transform hover:scale-105"
              >
                Call Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
