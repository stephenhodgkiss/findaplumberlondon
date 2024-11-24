/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://findaplumberlondon.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Disable default sitemap generation
  outDir: 'public',
  exclude: ['/api/*', '/admin/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*']
      },
    ],
    additionalSitemaps: [
      'https://findaplumberlondon.com/sitemap.xml'
    ],
  },
  transform: (config, url) => {
    // Return null to exclude this page from sitemap
    if (url.includes('/api/') || url.includes('/admin/')) {
      return null;
    }
    
    return {
      loc: url,
      changefreq: 'daily',
      priority: url === config.siteUrl ? 1.0 : 0.8,
      lastmod: new Date().toISOString()
    };
  }
}
