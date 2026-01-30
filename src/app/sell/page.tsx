import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import OnThisPage from '@/components/OnThisPage';
import Script from 'next/script';
import {
  generateMetadata as genMetadata,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { MARAVILLA_LONGFORM_PARAGRAPHS } from '@/lib/maravilla-longform';
import { BUSINESS_INFO } from '@/lib/config/business-info';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const revalidate = 604800; // weekly

export const metadata = genMetadata({
  title: 'Sell a Home in Maravilla | Listing Agent: Dr. Jan Duffy, REALTOR®',
  description:
    'Sell your Maravilla home with expert guidance. Dr. Jan Duffy, REALTOR®, helps you price competitively, prepare for market, and negotiate to maximize proceeds. Average days on market: 25 days. Free consultation. Call (702) 500-1953.',
  keywords:
    'sell my home Maravilla, Maravilla listing agent, Maravilla home value, Maravilla real estate agent, Dr. Jan Duffy REALTOR',
  path: '/sell',
});

export default function SellMaravillaPage() {
  const nap = {
    name: BUSINESS_INFO.name,
    phoneDisplay: BUSINESS_INFO.phone.display,
    phoneHref: BUSINESS_INFO.phone.href,
    addressLine: BUSINESS_INFO.community.address,
    hoursLine: BUSINESS_INFO.hours.display,
    mapsHref: BUSINESS_INFO.maps.community,
    reviewsHref: BUSINESS_INFO.googleBusinessProfile,
  } as const;

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Sell Your Home in Maravilla
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Selling in <strong>Maravilla</strong> is about more than listing a
            property—it&apos;s about positioning your home so it&apos;s the clear best choice
            for buyers comparing Maravilla inventory right now. Dr. Jan Duffy,
            REALTOR®, helps you prep, price, market, and negotiate with a plan
            built for the <strong>Maravilla</strong> buyer. <a href='#get-started' className='text-white hover:text-gray-200 underline font-medium'>Get started</a>, read <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>seller FAQs</a>, or get a <Link href='/home-valuation' className='text-white hover:text-gray-200 underline font-medium'>free home valuation</Link>, <Link href='/market-data' className='text-white hover:text-gray-200 underline font-medium'>market data</Link>, or <Link href='/real-estate-services' className='text-white hover:text-gray-200 underline font-medium'>selling services</Link>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'get-started', label: 'Get started: call or schedule' },
            { id: 'seller-context', label: 'Maravilla seller context' },
            { id: 'next-steps', label: 'Next steps' },
            { id: 'location', label: 'Maravilla location map' },
            { id: 'faqs', label: 'Seller FAQs' },
          ]}
        />
      </div>

      <section id='get-started' className='py-12 bg-white' aria-label='Get started'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Talk to a Maravilla listing agent</div>
              <a
                className='text-2xl font-bold text-[#0A2540] hover:underline'
                href={nap.phoneHref}
              >
                {nap.phoneDisplay}
              </a>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Get started</div>
              <p className='mt-2 text-gray-700'>
                Get a practical pricing and prep plan for your Maravilla home.
              </p>
              <Button
                asChild
                className='mt-3 bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
              >
                <Link href='/contact'>Schedule Consultation</Link>
              </Button>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Know your value</div>
              <p className='mt-2 text-gray-700'>
                Understand what your Maravilla home is worth today.
              </p>
              <Button
                asChild
                variant='outline'
                className='mt-3'
              >
                <Link href='/home-valuation'>Get a Maravilla Valuation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id='seller-context' className='py-16 bg-white' aria-labelledby='seller-context-heading'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='seller-context-heading' className='text-3xl font-bold text-[#0A2540] mb-6'>
            Maravilla real estate context (seller perspective)
          </h2>
          <div className='space-y-4'>
            {MARAVILLA_LONGFORM_PARAGRAPHS.map((p, idx) => (
              <p key={idx} className='text-gray-700 leading-relaxed'>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Maravilla seller strategy: what drives results
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Buyers compare &quot;Maravilla vs. everything else&quot;
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Your Maravilla home isn&apos;t only competing against other Maravilla
            listings—it&apos;s competing against nearby neighborhoods, new construction
            incentives, and alternative floor plans at similar price points. We
            position your home to win that comparison with clear feature language,
            strong visuals, and pricing strategy that matches current demand.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            The first 7–14 days matter most
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            In Maravilla, the first couple of weeks typically bring your most
            qualified buyers. That&apos;s why &quot;launch quality&quot; matters: photos,
            listing copy, disclosures, showing readiness, and a price that makes
            buyers act. A weak launch can cost you time and negotiating leverage.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            The best Maravilla offer is the one that closes
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            The best Maravilla offer is the one that closes smoothly and protects
            your net proceeds. That means evaluating not just price, but financing
            strength, contingencies, timeline, and the buyer&apos;s ability to complete
            the transaction. We help you compare offers holistically.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Preparation beats price reductions
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Well-prepared Maravilla homes often sell faster and for better prices
            than similar homes that need work. Investing in preparation—repairs,
            cleaning, staging, professional photography—typically yields better
            returns than starting high and reducing later.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Preparing your Maravilla home to sell (high-ROI checklist)
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Most Maravilla sellers get the best return from &quot;friction reducers&quot;:
            items that make buyers say &quot;yes&quot; faster. These include repairs,
            touch-up paint, deep cleaning, decluttering, and professional
            photography that showcases your home&apos;s best features.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Common buyer objections in Maravilla showings
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            The most common reasons buyers hesitate in Maravilla showings: flooring
            condition, odors, clutter, lighting, and curb appeal. Addressing these
            before listing helps your home stand out in online searches and in-person
            showings.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Feature highlighting and marketing
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Maravilla buyers are research-heavy. We highlight features, upgrades,
            and unique selling points in listing descriptions, photos, and marketing
            materials. This helps your home attract the right buyers and helps
            Google understand your local relevance for Maravilla searches.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Want a pricing and prep plan for your Maravilla home?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Get a clear roadmap to sell in Maravilla—pricing, presentation, and
            negotiation strategy tailored to your timeline and goals.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link href='/contact'>Schedule Consultation</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/home-valuation'>Get a Maravilla Valuation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id='location' className='py-16 bg-[#F7F9FC]' aria-labelledby='location-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='location-heading' className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            Maravilla Location
          </h2>
          <Suspense fallback={<MapSkeleton />}>
            <GoogleMap
              address='Maravilla, North Las Vegas, NV 89031'
              latitude={36.26276}
              longitude={-115.17182}
              zoom={15}
              height='500px'
              title='Maravilla Community Location'
            />
          </Suspense>
        </div>
      </section>

      <Script
        id='sell-maravilla-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Sell in Maravilla', url: `${baseUrl}/sell` },
            ]),
            generateWebPageSchema({
              name: 'Sell a Home in Maravilla | Dr. Jan Duffy, REALTOR®',
              description:
                'Sell your Maravilla home with expert guidance. Dr. Jan Duffy helps you price competitively, prepare for market, and negotiate to maximize proceeds.',
              url: `${baseUrl}/sell`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Sell in Maravilla', url: `${baseUrl}/sell` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}

