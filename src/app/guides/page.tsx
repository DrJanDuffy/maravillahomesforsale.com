import PageLayout from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { GUIDES, GUIDE_SLUGS } from '@/data/guides';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Guides for Clients | Buying & Selling | Dr. Jan Duffy',
  description:
    'Client guides: buying a home winter 2026, selling your house winter 2026, and first-time homebuyer. North Las Vegas and Maravilla. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
  keywords:
    'buying home guide, selling house guide, first-time homebuyer guide, North Las Vegas real estate, Maravilla guides',
  path: '/guides',
});

export default function GuidesIndexPage() {
  const breadcrumb = [
    { name: 'Home', url: baseUrl },
    { name: 'Guides', url: `${baseUrl}/guides` },
  ];

  return (
    <PageLayout>
      <Script
        id='guides-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'North Las Vegas Family Homes | Guides for Clients',
              description:
                'Client guides for buying and selling in North Las Vegas and Maravilla: winter 2026 buying and selling, first-time homebuyer. Dr. Jan Duffy, REALTOR®.',
              url: `${baseUrl}/guides`,
              breadcrumb,
            }),
            generateBreadcrumbSchema(breadcrumb),
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'North Las Vegas Family Homes: Guides for Clients',
              description: 'Buying and selling guides for North Las Vegas and Maravilla real estate.',
              numberOfItems: GUIDE_SLUGS.length,
              itemListElement: GUIDE_SLUGS.map((slug, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Article',
                  name: GUIDES[slug].title,
                  url: `${baseUrl}/guides/${slug}`,
                },
              })),
            },
          ]),
        }}
      />

      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            North Las Vegas Family Homes: Guides for Clients
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Practical guides for buying and selling in North Las Vegas and Maravilla. Winter 2026 considerations and a first-time homebuyer guide. Share any guide with clients via link, email, or print (save as PDF).
          </p>
        </div>
      </div>

      <section className='py-16 bg-white' aria-labelledby='guides-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='guides-heading' className='text-2xl font-bold text-[#0A2540] mb-6'>
            North Las Vegas Family Homes: Buying and Selling Guides
          </h2>
          <p className='text-gray-600 mb-8 max-w-2xl'>
            Practical guides for home buyers and sellers: winter 2026 considerations and a first-time homebuyer guide. Each guide has a unique page with detailed, SEO-friendly content.
          </p>
          <div className='grid md:grid-cols-3 gap-8'>
            {GUIDE_SLUGS.map((slug) => {
              const guide = GUIDES[slug];
              return (
                <Link
                  key={slug}
                  href={`/guides/${slug}`}
                  className='block group'
                  aria-label={`Read guide: ${guide.title}`}
                >
                  <Card className='border-0 shadow-lg h-full transition-shadow group-hover:shadow-xl'>
                    <CardHeader>
                      <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                        <BookOpen className='h-6 w-6 text-[#3A8DDE]' />
                      </div>
                      <CardTitle className='text-xl group-hover:text-[#3A8DDE] line-clamp-2'>
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 line-clamp-3 mb-4'>
                        {guide.description}
                      </p>
                      <span className='text-[#3A8DDE] font-medium group-hover:underline'>
                        Read guide →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
