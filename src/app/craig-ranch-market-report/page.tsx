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

export const revalidate = 86400; // daily

export const metadata = genMetadata({
  title: 'Craig Ranch Market Report | Craig Ranch Real Estate Trends & Stats',
  description:
    'Comprehensive Craig Ranch market report: Average home value $428K, median sale $415K, 46 days on market. Track pricing trends, sales volume, inventory levels, and negotiation insights for buyers and sellers. Call (702) 820-5408.',
  keywords:
    'Craig Ranch market report, Craig Ranch real estate trends, Craig Ranch home prices, Craig Ranch days on market, Dr. Jan Duffy REALTOR',
  path: '/craig-ranch-market-report',
});

export default function CraigRanchMarketReportPage() {
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
      question: 'How often should I check the Craig Ranch market report?',
      answer:
        'If you are actively buying or selling in Craig Ranch, weekly-to-monthly updates are useful. If you are planning a move later, checking monthly is usually enough to understand trend direction.',
    },
    {
      question: 'What matters most in the Craig Ranch market: price or terms?',
      answer:
        'Both matter. In Craig Ranch, terms (financing strength, appraisal risk, repair credits, timelines) can determine whether a deal closes smoothly. The market report helps you pick the best combination for your goal.',
    },
    {
      question: 'How do I know if Craig Ranch is a buyer’s or seller’s market?',
      answer:
        'We look at inventory levels, days on market, price reductions, and the ratio of sold-to-active listings. Those signals together indicate whether Craig Ranch buyers have leverage or whether sellers are driving outcomes.',
    },
    {
      question: 'Do you provide Craig Ranch comps?',
      answer:
        'Yes. A market report is helpful, but comps are what set the value range for a specific Craig Ranch home. We can pull a targeted set of comparable sales and active competition for your address.',
    },
    {
      question: 'Does seasonality affect Craig Ranch?',
      answer:
        'Seasonality can influence demand and showing traffic. Craig Ranch trends can also shift quickly with interest rates and inventory. That’s why we watch the most recent data instead of relying on last year’s pattern alone.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Market Report
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            This Craig Ranch market report is designed for real decisions: buyers
            deciding when to act, sellers deciding how to price, and homeowners
            tracking equity. Instead of vague headlines, we focus on how Craig
            Ranch trends translate into strategy.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Talk strategy</div>
              <a className='mt-2 inline-block text-2xl font-bold text-[#0A2540] hover:underline' href={nap.phoneHref}>
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Get Craig Ranch buyer/seller guidance based on current conditions.
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
            Craig Ranch real estate context (market lens)
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
            How to read the Craig Ranch market (the signals that matter)
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Inventory and choice
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            When Craig Ranch inventory grows, buyers have more options and sellers
            often need sharper pricing and better presentation. When inventory is
            low, buyers compete and well-positioned homes can attract stronger
            terms. The market report is most useful when you compare inventory to
            buyer activity and price reductions.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Days on market and price reductions
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Days on market in Craig Ranch tells you how quickly buyers are making
            decisions. Rising days on market often means buyers are more selective
            or price sensitive. Price reductions can indicate sellers started too
            high or the market shifted after listing.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Negotiation leverage
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Craig Ranch negotiation leverage is usually revealed by how many offers
            listings receive, whether appraisals are a concern, and how often
            sellers grant credits. We translate those signals into practical offer
            or listing strategy.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch strategy notes for buyers
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            What to do when good listings appear
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Craig Ranch buyers who are prepared—financing, showing schedule, and
            offer plan—tend to win. When a well-priced Craig Ranch home hits the
            market, you may have a short window to inspect, compare, and write.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            When to negotiate harder
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            If Craig Ranch inventory is up and listings are sitting, buyers can ask
            for credits, repairs, and more favorable timelines. The key is matching
            your leverage to the specific listing’s position (fresh vs. stale).
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Use comps to stay grounded
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            The Craig Ranch market report provides trend context, but a winning
            offer still needs comps. We focus on nearby, recent closings and the
            best current alternatives so you don’t overpay.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch strategy notes for sellers
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Price to create demand
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            In Craig Ranch, the most effective listing strategy usually involves a
            price that motivates qualified buyers to take action early. Demand
            drives negotiation. We align list price with current competition and
            buyer behavior.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Presentation still matters—even in strong markets
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Even when Craig Ranch is strong, buyers compare homes online first.
            Strong photos, lighting, clean staging, and clear feature callouts help
            you win attention and reduce low offers.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Negotiate from a position of clarity
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            The market report helps sellers understand what is realistic today.
            That clarity makes negotiation easier because you can prioritize
            what matters: net proceeds, timeline, and certainty.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch market FAQs
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
            Want a Craig Ranch plan that fits your timeline?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} for Craig Ranch strategy or start with a
            valuation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href={nap.phoneHref}>Call Now</a>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/home-valuation-craig-ranch'>Craig Ranch Valuation</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='craig-ranch-market-report-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Craig Ranch Market Report',
              description:
                'Craig Ranch market report with practical insights for buyers and sellers.',
              url: `${baseUrl}/craig-ranch-market-report`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                {
                  name: 'Craig Ranch Market Report',
                  url: `${baseUrl}/craig-ranch-market-report`,
                },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              {
                name: 'Craig Ranch Market Report',
                url: `${baseUrl}/craig-ranch-market-report`,
              },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

