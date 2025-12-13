import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layout/page-layout';
import RealEstateListings from '@/components/sections/real-estate-listings';
import PropertyCategories from '@/components/sections/property-categories';
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';
import PropertyCategoriesSkeleton from '@/components/skeletons/property-categories-skeleton';
import AgentPhoto from '@/components/ui/agent-photo';

const DynamicPropertyCategories = dynamic(
  () => import('@/components/sections/property-categories'),
  {
    loading: () => <PropertyCategoriesSkeleton />,
    ssr: true,
  }
);
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, MapPin, DollarSign, TrendingUp } from 'lucide-react';

import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

// Incremental Static Regeneration - revalidate every 30 minutes for fresh listings
export const revalidate = 1800; // 30 minutes

export const metadata = genMetadata({
  title: 'Homes for Sale in Craig Ranch, Las Vegas | Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  description:
    "Browse luxury homes for sale in Craig Ranch, Las Vegas. View current listings from $370K to $1.8M with detailed photos, virtual tours, and market data. Average home value: $428K. Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Call (702) 820-5408.",
  keywords:
    'homes for sale Craig Ranch, Las Vegas homes, luxury homes for sale, Craig Ranch real estate, North Las Vegas homes, property listings, real estate agent Las Vegas',
  path: '/homes',
});

export default function HomesPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Homes for Sale in Craig Ranch
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Discover homes for sale in the Craig Ranch community in North Las
            Vegas. Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway
            HomeServices® Nevada, to find your perfect property. Prices range
            from $370,000 to $1.8 million, with 206 homes currently available.
            Average home value: $427,967.
          </p>
        </div>
      </div>

      <Suspense fallback={<ListingsSkeleton />}>
        <RealEstateListings />
      </Suspense>

      {/* Working with Dr. Jan Duffy Section - Moved up for trust building */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center mb-12'>
            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
                Working with Dr. Jan Duffy for Craig Ranch Homes
              </h2>
              <p className='text-lg text-gray-600 mb-6'>
                Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices®
                Nevada, specializing in various communities across Las Vegas and
                Henderson. She offers expert, data-driven advice and personalized
                consultations.
              </p>
              <AgentPhoto
                src='/Dr Duffy Blue_Headshot Enhanced 180 Size.jpg'
                alt='Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada'
                sizes='(max-width: 1024px) 100vw, 50vw'
                priority
                className='shadow-lg'
              />
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <p className='text-gray-700'>
                    <strong>Phone:</strong>{' '}
                    <a
                      href='tel:7028205408'
                      className='text-[#3A8DDE] hover:underline'
                    >
                      (702) 820-5408
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle>Website Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700 mb-3'>
                    Explore current property listings through her website:
                  </p>
                  <Link
                    href='http://drjanduffy.realscout.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    prefetch={false}
                    className='text-[#3A8DDE] hover:underline font-semibold'
                  >
                    drjanduffy.realscout.com →
                  </Link>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg md:col-span-2'>
                <CardHeader>
                  <CardTitle>Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700'>
                    Specializes in luxury homes and estates in Las Vegas and
                    Henderson. Offers expert, data-driven advice and personalized
                    consultations for buyers and sellers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            Why Buy in Craig Ranch?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                  <Home className='h-6 w-6 text-[#3A8DDE]' />
                </div>
                <CardTitle>Premium Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Luxury homes with modern amenities, high-end finishes, and
                  exceptional craftsmanship
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#16B286]/10 rounded-lg flex items-center justify-center mb-4'>
                  <MapPin className='h-6 w-6 text-[#16B286]' />
                </div>
                <CardTitle>Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Convenient access to shopping, dining, entertainment, and
                  excellent schools
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mb-4'>
                  <TrendingUp className='h-6 w-6 text-[#0A2540]' />
                </div>
                <CardTitle>Strong Market</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Properties sell quickly with strong appreciation and growing
                  demand
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                  <DollarSign className='h-6 w-6 text-[#3A8DDE]' />
                </div>
                <CardTitle>Great Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Competitive pricing with excellent value for luxury living in
                  Las Vegas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Suspense fallback={<PropertyCategoriesSkeleton />}>
        <DynamicPropertyCategories />
      </Suspense>

      {/* Price Range & Community Info */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
                Homes for Sale in Craig Ranch
              </h2>
              <div className='space-y-4 text-gray-700'>
                <p>
                  <strong>Community Information:</strong> Craig Ranch is a
                  master-planned community located in North Las Vegas, near the
                  VA Hospital and major access routes like the 215-beltway and
                  I-15.
                </p>
                <p>
                  <strong>Price Range:</strong> Home prices range from $370,000
                  to $1.8 million, with new construction and resale options
                  available. The average home value is $427,967, with an average
                  price per square foot of $242. The median sale price is
                  $415,000.
                </p>
                <p>
                  <strong>Builders:</strong> Builders in the community have
                  included Century Communities, offering various floor plans across
                  multiple collections.
                </p>
              </div>
              <div className='mt-6'>
                <Button asChild variant='outline'>
                  <Link href='/neighborhoods'>Explore Neighborhoods</Link>
                </Button>
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
                Craig Ranch Community Amenities
              </h2>
              <div className='space-y-4'>
                <p className='text-gray-700'>
                  The community features multiple neighborhoods, several parks, and
                  is in close proximity to the 170-acre Craig Ranch Regional Park,
                  which includes:
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-center'>
                    <span className='text-[#16B286] mr-2'>✓</span>
                    Skate park (65,000 square feet)
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#16B286] mr-2'>✓</span>
                    Three dog parks
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#16B286] mr-2'>✓</span>
                    Sports fields (baseball, basketball, tennis, volleyball)
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#16B286] mr-2'>✓</span>
                    Community gardens
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#16B286] mr-2'>✓</span>
                    Water features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to Find Your Dream Home?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Dr. Jan Duffy can provide you with the most current and specific
            listings within the Craig Ranch community that match your
            requirements. Contact her directly or utilize her online resources.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link
                href='http://drjanduffy.realscout.com/'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                View All Listings
              </Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id='homes-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateCollectionPageSchema({
              name: 'Homes for Sale in Craig Ranch, Las Vegas',
              description:
                "Browse luxury homes for sale in Craig Ranch, Las Vegas. Find your dream home in one of Las Vegas' most prestigious communities.",
              url: `${baseUrl}/homes`,
            }),
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Craig Ranch Homes for Sale',
              description: 'Luxury homes for sale in Craig Ranch, Las Vegas',
              url: `${baseUrl}/homes`,
              numberOfItems: 206,
              itemListElement: {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'Product',
                  '@id': `${baseUrl}/homes`,
                  name: 'Craig Ranch Homes',
                  description: 'Luxury homes in Craig Ranch ranging from $370,000 to $1.8 million',
                  category: 'Real Estate',
                  offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'USD',
                    lowPrice: '370000',
                    highPrice: '1800000',
                    offerCount: '206',
                  },
                },
              },
            },
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Homes for Sale', url: `${baseUrl}/homes` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}
