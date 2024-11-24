import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// List of all services we offer
const services = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    description: '24/7 emergency plumbing services for urgent issues.',
    icon: '🚨'
  },
  {
    id: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    description: 'Professional plumbing solutions for businesses.',
    icon: '🏢'
  },
  {
    id: 'residential-plumbing',
    title: 'Residential Plumbing',
    description: 'Complete plumbing services for homes.',
    icon: '🏠'
  },
  {
    id: 'gas-plumbing',
    title: 'Gas Plumbing',
    description: 'Licensed gas plumbing services and installations.',
    icon: '🔧'
  },
  {
    id: 'water-heater',
    title: 'Water Heater Services',
    description: 'Installation and repair of water heaters.',
    icon: '🌡️'
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning and maintenance.',
    icon: '🚰'
  }
]

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
]

// Helper function to format area name
const formatAreaName = (area: string | undefined) => {
  if (!area) return '';
  return area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function AreaPage({ area }: { area: string }) {
  const router = useRouter();
  
  // Handle loading state
  if (router.isFallback || !area) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  const areaName = formatAreaName(area);

  return (
    <>
      <Head>
        <title>{"Plumbers in " + areaName + " - Find a Plumber London"}</title>
        <meta name="description" content={`Professional plumbing services in ${areaName}. 24/7 emergency plumbing, boiler repairs, and more. Local plumbers serving ${areaName} and surrounding areas.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <Image
            src="/images/plumbing-2.jpg"
            alt={`Plumbing Services in ${areaName}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">Plumbers in {areaName}</h1>
                {/* <p className="text-xl mb-8">Professional plumbing services available 24/7</p>
                <Link
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

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">Our Services in {areaName}</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We offer a comprehensive range of plumbing services to residential and commercial customers in {areaName} and surrounding areas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/areas/${area}/${service.id}`}
                  className="group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 
                  overflow-hidden border-2 border-blue-100 hover:border-blue-300 transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                    <div className="mt-6 text-blue-600 font-semibold group-hover:underline">
                      Learn More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our {areaName} Plumbers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">Quick response times for all plumbing emergencies in {areaName}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="text-gray-600">Highly skilled and certified local plumbers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair and transparent pricing for all services</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Guaranteed Work</h3>
                <p className="text-gray-600">All our work is fully guaranteed for your peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">Need a Plumber in {areaName}?</h2>
              <p className="text-xl text-white opacity-90 mb-8">
                Our team of professional plumbers is ready to help with any plumbing issue.
                We offer fast response times and competitive rates.
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

export async function getServerSideProps({ params }: { params: { area: string } }) {
  const { area } = params;
  
  // Validate area exists in our list
  if (!area || !locations.includes(area)) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      area
    }
  };
}