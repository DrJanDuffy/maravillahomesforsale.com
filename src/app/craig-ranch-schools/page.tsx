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
  title: 'Craig Ranch Schools | Schools Near Craig Ranch (North Las Vegas)',
  description:
    'Complete guide to schools near Craig Ranch: top-rated elementary, middle, and high schools serving the community. Learn about school districts, ratings, and how schools impact home values in Craig Ranch, North Las Vegas. Call (702) 820-5408.',
  keywords:
    'Craig Ranch schools, schools near Craig Ranch, Craig Ranch North Las Vegas schools, Craig Ranch homes school district, Dr. Jan Duffy REALTOR',
  path: '/craig-ranch-schools',
});

export default function CraigRanchSchoolsPage() {
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
      question: 'Do schools affect Craig Ranch home values?',
      answer:
        'Schools can influence buyer demand and therefore value. In Craig Ranch, many buyers consider commute, parks, and home features too. The best approach is to evaluate the full lifestyle package while confirming school options meet your needs.',
    },
    {
      question: 'Where can I verify school zoning for Craig Ranch?',
      answer:
        'School boundaries can change. Always confirm current zoning with the appropriate district resources and the school itself. We can help you identify the most likely schools near Craig Ranch, but verification should come from official sources.',
    },
    {
      question: 'What should families prioritize when buying in Craig Ranch?',
      answer:
        'Families often prioritize safe commute routes, after-school options, nearby parks, and home layout functionality. Craig Ranch has strong lifestyle benefits (parks and access), so we match your family’s needs to the right home and timeline.',
    },
    {
      question: 'Are there private school options near Craig Ranch?',
      answer:
        'Yes, there are private school options in the broader North Las Vegas and Las Vegas area. The best fit depends on grade level, commute, and program focus. We can help you plan location strategy so the drive remains practical.',
    },
    {
      question: 'Can you help me buy a Craig Ranch home with a specific school goal?',
      answer:
        'Yes. We can narrow your Craig Ranch search to homes that align with your commute and school priorities, and we’ll structure your search alerts so you can move quickly when the right property appears.',
    },
  ] as const;

  return (
    <PageLayout>
      <div className='bg-linear-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Schools Guide
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            For many families, schools are a key part of the decision to buy in
            <strong> Craig Ranch</strong>. This page is a hyperlocal overview of how
            to evaluate school options near Craig Ranch, what questions to ask, and
            how school preferences can influence your home search strategy.
          </p>
        </div>
      </div>

      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Ask a local REALTOR®</div>
              <a className='mt-2 inline-block text-2xl font-bold text-[#0A2540] hover:underline' href={nap.phoneHref}>
                {nap.phoneDisplay}
              </a>
              <p className='mt-2 text-sm text-gray-600'>
                Get Craig Ranch home guidance with family priorities in mind.
              </p>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Quick links</div>
              <div className='mt-2 flex flex-col gap-2'>
                <Button asChild variant='outline'>
                  <Link href='/homes'>Craig Ranch Homes for Sale</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/neighborhood'>Craig Ranch Neighborhood Guide</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/contact'>Contact Dr. Jan Duffy</Link>
                </Button>
              </div>
            </div>
            <div className='rounded-lg border bg-white p-6 shadow-sm'>
              <div className='text-sm text-gray-500'>Family search note</div>
              <p className='mt-2 text-sm text-gray-700'>
                Always verify current school zoning and enrollment options directly
                with official sources. This guide helps you ask better questions
                while shopping Craig Ranch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch real estate context (family lens)
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
            How families evaluate schools near Craig Ranch
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Start with your real priorities
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            “Best school” is different for every family. When buying in Craig Ranch,
            it helps to define what matters most: commute time, special programs,
            extracurriculars, class size, after-school options, or campus culture.
            With those priorities clear, your home search becomes easier and more
            realistic.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Use multiple data points
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Ratings can be useful, but they aren’t the whole story. For Craig Ranch
            families, visit campuses, talk to administrators, and check current
            program offerings. The goal is a fit that works for your child and your
            schedule.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Balance schools with lifestyle
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Craig Ranch is known for parks, trails, and access to community
            amenities. Many families find that lifestyle factors—parks, room
            layouts, and commute—matter as much as school preference. We help you
            evaluate the total Craig Ranch lifestyle fit.
          </p>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            How schools influence a Craig Ranch home search
          </h2>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Search boundaries and tradeoffs
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            If school preference is a “must,” it narrows inventory. In Craig Ranch,
            that can mean waiting longer, adjusting budget, or being flexible on
            upgrades. We’ll map out the tradeoffs so you can decide which ones are
            worth it.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Timing and competition
          </h3>
          <p className='text-gray-700 leading-relaxed mb-4'>
            In some seasons, family-focused buyers can increase competition. If you
            are buying a Craig Ranch home around school-year timing, we’ll plan
            ahead: showing availability, offer readiness, and clear priorities.
          </p>
          <h3 className='text-xl font-semibold text-[#0A2540] mb-3'>
            Resale consideration
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Even if you don’t have kids in school, future buyers might. Homes in
            Craig Ranch that align with common family priorities can see stronger
            demand. We help you think ahead so your purchase remains flexible.
          </p>
        </div>
      </section>

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Map and Craig Ranch school commute planning
          </h2>
          <div className='grid lg:grid-cols-2 gap-8 items-start'>
            <div className='space-y-3'>
              <p className='text-gray-700 leading-relaxed'>
                Commute patterns matter. When shopping Craig Ranch, we help you
                consider drive times to schools, work, and daily errands. Use the
                map below as a starting point for planning.
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
                  address='Craig Ranch, North Las Vegas, NV 89031'
                  latitude={36.2831}
                  longitude={-115.1331}
                  zoom={13}
                  height='460px'
                  title='Craig Ranch Location (for school commute planning)'
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
            Craig Ranch school FAQs
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
            Want a Craig Ranch home search built for your family?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Call {nap.phoneDisplay} to align your Craig Ranch search with school and
            lifestyle priorities.
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
        id='craig-ranch-schools-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Craig Ranch Schools | Schools Near Craig Ranch',
              description:
                'A hyperlocal guide to schools near Craig Ranch for families buying and selling in Craig Ranch.',
              url: `${baseUrl}/craig-ranch-schools`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Craig Ranch Schools', url: `${baseUrl}/craig-ranch-schools` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Craig Ranch Schools', url: `${baseUrl}/craig-ranch-schools` },
            ]),
            generateFAQPageSchema(faqs),
          ]),
        }}
      />
    </PageLayout>
  );
}

