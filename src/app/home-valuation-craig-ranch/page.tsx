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
import { CRAIG_RANCH_LONGFORM_PARAGRAPHS } from '@/lib/craig-ranch-longform';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

export const revalidate = 604800; // weekly

export const metadata = genMetadata({
  title: 'Craig Ranch Home Valuation | What Is My Craig Ranch Home Worth?',
  description:
    'Get a free Craig Ranch home valuation with local pricing context. Dr. Jan Duffy, REALTOR®, provides accurate value estimates based on recent sales, active listings, and market trends. Average home value: $428K. Call (702) 820-5408 for your free estimate.',
  keywords:
    'Craig Ranch home valuation, Craig Ranch home value, what is my home worth Craig Ranch, Craig Ranch CMA, Dr. Jan Duffy REALTOR',
  path: '/home-valuation-craig-ranch',
});

export default function CraigRanchHomeValuationPage() {
  const nap = {
    name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    phoneDisplay: '(702) 820-5408',
    phoneHref: 'tel:7028205408',
    addressLine: '851 W Lone Mountain Rd, North Las Vegas, NV 89032',
    hoursLine: 'Mon–Fri 9:00 AM–6:00 PM • Sat 10:00 AM–4:00 PM • Sun by appointment',
    mapsHref:
      'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032',
    reviewsHref:
      'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032',
  } as const;

  const faqs = [
    {
      question: 'How is a Craig Ranch home valuation calculated?',
      answer:
        'A Craig Ranch valuation is based on comparable closed sales, current active listings, condition and upgrades, layout desirability, lot features, and buyer demand. We also consider what buyers are choosing instead if they don’t buy your Craig Ranch home.',
    },
    {
      question: 'Is an online estimate accurate for Craig Ranch?',
      answer:
        'Online estimates can be a rough starting point, but Craig Ranch values often hinge on specific features (layout, condition, finishes, lot position). A local valuation adds context that automated estimates often miss.',
    },
    {
      question: 'Do you provide a CMA for Craig Ranch?',
      answer:
        'Yes. A CMA (comparative market analysis) for Craig Ranch includes recent comps, active competition, and a recommended pricing strategy aligned with your timeline and goals.',
    },
    {
      question: 'What information do you need for a Craig Ranch valuation?',
      answer:
        'At minimum: address, bed/bath count, approximate square footage, key upgrades, and your timeline. Photos can help, but we can start with basics and refine as needed for your Craig Ranch home.',
    },
    {
      question: 'How often do Craig Ranch valuations change?',
      answer:
        'Craig Ranch values can shift with interest rates, inventory, seasonality, and buyer sentiment. That’s why we look at the most recent comparable sales and the current competition, not just older data.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Home Valuation
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Wondering <strong>what your Craig Ranch home is worth</strong>? A
            valuation should be more than a generic estimate—it should reflect how
            buyers are shopping Craig Ranch today. Dr. Jan Duffy, REALTOR®, provides
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
                Call for a fast Craig Ranch pricing conversation and next steps.
              </p>
              <a
                className='mt-3 inline-block text-2xl font-bold text-[#0A2540] hover:underline'
                href={nap.phoneHref}
              >
                {nap.phoneDisplay}
              </a>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>What you’ll get</div>
              <ul className='mt-2 space-y-2 text-sm text-gray-700'>
                <li>• Craig Ranch value range with local context</li>
                <li>• Key factors pushing price up/down</li>
                <li>• Suggested pricing strategy by timeline</li>
              </ul>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Actions</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                  <a href={nap.phoneHref}>Call for a Valuation</a>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/sell-craig-ranch'>Selling in Craig Ranch</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/craig-ranch-market-report'>Craig Ranch Market Report</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (valuation lens)
          </h2>
          <div className='space-y-4'>
            {CRAIG_RANCH_LONGFORM_PARAGRAPHS.map((p, idx) => (
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
            What affects Craig Ranch home values?
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Comparable sales (the foundation)
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            The most important driver for a Craig Ranch valuation is recent closed
            sales of similar homes. We look at closings that are close in size,
            layout, condition, and location—then adjust based on upgrades and how
            buyers react to each feature.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Current competition (active listings)
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Active Craig Ranch listings reveal what buyers can choose right now.
            If competition is priced aggressively, your valuation strategy needs
            to account for it. If competition is stale, that can create leverage.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Condition, upgrades, and buyer psychology
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            In Craig Ranch, buyers often pay a premium for homes that feel move-in
            ready. Flooring condition, kitchen updates, fresh paint, and strong
            lighting can influence perceived value. We translate “buyer feel” into
            pricing strategy so you can choose the best next step.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Pricing strategy for Craig Ranch sellers
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            If you want top price
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            A top-price strategy in Craig Ranch typically requires excellent
            presentation and a pricing position that makes your home the best value
            in its bracket. We pair the valuation with a prep plan so buyers see
            clear reasons to choose your listing.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            If you want a fast, clean close
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            For a faster Craig Ranch sale, pricing is usually more aggressive and
            the listing must be showing-ready immediately. The valuation focuses on
            a range that attracts qualified buyers quickly and reduces negotiation.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            If you’re not sure yet
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Many Craig Ranch homeowners start with a “should we sell?” question.
            In that case, a valuation should include your likely net proceeds,
            realistic timelines, and the pros/cons of waiting. We can map out
            multiple scenarios so you can decide with clarity.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Map, hours, and business details (NAP)
          </h2>
          <div className='grid lg:grid-cols-2 gap-8 items-start'>
            <div className='space-y-3'>
              <p className='text-gray-700 leading-relaxed'>
                For local SEO and buyer trust, this Craig Ranch valuation page
                displays consistent business information in both visible text and
                structured data.
              </p>
              <div className='rounded-lg border bg-white p-6'>
                <div className='text-lg font-semibold text-[#0A2540]'>{nap.name}</div>
                <div className='text-gray-700'>{nap.addressLine}</div>
                <a className='mt-2 inline-block font-semibold text-[#3A8DDE] hover:underline' href={nap.phoneHref}>
                  {nap.phoneDisplay}
                </a>
                <div className='mt-2 text-sm text-gray-600'>{nap.hoursLine}</div>
                <div className='mt-4 flex flex-col sm:flex-row gap-3'>
                  <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                    <a href={nap.phoneHref}>Call</a>
                  </Button>
                  <Button asChild variant='outline'>
                    <Link href={nap.mapsHref} target='_blank' rel='noopener noreferrer' prefetch={false}>
                      Directions
                    </Link>
                  </Button>
                  <Button asChild variant='outline'>
                    <Link href={nap.reviewsHref} target='_blank' rel='noopener noreferrer' prefetch={false}>
                      Reviews
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className='relative'>
              <Suspense fallback={<MapSkeleton />}>
                <GoogleMap
                  address={nap.addressLine}
                  latitude={36.2465}
                  longitude={-115.1475}
                  zoom={14}
                  height='460px'
                  title='Craig Ranch Vegas | Homes By Dr. Jan Duffy Office Location'
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch valuation FAQs
          </h2>
          <div className='space-y-6'>
            {faqs.map((faq) => (
              <div key={faq.question} className='rounded-lg border bg-white p-6'>
                <h3 className='text-lg font-semibold text-[#0A2540] mb-2'>
                  {faq.question}
                </h3>
                <p className='text-gray-700 leading-relaxed'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready for a Craig Ranch home value conversation?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} for a valuation range, pricing strategy, and
            next steps tailored to Craig Ranch.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href={nap.phoneHref}>Call Now</a>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/sell-craig-ranch'>Selling in Craig Ranch</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='home-valuation-craig-ranch-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Craig Ranch Home Valuation | Dr. Jan Duffy',
              description:
                'Craig Ranch home valuation with local pricing context and seller strategy guidance.',
              url: `${baseUrl}/home-valuation-craig-ranch`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                {
                  name: 'Craig Ranch Home Valuation',
                  url: `${baseUrl}/home-valuation-craig-ranch`,
                },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              {
                name: 'Craig Ranch Home Valuation',
                url: `${baseUrl}/home-valuation-craig-ranch`,
              },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

