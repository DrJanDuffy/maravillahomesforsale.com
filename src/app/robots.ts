import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
  ).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Keep crawlers out of non-content routes and legacy routes.
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/admin/',
          '/visit-api', // Legacy API route
          '/message/', // Legacy message/share routes
          '/mls', // Legacy MLS route (redirects to /homes)
          '/lc', // Legacy route (redirects to /contact)
          '/ub', // Legacy route (redirects to /homes)
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
