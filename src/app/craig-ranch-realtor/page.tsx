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

// Static generation with periodic refresh
export const revalidate = 604800; // weekly

export const metadata = genMetadata({
  title:
    'Craig Ranch REALTOR® | Dr. Jan Duffy Real Estate Agent (Las Vegas / North Las Vegas)',
  description:
    'Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada, for expert Craig Ranch real estate services. Specializing in luxury homes, market analysis, and personalized guidance. Office: 851 W Lone Mountain Rd, North Las Vegas. Call (702) 820-5408.',
  keywords:
    'Craig Ranch REALTOR, Craig Ranch real estate agent, Craig Ranch homes, Craig Ranch Las Vegas, North Las Vegas REALTOR, Dr. Jan Duffy',
  path: '/craig-ranch-realtor',
});

export default function CraigRanchRealtorPage() {
  const faqs = [
    {
      question: 'Do you specialize in Craig Ranch homes only?',
      answer:
        'Craig Ranch is a core focus for this hyperlocal site, and Dr. Jan Duffy also serves nearby Las Vegas, North Las Vegas, and Henderson. If your goal is Craig Ranch, you will get Craig Ranch-specific pricing context, neighborhood knowledge, and listing strategy.',
    },
    {
      question: 'How do I choose the right list price for a Craig Ranch home?',
      answer:
        'The right list price in Craig Ranch depends on recent comparable sales, current competition, condition/upgrades, lot features, and buyer demand. We review comps, active listings, and pricing bands to choose a price that attracts qualified buyers and protects your net proceeds.',
    },
    {
      question: 'Can you help me buy in Craig Ranch if inventory is low?',
      answer:
        'Yes. For Craig Ranch buyers we use saved searches, RealScout alerts, and fast showing coordination. We also prepare a clean offer package (financing, timelines, and contingencies) so you can compete when the right Craig Ranch home hits the market.',
    },
    {
      question: 'What should I do before listing my home in Craig Ranch?',
      answer:
        'Before listing in Craig Ranch, prioritize high-ROI items: deep cleaning, minor repairs, lighting, curb appeal, and strategic staging. We’ll also confirm HOA details (if applicable), create a photo plan, and set a marketing timeline aligned with buyer demand.',
    },
    {
      question: 'Do you provide a Craig Ranch home valuation?',
      answer:
        'Yes. You can request a Craig Ranch home valuation and get a price range based on comparable homes, market pace, and your property’s features. Call (702) 820-5408 or use the valuation page to get started.',
    },
  ] as const;

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

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch REALTOR® Services
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            If you’re buying or selling in <strong>Craig Ranch</strong>, you want a
            REALTOR® who understands what makes the community valuable, what buyers
            are comparing right now, and what details change pricing. Dr. Jan Duffy
            provides local, data-driven guidance for <strong>Craig Ranch</strong>{' '}
            homes—so you can make confident decisions and move on the right
            timeline.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Call</div>
              <a
                className='text-2xl font-bold text-[#0A2540] hover:underline'
                href={nap.phoneHref}
              >
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Quick answers on Craig Ranch pricing, availability, and next steps.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Address</div>
              <div className='text-lg font-semibold text-[#0A2540]'>{nap.name}</div>
              <div className='text-sm text-gray-700'>{nap.addressLine}</div>
              <div className='mt-2 text-sm text-gray-600'>{nap.hoursLine}</div>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Actions</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                  <a href={nap.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant='outline'>
                  <Link href={nap.mapsHref} target='_blank' rel='noopener noreferrer' prefetch={false}>
                    Get Directions
                  </Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href={nap.reviewsHref} target='_blank' rel='noopener noreferrer' prefetch={false}>
                    View Google Reviews
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (hyperlocal overview)
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
            What “hyperlocal” means for Craig Ranch real estate
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Pricing context (not just comps)
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            In Craig Ranch, two homes with the same bedroom count can sell for very
            different numbers depending on layout flow, lot position, upgrades,
            condition, and what buyers have already toured. Hyperlocal guidance
            means we evaluate your Craig Ranch home the way today’s buyers are
            evaluating it: against current active competition, recent closed sales,
            and the next best alternatives in nearby areas.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Strategy by timeline
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            A Craig Ranch buyer who needs to move quickly will prioritize different
            terms than a buyer optimizing for price. Likewise, sellers who want a
            fast, clean close need a different plan than sellers maximizing net.
            Your Craig Ranch strategy should be built around your timeline,
            financing, and risk tolerance—not a one-size-fits-all template.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Strong presentation for online-first buyers
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Most Craig Ranch buyers form an opinion before they ever schedule a
            showing. That’s why your listing needs strong photos, clear feature
            callouts, and answers to common Craig Ranch questions (park access,
            commute patterns, schools, and neighborhood amenities). A hyperlocal
            page like this also supports SEO by aligning content with Craig Ranch
            search intent.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Buying a home in Craig Ranch: a practical plan
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Step 1: define “must-haves” (and dealbreakers)
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Craig Ranch offers a mix of layouts and housing styles. We start by
            clarifying the essentials—bed/bath needs, garage requirements, lot
            preferences, and budget comfort range—then translate those into
            search filters so you don’t miss the right Craig Ranch home.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Step 2: get positioned to act fast
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            In a competitive Craig Ranch segment, speed matters. We’ll align your
            financing documentation, showing availability, and offer terms so you
            can write cleanly when the right property appears.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Step 3: negotiate beyond price
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Great Craig Ranch deals often come from negotiation details: inspection
            strategy, repair requests, seller credits, appraisal planning, and
            timelines. We focus on total value—price plus terms—so you can get the
            home you want with the least friction.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Selling in Craig Ranch: positioning, pricing, and net proceeds
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Pre-listing: focus on high-ROI improvements
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Sellers don’t need to renovate everything to win in Craig Ranch. The
            goal is to remove friction for buyers and highlight value. We typically
            start with: repair “small stuff,” freshen paint where needed, improve
            lighting, declutter, and create strong curb appeal. Then we plan photos
            so your Craig Ranch listing stands out.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Pricing: create demand, not just a number
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            The best pricing strategy for a Craig Ranch home is the one that pulls
            in qualified buyers quickly, sets expectations, and reduces time-wasting
            showings. We use comparable sales, active inventory, and buyer behavior
            to choose a list price that aligns with your goals.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Offers: protect your timeline and your bottom line
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            When offers come in, the “best” offer isn’t always the highest price.
            We look at financing strength, appraisal risk, repair expectations, and
            closing timelines so your Craig Ranch sale stays on track.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Map, hours, and contact details (NAP)
          </h2>
          <div className='grid lg:grid-cols-2 gap-8 items-start'>
            <div className='space-y-3'>
              <p className='text-gray-700 leading-relaxed'>
                Google and buyers both trust consistent business information.
                This site displays the same business name, address, and phone
                number (NAP) across pages and schema to support local SEO for
                Craig Ranch searches.
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

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch FAQ
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
          <h2 className='text-3xl font-bold mb-4'>Ready to talk Craig Ranch?</h2>
          <p className='text-xl text-gray-200 mb-8'>
            Whether you’re buying or selling in Craig Ranch, get a clear plan and
            the next best steps. Call {nap.phoneDisplay} or send a message.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href={nap.phoneHref}>Call Now</a>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/home-valuation-craig-ranch'>Get a Craig Ranch Valuation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='craig-ranch-realtor-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Craig Ranch REALTOR® | Dr. Jan Duffy',
              description:
                'Craig Ranch REALTOR® services for buying and selling Craig Ranch homes in North Las Vegas / Las Vegas.',
              url: `${baseUrl}/craig-ranch-realtor`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Craig Ranch REALTOR®', url: `${baseUrl}/craig-ranch-realtor` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Craig Ranch REALTOR®', url: `${baseUrl}/craig-ranch-realtor` },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

