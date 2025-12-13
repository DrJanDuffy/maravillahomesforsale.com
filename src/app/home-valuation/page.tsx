import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Script from 'next/script';
import {
  generateMetadata as genMetadata,
  generateLocalBusinessSchema,
  generateFAQPageSchema,
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
  title: 'Maravilla Home Valuation | What Is My Maravilla Home Worth?',
  description:
    'Get a free Maravilla home valuation with local pricing context. Dr. Jan Duffy, REALTOR®, provides accurate value estimates based on recent sales, active listings, and market trends. Average home value: $525K. Call (702) 500-1953 for your free estimate.',
  keywords:
    'Maravilla home valuation, Maravilla home value, what is my home worth Maravilla, Maravilla CMA, Dr. Jan Duffy REALTOR',
  path: '/home-valuation',
});

export default function MaravillaHomeValuationPage() {
  const nap = {
    name: BUSINESS_INFO.name,
    phoneDisplay: BUSINESS_INFO.phone.display,
    phoneHref: BUSINESS_INFO.phone.href,
    addressLine: BUSINESS_INFO.community.address,
    hoursLine: BUSINESS_INFO.hours.display,
    mapsHref: BUSINESS_INFO.maps.community,
    reviewsHref: BUSINESS_INFO.maps.community,
  } as const;

  const faqs = [
    {
      question: 'How is a Maravilla home valuation calculated?',
      answer:
        'A Maravilla valuation is based on comparable closed sales, current active listings, condition and upgrades, layout desirability, lot features, and buyer demand. We also consider what buyers are choosing instead if they don\'t buy your Maravilla home.',
    },
    {
      question: 'Is an online estimate accurate for Maravilla?',
      answer:
        'Online estimates can be a rough starting point, but Maravilla values often hinge on specific features (layout, condition, finishes, lot position). A local valuation adds context that automated estimates often miss.',
    },
    {
      question: 'Do you provide a CMA for Maravilla?',
      answer:
        'Yes. A CMA (comparative market analysis) for Maravilla includes recent comps, active competition, and a recommended pricing strategy aligned with your timeline and goals.',
    },
    {
      question: 'What information do you need for a Maravilla valuation?',
      answer:
        'At minimum: address, bed/bath count, approximate square footage, key upgrades, and your timeline. Photos can help, but we can start with basics and refine as needed for your Maravilla home.',
    },
    {
      question: 'How often do Maravilla valuations change?',
      answer:
        'Maravilla values can shift with interest rates, inventory, seasonality, and buyer sentiment. That\'s why we look at the most recent comparable sales and the current competition, not just older data.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Maravilla Home Valuation
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Wondering <strong>what your Maravilla home is worth</strong>? A
            valuation should be more than a generic estimate—it should reflect how
            buyers are shopping Maravilla today. Dr. Jan Duffy, REALTOR®, provides
            a practical value range and a pricing plan you can actually use.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Get started</div>
              <p className='mt-2 text-gray-700'>
                Call for a fast Maravilla pricing conversation and next steps.
              </p>
              <a
                className='mt-3 inline-block text-2xl font-bold text-[#0A2540] hover:underline'
                href={nap.phoneHref}
              >
                {nap.phoneDisplay}
              </a>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Free valuation</div>
              <p className='mt-2 text-gray-700'>
                Get a practical pricing and prep plan for your Maravilla home.
              </p>
              <Button
                asChild
                className='mt-3 bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
              >
                <Link href='/contact'>Request Valuation</Link>
              </Button>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Market context</div>
              <p className='mt-2 text-gray-700'>
                Understand Maravilla pricing bands & buyer behavior.
              </p>
              <Button
                asChild
                variant='outline'
                className='mt-3'
              >
                <Link href='/market-data'>View Market Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Maravilla real estate context (valuation lens)
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
            What affects Maravilla home values?
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Comparable sales (the foundation)
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            The most important driver for a Maravilla valuation is recent closed
            sales of similar homes. We look at closings that are close in size,
            layout, condition, and location—then adjust based on upgrades and how
            buyers react to each feature.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Current competition (active listings)
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Active Maravilla listings reveal what buyers can choose right now.
            If competition is priced aggressively, your valuation strategy needs
            to account for it. If competition is stale, that can create leverage.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Condition, upgrades, and buyer psychology
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Condition matters, but so does how buyers perceive condition. A home
            that feels &quot;move-in ready&quot; often commands a premium over a similar
            home that needs work, even if the work is cosmetic. Upgrades like
            updated kitchens, modern bathrooms, and energy-efficient systems can
            significantly impact value in Maravilla.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Location and lot features
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Within Maravilla, location matters. Homes with mountain views, corner
            lots, or proximity to parks and amenities often command higher prices.
            Lot size, orientation, and privacy also factor into valuation.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Market timing and buyer demand
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Market conditions change, and buyer demand shifts with interest rates,
            inventory levels, and seasonal patterns. A Maravilla valuation
            considers current market dynamics, not just historical data.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Why a local Maravilla valuation matters
          </h2>
          <div className='space-y-4'>
            <p className='text-gray-700 leading-relaxed'>
              Automated valuation models (AVMs) can provide a starting point, but
              they often miss the nuances that matter in Maravilla. Local market
              knowledge, recent comparable sales, and understanding of buyer
              preferences in the area all contribute to a more accurate valuation.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              Dr. Jan Duffy brings deep knowledge of the Maravilla market, including
              recent sales, current inventory, and buyer behavior patterns. This
              expertise helps provide valuations that reflect real market conditions,
              not just algorithmic estimates.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              A local valuation also considers factors that AVMs can&apos;t easily
              quantify: the appeal of specific floor plans, the value of recent
              upgrades, the impact of lot location, and how your home compares to
              what buyers are actively viewing. This comprehensive approach helps
              you make informed decisions about pricing, improvements, and timing.
            </p>
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Maravilla valuation FAQs
          </h2>
          <div className='space-y-6'>
            {faqs.map((faq, idx) => (
              <div key={idx} className='bg-white rounded-lg p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-2'>
                  {faq.question}
                </h3>
                <p className='text-gray-700 leading-relaxed'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to get your Maravilla home valuation?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Contact Dr. Jan Duffy for a comprehensive valuation that considers all
            factors affecting your home&apos;s value in the Maravilla market.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link href='/contact'>Request Free Valuation</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <a href={nap.phoneHref}>{nap.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
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
        id='maravilla-home-valuation-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema({
              name: nap.name,
              description:
                'Maravilla home valuation services. Get accurate home value estimates for properties in Maravilla, North Las Vegas.',
              url: `${baseUrl}/home-valuation`,
              telephone: nap.phoneHref.replace('tel:', '+1-'),
              address: {
                streetAddress: nap.addressLine,
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89031',
                addressCountry: 'US',
              },
              geo: {
                latitude: 36.26276,
                longitude: -115.17182,
              },
              openingHours: nap.hoursLine,
            }),
            generateFAQPageSchema(faqs),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Maravilla Home Valuation', url: `${baseUrl}/home-valuation` },
            ]),
            generateWebPageSchema({
              name: 'Maravilla Home Valuation | What Is My Maravilla Home Worth?',
              description:
                'Get a free Maravilla home valuation with local pricing context. Dr. Jan Duffy provides accurate value estimates based on recent sales and market trends.',
              url: `${baseUrl}/home-valuation`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Maravilla Home Valuation', url: `${baseUrl}/home-valuation` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}

