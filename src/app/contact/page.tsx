import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import ContactForm from '@/components/sections/contact-form';
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

import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

// Static generation - contact info rarely changes
export const dynamic = 'force-static';
export const revalidate = false; // Static page, no revalidation needed

export const metadata = genMetadata({
  title: 'Contact Dr. Jan Duffy - Craig Ranch Vegas | Homes By Dr. Jan Duffy | Las Vegas Real Estate',
  description:
    'Contact Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Get expert guidance for buying, selling, or investing in Craig Ranch, Las Vegas. Office: 851 W Lone Mountain Rd, North Las Vegas, NV 89032. Call (702) 820-5408 or email DrDuffy@CraigRanchHomes.com.',
  keywords:
    'contact real estate agent, Dr. Jan Duffy, Craig Ranch real estate agent, Las Vegas realtor, Berkshire Hathaway, contact form, real estate consultation',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Contact Dr. Jan Duffy for Craig Ranch Homes
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Work with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway
            HomeServices® Nevada. Get expert, data-driven advice and personalized
            consultations for homes in Craig Ranch and throughout Las Vegas.
          </p>
        </div>
      </div>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-2'>
                Send Us a Message About Craig Ranch
              </h2>
              <p className='text-gray-600 mb-6'>
                Fill out the form below and Dr. Jan Duffy will get back to you
                with current listings and personalized guidance.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className='space-y-6'>
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
                      href='tel:7028205408'
                      className='text-lg font-semibold text-[#0A2540] hover:text-[#3A8DDE] transition-colors'
                    >
                      (702) 820-5408
                    </a>
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>
                    Available Monday - Saturday, 9 AM - 6 PM
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
                    href='mailto:DrDuffy@CraigRanchHomes.com'
                    className='text-lg font-semibold text-[#0A2540] hover:text-[#16B286] transition-colors'
                  >
                    DrDuffy@CraigRanchHomes.com
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
                    851 W Lone Mountain Rd
                  </p>
                  <p className='text-gray-600 text-sm mt-1'>
                    North Las Vegas, NV 89032
                  </p>
                  <p className='text-gray-600 text-sm mt-2'>
                    Serving Las Vegas, Henderson, and surrounding communities
                  </p>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg bg-[#F7F9FC]'>
                <CardHeader>
                  <CardTitle className='text-xl'>About Dr. Jan Duffy</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <AgentPhoto
                    src='/Dr Duffy Blue_Headshot Enhanced 180 Size.jpg'
                    alt='Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                  <p className='text-gray-700'>
                    Dr. Jan Duffy is a REALTOR® with{' '}
                    <strong>Berkshire Hathaway HomeServices® Nevada</strong>,
                    specializing in luxury homes and estates across Las Vegas and
                    Henderson.
                  </p>
                  <p className='text-gray-700'>
                    She offers expert, data-driven advice and personalized
                    consultations to help you find the perfect home in Craig Ranch
                    and other premier communities.
                  </p>
                  <div className='pt-2'>
                    <Link
                      href='http://drjanduffy.realscout.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      prefetch={false}
                      className='text-[#3A8DDE] hover:text-[#2A7DCE] font-semibold text-sm'
                    >
                      View All Listings →
                    </Link>
                  </div>
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Find Us on the Map
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Visit us at 851 W Lone Mountain Rd, North Las Vegas, NV 89032. We
              serve clients throughout Las Vegas, Henderson, and surrounding
              communities.
            </p>
          </div>
          <div className='relative'>
            <Suspense fallback={<MapSkeleton />}>
              <GoogleMap
                address='851 W Lone Mountain Rd, North Las Vegas, NV 89032'
                latitude={36.2465}
                longitude={-115.1475}
                zoom={14}
                height='500px'
                title='Craig Ranch Vegas | Homes By Dr. Jan Duffy Office Location'
              />
            </Suspense>
          </div>
          <div className='mt-6 flex flex-col sm:flex-row gap-3 justify-center'>
            <Button asChild className='bg-[#16B286] hover:bg-[#15A276] text-white'>
              <a href='tel:7028205408'>Call Now</a>
            </Button>
            <Button asChild variant='outline'>
              <Link
                href='https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                Get Directions
              </Link>
            </Button>
            <Button asChild variant='outline'>
              <Link
                href='https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
              >
                View Google Reviews
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
            Ready to Get Started?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Browse our available properties or schedule a consultation to
            discuss your real estate needs in Craig Ranch.
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
              name: 'Contact Dr. Jan Duffy - Craig Ranch Vegas | Homes By Dr. Jan Duffy',
              description:
                'Get in touch with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices® Nevada. Contact our expert real estate team for buying, selling, or investing in Craig Ranch, Las Vegas.',
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
