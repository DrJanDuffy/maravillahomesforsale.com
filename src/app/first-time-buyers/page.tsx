import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Home, BookOpen, DollarSign, Key, Phone } from 'lucide-react';
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
  title: 'North Las Vegas Family Homes | First-Time Home Buyers | North Las Vegas & Maravilla | Dr. Jan Duffy',
  description:
    'First-time home buyer guide for North Las Vegas and Maravilla. Pre-approval, down payment, and step-by-step help. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
  keywords:
    'first-time home buyer North Las Vegas, first-time buyer Maravilla, first time buyer Las Vegas, FHA VA loans Maravilla',
  path: '/first-time-buyers',
});

export default function FirstTimeBuyersPage() {
  const breadcrumb = [
    { name: 'Home', url: baseUrl },
    { name: 'First-Time Buyers', url: `${baseUrl}/first-time-buyers` },
  ];

  const steps = [
    { icon: DollarSign, title: 'Get pre-approved', body: 'Talk to a lender and get pre-approved so you know your price range and can move quickly when you find the right home.' },
    { icon: Home, title: 'Define your needs', body: 'Decide on beds, baths, area, and must-haves. Browse Maravilla and North Las Vegas neighborhoods with Dr. Jan Duffy.' },
    { icon: BookOpen, title: 'Tour and compare', body: 'Schedule tours of homes that fit. We\'ll help you compare neighborhoods, schools, and value so you can decide with confidence.' },
    { icon: Key, title: 'Make an offer and close', body: 'Dr. Duffy helps you craft a strong offer, navigate inspections and appraisal, and close on your first home.' },
  ];

  return (
    <PageLayout>
      <Script
        id='first-time-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema({
              name: 'North Las Vegas Family Homes | First-Time Buyers',
              description:
                'First-time home buyer guide for North Las Vegas and Maravilla. Pre-approval, down payment, and step-by-step help.',
              url: `${baseUrl}/first-time-buyers`,
              breadcrumb,
            })
          ),
        }}
      />
      <Script
        id='first-time-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)),
        }}
      />

      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            North Las Vegas Family Homes: First-Time Home Buyers
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Buying your first home? Get pre-approved, explore neighborhoods, and close with confidence. Jump to <a href='#steps' className='text-white hover:text-gray-200 underline font-medium'>steps</a>, <a href='#resources' className='text-white hover:text-gray-200 underline font-medium'>resources</a>, or <a href='#faqs' className='text-white hover:text-gray-200 underline font-medium'>FAQs</a>.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'steps', label: 'Steps to buy your first home' },
            { id: 'resources', label: 'Resources' },
            { id: 'cta', label: 'Get started' },
            { id: 'faqs', label: 'FAQs' },
          ]}
        />
      </div>

      <section id='steps' className='py-16 bg-white' aria-labelledby='steps-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='steps-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            North Las Vegas Family Homes: Steps to Buy Your First Home
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
                    <p className='text-gray-600'>{step.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id='resources' className='py-16 bg-[#F7F9FC]' aria-labelledby='resources-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='resources-heading' className='text-3xl font-bold text-[#0A2540] mb-6'>
            North Las Vegas Family Homes: Resources for First-Time Buyers
          </h2>
          <p className='text-gray-600 mb-6 max-w-3xl'>
            FHA, VA, and conventional loans are common for first-time buyers in North Las Vegas and Maravilla. Dr. Jan Duffy can connect you with trusted lenders and walk you through the process.
          </p>
          <ul className='flex flex-wrap gap-4'>
            <li>
              <Link href='/buyers-guide' className='text-[#3A8DDE] font-medium hover:underline'>
                Buyer&apos;s Guide
              </Link>
            </li>
            <li>
              <Link href='/homes' className='text-[#3A8DDE] font-medium hover:underline'>
                Homes for Sale
              </Link>
            </li>
            <li>
              <Link href='/neighborhoods' className='text-[#3A8DDE] font-medium hover:underline'>
                Neighborhoods
              </Link>
            </li>
            <li>
              <Link href='/home-valuation' className='text-[#3A8DDE] font-medium hover:underline'>
                Home Valuation
              </Link>
            </li>
            <li>
              <Link href='/contact' className='text-[#3A8DDE] font-medium hover:underline'>
                Contact & Schedule
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id='cta' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl font-bold text-[#0A2540] mb-4'>
            North Las Vegas Family Homes: Ready to Start Your First Home Search?
          </h2>
          <p className='text-gray-600 mb-6'>
            Dr. Jan Duffy helps first-time buyers in North Las Vegas and Maravilla with pre-approval, tours, and a smooth closing.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
              <Link href='/contact'>Schedule a Consultation</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/homes'>Browse Homes</Link>
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
