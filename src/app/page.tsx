import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import PageLayout from '@/components/layout/page-layout';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import KcmVideosSection from '@/components/sections/kcm-videos-section';
import RecentSales from '@/components/sections/recent-sales';
import MarketSnapshot from '@/components/sections/market-snapshot';
import JustSoldGallery from '@/components/sections/just-sold-gallery';
import PropertyCategoriesSkeleton from '@/components/skeletons/property-categories-skeleton';
import CommunitiesSkeleton from '@/components/skeletons/communities-skeleton';
import BlogPostsSkeleton from '@/components/skeletons/blog-posts-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, MapPin, Play, TrendingUp } from 'lucide-react';
import { KCM_VIDEOS_URL } from '@/data/guides';
import {
  generateMetadata as genMetadata,
  generateWebPageSchema,
  generateRealEstateAgentSchema,
  generateVideoGallerySchema,
} from '@/lib/metadata';
import { KCM_VIDEO_ENTRIES } from '@/data/kcm-videos';

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
    'North Las Vegas Family Homes: find your dream home in Maravilla and North Las Vegas. Family-friendly community, top schools, parks, amenities. Dr. Jan Duffy, REALTOR® Berkshire Hathaway Nevada. Browse homes, get a valuation, or contact (702) 500-1953.',
  keywords:
    'North Las Vegas family homes, Maravilla homes for sale, North Las Vegas real estate, Maravilla Las Vegas, Dr. Jan Duffy REALTOR, Berkshire Hathaway Nevada, first-time home buyer North Las Vegas, homes for sale Maravilla',
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
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
                <Link href='#faqs' className='block' aria-label='Jump to frequently asked questions'>
                  <Button
                    variant='outline'
                    className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                  >
                    <ArrowRight className='h-8 w-8 text-[#3A8DDE]' aria-hidden='true' />
                    <span className='text-lg font-semibold'>Common Questions</span>
                    <span className='text-sm text-gray-600'>
                      FAQs about Maravilla
                    </span>
                  </Button>
                </Link>
              </div>
              <p className='text-center text-gray-600 mt-6 text-sm'>
                <Link href='/about' className='text-[#3A8DDE] hover:underline'>About Dr. Jan Duffy</Link>
                {' · '}
                <Link href='/buyers-guide' className='text-[#3A8DDE] hover:underline'>Buyer&apos;s Guide</Link>
                {' · '}
                <Link href='/schools' className='text-[#3A8DDE] hover:underline'>Schools</Link>
                {' · '}
                <Link href='/resources' className='text-[#3A8DDE] hover:underline'>Resources</Link>
              </p>
            </nav>
          </div>
        </section>

        {/* Office RealScout widget is in PageLayout - appears on every page */}

        {/* Market Data Preview - Moved up to show market strength early */}
        <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              North Las Vegas Family Homes: Market Overview
            </h2>
            <p className='text-xl text-white mb-8 max-w-3xl mx-auto'>
              Stay informed with the latest real estate trends in Las
              Vegas&apos; most prestigious community
            </p>
            <div className='grid md:grid-cols-4 gap-6 mb-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>$525K</div>
                <div className='text-white/90 text-sm'>Average Sale Price</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>25</div>
                <div className='text-white/90 text-sm'>Days on Market</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>8</div>
                <div className='text-white/90 text-sm'>Active Listings</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>+4.8%</div>
                <div className='text-white/90 text-sm'>YoY Appreciation</div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                asChild
                className='bg-[#16B286] hover:bg-[#15A276] text-white'
              >
                <Link href='/market-data'>
                  View Full Market Report <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='bg-white/10 hover:bg-white/20 text-white border-white/30'
              >
                <a href={KCM_VIDEOS_URL} target='_blank' rel='noopener noreferrer'>
                  <Play className='mr-2 h-4 w-4' aria-hidden /> Watch: Home Sales Picked Up Coming into 2026
                </a>
              </Button>
            </div>
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

        <KcmVideosSection limit={4} heading='Latest Market Videos' />

        {/* Strategic Internal Links for Sitelinks Optimization */}
        <section className='py-12 bg-gray-50 border-t border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav aria-label='Site navigation' className='text-center'>
              <h2 className='sr-only'>North Las Vegas Family Homes – Site Navigation</h2>
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
      </article>

      {/* Structured Data - FAQ schema is output by PageFAQSection in layout */}
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
            generateVideoGallerySchema(
              KCM_VIDEO_ENTRIES.map((v) => ({
                id: v.id,
                title: v.title,
                description: v.description,
                url: v.url,
              })),
              'North Las Vegas Family Homes: Latest Market Videos'
            ),
          ]),
        }}
      />
    </PageLayout>
  );
}
