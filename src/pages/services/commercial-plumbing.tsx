import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'
import AreasList from '@/components/AreasList'

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

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Commercial Plumbing Service?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Expert Commercial Team</h3>
                <p>Dedicated commercial plumbers with extensive experience in business and industrial settings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Minimal Disruption</h3>
                <p>We work around your business hours to minimize impact on your operations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Full Service Coverage</h3>
                <p>From routine maintenance to emergency repairs, we handle all commercial plumbing needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <AreasList />

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Need Commercial Plumbing Services?</h2>
            <p className="text-xl mb-8">Get in touch for a free consultation and quote for your business.</p>
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
              Request Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
