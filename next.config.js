/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'fastly.4sqi.net',
      'ss3.4sqi.net',
      'maps.googleapis.com',
      'lh3.googleusercontent.com'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  poweredByHeader: false,
  
  // Production optimization settings
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  compress: true,
  generateEtags: true,
  
  experimental: {
    workerThreads: true,
    cpus: 1,
    optimizeCss: process.env.NODE_ENV === 'production'
  },
  
  // Cache configuration
  onDemandEntries: {
    maxInactiveAge: 24 * 60 * 60 * 1000, // 24 hours
    pagesBufferLength: 5,
  },
  
  // Enable response caching
  headers: async () => {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/api/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=86400, stale-while-revalidate=59',
            },
          ],
        },
      ];
    }
    return [];
  },
  
  env: {
    HERE_APP_ID: process.env.HERE_APP_ID,
    HERE_API_KEY: process.env.HERE_API_KEY,
    MONGO_DB_URI: process.env.MONGO_DB_URI || process.env.MONGODB_URI, // Support both naming conventions
    MONGODB_DB: process.env.MONGODB_DB,
    FOURSQUARE_API_KEY: process.env.FOURSQUARE_API_KEY
  }
}

module.exports = nextConfig
