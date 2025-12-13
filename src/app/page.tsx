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
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';
import PropertyCategoriesSkeleton from '@/components/skeletons/property-categories-skeleton';
import CommunitiesSkeleton from '@/components/skeletons/communities-skeleton';
import BlogPostsSkeleton from '@/components/skeletons/blog-posts-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, MapPin, TrendingUp } from 'lucide-react';
import {
  generateMetadata as genMetadata,
  CRAIG_RANCH_FAQS,
  generateFAQPageSchema,
  generateWebPageSchema,
  generateRealEstateAgentSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
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
  title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  description:
    "Find your dream home in Craig Ranch, Las Vegas. Browse luxury homes from $370K to $1.8M, explore the award-winning community with 170-acre park, excellent schools, and 5 miles of trails. Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Call (702) 820-5408.",
  keywords:
    'Craig Ranch, Las Vegas real estate, luxury homes, Las Vegas homes for sale, North Las Vegas, Nevada real estate, Craig Ranch community, luxury properties, real estate agent Las Vegas, Dr. Jan Duffy, Berkshire Hathaway',
  path: '/',
});

export default function Home() {
  return (
    <PageLayout>
      <article>
        <Hero />

        {/* Quick Links Section */}
        <section className='py-12 bg-white border-b'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-6'>
              <Link href='/homes' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                >
                  <HomeIcon className='h-8 w-8 text-[#3A8DDE]' />
                  <span className='text-lg font-semibold'>Browse Homes</span>
                  <span className='text-sm text-gray-600'>
                    View all available properties
                  </span>
                </Button>
              </Link>
              <Link href='/neighborhood' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                >
                  <MapPin className='h-8 w-8 text-[#16B286]' />
                  <span className='text-lg font-semibold'>
                    Explore Craig Ranch
                  </span>
                  <span className='text-sm text-gray-600'>
                    Learn about the neighborhood
                  </span>
                </Button>
              </Link>
              <Link href='/market-data' className='block'>
                <Button
                  variant='outline'
                  className='w-full h-auto py-6 flex-col gap-2 hover:bg-[#F7F9FC]'
                >
                  <TrendingUp className='h-8 w-8 text-[#0A2540]' />
                  <span className='text-lg font-semibold'>Market Insights</span>
                  <span className='text-sm text-gray-600'>
                    Latest trends and statistics
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* RealScout Office Widget Section - Moved up for better conversion */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
                Featured Craig Ranch Listings from Dr. Jan Duffy
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
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Market Data Preview - Moved up to show market strength early */}
        <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Craig Ranch Market Overview
            </h2>
            <p className='text-xl text-gray-200 mb-8 max-w-3xl mx-auto'>
              Stay informed with the latest real estate trends in Las
              Vegas&apos; most prestigious community
            </p>
            <div className='grid md:grid-cols-4 gap-6 mb-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>$428K</div>
                <div className='text-gray-300 text-sm'>Average Value</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>46</div>
                <div className='text-gray-300 text-sm'>Days on Market</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>206</div>
                <div className='text-gray-300 text-sm'>Homes For Sale</div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                <div className='text-3xl font-bold text-white mb-1'>+1%</div>
                <div className='text-gray-300 text-sm'>Price Growth</div>
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

        <Suspense fallback={<PropertyCategoriesSkeleton />}>
          <DynamicPropertyCategories />
        </Suspense>
        <Suspense fallback={<CommunitiesSkeleton />}>
          <DynamicFeaturedCommunities />
        </Suspense>
        <DynamicHomeEvaluation />
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
                    href='/home-valuation-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Home Valuation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sell-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Sell Your Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/new-construction-craig-ranch'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    New Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href='/craig-ranch-schools'
                    className='text-[#0A2540] hover:text-[#3A8DDE] hover:underline transition-colors font-medium'
                  >
                    Schools
                  </Link>
                </li>
                <li>
                  <Link
                    href='/craig-ranch-hoa'
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
              name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
              description:
                "Find your dream home in Craig Ranch, Las Vegas. Browse luxury homes, explore the neighborhood, and discover why Craig Ranch is one of Las Vegas' most prestigious communities.",
              url: baseUrl,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
              ],
            }),
            generateRealEstateAgentSchema(),
            generateFAQPageSchema(CRAIG_RANCH_FAQS),
          ]),
        }}
      />
    </PageLayout>
  );
}
