export type ServiceType = 'emergency-plumbing' | 'commercial-plumbing' | 'residential-plumbing' | 'gas-plumbing' | 'water-heater' | 'drain-cleaning';

interface ServiceContent {
  title: string;
  description: string;
  searchTerm: string;
}

export const serviceContent: Record<ServiceType, ServiceContent> = {
  'emergency-plumbing': {
    title: 'Emergency Plumbing',
    description: '24/7 emergency plumbing services for urgent repairs and issues.',
    searchTerm: 'emergency plumber'
  },
  'commercial-plumbing': {
    title: 'Commercial Plumbing',
    description: 'Professional plumbing solutions for businesses and commercial properties.',
    searchTerm: 'commercial plumber'
  },
  'residential-plumbing': {
    title: 'Residential Plumbing',
    description: 'Complete plumbing services for homes and residential properties.',
    searchTerm: 'residential plumber'
  },
  'gas-plumbing': {
    title: 'Gas Plumbing',
    description: 'Licensed gas plumbing services, installations, and repairs.',
    searchTerm: 'gas plumber'
  },
  'water-heater': {
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance of water heaters.',
    searchTerm: 'water heater specialist'
  },
  'drain-cleaning': {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning and maintenance services.',
    searchTerm: 'drain cleaning specialist'
  }
};
