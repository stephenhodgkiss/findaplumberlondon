const fs = require('fs');
const path = require('path');

// Import area and service data
const areaData = {
  'central-london': {
    name: 'Central London',
    coordinates: { lat: 51.5074, lng: -0.1278 }
  },
  'north-london': {
    name: 'North London',
    coordinates: { lat: 51.5504, lng: -0.1058 }
  },
  'south-london': {
    name: 'South London',
    coordinates: { lat: 51.4615, lng: -0.1160 }
  },
  'east-london': {
    name: 'East London',
    coordinates: { lat: 51.5389, lng: -0.0324 }
  },
  'west-london': {
    name: 'West London',
    coordinates: { lat: 51.4915, lng: -0.2432 }
  }
};

// Map of specific areas to their parent areas
const areaMapping = {
  // Central London Areas
  'aldgate': 'central-london',
  'bank': 'central-london',
  'barbican': 'central-london',
  'belgravia': 'central-london',
  'blackfriars': 'central-london',
  'bloomsbury': 'central-london',
  'city-of-london': 'central-london',
  'clerkenwell': 'central-london',
  'covent-garden': 'central-london',
  'euston': 'central-london',
  'farringdon': 'central-london',
  'holborn': 'central-london',
  'kings-cross': 'central-london',
  'london-bridge': 'central-london',
  'marylebone': 'central-london',
  'mayfair': 'central-london',
  'moorgate': 'central-london',
  'paddington': 'central-london',
  'pentonville': 'central-london',
  'pimlico': 'central-london',
  'soho': 'central-london',
  'st-pauls': 'central-london',
  'temple': 'central-london',
  'tower-bridge': 'central-london',
  'tower-hill': 'central-london',
  'upper-street': 'central-london',
  'victoria': 'central-london',
  'warren-street': 'central-london',
  'waterloo': 'central-london',
  'westminster': 'central-london',
};

const services = [
  'emergency-plumbing',
  'commercial-plumbing',
  'residential-plumbing',
  'gas-plumbing',
  'water-heater',
  'drain-cleaning'
];

const baseUrl = process.env.SITE_URL || 'https://findaplumberlondon.com';

function generateSiteMap() {
  // Get all areas (both main areas and specific areas)
  const allAreas = [...Object.keys(areaData), ...Object.keys(areaMapping)];

  // Start with static routes
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/areas',
    '/privacy-policy',
    '/terms-of-service',
  ];

  // Add service pages
  const servicePages = services.map(service => `/services/${service}`);

  // Add area pages
  const areaPages = allAreas.map(area => `/areas/${area}`);

  // Add area-service combination pages
  const areaServicePages = [];
  allAreas.forEach(area => {
    services.forEach(service => {
      areaServicePages.push(`/areas/${area}/${service}`);
    });
  });

  // Add location-service combination pages
  const locationServicePages = [];
  allAreas.forEach(location => {
    services.forEach(service => {
      locationServicePages.push(`/${location}/${service}`);
    });
  });

  // Combine all routes
  const pages = [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...areaServicePages,
    ...locationServicePages
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${page === '' ? '1.0' : '0.7'}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap-0.xml'),
    sitemap
  );
}

generateSiteMap();
