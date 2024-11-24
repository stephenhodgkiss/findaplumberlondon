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

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Residential Plumbing Service?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
                <p>Professional residential plumbers with years of experience in home plumbing solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Quality Guaranteed</h3>
                <p>All our work comes with a satisfaction guarantee and warranty for your peace of mind.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Transparent Pricing</h3>
                <p>Clear, upfront pricing with no hidden fees or surprise charges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Residential Services & Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Home Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bathroom and kitchen plumbing</li>
                  <li>Leak detection and repair</li>
                  <li>Pipe installation and replacement</li>
                  <li>Boiler services and installation</li>
                  <li>Water heater maintenance</li>
                  <li>Drain cleaning and repair</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Residential Rates</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-semibold">Standard Call Out:</span> From £75
                  </li>
                  <li>
                    <span className="font-semibold">Hourly Rate:</span> From £85/hour
                  </li>
                  <li>
                    <span className="font-semibold">Fixed Price Jobs:</span> Available on request
                  </li>
                  <li className="text-sm text-gray-600">
                    * All prices include VAT. Additional charges may apply for parts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Areas We Cover</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Central London</h3>
                <ul className="space-y-2">
                  <li>Westminster</li>
                  <li>City of London</li>
                  <li>Covent Garden</li>
                  <li>Mayfair</li>
                  <li>Soho</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">North London</h3>
                <ul className="space-y-2">
                  <li>Islington</li>
                  <li>Camden</li>
                  <li>Finsbury Park</li>
                  <li>Highgate</li>
                  <li>Hampstead</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">South London</h3>
                <ul className="space-y-2">
                  <li>Southwark</li>
                  <li>Lambeth</li>
                  <li>Greenwich</li>
                  <li>Brixton</li>
                  <li>Peckham</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">East London</h3>
                <ul className="space-y-2">
                  <li>Tower Hamlets</li>
                  <li>Hackney</li>
                  <li>Newham</li>
                  <li>Stratford</li>
                  <li>Canary Wharf</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">West London</h3>
                <ul className="space-y-2">
                  <li>Hammersmith</li>
                  <li>Fulham</li>
                  <li>Chiswick</li>
                  <li>Ealing</li>
                  <li>Notting Hill</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-600">
              Serving homes across all London areas. Contact us to book a service in your location.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Need a Residential Plumber?</h2>
            <p className="text-xl mb-8">Book a plumber for your home today. Fast, reliable service guaranteed.</p>
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
              Book Online
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
