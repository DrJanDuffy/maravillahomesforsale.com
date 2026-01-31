import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateArticleSchema,
} from '@/lib/metadata';
import { BUSINESS_INFO } from '@/lib/config/business-info';
import { GUIDE_SLUGS, getGuideBySlug } from '@/data/guides';
import OnThisPage from '@/components/OnThisPage';
import PageFAQSection from '@/components/PageFAQSection';
import GuideShareActions from '@/components/GuideShareActions';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return genMetadata({
    title: `${guide.title} | Guides | Dr. Jan Duffy`,
    description: guide.metaDescription,
    keywords: guide.keywords,
    path: `/guides/${slug}`,
    type: 'article',
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const breadcrumb = [
    { name: 'Home', url: baseUrl },
    { name: 'Guides', url: `${baseUrl}/guides` },
    { name: guide.title, url: `${baseUrl}/guides/${slug}` },
  ];

  return (
    <PageLayout>
      <Script
        id='guide-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema({
              name: guide.title,
              description: guide.metaDescription,
              url: `${baseUrl}/guides/${slug}`,
              breadcrumb,
            })
          ),
        }}
      />
      <Script
        id='guide-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)),
        }}
      />
      <Script
        id='guide-article-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              headline: guide.title,
              description: guide.metaDescription,
              url: `${baseUrl}/guides/${slug}`,
              datePublished: guide.datePublished,
              dateModified: guide.datePublished,
              author: { name: 'Dr. Jan Duffy', url: baseUrl },
              publisher: {
                name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
                logo: '/globe.svg',
              },
            })
          ),
        }}
      />

      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            {guide.title}
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            {guide.description} Jump to <a href={`#${guide.sections[0]?.id}`} className='text-white hover:text-gray-200 underline font-medium'>sections</a> or <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>. Browse <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>homes for sale</Link>, <Link href='/contact' className='text-white hover:text-gray-200 underline font-medium'>contact Dr. Jan Duffy</Link>, or get a <Link href='/home-valuation' className='text-white hover:text-gray-200 underline font-medium'>home valuation</Link>.
          </p>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            <span className='text-gray-200 text-sm font-medium'>Share or download:</span>
            <GuideShareActions title={guide.title} url={`${baseUrl}/guides/${slug}`} />
            {guide.externalGuideUrl && guide.externalGuideLabel && (
              <Button asChild size='sm' variant='secondary' className='bg-white/20 hover:bg-white/30 text-white border-white/40'>
                <a href={guide.externalGuideUrl} target='_blank' rel='noopener noreferrer'>
                  {guide.externalGuideLabel}
                </a>
              </Button>
            )}
          </div>
          <p className='mt-3 text-sm text-gray-300'>
            Copy the link to share with clients, email the guide, or print (use your browser&apos;s &quot;Save as PDF&quot; option for a PDF).
            {guide.externalGuideUrl && ' Or use the button above to get the official eGuide (PDF) from our partner.'}
          </p>
        </div>
      </div>

      <section className='py-8 bg-white border-b' aria-labelledby='guide-intro'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p id='guide-intro' className='text-lg text-gray-700 leading-relaxed'>
            {guide.intro}
          </p>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            ...guide.sections.map((s) => ({ id: s.id, label: s.title })),
            { id: 'related-guides', label: 'More guides' },
            { id: 'faqs', label: 'FAQs' },
          ]}
        />
      </div>

      <section className='py-16 bg-white' aria-labelledby='guide-content'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='guide-content' className='sr-only'>
            North Las Vegas Family Homes: Guide content
          </h2>
          {guide.sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className='mb-12 scroll-mt-24'
              aria-labelledby={`${section.id}-heading`}
            >
              <h2
                id={`${section.id}-heading`}
                className='text-2xl font-bold text-[#0A2540] mb-4'
              >
                {section.title}
              </h2>
              {typeof section.content === 'string' ? (
                <p className='text-gray-700 leading-relaxed'>{section.content}</p>
              ) : (
                <ul className='list-disc list-inside space-y-2 text-gray-700'>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id='related-guides' className='py-12 bg-[#F7F9FC]' aria-labelledby='related-guides-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='related-guides-heading' className='text-2xl font-bold text-[#0A2540] mb-6'>
            North Las Vegas Family Homes: More Guides
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl'>
            Explore other client guides for North Las Vegas and Maravilla real estate.
          </p>
          <ul className='flex flex-wrap gap-4'>
            {GUIDE_SLUGS.filter((s) => s !== slug).map((otherSlug) => {
              const other = getGuideBySlug(otherSlug);
              if (!other) return null;
              return (
                <li key={otherSlug}>
                  <Link
                    href={`/guides/${otherSlug}`}
                    className='inline-block px-4 py-2 rounded-lg bg-white border border-gray-200 text-[#0A2540] hover:border-[#3A8DDE] hover:text-[#3A8DDE] font-medium'
                  >
                    {other.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className='mt-4 text-gray-600'>
            <Link href='/guides' className='text-[#3A8DDE] font-medium hover:underline'>
              View all guides for clients
            </Link>
          </p>
        </div>
      </section>

      <section id='cta' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-gray-600 mb-6'>
            Dr. Jan Duffy helps buyers and sellers in North Las Vegas and Maravilla. Schedule a consultation or browse current listings.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/homes'>View Homes for Sale</Link>
            </Button>
            <Button asChild variant='outline'>
              <a href={BUSINESS_INFO.phone.href}>
                <Phone className='inline h-4 w-4 mr-2' />
                {BUSINESS_INFO.phone.display}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <PageFAQSection />
    </PageLayout>
  );
}
