import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { School, MapPin, BookOpen, Phone } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { BUSINESS_INFO } from '@/lib/config/business-info';
import OnThisPage from '@/components/OnThisPage';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'North Las Vegas Family Homes | Schools in Maravilla & North Las Vegas | Dr. Jan Duffy',
  description:
    'Schools serving Maravilla, North Las Vegas. Clark County School District, school zones, and education options for Maravilla families. Call (702) 500-1953 for zone info.',
  keywords:
    'Maravilla schools, North Las Vegas schools, Clark County School District, Maravilla school zones, schools near Maravilla',
  path: '/schools',
});

export default function SchoolsPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            North Las Vegas Family Homes: Schools
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Maravilla is served by the <strong>Clark County School District</strong>. Families choose Maravilla for its community feel and access to area schools. Jump to <a href='#school-info' className='text-white hover:text-gray-200 underline font-medium'>school info</a>, <a href='#zones' className='text-white hover:text-gray-200 underline font-medium'>school zones</a>, or <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>. Explore <Link href='/map-and-nearby-places' className='text-white hover:text-gray-200 underline font-medium'>nearby places & map</Link>, the <Link href='/neighborhood' className='text-white hover:text-gray-200 underline font-medium'>neighborhood</Link>, or <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>homes for sale</Link>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'school-info', label: 'Schools serving Maravilla' },
            { id: 'zones', label: 'School zones & boundaries' },
            { id: 'cta', label: 'Get school info for a property' },
            { id: 'faqs', label: 'Schools FAQs' },
          ]}
        />
      </div>

      <section id='school-info' className='py-16 bg-white' aria-labelledby='school-info-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='school-info-heading' className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            North Las Vegas Family Homes: Schools Serving Maravilla
          </h2>
          <p className='text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-8'>
            Maravilla is in <strong>North Las Vegas</strong> and falls within the <strong>Clark County School District (CCSD)</strong>. Specific schools—elementary, middle, and high—depend on your exact address and current CCSD boundary maps. Many families are drawn to Maravilla for its family-friendly atmosphere and proximity to area schools.
          </p>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <School className='h-10 w-10 text-[#3A8DDE] mb-2' />
                <CardTitle>Elementary & Middle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm'>
                  CCSD assigns elementary and middle schools by address. Contact Dr. Jan Duffy or check CCSD&apos;s boundary tool for the latest zones.
                </p>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <BookOpen className='h-10 w-10 text-[#16B286] mb-2' />
                <CardTitle>High School</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm'>
                  High school assignments also follow CCSD boundaries. Dr. Duffy can help you confirm which schools serve a specific Maravilla property.
                </p>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <MapPin className='h-10 w-10 text-[#0A2540] mb-2' />
                <CardTitle>Private & Charter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm'>
                  North Las Vegas and the greater Las Vegas area offer private and charter options. We can point you to resources for exploring alternatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id='zones' className='py-16 bg-[#F7F9FC]' aria-labelledby='zones-heading'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='zones-heading' className='text-3xl font-bold text-[#0A2540] mb-6 text-center'>
            School Zones & Boundaries
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Clark County School District updates boundary maps periodically. The schools that serve a specific Maravilla address can be confirmed through CCSD&apos;s official tools or by contacting the district. When you&apos;re considering a particular home, Dr. Jan Duffy can help you verify the assigned schools for that address.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            Use our <Link href='/map-and-nearby-places' className='text-[#3A8DDE] hover:underline font-medium'>map and nearby places</Link> page to explore the area, and <Link href='/contact' className='text-[#3A8DDE] hover:underline font-medium'>contact Dr. Duffy</Link> for school information tied to specific listings.
          </p>
        </div>
      </section>

      <section id='cta' className='py-16 bg-white' aria-labelledby='cta-heading'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 id='cta-heading' className='text-3xl font-bold text-[#0A2540] mb-4'>
            North Las Vegas Family Homes: Get School Info for a Property
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            When you&apos;re interested in a specific Maravilla home, we can help you confirm the assigned schools. Call or schedule a consultation to get started.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <a href={BUSINESS_INFO.phone.href}>
                <Phone className='inline h-5 w-5 mr-2' />
                {BUSINESS_INFO.phone.display}
              </a>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Contact Dr. Duffy</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/map-and-nearby-places'>Map & Nearby Places</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='schools-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Schools', url: `${baseUrl}/schools` },
            ]),
            generateWebPageSchema({
              name: 'North Las Vegas Family Homes | Schools',
              description: 'Schools serving North Las Vegas and Maravilla, Clark County School District, and school zone information.',
              url: `${baseUrl}/schools`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Schools', url: `${baseUrl}/schools` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
