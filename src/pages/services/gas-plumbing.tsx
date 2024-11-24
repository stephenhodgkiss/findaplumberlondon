import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'

export default function GasPlumbing() {
  return (
    <>
      <Head>
        <title>Gas Plumbing Services in London | Find a Plumber London</title>
        <meta
          name="description"
          content="Professional gas plumbing services in London. Gas Safe registered engineers for boiler installations, repairs, and maintenance. Available for all gas work."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <SafeImage
            src="/images/licensed-gas-plumbing-services-installations-repairs.webp"
            alt="Gas Plumbing Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Gas Plumbing Services</h1>
                <p className="text-xl mb-8">
                  Gas Safe registered engineers for all your gas plumbing needs. Professional and reliable service.
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
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Gas Plumbing Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Gas Safe Registered</h3>
                <p className="text-gray-600">
                  All our engineers are Gas Safe registered and fully qualified
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                <p className="text-gray-600">
                  Years of experience in gas plumbing installations and repairs
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
                <p className="text-gray-600">
                  Fair and transparent pricing for all gas work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Gas Plumbing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Boiler Installation</h3>
                <p className="text-gray-600">
                  Professional installation of new gas boilers
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Boiler Repairs</h3>
                <p className="text-gray-600">
                  Expert repairs for all types of gas boilers
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Gas Safety Checks</h3>
                <p className="text-gray-600">
                  Annual gas safety inspections and certificates
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Gas Pipe Work</h3>
                <p className="text-gray-600">
                  Installation and repair of gas pipework
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Gas Appliances</h3>
                <p className="text-gray-600">
                  Installation and servicing of gas appliances
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Emergency Gas Work</h3>
                <p className="text-gray-600">
                  24/7 emergency gas plumbing services
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
                href="/areas/central-london/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Central London
              </Link>
              <Link
                href="/areas/north-london/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                North London
              </Link>
              <Link
                href="/areas/south-london/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                South London
              </Link>
              <Link
                href="/areas/east-london/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                East London
              </Link>
              <Link
                href="/areas/west-london/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                West London
              </Link>
              <Link
                href="/areas/camden/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Camden
              </Link>
              <Link
                href="/areas/islington/gas-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Islington
              </Link>
              <Link
                href="/areas/hackney/gas-plumbing"
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
              <h2 className="text-4xl font-bold mb-6">Need a Gas Safe Engineer?</h2>
              <p className="text-xl mb-8">
                Our Gas Safe registered engineers are ready to help with all your gas plumbing needs.
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
