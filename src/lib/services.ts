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
    image: '/images/plumbing-1.jpg'
  },
  'commercial-plumbing': {
    title: 'Commercial Plumbing',
    description: 'Professional plumbing solutions for businesses and commercial properties.',
    searchTerm: 'commercial plumber',
    image: '/images/plumbing-2.jpg'
  },
  'residential-plumbing': {
    title: 'Residential Plumbing',
    description: 'Complete plumbing services for homes and residential properties.',
    searchTerm: 'residential plumber',
    image: '/images/plumbing-3.jpg'
  },
  'gas-plumbing': {
    title: 'Gas Plumbing',
    description: 'Licensed gas plumbing services, installations, and repairs.',
    searchTerm: 'gas plumber',
    image: '/images/plumbing-4.jpg'
  },
  'water-heater': {
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance of water heaters.',
    searchTerm: 'water heater specialist',
    image: '/images/water-heater-1.jpg'
  },
  'drain-cleaning': {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning and maintenance services.',
    searchTerm: 'drain cleaning specialist',
    image: '/images/drain-cleaning-1.jpg'
  }
};
