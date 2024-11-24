import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function EmergencyPlumbing() {
  return (
    <>
      <Head>
        <title>24/7 Emergency Plumbing Services in London | Find a Plumber London</title>
        <meta
          name="description"
          content="Professional 24/7 emergency plumbing services across London. Fast response, expert plumbers, and competitive rates. Available day and night for all plumbing emergencies."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <Image
            src="/images/emergency-plumbing-services.webp"
            alt="Emergency Plumbing Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">24/7 Emergency Plumbing Services</h1>
                <p className="text-xl mb-8">
                  Professional emergency plumbers available across London. Fast response, expert service.
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
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Emergency Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  Our emergency plumbers aim to reach you within 1 hour in London
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-2">Expert Plumbers</h3>
                <p className="text-gray-600">
                  Fully qualified and experienced emergency plumbing specialists
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Clear Pricing</h3>
                <p className="text-gray-600">
                  Transparent pricing with no hidden charges or call-out fees
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Emergency Plumbing Services We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Burst Pipes</h3>
                <p className="text-gray-600">
                  Quick response to burst pipes to prevent water damage to your property
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Blocked Drains</h3>
                <p className="text-gray-600">
                  Emergency drain unblocking services using professional equipment
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Leaking Taps</h3>
                <p className="text-gray-600">
                  Fix leaking or broken taps to prevent water waste and damage
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Toilet Problems</h3>
                <p className="text-gray-600">
                  Emergency repairs for blocked, overflowing or broken toilets
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Water Leaks</h3>
                <p className="text-gray-600">
                  Detect and repair water leaks quickly to minimize damage
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Boiler Repairs</h3>
                <p className="text-gray-600">
                  Emergency boiler repairs by Gas Safe registered engineers
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
                href="/areas/central-london/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Central London
              </Link>
              <Link
                href="/areas/north-london/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                North London
              </Link>
              <Link
                href="/areas/south-london/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                South London
              </Link>
              <Link
                href="/areas/east-london/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                East London
              </Link>
              <Link
                href="/areas/west-london/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                West London
              </Link>
              <Link
                href="/areas/camden/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Camden
              </Link>
              <Link
                href="/areas/islington/emergency-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Islington
              </Link>
              <Link
                href="/areas/hackney/emergency-plumbing"
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
              <h2 className="text-4xl font-bold mb-6">Need an Emergency Plumber?</h2>
              <p className="text-xl mb-8">
                Our team of professional plumbers is available 24/7 for all your emergency plumbing needs.
                Call us now for fast, reliable service.
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
