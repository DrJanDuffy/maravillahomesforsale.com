import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Search, FileCheck, Home, DollarSign, Key, Phone } from 'lucide-react';
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
  title: 'How to Buy a Home in Maravilla | Buyer\'s Guide | Dr. Jan Duffy',
  description:
    'Step-by-step guide to buying a home in Maravilla, North Las Vegas. Financing, search, offers, and closing with Dr. Jan Duffy, REALTOR®. Call (702) 500-1953.',
  keywords:
    'buy a home Maravilla, first-time home buyer Maravilla, Maravilla buyer guide, North Las Vegas home buying, Maravilla real estate',
  path: '/buyers-guide',
});

const steps = [
  {
    icon: Search,
    title: 'Define your needs & get pre-approved',
    body: 'Decide on budget, beds, baths, and must-haves. Get pre-approved with a lender so you know your price range and can move quickly when you find the right Maravilla home.',
  },
  {
    icon: Home,
    title: 'Search & tour homes',
    body: 'Browse current Maravilla listings, schedule tours with Dr. Jan Duffy, and compare neighborhoods. Use our search tools and market data to stay informed.',
  },
  {
    icon: FileCheck,
    title: 'Make an offer & negotiate',
    body: 'Dr. Duffy helps you craft a competitive offer based on comparable sales and market conditions. She handles negotiations and contingencies so you stay protected.',
  },
  {
    icon: Key,
    title: 'Inspection, appraisal & closing',
    body: 'After your offer is accepted, you\'ll complete inspections, appraisal, and final paperwork. Dr. Duffy coordinates with lenders, title, and other parties so closing runs smoothly.',
  },
];

export default function BuyersGuidePage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            How to Buy a Home in Maravilla
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            A practical guide to buying a home in Maravilla, North Las Vegas. From pre-approval to closing, Dr. Jan Duffy helps you find the right property and navigate every step. Jump to <a href='#steps' className='text-white hover:text-gray-200 underline font-medium'>buying steps</a>, <a href='#financing' className='text-white hover:text-gray-200 underline font-medium'>financing</a>, or <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>. Browse <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>homes for sale</Link>, explore the <Link href='/neighborhood' className='text-white hover:text-gray-200 underline font-medium'>neighborhood</Link>, or get a <Link href='/home-valuation' className='text-white hover:text-gray-200 underline font-medium'>home valuation</Link>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'steps', label: 'Steps to buy a home in Maravilla' },
            { id: 'financing', label: 'Financing & pre-approval' },
            { id: 'cta', label: 'Get started with Dr. Duffy' },
            { id: 'faqs', label: 'Buyer FAQs' },
          ]}
        />
      </div>

      <section id='steps' className='py-16 bg-white' aria-labelledby='steps-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='steps-heading' className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            Steps to Buy a Home in Maravilla
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={i} className='border-0 shadow-lg'>
                  <CardHeader>
                    <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-2'>
                      <Icon className='h-6 w-6 text-[#3A8DDE]' />
                    </div>
                    <CardTitle className='text-xl'>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-700 leading-relaxed'>{step.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id='financing' className='py-16 bg-[#F7F9FC]' aria-labelledby='financing-heading'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='financing-heading' className='text-3xl font-bold text-[#0A2540] mb-6 text-center'>
            Financing & Pre-Approval
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Getting pre-approved before you search helps you know your budget and shows sellers you&apos;re a serious buyer. Dr. Jan Duffy works with trusted lending partners who specialize in the North Las Vegas and Maravilla market. Options include conventional loans, FHA, VA (popular near Nellis AFB and the VA Hospital), and other programs.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            She can connect you with mortgage professionals who understand Maravilla home values and can guide you through the process. View <Link href='/market-data' className='text-[#3A8DDE] hover:underline font-medium'>market data</Link> to see recent sales and price trends, or <Link href='/contact' className='text-[#3A8DDE] hover:underline font-medium'>contact Dr. Duffy</Link> to get started.
          </p>
        </div>
      </section>

      <section id='cta' className='py-16 bg-white' aria-labelledby='cta-heading'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 id='cta-heading' className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to Find Your Maravilla Home?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Dr. Jan Duffy helps buyers find and close on the right Maravilla property. Call, schedule a consultation, or browse current listings to get started.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/homes'>Browse Maravilla Homes</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Schedule Consultation</Link>
            </Button>
            <Button asChild size='lg' variant='outline' asChild>
              <a href={BUSINESS_INFO.phone.href}>{BUSINESS_INFO.phone.display}</a>
            </Button>
          </div>
        </div>
      </section>

      <Script
        id='buyers-guide-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Buyer\'s Guide', url: `${baseUrl}/buyers-guide` },
            ]),
            generateWebPageSchema({
              name: 'How to Buy a Home in Maravilla | Buyer\'s Guide',
              description: 'Step-by-step guide to buying a home in Maravilla with Dr. Jan Duffy.',
              url: `${baseUrl}/buyers-guide`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Buyer\'s Guide', url: `${baseUrl}/buyers-guide` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
