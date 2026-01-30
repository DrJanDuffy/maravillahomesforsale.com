import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Home, MapPin, Phone } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { BUSINESS_INFO } from '@/lib/config/business-info';
import OnThisPage from '@/components/OnThisPage';
import PageFAQSection from '@/components/PageFAQSection';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: '55+ Communities in North Las Vegas & Maravilla | Dr. Jan Duffy',
  description:
    'Explore 55+ and active-adult communities in North Las Vegas and Maravilla. Find age-qualified homes, amenities, and lifestyle options. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
  keywords:
    '55+ communities North Las Vegas, active adult Maravilla, age-qualified homes Las Vegas, 55 plus communities Nevada',
  path: '/55-plus-communities',
});

export default function FiftyFivePlusCommunitiesPage() {
  const breadcrumb = [
    { name: 'Home', url: baseUrl },
    { name: '55+ Communities', url: `${baseUrl}/55-plus-communities` },
  ];

  return (
    <PageLayout>
      <Script
        id='55-plus-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema({
              name: '55+ Communities in North Las Vegas & Maravilla',
              description:
                'Explore 55+ and active-adult communities in North Las Vegas and Maravilla. Age-qualified homes and lifestyle options.',
              url: `${baseUrl}/55-plus-communities`,
              breadcrumb,
            })
          ),
        }}
      />
      <Script
        id='55-plus-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)),
        }}
      />

      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            55+ Communities in North Las Vegas & Maravilla
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Find age-qualified and active-adult communities in North Las Vegas and the Maravilla area. Jump to <a href='#why-55-plus' className='text-white hover:text-gray-200 underline font-medium'>why 55+</a>, <a href='#areas' className='text-white hover:text-gray-200 underline font-medium'>areas</a>, or <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'why-55-plus', label: 'Why 55+ communities' },
            { id: 'areas', label: 'North Las Vegas & Maravilla areas' },
            { id: 'cta', label: 'Get started' },
            { id: 'faqs', label: 'FAQs' },
          ]}
        />
      </div>

      <section id='why-55-plus' className='py-16 bg-white' aria-labelledby='why-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='why-heading' className='text-3xl font-bold text-[#0A2540] mb-6'>
            Why 55+ and Active-Adult Communities?
          </h2>
          <p className='text-gray-700 leading-relaxed mb-6 max-w-3xl'>
            Age-qualified communities in North Las Vegas and the Maravilla area offer low-maintenance living, clubhouses, pools, fitness, and social activities designed for active adults. Many buyers choose 55+ or active-adult options for lifestyle, amenities, and resale value.
          </p>
          <ul className='grid sm:grid-cols-2 gap-4 max-w-3xl'>
            {['Low-maintenance living', 'Clubhouse & social events', 'Pools & fitness', 'Age-qualified or active-adult options', 'Strong resale demand'].map((item, i) => (
              <li key={i} className='flex items-center gap-2 text-gray-700'>
                <span className='text-[#16B286] font-bold'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id='areas' className='py-16 bg-[#F7F9FC]' aria-labelledby='areas-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='areas-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            North Las Vegas & Maravilla Areas
          </h2>
          <p className='text-gray-600 mb-6 max-w-3xl'>
            Maravilla and nearby North Las Vegas neighborhoods offer a mix of age-qualified and all-ages communities. Dr. Jan Duffy can help you compare 55+ and active-adult options, HOA rules, and amenities.
          </p>
          <div className='grid md:grid-cols-2 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <MapPin className='h-8 w-8 text-[#3A8DDE] mb-2' />
                <CardTitle>Maravilla & North Las Vegas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Explore Maravilla subdivisions and North Las Vegas areas with 55+ and active-adult options. Compare Aliante, Eldorado, and Maravilla neighborhoods.
                </p>
                <Button asChild variant='outline' className='mt-4'>
                  <Link href='/neighborhoods'>View Neighborhoods</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <Home className='h-8 w-8 text-[#16B286] mb-2' />
                <CardTitle>Homes for Sale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Browse current listings and filter by community, price, and features. Schedule a tour with Dr. Jan Duffy for 55+ and active-adult properties.
                </p>
                <Button asChild variant='outline' className='mt-4'>
                  <Link href='/homes'>Browse Homes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id='cta' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
            Ready to Find Your 55+ or Active-Adult Home?
          </h2>
          <p className='text-gray-600 mb-6'>
            Dr. Jan Duffy specializes in North Las Vegas and Maravilla. Get personalized help with 55+ communities, financing, and tours.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/homes'>View Homes for Sale</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
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
