import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'

export default function DrainCleaning() {
  return (
    <>
      <Head>
        <title>Professional Drain Cleaning Services London | Find a Plumber London</title>
        <meta
          name="description"
          content="Expert drain cleaning services in London. Professional drain unblocking, maintenance, and CCTV drain surveys. Fast response and competitive rates."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <SafeImage
            src="/images/drain-cleaning-maintenance-services.webp"
            alt="Professional Drain Cleaning Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Professional Drain Cleaning Services</h1>
                <p className="text-xl mb-8">
                  Expert drain cleaning and maintenance services across London. Fast, reliable solutions.
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
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Drain Cleaning Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">CCTV Surveys</h3>
                <p className="text-gray-600">
                  Advanced drain inspection using state-of-the-art CCTV equipment
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-2">High-Pressure Jetting</h3>
                <p className="text-gray-600">
                  Powerful water jetting technology to clear stubborn blockages
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  Quick response times for all drain cleaning emergencies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Drain Cleaning Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Drain Unblocking</h3>
                <p className="text-gray-600">
                  Professional unblocking of drains, sinks, and toilets
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">CCTV Surveys</h3>
                <p className="text-gray-600">
                  Detailed drain inspections to identify issues and damages
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Water Jetting</h3>
                <p className="text-gray-600">
                  High-pressure cleaning for stubborn blockages
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Root Removal</h3>
                <p className="text-gray-600">
                  Removal of tree root intrusions from drain pipes
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Drain Repairs</h3>
                <p className="text-gray-600">
                  Expert repairs for damaged or broken drains
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Maintenance</h3>
                <p className="text-gray-600">
                  Regular maintenance to prevent future blockages
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
                href="/areas/central-london/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Central London
              </Link>
              <Link
                href="/areas/north-london/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                North London
              </Link>
              <Link
                href="/areas/south-london/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                South London
              </Link>
              <Link
                href="/areas/east-london/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                East London
              </Link>
              <Link
                href="/areas/west-london/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                West London
              </Link>
              <Link
                href="/areas/camden/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Camden
              </Link>
              <Link
                href="/areas/islington/drain-cleaning"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Islington
              </Link>
              <Link
                href="/areas/hackney/drain-cleaning"
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
              <h2 className="text-4xl font-bold mb-6">Need Drain Cleaning Services?</h2>
              <p className="text-xl mb-8">
                Our team of drain cleaning experts is ready to help with any drainage issues.
                Contact us now for fast, professional service.
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
