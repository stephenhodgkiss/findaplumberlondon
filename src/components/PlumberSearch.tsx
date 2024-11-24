import { useState } from 'react'
import { useRouter } from 'next/router'

// List of all London areas we service
const locations = [
  // Broader Areas
  'Central London', 'North London', 'South London', 'East London', 'West London',
  
  // Central London Areas
  'Aldgate', 'Angel', 'Bank', 'Barbican', 'Bloomsbury', 'Chelsea', 'City of London', 'Clerkenwell', 
  'Covent Garden', 'Fitzrovia', 'Holborn', 'Kensington', 'Knightsbridge', 'Mayfair', 'Paddington', 
  'Pimlico', 'Soho', 'St James\'s', 'Victoria', 'Westminster',
  
  // North London Areas
  'Archway', 'Camden', 'Finsbury Park', 'Hampstead', 'Highbury', 'Highgate', 'Holloway', 'Islington', 
  'Kentish Town', 'Kings Cross', 'Muswell Hill', 'Stoke Newington', 'Wood Green',
  
  // South London Areas
  'Balham', 'Battersea', 'Bermondsey', 'Brixton', 'Camberwell', 'Clapham', 'Crystal Palace', 'Deptford',
  'Dulwich', 'Greenwich', 'Kennington', 'Lewisham', 'New Cross', 'Peckham', 'Rotherhithe', 'Southwark', 
  'Stockwell', 'Streatham', 'Vauxhall', 'Wandsworth', 'Waterloo',
  
  // East London Areas
  'Barking', 'Bethnal Green', 'Bow', 'Canary Wharf', 'Dalston', 'Hackney', 'Isle of Dogs', 'Leyton',
  'Limehouse', 'Mile End', 'Poplar', 'Shoreditch', 'Stepney', 'Stratford', 'Walthamstow', 'Whitechapel',
  
  // West London Areas
  'Acton', 'Barnes', 'Chiswick', 'Ealing', 'Fulham', 'Hammersmith', 'Notting Hill', 'Putney', 
  'Richmond', 'Shepherds Bush', 'West Kensington'
].sort()

// List of services we offer
const services = [
  { id: 'emergency-plumbing', name: 'Emergency Plumbing' },
  { id: 'residential-plumbing', name: 'Residential Plumbing' },
  { id: 'commercial-plumbing', name: 'Commercial Plumbing' },
  { id: 'gas-plumbing', name: 'Gas Plumbing' },
  { id: 'water-heater', name: 'Water Heater Services' },
  { id: 'drain-cleaning', name: 'Drain Cleaning' }
]

const PlumberSearch = () => {
  const router = useRouter()
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const handleSearch = () => {
    if (selectedLocation && selectedService) {
      const locationSlug = selectedLocation.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
      router.push(`/areas/${locationSlug}/${selectedService}`);
    }
  };

  return (
    <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl max-w-4xl w-full mx-auto border-2 border-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Location Dropdown */}
        <div className="relative">
          <label htmlFor="location" className="block text-lg font-semibold text-gray-800 mb-2">
            Location
          </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="block w-full rounded-lg border-2 border-blue-200 py-3 px-4 text-lg shadow-lg 
            focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Service Dropdown */}
        <div className="relative">
          <label htmlFor="service" className="block text-lg font-semibold text-gray-800 mb-2">
            Service
          </label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="block w-full rounded-lg border-2 border-blue-200 py-3 px-4 text-lg shadow-lg 
            focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400 transition-colors"
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg 
            text-lg shadow-lg transform hover:scale-105 transition-all duration-200 
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={!selectedLocation || !selectedService}
          >
            Find Plumber
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlumberSearch
