import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Home, Phone } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { BUSINESS_INFO } from '@/lib/config/business-info';
import {
  NEIGHBORHOOD_SLUGS,
  getNeighborhoodBySlug,
  type NeighborhoodSlug,
} from '@/data/neighborhoods';
import PageFAQSection from '@/components/PageFAQSection';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return {};
  return genMetadata({
    title: `Homes for Sale in ${neighborhood.name} | North Las Vegas | Dr. Jan Duffy`,
    description: `${neighborhood.shortDescription} Browse ${neighborhood.name} listings and connect with Dr. Jan Duffy, REALTOR®. Call (702) 500-1953.`,
    keywords: `${neighborhood.name} homes for sale, ${neighborhood.name} North Las Vegas real estate, homes in ${neighborhood.name}, Maravilla area`,
    path: `/neighborhoods/${slug}`,
  });
}

export default async function NeighborhoodSubareaPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) notFound();

  const breadcrumb = [
    { name: 'Home', url: baseUrl },
    { name: 'Neighborhoods', url: `${baseUrl}/neighborhoods` },
    { name: neighborhood.name, url: `${baseUrl}/neighborhoods/${slug}` },
  ];

  return (
    <PageLayout>
      <Script
        id='neighborhood-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema({
              name: `Homes for Sale in ${neighborhood.name} | North Las Vegas`,
              description: neighborhood.shortDescription,
              url: `${baseUrl}/neighborhoods/${slug}`,
              breadcrumb,
            })
          ),
        }}
      />
      <Script
        id='neighborhood-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)),
        }}
      />

      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            North Las Vegas Family Homes: Homes for Sale in {neighborhood.name}
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            {neighborhood.shortDescription}{' '}
            <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>
              Browse current listings
            </Link>
            ,{' '}
            <Link href='/contact' className='text-white hover:text-gray-200 underline font-medium'>
              contact Dr. Jan Duffy
            </Link>
            , or jump to <a href='#highlights' className='text-white hover:text-gray-200 underline font-medium'>highlights</a> and <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>.
          </p>
        </div>
      </div>

      <section id='about' className='py-16 bg-white' aria-labelledby='about-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='about-heading' className='text-3xl font-bold text-[#0A2540] mb-6'>
            North Las Vegas Family Homes: About {neighborhood.name}
          </h2>
          <p className='text-gray-700 leading-relaxed mb-6 max-w-3xl'>
            {neighborhood.description}
          </p>
          {neighborhood.accessNote && (
            <p className='text-gray-600 text-sm'>{neighborhood.accessNote}</p>
          )}
        </div>
      </section>

      <section id='highlights' className='py-16 bg-[#F7F9FC]' aria-labelledby='highlights-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='highlights-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            Why {neighborhood.name}?
          </h2>
          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl'>
            {neighborhood.highlights.map((item, i) => (
              <li key={i} className='flex items-start gap-3 text-gray-700'>
                <span className='text-[#16B286] font-bold'>✓</span>
                {item}
              </li>
            ))}
          </ul>
          {neighborhood.schoolsNote && (
            <p className='mt-6 text-gray-600 max-w-2xl'>{neighborhood.schoolsNote}</p>
          )}
        </div>
      </section>

      <section id='cta' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
            North Las Vegas Family Homes: Ready to Find Your Home in {neighborhood.name}?
          </h2>
          <p className='text-gray-600 mb-6'>
            Browse listings, get a home valuation, or schedule a consultation with Dr. Jan Duffy.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/homes'>View Homes for Sale</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/home-valuation'>Get a Home Valuation</Link>
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
