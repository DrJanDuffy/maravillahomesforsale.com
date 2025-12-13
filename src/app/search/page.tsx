import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import {
  generateMetadata as genMetadata,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/metadata';

export const metadata: Metadata = {
  ...genMetadata({
    title: 'Search Craig Ranch Homes | Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    description:
      'Search Craig Ranch homes and explore real estate listings, market data, and neighborhood information in Craig Ranch, North Las Vegas, Nevada.',
    keywords:
      'Craig Ranch search, Craig Ranch homes search, Craig Ranch real estate search, North Las Vegas homes',
    path: '/search',
  }),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

// Mark as dynamic since it uses searchParams
export const dynamic = 'force-dynamic';

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = (await searchParams) ?? {};
  const query = (params.q ?? '').trim();

  return (
    <PageLayout>
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#0A2540] mb-4'>
            Search Craig Ranch Homes
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            {query
              ? `You searched for "${query}". Use the links below to browse listings and market insights in Craig Ranch, North Las Vegas.`
              : 'Use the links below to browse listings and market insights in Craig Ranch, North Las Vegas.'}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/homes'>Browse Craig Ranch Homes for Sale</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/market-data'>View Craig Ranch Market Data</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id='search-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Search Craig Ranch Homes',
              description:
                'Search Craig Ranch homes and explore real estate listings, market data, and neighborhood information in Craig Ranch, North Las Vegas, Nevada.',
              url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'}/search`,
              breadcrumb: [
                { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com' },
                { name: 'Search', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'}/search` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com' },
              { name: 'Search', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'}/search` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}


