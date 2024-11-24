import Head from 'next/head'
import Link from 'next/link'

const services = [
  {
    title: 'Emergency Plumbing',
    path: '/services/emergency-plumbing',
    description: '24/7 emergency plumbing services for urgent repairs and issues.',
    icon: '🚨',
  },
  {
    title: 'Commercial Plumbing',
    path: '/services/commercial-plumbing',
    description: 'Professional plumbing solutions for businesses and commercial properties.',
    icon: '🏢',
  },
  {
    title: 'Residential Plumbing',
    path: '/services/residential-plumbing',
    description: 'Complete plumbing services for homes and residential properties.',
    icon: '🏠',
  },
  {
    title: 'Gas Plumbing',
    path: '/services/gas-plumbing',
    description: 'Licensed gas plumbing services, installations, and repairs.',
    icon: '🔧',
  },
  {
    title: 'Water Heater Services',
    path: '/services/water-heater',
    description: 'Installation, repair, and maintenance of water heaters.',
    icon: '🌡️',
  },
  {
    title: 'Drain Cleaning',
    path: '/services/drain-cleaning',
    description: 'Professional drain cleaning and maintenance services.',
    icon: '🚰',
  },
]

export default function Services() {
  return (
    <div>
      <Head>
        <title>Our Services | Find a Plumber London</title>
        <meta name="description" content="Explore our comprehensive range of plumbing services in London - from emergency repairs to bathroom installations." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Professional plumbing services across London
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className="group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 
                  overflow-hidden border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h2>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                    <div className="mt-6 text-blue-600 font-semibold group-hover:underline">Learn More →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-white">Need a Plumber?</h2>
              <p className="text-xl text-white opacity-90 mb-8">
                Our network of professional plumbers is ready to help you with any plumbing issue, big or small.
              </p>
              {/* <a
                href="tel:020XXXXXXXX"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold 
                hover:bg-blue-50 transition-colors shadow-lg transform hover:scale-105 duration-200"
              >
                Call 020 XXXX XXXX
              </a> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
