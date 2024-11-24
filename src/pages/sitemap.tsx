import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// This is a simplified version - you'll want to generate this data dynamically
const sitemapData = {
  mainPages: [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
  ],
  regions: [
    { title: 'Central London', path: '/areas/central-london' },
    { title: 'North London', path: '/areas/north-london' },
    { title: 'South London', path: '/areas/south-london' },
    { title: 'East London', path: '/areas/east-london' },
    { title: 'West London', path: '/areas/west-london' },
  ],
  services: [
    { title: 'Residential Plumbing', path: '/services/residential-plumbing' },
    { title: 'Commercial Plumbing', path: '/services/commercial-plumbing' },
    { title: 'Emergency Plumbing', path: '/services/emergency-plumbing' },
    { title: 'Gas Plumbing', path: '/services/gas-plumbing' },
    { title: 'Bathroom Plumbing', path: '/services/bathroom-plumbing' },
    { title: 'Drain Cleaning', path: '/services/drain-cleaning' },
  ],
}

export default function Sitemap() {
  return (
    <div>
      <Head>
        <title>Sitemap | Find a Plumber London</title>
        <meta name="description" content="Browse all pages on Find a Plumber London - your comprehensive guide to finding reliable plumbers across London." />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <Image
            src="/images/plumbing-1.jpg"
            alt="London Plumbing Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Sitemap</h1>
                <p className="text-xl mb-8">Browse all pages on our website</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {/* Main Pages */}
              <div>
                <h2 className="text-4xl font-bold text-center mb-12">Main Pages</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {sitemapData.mainPages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1 text-center flex items-center justify-center min-h-[100px]"
                    >
                      <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">{page.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Regions */}
              <div>
                <h2 className="text-4xl font-bold text-center mb-12">London Regions</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {sitemapData.regions.map((region) => (
                    <Link
                      key={region.path}
                      href={region.path}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1 text-center flex items-center justify-center min-h-[100px]"
                    >
                      <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">{region.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {sitemapData.services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1 text-center flex items-center justify-center min-h-[100px]"
                    >
                      <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">{service.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
