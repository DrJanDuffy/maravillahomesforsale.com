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

export const revalidate = 2592000; // monthly

export const metadata = genMetadata({
  title: 'Craig Ranch Regional Park Guide | Living Near Craig Ranch Park',
  description:
    'Craig Ranch Regional Park: 170-acre park with sports fields, playgrounds, trails, and 40+ annual events. Learn how park proximity affects home values, what living near the park offers, and buying/selling considerations. Call (702) 820-5408.',
  keywords:
    'Craig Ranch Regional Park, Craig Ranch park homes, living near Craig Ranch Regional Park, Craig Ranch Las Vegas parks, Dr. Jan Duffy REALTOR',
  path: '/craig-ranch-regional-park',
});

export default function CraigRanchRegionalParkPage() {
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
      question: 'Does living near Craig Ranch Regional Park increase home value?',
      answer:
        'Park proximity can influence demand because it supports lifestyle: trails, open space, and community events. In Craig Ranch, value impact depends on the specific home (noise, parking patterns, and lot position) and how buyers compare alternatives.',
    },
    {
      question: 'What should buyers consider when choosing a home near the park?',
      answer:
        'Consider access routes, parking, event activity, and your preference for being close to amenities versus quieter interior streets. We can help you compare Craig Ranch options so the lifestyle fit matches your day-to-day routine.',
    },
    {
      question: 'Is Craig Ranch Regional Park walkable from Craig Ranch homes?',
      answer:
        'Walkability depends on the specific subdivision and home location. Craig Ranch includes trails and access points that can make the park easy to reach, but we’ll verify practical routes from any listing you like.',
    },
    {
      question: 'Do park events affect nearby listings?',
      answer:
        'Events can affect traffic and parking temporarily. Some buyers love the energy; others prefer separation. We position Craig Ranch listings accordingly—highlighting lifestyle benefits while setting clear expectations.',
    },
    {
      question: 'Can you help me find Craig Ranch homes closest to the park?',
      answer:
        'Yes. We can build a Craig Ranch search focused on park proximity, trails, and specific access points, then set alerts so you can act quickly when the right listing appears.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Regional Park Guide
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            For many buyers, <strong>Craig Ranch Regional Park</strong> is one of the
            biggest reasons to live in Craig Ranch. This guide explains how park
            proximity shapes lifestyle, what buyers tend to value, and how sellers
            can present park-adjacent benefits clearly.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Local guidance</div>
              <a className='mt-2 inline-block text-2xl font-bold text-[#0A2540] hover:underline' href={nap.phoneHref}>
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Ask about Craig Ranch homes near trails and park access.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Fast links</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild variant='outline'>
                  <Link href='/homes'>Craig Ranch Homes for Sale</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/neighborhood'>Craig Ranch Neighborhood Guide</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/sell-craig-ranch'>Sell in Craig Ranch</Link>
                </Button>
              </div>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Lifestyle note</div>
              <p className='mt-2 text-sm text-gray-700'>
                Park proximity is a lifestyle choice. We help you compare Craig Ranch
                homes so you get the access you want without surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (lifestyle lens)
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
            Why the park matters in Craig Ranch
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Daily routine value
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Craig Ranch buyers who use the park for walking, running, kids’ play,
            or community events often put a premium on convenience. When the park is
            part of your daily routine, living close can feel like a real upgrade.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Community identity
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Craig Ranch is strongly associated with its parks and open-space feel.
            That identity helps buyers “get” the neighborhood quickly, which can
            translate into stronger demand for well-positioned homes.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Buyer perception and resale
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Even buyers who don’t use the park daily often like knowing it’s nearby.
            That lifestyle signal supports resale flexibility and can broaden the
            buyer pool for Craig Ranch listings.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Buying near Craig Ranch Regional Park
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Location tradeoffs
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Homes closest to Craig Ranch Regional Park can offer great access, but
            you should consider event activity, traffic patterns, and parking.
            Depending on your preferences, you may want a balance: close enough to
            walk, but far enough for quiet evenings.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            What to check during showings
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            For Craig Ranch homes near the park, we recommend checking noise levels
            at different times of day, street parking availability, and the most
            practical walking route to the park entrance.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Offer strategy
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            If a park-adjacent Craig Ranch home is priced well, it can attract fast
            interest. We’ll help you prepare financing and a clean offer plan so
            you can compete effectively.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Selling near Craig Ranch Regional Park
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            How to market park proximity
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Sellers should be specific: highlight walk routes, trail access, and
            lifestyle perks that matter to Craig Ranch buyers. Strong photos and
            clear copy help buyers understand the benefit immediately.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Address buyer concerns proactively
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Some buyers worry about noise or traffic. We set expectations clearly
            and emphasize the advantages so the right Craig Ranch buyers self-select
            quickly.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Pricing approach
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Park proximity alone doesn’t set price; it’s one factor among many.
            We price Craig Ranch homes based on comparable sales, competition, and
            how buyers respond to your home’s overall presentation.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Map and contact details (NAP)
          </h2>
          <div className='grid lg:grid-cols-2 gap-8 items-start'>
            <div className='space-y-3'>
              <p className='text-gray-700 leading-relaxed'>
                This page includes consistent NAP details in visible text and schema
                to support local SEO for Craig Ranch searches.
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
                  address='Craig Ranch Regional Park, North Las Vegas, NV'
                  latitude={36.2708}
                  longitude={-115.1373}
                  zoom={14}
                  height='460px'
                  title='Craig Ranch Regional Park Location'
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch Regional Park FAQs
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
            Want Craig Ranch listings near the park?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} and tell us what “near Craig Ranch Regional Park”
            means for you.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href={nap.phoneHref}>Call Now</a>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/homes'>View Craig Ranch Homes</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='craig-ranch-regional-park-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Craig Ranch Regional Park Guide',
              description:
                'A hyperlocal guide to Craig Ranch Regional Park and how park proximity affects Craig Ranch real estate decisions.',
              url: `${baseUrl}/craig-ranch-regional-park`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                {
                  name: 'Craig Ranch Regional Park',
                  url: `${baseUrl}/craig-ranch-regional-park`,
                },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              {
                name: 'Craig Ranch Regional Park',
                url: `${baseUrl}/craig-ranch-regional-park`,
              },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

