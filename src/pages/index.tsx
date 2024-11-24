import Head from 'next/head'
import Link from 'next/link'
import PlumberSearch from '../components/PlumberSearch'
import SafeImage from '../components/SafeImage'

// List of all London areas we service
const locations = [
  // Broader Areas
  'Central London', 'North London', 'South London', 'East London', 'West London',
  // Specific Areas
  'Acton', 'Aldgate', 'Angel', 'Balham', 'Bank', 'Barbican', 'Barking', 'Barnes',
  'Battersea', 'Bayswater', 'Beckton', 'Belgravia', 'Belsize Park', 'Bermondsey',
  'Bethnal Green', 'Blackfriars', 'Blackheath', 'Bloomsbury', 'Bow', 'Brentford',
  'Brixton', 'Bromley', 'Camberwell', 'Camden', 'Canary Wharf', 'Canning Town',
  'Canonbury', 'Chalk Farm', 'Chelsea', 'Chingford', 'Chiswick', 'City of London',
  'Clapham', 'Clapton', 'Clerkenwell', 'Colindale', 'Covent Garden', 'Cricklewood',
  'Crouch End', 'Crystal Palace', 'Dagenham', 'Dalston', 'Deptford', 'Dulwich',
  'Ealing', 'Earls Court', 'East Finchley', 'East Ham', 'Edgware', 'Edmonton',
  'Elephant and Castle', 'Elm Park', 'Enfield', 'Euston', 'Farringdon', 'Finchley',
  'Finsbury Park', 'Forest Gate', 'Forest Hill', 'Fulham', 'Golders Green', 'Greenwich',
  'Hackney', 'Hammersmith', 'Hampstead', 'Harlesden', 'Harrow', 'Hendon', 'Highbury',
  'Highgate', 'Hillingdon', 'Holborn', 'Holland Park', 'Holloway', 'Hornsey', 'Hounslow',
  'Hoxton', 'Ilford', 'Isleworth', 'Islington', 'Kennington', 'Kensal Green', 'Kensington',
  'Kentish Town', 'Kilburn', 'Kings Cross', 'Kingsbury', 'Kingston upon Thames', 'Lambeth',
  'Lewisham', 'Leyton', 'Leytonstone', 'Limehouse', 'London Bridge', 'Maida Vale',
  'Manor House', 'Marylebone', 'Mayfair', 'Mill Hill', 'Mitcham', 'Moorgate', 'Morden',
  'Mortlake', 'Muswell Hill', 'New Cross', 'Newham', 'North Finchley', 'Notting Hill',
  'Paddington', 'Peckham', 'Pentonville', 'Pimlico', 'Pinner', 'Plaistow', 'Poplar',
  'Putney', 'Queens Park', 'Richmond', 'Romford', 'Rotherhithe', 'Ruislip', 'Seven Sisters',
  'Shepherds Bush', 'Shoreditch', 'Soho', 'South Kensington', 'Southfields', 'Southgate',
  'Southwark', 'St Johns Wood', 'St Pauls', 'Stamford Hill', 'Stanmore', 'Stepney',
  'Stockwell', 'Stoke Newington', 'Stratford', 'Streatham', 'Surrey Quays', 'Swiss Cottage',
  'Sydenham', 'Teddington', 'Temple', 'Tooting', 'Tottenham', 'Tower Bridge', 'Tower Hill',
  'Tufnell Park', 'Tulse Hill', 'Twickenham', 'Upminster', 'Upper Street', 'Uxbridge',
  'Vauxhall', 'Victoria', 'Walham Green', 'Walthamstow', 'Wandsworth', 'Wanstead',
  'Wapping', 'Warren Street', 'Waterloo', 'West Brompton', 'West Ham', 'West Hampstead',
  'West Kensington', 'Westminster', 'Whitechapel', 'Willesden', 'Wimbledon', 'Wood Green',
  'Woolwich'
].sort()

export default function Home() {
  return (
    <div>
      <Head>
        <title>Find a Plumber London - Professional Plumbing Services</title>
        <meta name="description" content="Find reliable plumbers in London. Emergency plumbing, commercial services, residential repairs and more. Available 24/7 across all London boroughs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <SafeImage
            src="/images/plumbing-services-london.webp"
            alt="Professional Plumbing Services in London"
            fill
            className="object-cover"
            sizes="100vw"
            eager
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="text-white max-w-2xl mb-8">
                <h1 className="text-5xl font-bold mb-4">Professional Plumbing Services in London</h1>
                <p className="text-xl">24/7 Emergency Service • Licensed & Insured • All London Areas</p>
              </div>
              
              {/* Search Component */}
              <PlumberSearch />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Emergency Plumbing',
                  image: '/images/emergency-plumbing-services.webp',
                  description: '24/7 emergency plumbing services for urgent repairs and issues.',
                  link: '/services/emergency-plumbing'
                },
                {
                  title: 'Commercial Plumbing',
                  image: '/images/plumbing-solutions-businesses-commercial-properties.webp',
                  description: 'Professional plumbing solutions for businesses and commercial properties.',
                  link: '/services/commercial-plumbing'
                },
                {
                  title: 'Residential Plumbing',
                  image: '/images/plumbing-services-homes-residential-properties.webp',
                  description: 'Complete plumbing services for homes and residential properties.',
                  link: '/services/residential-plumbing'
                },
                {
                  title: 'Gas Plumbing',
                  image: '/images/licensed-gas-plumbing-services-installations-repairs.webp',
                  description: 'Licensed gas plumbing services for installations and repairs.',
                  link: '/services/gas-plumbing'
                },
                {
                  title: 'Water Heater Services',
                  image: '/images/installation-repair-maintenance-water-heaters.webp',
                  description: 'Installation, repair, and maintenance of water heaters.',
                  link: '/services/water-heater'
                },
                {
                  title: 'Drain Cleaning',
                  image: '/images/drain-cleaning-maintenance-services.webp',
                  description: 'Professional drain cleaning and maintenance services.',
                  link: '/services/drain-cleaning'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <SafeImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Professional plumbing services available across all London boroughs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {/* Central London */}
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Central London</h3>
                <p className="text-gray-600 mb-4">Covering Westminster, City of London, Camden, Islington, and Southwark.</p>
                <Link href="/areas/central-london" className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                  View Areas →
                </Link>
              </div>

              {/* North London */}
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">North London</h3>
                <p className="text-gray-600 mb-4">Serving Barnet, Enfield, Haringey, and Highgate.</p>
                <Link href="/areas/north-london" className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                  View Areas →
                </Link>
              </div>

              {/* South London */}
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">South London</h3>
                <p className="text-gray-600 mb-4">Operating in Lambeth, Wandsworth, Croydon, and Bromley.</p>
                <Link href="/areas/south-london" className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                  View Areas →
                </Link>
              </div>

              {/* East London */}
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">East London</h3>
                <p className="text-gray-600 mb-4">Covering Hackney, Tower Hamlets, Newham, and Barking.</p>
                <Link href="/areas/east-london" className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                  View Areas →
                </Link>
              </div>

              {/* West London */}
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-blue-100 hover:border-blue-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">West London</h3>
                <p className="text-gray-600 mb-4">Serving Ealing, Hounslow, Hammersmith, and Fulham.</p>
                <Link href="/areas/west-london" className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                  View Areas →
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/areas"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Areas
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Need a Plumber?</h2>
            <p className="text-xl mb-8">Our professional plumbers are ready to help 24/7.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
