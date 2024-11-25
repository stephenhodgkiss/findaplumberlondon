export type ServiceType = 'emergency-plumbing' | 'commercial-plumbing' | 'residential-plumbing' | 'gas-plumbing' | 'water-heater' | 'drain-cleaning';

interface ServiceContent {
  title: string;
  description: string;
  searchTerm: string;
  image: string;
}

export const serviceContent: Record<ServiceType, ServiceContent> = {
  'emergency-plumbing': {
    title: 'Emergency Plumbing',
    description: '24/7 emergency plumbing services for urgent repairs and issues.',
    searchTerm: 'emergency plumber',
    image: '/images/emergency-plumbing-services.webp'
  },
  'commercial-plumbing': {
    title: 'Commercial Plumbing',
    description: 'Professional plumbing solutions for businesses and commercial properties.',
    searchTerm: 'commercial plumber',
    image: '/images/plumbing-solutions-businesses-commercial-properties.webp'
  },
  'residential-plumbing': {
    title: 'Residential Plumbing',
    description: 'Complete plumbing services for homes and residential properties.',
    searchTerm: 'residential plumber',
    image: '/images/plumbing-services-homes-residential-properties.webp'
  },
  'gas-plumbing': {
    title: 'Gas Plumbing',
    description: 'Licensed gas plumbing services, installations, and repairs.',
    searchTerm: 'gas plumber',
    image: '/images/licensed-gas-plumbing-services-installations-repairs.webp'
  },
  'water-heater': {
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance of water heaters.',
    searchTerm: 'water heater specialist',
    image: '/images/installation-repair-maintenance-water-heaters.webp'
  },
  'drain-cleaning': {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning and maintenance services.',
    searchTerm: 'drain cleaning specialist',
    image: '/images/drain-cleaning-maintenance-services.webp'
  }
};
