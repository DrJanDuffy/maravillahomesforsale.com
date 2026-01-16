import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration (2025 Best Practice)
 * - Allows all content pages for crawling
 * - Blocks API routes and internal Next.js paths
 * - References sitemap for efficient crawling
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
  ).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // 2025 Best Practice: Block non-content routes but allow CSS/JS for rendering
        // Google needs CSS/JS to properly render pages for mobile-first indexing
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/admin/',
          '/visit-api', // Legacy API route
          '/message/', // Legacy message/share routes
          '/tour', // Legacy tour route (redirects to /homes)
          '/tour/mls', // Legacy MLS tour route (redirects to /homes)
          '/mls', // Legacy MLS route (redirects to /homes)
          '/lc', // Legacy route (redirects to /contact)
          '/ub', // Legacy route (redirects to /homes)
        ],
      },
      // Googlebot-specific rules (2025: Mobile-first indexing is default)
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/admin/',
        ],
      },
      // Bingbot rules
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    // 2025 Best Practice: Add host directive for canonical domain
    host: baseUrl,
  };
}
