import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import AgentPhoto from '@/components/ui/agent-photo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import OnThisPage from '@/components/OnThisPage';

import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { BUSINESS_INFO } from '@/lib/config/business-info';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

// Static generation - contact info rarely changes
export const dynamic = 'force-static';
export const revalidate = false; // Static page, no revalidation needed

export const metadata = genMetadata({
  title: 'Contact Dr. Jan Duffy - North Las Vegas Family Homes | Homes by Dr. Jan Duffy | Las Vegas Real Estate',
  description:
    `Contact Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Get expert guidance for buying, selling, or investing in Maravilla, Las Vegas. Office: ${BUSINESS_INFO.address.full}. Call ${BUSINESS_INFO.phone.display} or email ${BUSINESS_INFO.email}.`,
  keywords:
    'contact real estate agent, Dr. Jan Duffy, Maravilla real estate agent, Las Vegas realtor, Berkshire Hathaway, contact form, real estate consultation',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            North Las Vegas Family Homes: Contact
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway
            HomeServices® Nevada. <a href='#schedule' className='text-white hover:text-gray-200 underline font-medium'>Schedule a consultation</a>, see <a href='#contact-info' className='text-white hover:text-gray-200 underline font-medium'>contact details</a>, or jump to <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>. Explore <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>homes in Maravilla</Link>, <Link href='/real-estate-services' className='text-white hover:text-gray-200 underline font-medium'>real estate services</Link>, <Link href='/market-data' className='text-white hover:text-gray-200 underline font-medium'>market data</Link>, or <Link href='/home-valuation' className='text-white hover:text-gray-200 underline font-medium'>home valuation</Link>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'schedule', label: 'Schedule a consultation' },
            { id: 'contact-info', label: 'Phone, email & office' },
            { id: 'map', label: 'Office location & map' },
            { id: 'faqs', label: 'Contact FAQs' },
          ]}
        />
      </div>

      {/* Calendly Scheduling - Full Width Prominent Section */}
      <section id='schedule' className='py-16 bg-white' aria-labelledby='schedule-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#0A2540] mb-4'>
              North Las Vegas Family Homes: Schedule a Consultation
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Book a strategy meeting to discuss your real estate goals, get personalized guidance,
              and explore homes in Maravilla and throughout Las Vegas. Choose a time that works for you.
            </p>
          </div>
          <div className='rounded-lg border-2 border-gray-200 shadow-lg overflow-hidden bg-white'>
            <CalendlyEmbed 
              url="https://calendly.com/drjanduffy"
              height="900px"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id='contact-info' className='py-16 bg-[#F7F9FC]' aria-labelledby='contact-info-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
            <Card className='border-0 shadow-lg bg-gradient-to-br from-[#F7F9FC] to-white'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-[#3A8DDE]' />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div>
                    <a
                      href='tel:7025001953'
                      className='text-lg font-semibold text-[#0A2540] hover:text-[#3A8DDE] transition-colors'
                    >
                      (702) 500-1953
                    </a>
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>
                    Available 6AM - 9PM Daily
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-[#16B286]' />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href='mailto:DrDuffy@MaravillaHomesForSale.com'
                    className='text-lg font-semibold text-[#0A2540] hover:text-[#16B286] transition-colors'
                  >
                    DrDuffy@MaravillaHomesForSale.com
                  </a>
                  <p className='text-gray-600 text-sm mt-1'>
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <MapPin className='h-5 w-5 text-[#0A2540]' />
                    Location & Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-lg font-semibold text-[#0A2540]'>
                    {BUSINESS_INFO.address.streetAddress}
                  </p>
                  <p className='text-gray-600 text-sm mt-1'>
                    {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}
                  </p>
                  <p className='text-gray-600 text-sm mt-2'>
                    Serving Las Vegas, Henderson, and surrounding communities
                  </p>
                </CardContent>
              </Card>

            <Card className='border-0 shadow-lg bg-[#F7F9FC]'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Clock className='h-5 w-5 text-[#3A8DDE]' />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Monday - Friday:</span>
                      <span className='font-semibold'>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Saturday:</span>
                      <span className='font-semibold'>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Sunday:</span>
                      <span className='font-semibold'>By Appointment</span>
                    </div>
                  </div>
                </CardContent>
            </Card>
          </div>

          {/* About Dr. Jan Duffy - Full Width Card */}
          <Card className='border-0 shadow-lg bg-white mt-6'>
            <CardHeader>
              <CardTitle className='text-2xl'>About Dr. Jan Duffy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-6 items-center'>
                <div>
                  <AgentPhoto
                    src='/photos/Dr. Duffy Blue_Headshot.jpg'
                    alt='Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-700 leading-relaxed'>
                    Dr. Jan Duffy is a REALTOR® with{' '}
                    <strong>Berkshire Hathaway HomeServices® Nevada</strong>,
                    specializing in luxury homes and estates across Las Vegas and
                    Henderson.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    She offers expert, data-driven advice and personalized
                    consultations to help you find the perfect home in Maravilla
                    and other premier communities.
                  </p>
                  <div className='pt-4'>
                    <Button
                      asChild
                      className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
                    >
                      <Link
                        href='http://drjanduffy.realscout.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        prefetch={false}
                      >
                        View All Listings
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section id='map' className='py-16 bg-[#F7F9FC]' aria-labelledby='map-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 id='map-heading' className='text-3xl font-bold text-[#0A2540] mb-4'>
              Find Us on the Map
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Visit us at {BUSINESS_INFO.address.full}. We
              serve clients throughout Las Vegas, Henderson, and surrounding
              communities.
            </p>
          </div>
          <div className='relative'>
            <Suspense fallback={<MapSkeleton />}>
              <GoogleMap
                address={BUSINESS_INFO.address.full}
                latitude={BUSINESS_INFO.geo.latitude}
                longitude={BUSINESS_INFO.geo.longitude}
                zoom={14}
                height='500px'
                title='North Las Vegas Family Homes | Homes by Dr. Jan Duffy Office Location'
              />
            </Suspense>
          </div>
          <div className='mt-6 flex flex-col sm:flex-row gap-3 justify-center'>
            <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href='tel:7025001953'>Call Now</a>
            </Button>
            <Button asChild variant='outline'>
              <Link
                href={BUSINESS_INFO.maps.business}
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                Get Directions
              </Link>
            </Button>
            <Button asChild variant='outline'>
              <Link
                href={BUSINESS_INFO.googleBusinessProfile}
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                View Google Reviews
              </Link>
            </Button>
            <Button asChild variant='outline' className='border-[#16B286] text-[#16B286] hover:bg-[#16B286]/10'>
              <Link
                href={BUSINESS_INFO.googleReviewUrl}
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                Leave a Google Review
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
            <MessageSquare className='h-8 w-8 text-[#3A8DDE]' />
          </div>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            North Las Vegas Family Homes: Ready to Get Started?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Browse our available properties or schedule a consultation to
            discuss your real estate needs in Maravilla.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            >
              <Link href='/homes'>View Available Homes</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link
                href='http://drjanduffy.realscout.com/onboarding'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id='contact-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateLocalBusinessSchema(),
            generateWebPageSchema({
              name: 'Contact Dr. Jan Duffy - North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
              description:
                'Get in touch with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Contact our expert real estate team for buying, selling, or investing in Maravilla, Las Vegas.',
              url: `${baseUrl}/contact`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Contact', url: `${baseUrl}/contact` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Contact', url: `${baseUrl}/contact` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}
