import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// List of all London areas we service
const locations = [
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
]

export default function AreasPage() {
  return (
    <>
      <Head>
        <title>London Areas We Serve - Find a Plumber London</title>
        <meta name="description" content="Professional plumbing services available across all London areas. Find reliable plumbers in your neighborhood for emergency, commercial, and residential plumbing needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                <h1 className="text-5xl font-bold mb-4">London Areas We Serve</h1>
                <p className="text-xl mb-8">Professional plumbing services available across all London neighborhoods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Find a Plumber in Your Area</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {locations.map((location) => (
                <Link
                  key={location}
                  href={`/areas/${location.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">{location}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need a Plumber?</h2>
              <p className="text-gray-600 mb-8">
                Our network of professional plumbers covers all London areas.
                We offer fast response times, competitive rates, and high-quality service.
              </p>
              {/* <Link
                href="tel:020XXXXXXXX"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
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
