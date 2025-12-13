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
  title: 'Sell a Home in Craig Ranch | Listing Agent: Dr. Jan Duffy, REALTOR®',
  description:
    'Sell your Craig Ranch home with expert guidance. Dr. Jan Duffy, REALTOR®, helps you price competitively, prepare for market, and negotiate to maximize proceeds. Average days on market: 46 days. Free consultation. Call (702) 820-5408.',
  keywords:
    'sell my home Craig Ranch, Craig Ranch listing agent, Craig Ranch home value, Craig Ranch real estate agent, Dr. Jan Duffy REALTOR',
  path: '/sell-craig-ranch',
});

export default function SellCraigRanchPage() {
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
      question: 'How do you price a Craig Ranch home to sell?',
      answer:
        'We price a Craig Ranch home by analyzing comparable sales, current active competition, buyer demand, and your home’s condition and upgrades. The goal is to generate strong buyer interest and protect your net proceeds, not simply “pick a number.”',
    },
    {
      question: 'What should I fix before listing in Craig Ranch?',
      answer:
        'Start with items that remove buyer objections: repairs, touch-up paint, lighting, deep cleaning, and curb appeal. In Craig Ranch, clean presentation and clear feature callouts often outperform expensive renovations.',
    },
    {
      question: 'Do I need staging to sell my Craig Ranch home?',
      answer:
        'Not always, but strategic staging (or partial staging) can help Craig Ranch buyers understand room scale and flow. We’ll decide based on your floor plan, vacancy status, and comparable listings buyers are viewing.',
    },
    {
      question: 'How long does it take to sell in Craig Ranch?',
      answer:
        'Timing varies with price point and inventory. Some Craig Ranch homes move quickly when priced and presented well. We set expectations using current days-on-market and the buyer pipeline—then track performance week-by-week.',
    },
    {
      question: 'Can you help me buy my next home after selling in Craig Ranch?',
      answer:
        'Yes. Many sellers in Craig Ranch are also buyers. We can coordinate the timing, financing, and contingencies so the move is as smooth as possible.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Sell Your Home in Craig Ranch
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Selling in <strong>Craig Ranch</strong> is about more than listing a
            property—it’s about positioning your home so it’s the clear best choice
            for buyers comparing Craig Ranch inventory right now. Dr. Jan Duffy,
            REALTOR®, helps you prep, price, market, and negotiate with a plan
            built for the <strong>Craig Ranch</strong> buyer.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Talk to a Craig Ranch listing agent</div>
              <a
                className='text-2xl font-bold text-[#0A2540] hover:underline'
                href={nap.phoneHref}
              >
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Get a practical pricing and prep plan for your Craig Ranch home.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Seller focus</div>
              <ul className='mt-2 space-y-2 text-sm text-gray-700'>
                <li>• Craig Ranch pricing bands & buyer behavior</li>
                <li>• Photo + presentation plan built for online-first buyers</li>
                <li>• Offer negotiation that protects timeline and net proceeds</li>
              </ul>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Actions</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                  <a href={nap.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/home-valuation-craig-ranch'>Get a Craig Ranch Valuation</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/contact'>Send a Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (seller perspective)
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
            Craig Ranch seller strategy: what drives results
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Buyers compare “Craig Ranch vs. everything else”
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Your Craig Ranch home isn’t only competing against other Craig Ranch
            listings—it’s competing against nearby neighborhoods, new construction
            incentives, and alternative floor plans at similar price points. We
            position your home to win that comparison with clear feature language,
            strong visuals, and pricing strategy that matches current demand.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            The first 7–14 days matter most
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            In Craig Ranch, the first couple of weeks typically bring your most
            qualified buyers. That’s why “launch quality” matters: photos,
            listing copy, disclosures, showing readiness, and a price that makes
            buyers act. A weak launch can cost you time and negotiating leverage.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Offers: evaluate risk, not just price
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            The best Craig Ranch offer is the one that closes smoothly and protects
            your goals. We evaluate financing strength, appraisal risk, inspection
            expectations, repair credits, and timelines—then negotiate confidently.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Preparing your Craig Ranch home to sell (high-ROI checklist)
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Presentation improvements that usually pay off
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Most Craig Ranch sellers get the best return from “friction reducers”:
            clean lines, bright spaces, and a home that feels maintained. That often
            means repairs, deep cleaning, small paint touch-ups, and lighting.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            What to avoid
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Large, expensive renovations rarely return dollar-for-dollar right
            before listing. Instead, we target the items buyers notice immediately
            in Craig Ranch showings: flooring condition, odors, clutter, lighting,
            and curb appeal.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Marketing plan: visuals + clarity
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Craig Ranch buyers are research-heavy. We highlight features, upgrades,
            and lifestyle value with photos, a crisp description, and clear answers
            to common questions—so buyers feel confident booking a showing.
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
                Consistent business information supports trust with buyers and helps
                Google understand your local relevance for Craig Ranch searches.
                Here are the contact details for Dr. Jan Duffy, REALTOR®.
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
            Craig Ranch seller FAQs
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
            Want a pricing and prep plan for your Craig Ranch home?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Get a clear roadmap to sell in Craig Ranch—pricing, presentation, and
            timeline. Call {nap.phoneDisplay} or request a valuation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href={nap.phoneHref}>Call Now</a>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/home-valuation-craig-ranch'>Get a Craig Ranch Valuation</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='sell-craig-ranch-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Sell a Home in Craig Ranch | Dr. Jan Duffy, REALTOR®',
              description:
                'Craig Ranch listing agent guidance for pricing, preparation, marketing, and negotiation.',
              url: `${baseUrl}/sell-craig-ranch`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Sell in Craig Ranch', url: `${baseUrl}/sell-craig-ranch` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Sell in Craig Ranch', url: `${baseUrl}/sell-craig-ranch` },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

