import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us | Find a Plumber London</title>
        <meta name="description" content="Learn about Find a Plumber London - your trusted network of professional plumbers serving all London areas. Quality service, competitive rates, and 24/7 availability." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Your trusted network of professional plumbers serving all London areas
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Our Story */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Find a Plumber London was established with a simple mission: to connect London residents and businesses with reliable, professional plumbers in their local area. We understand that finding a trustworthy plumber can be challenging, which is why we've built a network of vetted, experienced plumbers across all London boroughs.
                </p>
                <p className="text-gray-600">
                  Our platform makes it easy to find the right plumber for your needs, whether it's an emergency repair, routine maintenance, or a major installation project. We take pride in maintaining high standards of service, ensuring that all plumbers in our network are fully licensed, insured, and committed to customer satisfaction.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      All plumbers in our network are highly skilled with years of experience in both residential and commercial plumbing.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
                    <p className="text-gray-600">
                      Emergency plumbing issues don't wait for business hours. That's why we're available 24/7 for urgent repairs.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Competitive Rates</h3>
                    <p className="text-gray-600">
                      We believe in transparent pricing and competitive rates, ensuring you get excellent value for your money.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Coverage Across London</h3>
                    <p className="text-gray-600">
                      With plumbers located throughout London, we can quickly connect you with a professional in your area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
                    <p className="text-gray-600">
                      We're committed to delivering high-quality plumbing services that meet and exceed customer expectations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                    <p className="text-gray-600">
                      When you book a plumber through our platform, you can count on punctual, professional service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-600">
                      Your satisfaction is our priority. We follow up on every job to ensure you're completely happy with the service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-blue-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Need a Plumber?</h2>
                <p className="text-gray-600 mb-6">
                  Contact us now for fast, reliable plumbing services in your area.
                </p>
                {/* <a
                  href="tel:020XXXXXXXX"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call 020 XXXX XXXX
                </a> */}
                <span
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                >
                  Call 020 XXXX XXXX
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
