import Head from 'next/head'
import Link from 'next/link'
import SafeImage from '../../components/SafeImage'

export default function ResidentialPlumbing() {
  return (
    <>
      <Head>
        <title>Residential Plumbing Services in London | Find a Plumber London</title>
        <meta
          name="description"
          content="Expert residential plumbing services in London. Professional solutions for all home plumbing needs, from repairs to installations. Fast and reliable service."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <SafeImage
            src="/images/plumbing-services-homes-residential-properties.webp"
            alt="Residential Plumbing Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Residential Plumbing Services</h1>
                <p className="text-xl mb-8">
                  Professional plumbing solutions for your home. Expert service you can trust.
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
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Residential Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-2">Home Experts</h3>
                <p className="text-gray-600">
                  Specialized in residential plumbing solutions
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2">Quality Service</h3>
                <p className="text-gray-600">
                  Professional and reliable home plumbing care
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-2">Full Service</h3>
                <p className="text-gray-600">
                  Complete range of home plumbing solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Residential Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Leak Repairs</h3>
                <p className="text-gray-600">
                  Fast and effective leak detection and repair
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Bathroom Plumbing</h3>
                <p className="text-gray-600">
                  Installation and repair of all bathroom fixtures
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Kitchen Plumbing</h3>
                <p className="text-gray-600">
                  Expert kitchen plumbing installations and repairs
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Pipe Work</h3>
                <p className="text-gray-600">
                  Installation and repair of home pipe systems
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Water Heaters</h3>
                <p className="text-gray-600">
                  Water heater installation and maintenance
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Fixture Installation</h3>
                <p className="text-gray-600">
                  Professional installation of plumbing fixtures
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
                href="/areas/central-london/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Central London
              </Link>
              <Link
                href="/areas/north-london/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                North London
              </Link>
              <Link
                href="/areas/south-london/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                South London
              </Link>
              <Link
                href="/areas/east-london/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                East London
              </Link>
              <Link
                href="/areas/west-london/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                West London
              </Link>
              <Link
                href="/areas/camden/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Camden
              </Link>
              <Link
                href="/areas/islington/residential-plumbing"
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Islington
              </Link>
              <Link
                href="/areas/hackney/residential-plumbing"
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
              <h2 className="text-4xl font-bold mb-6">Need a Residential Plumber?</h2>
              <p className="text-xl mb-8">
                Our expert plumbers are ready to help with all your home plumbing needs.
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
