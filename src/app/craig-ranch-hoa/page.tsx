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

export const revalidate = 2592000; // monthly

export const metadata = genMetadata({
  title: 'Craig Ranch HOA Guide | Fees, Rules, and What Buyers Ask',
  description:
    'Complete Craig Ranch HOA guide: fees, rules, restrictions, and what buyers should know. Learn about HOA responsibilities, amenities covered, and how HOA details affect home values and transactions. Call (702) 820-5408.',
  keywords:
    'Craig Ranch HOA, Craig Ranch HOA fees, Craig Ranch rules, Craig Ranch resale package, Craig Ranch real estate agent, Dr. Jan Duffy REALTOR',
  path: '/craig-ranch-hoa',
});

export default function CraigRanchHoaPage() {
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
      question: 'Do all Craig Ranch homes have an HOA?',
      answer:
        'Some Craig Ranch properties may have HOA oversight depending on subdivision and property type. Before you buy or list, we verify the HOA details associated with the specific Craig Ranch address.',
    },
    {
      question: 'What HOA documents should I review when buying in Craig Ranch?',
      answer:
        'Buyers typically review CC&Rs, rules and regulations, financials, and any resale package requirements. The key is understanding use restrictions, architectural guidelines, and any fees that affect the Craig Ranch home you’re considering.',
    },
    {
      question: 'How can HOA rules affect a Craig Ranch sale?',
      answer:
        'HOA rules can impact buyer decisions (parking, exterior changes, rental restrictions, landscaping requirements). Clear disclosures and complete documents help Craig Ranch transactions move smoothly.',
    },
    {
      question: 'Do HOA fees change in Craig Ranch?',
      answer:
        'Fees can change over time. Always confirm the current amount, payment schedule, and any special assessments related to the Craig Ranch property you’re buying or selling.',
    },
    {
      question: 'What should sellers do about HOA documentation?',
      answer:
        'Sellers should order the resale package early (if required) and be ready to answer common HOA questions. In Craig Ranch, good preparation reduces delays during escrow.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch HOA Guide
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            HOA details can change the outcome of a <strong>Craig Ranch</strong>{' '}
            transaction—especially for buyers who have specific needs (parking,
            exterior changes, rentals, and maintenance expectations). This guide
            covers what to ask, what to review, and how to keep a Craig Ranch deal
            smooth.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Craig Ranch guidance</div>
              <a className='mt-2 inline-block text-2xl font-bold text-[#0A2540] hover:underline' href={nap.phoneHref}>
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Ask questions about HOA requirements before you write an offer.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Common HOA topics</div>
              <ul className='mt-2 space-y-2 text-sm text-gray-700'>
                <li>• Fees, assessments, and transfer requirements</li>
                <li>• Exterior changes and architectural guidelines</li>
                <li>• Parking, rentals, and use restrictions</li>
              </ul>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Actions</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
                  <a href={nap.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/homes'>Craig Ranch Homes for Sale</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/contact'>Contact Dr. Jan Duffy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (HOA lens)
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
            What buyers should review for a Craig Ranch HOA
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            CC&Rs and rules
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            CC&Rs and rules explain what you can and cannot do with a Craig Ranch
            property. Buyers often care about exterior changes, landscaping, and
            any restrictions that affect how they plan to live in the home.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Fees and assessments
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Confirm the current HOA fees, payment schedule, and whether there are
            any special assessments. For Craig Ranch buyers, clarity on costs helps
            avoid surprises after closing.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Resale package timing
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            HOA resale packages can take time. If you are buying in Craig Ranch,
            factor document delivery into your timeline. If you are selling, order
            documents early to reduce escrow delays.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Seller checklist for Craig Ranch HOA readiness
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Document preparation
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Sellers should gather HOA contact info, payment confirmation, and any
            required resale package forms. Craig Ranch buyers feel more confident
            when the HOA side is organized.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Disclosures
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Clear disclosures reduce renegotiation. For Craig Ranch listings,
            transparency about HOA fees and restrictions helps attract the right
            buyers faster.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Closing timeline planning
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            If HOA document timing is slow, we plan escrow timelines accordingly.
            The goal is a Craig Ranch transaction that closes with minimal friction.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch HOA FAQs
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

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Contact details (NAP)
          </h2>
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
      </section>

      <section className='py-16 bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Have a Craig Ranch HOA question?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} and we’ll clarify what to verify for your specific
            Craig Ranch address.
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
        id='craig-ranch-hoa-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Craig Ranch HOA Guide',
              description:
                'A practical Craig Ranch HOA guide for buyers and sellers: what to ask, what to review, and how HOA details affect a transaction.',
              url: `${baseUrl}/craig-ranch-hoa`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Craig Ranch HOA', url: `${baseUrl}/craig-ranch-hoa` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Craig Ranch HOA', url: `${baseUrl}/craig-ranch-hoa` },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

