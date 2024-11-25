import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'
import AreasList from '@/components/AreasList'

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
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
                <p>Available day and night, including weekends and holidays. We're always here when you need us most.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Fast Response Time</h3>
                <p>Our emergency plumbers aim to reach you within 1 hour of your call in most London areas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Fully Equipped Vans</h3>
                <p>Our vans carry all necessary tools and common parts to fix most emergencies on the first visit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Emergency Services & Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Emergency Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Burst pipe repairs</li>
                  <li>Blocked toilets and drains</li>
                  <li>Leaking taps and pipes</li>
                  <li>Boiler breakdowns</li>
                  <li>Water heater issues</li>
                  <li>Flooding problems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Transparent Pricing</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-semibold">Call Out Fee:</span> From £85
                  </li>
                  <li>
                    <span className="font-semibold">Hourly Rate:</span> From £95/hour
                  </li>
                  <li>
                    <span className="font-semibold">Additional Hours:</span> From £75/hour
                  </li>
                  <li className="text-sm text-gray-600">
                    * Prices may vary depending on time of day and complexity of work
                  </li>
                </ul>
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

        {/* Areas We Cover */}
        <AreasList />

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Need Emergency Plumbing Help?</h2>
            <p className="text-xl mb-8">Our emergency plumbers are available 24/7 to help you with any plumbing crisis.</p>
            <Link
              href="tel:020XXXXXXXX"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold 
              hover:bg-gray-100 transition-all duration-200 inline-block shadow-lg 
              transform hover:scale-105 mr-4"
            >
              Call Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold 
              hover:bg-white hover:text-blue-600 transition-all duration-200 inline-block shadow-lg 
              transform hover:scale-105"
            >
              Contact Us
            </Link>
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
