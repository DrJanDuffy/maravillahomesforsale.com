import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
  ).replace(/\/$/, '');

  // Cache this metadata route so Google doesn't see "changes"
  // on every request just because of runtime timestamps.
  //
  // Next.js will revalidate this route based on the exported constant below.
  return [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/homes`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neighborhood`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neighborhoods`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/market-data`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/market-insights`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/home-valuation`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

// Revalidate once per day (safe for a mostly-static marketing site).
export const revalidate = 86400;
