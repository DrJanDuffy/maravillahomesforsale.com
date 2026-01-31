import PageLayout from '@/components/layout/page-layout';
import AgentPhoto from '@/components/ui/agent-photo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
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
  title: 'North Las Vegas Family Homes | About Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada',
  description:
    'Meet Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada. Expert in Maravilla and North Las Vegas real estate. License S.0197614.LLC. Call (702) 500-1953.',
  keywords:
    'Dr. Jan Duffy, Maravilla real estate agent, North Las Vegas REALTOR, Berkshire Hathaway Nevada, Las Vegas real estate expert',
  path: '/about',
});

export default function AboutPage() {
  const highlights = [
    'REALTOR® with Berkshire Hathaway HomeServices Nevada Properties',
    'License S.0197614.LLC',
    'Specialist in Maravilla and North Las Vegas',
    'Data-driven pricing and market analysis',
    'Full support from search to closing',
  ];

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            About Dr. Jan Duffy
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Your trusted real estate expert for <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>Maravilla</Link> and North Las Vegas. Dr. Jan Duffy brings expertise, integrity, and personalized service to every buyer and seller. Jump to <a href='#bio' className='text-white hover:text-gray-200 underline font-medium'>bio</a>, <a href='#why-work-with' className='text-white hover:text-gray-200 underline font-medium'>why work with Dr. Duffy</a>, or <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'bio', label: 'About Dr. Jan Duffy' },
            { id: 'why-work-with', label: 'Why work with Dr. Duffy' },
            { id: 'contact-cta', label: 'Contact & next steps' },
            { id: 'faqs', label: 'About FAQs' },
          ]}
        />
      </div>

      <section id='bio' className='py-16 bg-white' aria-labelledby='bio-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 id='bio-heading' className='text-3xl font-bold text-[#0A2540] mb-6'>
                Your Maravilla & North Las Vegas Expert
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Dr. Jan Duffy is a REALTOR® with <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>, specializing in Maravilla and the greater North Las Vegas area. She holds license <strong>S.0197614.LLC</strong> and is committed to helping buyers and sellers navigate the market with confidence.
              </p>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Whether you&apos;re searching for your first home, selling an existing property, or exploring <Link href='/neighborhood' className='text-[#3A8DDE] hover:underline font-medium'>Maravilla&apos;s neighborhoods</Link>, Dr. Duffy provides data-driven advice, clear communication, and full support from start to closing.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                She works with clients throughout Las Vegas, Henderson, and North Las Vegas—with a focus on Maravilla&apos;s family-friendly communities, top schools, and strong value. Explore <Link href='/homes' className='text-[#3A8DDE] hover:underline font-medium'>homes for sale</Link>, get a <Link href='/home-valuation' className='text-[#3A8DDE] hover:underline font-medium'>home valuation</Link>, or learn about <Link href='/real-estate-services' className='text-[#3A8DDE] hover:underline font-medium'>real estate services</Link>.
              </p>
            </div>
            <div className='flex justify-center'>
              <AgentPhoto
                src='/photos/Dr. Duffy Blue_Headshot.jpg'
                alt='Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties'
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='shadow-xl rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='why-work-with' className='py-16 bg-[#F7F9FC]' aria-labelledby='why-work-with-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='why-work-with-heading' className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            North Las Vegas Family Homes: Why Work with Dr. Jan Duffy
          </h2>
          {BUSINESS_INFO.attributes && (
            <p className='text-center text-gray-600 mb-8 max-w-2xl mx-auto'>
              Identifies as women-owned • LGBTQ+ friendly • Offers online appointments
            </p>
          )}
          <ul className='grid md:grid-cols-2 gap-4 max-w-4xl mx-auto'>
            {highlights.map((item, i) => (
              <li key={i} className='flex items-start gap-3 text-gray-700'>
                <CheckCircle2 className='h-6 w-6 text-[#16B286] flex-shrink-0 mt-0.5' aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id='contact-cta' className='py-16 bg-white' aria-labelledby='contact-cta-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='contact-cta-heading' className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            North Las Vegas Family Homes: Get in Touch
          </h2>
          <div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <Phone className='h-8 w-8 text-[#3A8DDE] mb-2' />
                <CardTitle>Call</CardTitle>
              </CardHeader>
              <CardContent>
                <a href={BUSINESS_INFO.phone.href} className='text-xl font-semibold text-[#0A2540] hover:text-[#3A8DDE]'>
                  {BUSINESS_INFO.phone.display}
                </a>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <Mail className='h-8 w-8 text-[#16B286] mb-2' />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${BUSINESS_INFO.email}`} className='text-[#0A2540] hover:text-[#16B286] break-all'>
                  {BUSINESS_INFO.email}
                </a>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <MapPin className='h-8 w-8 text-[#0A2540] mb-2' />
                <CardTitle>Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700'>{BUSINESS_INFO.address.full}</p>
              </CardContent>
            </Card>
          </div>
          <div className='text-center mt-8'>
            <Button asChild size='lg' className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/contact'>Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='about-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'About Dr. Jan Duffy', url: `${baseUrl}/about` },
            ]),
            generateWebPageSchema({
              name: 'North Las Vegas Family Homes | About Dr. Jan Duffy',
              description: 'Meet Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada. North Las Vegas Family Homes expert—Maravilla and North Las Vegas.',
              url: `${baseUrl}/about`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'About', url: `${baseUrl}/about` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
