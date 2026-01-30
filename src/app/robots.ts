import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration (2025 Best Practice)
 * - Allows all content pages for crawling
 * - Allows /_next/static/ (CSS/JS) so Googlebot can render pages (mobile-first indexing)
 * - Blocks API routes and other internal Next.js paths
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
        allow: ['/', '/_next/static/'],
        // Block non-content routes; allow wins over disallow for more specific paths (/_next/static/)
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
          '/ap', // Legacy route (redirects to /homes)
        ],
      },
      // Googlebot: allow CSS/JS for rendering (mobile-first indexing)
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/static/'],
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/admin/',
        ],
      },
      // Bingbot
      {
        userAgent: 'Bingbot',
        allow: ['/', '/_next/static/'],
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
