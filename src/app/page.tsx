import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import RealScoutOfficeWidget from '@/components/sections/realscout-office-widget';
import FAQSection from '@/components/sections/faq-section';
import RecentSales from '@/components/sections/recent-sales';
import MarketSnapshot from '@/components/sections/market-snapshot';
import JustSoldGallery from '@/components/sections/just-sold-gallery';
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';
import PropertyCategoriesSkeleton from '@/components/skeletons/property-categories-skeleton';
import CommunitiesSkeleton from '@/components/skeletons/communities-skeleton';
import BlogPostsSkeleton from '@/components/skeletons/blog-posts-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, MapPin, TrendingUp } from 'lucide-react';
import {
  generateMetadata as genMetadata,
  MARAVILLA_FAQS,
  generateFAQPageSchema,
  generateWebPageSchema,
  generateRealEstateAgentSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

// Dynamically import heavy components with loading states
const DynamicHomeEvaluation = dynamic(
  () => import('@/components/sections/home-evaluation'),
  {
    loading: () => (
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='h-10 w-64 bg-gray-200 animate-pulse rounded mx-auto mb-4'></div>
            <div className='h-6 w-96 bg-gray-200 animate-pulse rounded mx-auto'></div>
          </div>
          <div className='max-w-2xl mx-auto'>
            <div className='h-96 bg-gray-100 animate-pulse rounded-xl'></div>
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

const DynamicPropertyCategories = dynamic(
  () => import('@/components/sections/property-categories'),
  {
    loading: () => <PropertyCategoriesSkeleton />,
    ssr: true,
  }
);

const DynamicFeaturedCommunities = dynamic(
  () => import('@/components/sections/featured-communities'),
  {
    loading: () => <CommunitiesSkeleton />,
    ssr: true,
  }
);

const DynamicBlogPosts = dynamic(
  () => import('@/components/sections/blog-posts'),
  {
    loading: () => <BlogPostsSkeleton />,
    ssr: true,
  }
);

// Incremental Static Regeneration - revalidate every hour for fresh market data
export const revalidate = 3600; // 1 hour

export const metadata = genMetadata({
  title: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  description:
    'Find your dream home in Maravilla, Las Vegas. Browse luxury homes and explore this premier community with excellent schools, parks, and convenient amenities. Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Call (702) 500-1953.',
  keywords:
    'Maravilla, Las Vegas real estate, luxury homes, Las Vegas homes for sale, Nevada real estate, Maravilla community, luxury properties, real estate agent Las Vegas, Dr. Jan Duffy, Berkshire Hathaway',
  path: '/',
});

export default function Home() {
  return (
    <PageLayout>
      <article>
        <Hero />

        {/* Quick Links Section - 2025 Best Practice: Semantic HTML with ARIA */}
        <section className='py-12 bg-white border-b' aria-label='Quick navigation links'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav aria-label='Main navigation shortcuts'>
              <div className='grid md:grid-cols-3 gap-6'>
                <Link href='/homes' className='block' aria-label='Browse homes for sale in Maravilla'>
                  <Button
                    variant='outline'
                    className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                  >
                    <HomeIcon className='h-8 w-8 text-[#3A8DDE]' aria-hidden='true' />
                    <span className='text-lg font-semibold'>Browse Homes</span>
                    <span className='text-sm text-gray-600'>
                      View all available properties
                    </span>
                  </Button>
                </Link>
                <Link href='/neighborhood' className='block' aria-label='Explore Maravilla neighborhood'>
                  <Button
                    variant='outline'
                    className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                  >
                    <MapPin className='h-8 w-8 text-[#16B286]' aria-hidden='true' />
                    <span className='text-lg font-semibold'>
                      Explore Maravilla
                    </span>
                    <span className='text-sm text-gray-600'>
                      Learn about the neighborhood
                    </span>
                  </Button>
                </Link>
                <Link href='/market-data' className='block' aria-label='View market insights and trends'>
                  <Button
                    variant='outline'
                    className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                  >
                    <TrendingUp className='h-8 w-8 text-[#0A2540]' aria-hidden='true' />
                    <span className='text-lg font-semibold'>Market Insights</span>
                    <span className='text-sm text-gray-600'>
                      Latest trends and statistics
                    </span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </section>

        {/* RealScout Office Widget Section - Moved up for better conversion */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
                Featured Maravilla Listings from Dr. Jan Duffy
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Browse our current office listings. Dr. Jan Duffy specializes in
                luxury homes and estates across Las Vegas and Henderson.
              </p>
            </div>
            <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg border border-gray-200'>
              <Suspense fallback={<ListingsSkeleton />}>
                <RealScoutOfficeWidget
                  agentEncodedId='QWdlbnQtMjI1MDUw'
                  showMap={true}
                  listingsPerPage='12'
                  priceMin='380000'
                  priceMax='600000'
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Market Data Preview - Moved up to show market strength early */}
        <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Maravilla Market Overview
            </h2>
            <p className='text-xl text-gray-200 mb-8 max-w-3xl mx-auto'>
              Stay informed with the latest real estate trends in Las
              Vegas&apos; most prestigious community
            </p>
            <div className='grid md:grid-cols-4 gap-6 mb-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>$525K</div>
                <div className='text-gray-300 text-sm'>Average Sale Price</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>25</div>
                <div className='text-gray-300 text-sm'>Days on Market</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>8</div>
                <div className='text-gray-300 text-sm'>Active Listings</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>+4.8%</div>
                <div className='text-gray-300 text-sm'>YoY Appreciation</div>
              </div>
            </div>
            <Button
              asChild
              className='bg-[#16B286] hover:bg-[#15A276] text-white'
            >
              <Link href='/market-data'>
                View Full Market Report <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </section>

        <MarketSnapshot />
        <Suspense fallback={<PropertyCategoriesSkeleton />}>
          <DynamicPropertyCategories />
        </Suspense>
        <Suspense fallback={<CommunitiesSkeleton />}>
          <DynamicFeaturedCommunities />
        </Suspense>
        <DynamicHomeEvaluation />
        <JustSoldGallery />
        <RecentSales />
        <Suspense fallback={<BlogPostsSkeleton />}>
          <DynamicBlogPosts />
        </Suspense>
        
        {/* Strategic Internal Links for Sitelinks Optimization */}
        <section className='py-12 bg-gray-50 border-t border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav aria-label='Site navigation' className='text-center'>
              <h2 className='sr-only'>Site Navigation</h2>
              <ul className='flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm'>
                <li>
                  <Link
                    href='/homes'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link
                    href='/neighborhood'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Neighborhood Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href='/market-data'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Market Data
                  </Link>
                </li>
                <li>
                  <Link
                    href='/market-insights'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Market Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href='/home-valuation'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Home Valuation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sell'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Sell Your Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/new-construction'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    New Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href='/schools'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Schools
                  </Link>
                </li>
                <li>
                  <Link
                    href='/maravilla-hoa'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    HOA Information
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        
        <FAQSection />
      </article>

      {/* Structured Data */}
      <Script
        id='homepage-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
              description:
                'Find your dream home in Maravilla, Las Vegas. Browse quality homes with exceptional value, explore the neighborhood, and discover why Maravilla offers one of the best values in Las Vegas.',
              url: baseUrl,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
              ],
            }),
            generateRealEstateAgentSchema(),
            generateFAQPageSchema(MARAVILLA_FAQS),
          ]),
        }}
      />
    </PageLayout>
  );
}
