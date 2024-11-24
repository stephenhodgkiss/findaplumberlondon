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
    '/blog',
    '/faq',
    '/reviews',
    '/emergency',  // Emergency landing page
    '/commercial', // Commercial landing page
    '/residential' // Residential landing page
  ];

  // Add service pages
  const servicePages = services.map(service => `/services/${service}`);

  // Add area-service combination pages
  const areaServicePages = [];
  allAreas.forEach(area => {
    services.forEach(service => {
      areaServicePages.push(`/areas/${area}/${service}`);
    });
  });

  // Combine all routes
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...areaServicePages
  ];

  // Current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate URLs
  const urls = allPages.map(page => `${baseUrl}${page}`);

  // Generate XML sitemap
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === baseUrl ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write URL list to file
  const urlListPath = path.join(__dirname, '..', 'sitemap-url-list.txt');
  fs.writeFileSync(urlListPath, urls.join('\n'));

  // Write XML sitemap
  const xmlPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(xmlPath, xmlContent);
  
  // Log statistics
  console.log('Sitemap Generation Statistics:');
  console.log('-----------------------------');
  console.log(`Static Pages: ${staticPages.length}`);
  console.log(`Service Pages: ${servicePages.length}`);
  console.log(`Area-Service Combinations: ${areaServicePages.length}`);
  console.log(`Total URLs: ${urls.length}`);
  console.log('\nFiles generated:');
  console.log(`- URL List: ${urlListPath}`);
  console.log(`- XML Sitemap: ${xmlPath}`);
}

generateSiteMap();
