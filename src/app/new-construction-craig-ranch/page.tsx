import PageLayout from '@/components/layout/page-layout';
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
  title: 'New Construction in Craig Ranch | Options, Strategy, and Next Steps',
  description:
    'New construction homes in Craig Ranch: Compare Century Communities floor plans (1,519-2,638 sq ft), builder contracts, and new build vs resale options. Expert guidance on protecting your investment. Call (702) 820-5408.',
  keywords:
    'new construction Craig Ranch, Craig Ranch new homes, Craig Ranch builder options, Craig Ranch vs resale, Dr. Jan Duffy REALTOR',
  path: '/new-construction-craig-ranch',
});

export default function NewConstructionCraigRanchPage() {
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
      question: 'Is new construction a good alternative to resale in Craig Ranch?',
      answer:
        'Sometimes. Buyers often compare Craig Ranch resale homes to new construction incentives. The right choice depends on timeline, finishes, lot selection, and contract terms. We help you compare total cost, not just base price.',
    },
    {
      question: 'Do I need a REALTOR® when buying a new build near Craig Ranch?',
      answer:
        'Yes—representation can help you understand contract terms, incentives, inspection timing, and negotiation points. Builder sales agents represent the builder. We represent your interests as a buyer.',
    },
    {
      question: 'How do builder incentives affect Craig Ranch resale pricing?',
      answer:
        'Incentives can increase buyer options and reduce urgency in resale segments. If builders offer credits or rate buydowns, Craig Ranch resale homes may need stronger pricing and presentation to compete.',
    },
    {
      question: 'What should I watch for in a new construction contract?',
      answer:
        'Key items include timelines, deposit rules, change-order costs, warranty details, appraisal and financing terms, and inspection rights. We help you understand these items so your purchase remains predictable.',
    },
    {
      question: 'Can you help me sell my Craig Ranch home and buy new construction?',
      answer:
        'Yes. Many Craig Ranch sellers use equity toward a new build. We can coordinate timing, contingencies, and closing logistics to reduce stress and avoid gaps.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            New Construction Near Craig Ranch
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Buyers shopping <strong>Craig Ranch</strong> often compare resale homes
            to nearby new construction. This guide explains how to evaluate that
            decision, what to watch for in builder contracts, and how to protect
            your timeline and budget.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Talk options</div>
              <a className='mt-2 inline-block text-2xl font-bold text-[#0A2540] hover:underline' href={nap.phoneHref}>
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Compare Craig Ranch resale vs new construction incentives.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Fast links</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild variant='outline'>
                  <Link href='/homes'>Craig Ranch Homes for Sale</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/sell-craig-ranch'>Sell in Craig Ranch</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/home-valuation-craig-ranch'>Craig Ranch Valuation</Link>
                </Button>
              </div>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>NAP</div>
              <div className='mt-2 text-sm text-gray-700'>
                <div className='font-semibold text-[#0A2540]'>{nap.name}</div>
                <div>{nap.addressLine}</div>
                <div className='mt-1'>{nap.hoursLine}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (new construction lens)
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
            Craig Ranch resale vs new construction: the real comparison
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Total cost, not base price
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            New construction marketing often highlights the base price, but buyers
            should evaluate total cost: lot premiums, upgrades, landscaping, window
            coverings, and timing. Craig Ranch resale homes may include upgrades
            that are expensive to replicate.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Timeline and certainty
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Resale in Craig Ranch can close quickly if the home is available and
            financing is ready. New construction timelines can be longer and more
            variable. Your best option depends on when you need to move.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Neighborhood feel
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Craig Ranch is established, with mature community patterns and known
            amenities. Some buyers prefer the stability of Craig Ranch, while
            others prefer the customization and warranty aspects of new builds.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Buying new construction: what to watch
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Contract terms and deposits
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Builder contracts can differ from resale contracts. Pay attention to
            deposit rules, deadlines, and what happens if timelines change. We help
            you understand these items so your plan stays predictable.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Incentives and lender programs
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Incentives can be meaningful (credits, rate buydowns). We compare the
            incentive value against price and upgrade costs to determine whether the
            deal is truly strong compared to Craig Ranch resale options.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Inspection planning
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Inspections still matter in new construction. We plan inspection timing
            and documentation so any issues are addressed clearly and on schedule.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            How new construction affects Craig Ranch sellers
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Competing with incentives
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            If nearby builders offer rate buydowns or closing credits, Craig Ranch
            resale listings may need sharper pricing and stronger presentation.
            We position your Craig Ranch home to stand out with clear value.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Show your “included upgrades”
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Many Craig Ranch homes already have finishes that cost extra in new
            construction. We highlight those features and the move-in-ready
            convenience.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Timing your listing
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            We monitor local inventory and builder incentives to choose the best
            listing timing. Strategy shifts based on how buyers compare Craig Ranch
            to new construction at that moment.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            New construction FAQs (Craig Ranch context)
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
            Want to compare Craig Ranch resale to new construction?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} and we’ll map out your best options.
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
        id='new-construction-craig-ranch-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'New Construction Near Craig Ranch',
              description:
                'A practical guide to comparing Craig Ranch resale homes with new construction options and incentives.',
              url: `${baseUrl}/new-construction-craig-ranch`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                {
                  name: 'New Construction (Craig Ranch)',
                  url: `${baseUrl}/new-construction-craig-ranch`,
                },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              {
                name: 'New Construction (Craig Ranch)',
                url: `${baseUrl}/new-construction-craig-ranch`,
              },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

