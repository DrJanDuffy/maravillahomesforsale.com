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
        // Keep crawlers out of non-content routes.
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/admin/',
          '/visit-api', // Explicitly disallow this legacy route
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
