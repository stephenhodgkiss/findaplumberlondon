import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'
import AreasList from '@/components/AreasList'

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

        {/* Areas We Cover */}
        <AreasList />

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
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
