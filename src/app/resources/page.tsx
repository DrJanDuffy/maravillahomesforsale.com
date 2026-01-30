import PageLayout from '@/components/layout/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Home,
  BookOpen,
  DollarSign,
  TrendingUp,
  MapPin,
  FileText,
  Phone,
  Search,
} from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import OnThisPage from '@/components/OnThisPage';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Maravilla Real Estate Resources | Guides, Data & Tools | Dr. Jan Duffy',
  description:
    'Resources for Maravilla home buyers and sellers: buyer\'s guide, home valuation, market data, neighborhood info, and contact. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
  keywords:
    'Maravilla resources, real estate guides, Maravilla market data, North Las Vegas real estate tools',
  path: '/resources',
});

const resourceGroups = [
  {
    title: 'Buying & Selling',
    items: [
      { href: '/guides', label: 'Guides for Clients', icon: BookOpen },
      { href: '/buyers-guide', label: 'How to Buy a Home in Maravilla', icon: BookOpen },
      { href: '/first-time-buyers', label: 'First-Time Buyers', icon: BookOpen },
      { href: '/homes', label: 'Homes for Sale in Maravilla', icon: Home },
      { href: '/sell', label: 'Sell Your Home in Maravilla', icon: FileText },
      { href: '/search', label: 'Search Maravilla Listings', icon: Search },
    ],
  },
  {
    title: 'Value & Market',
    items: [
      { href: '/home-valuation', label: 'Home Valuation', icon: DollarSign },
      { href: '/market-data', label: 'Market Data', icon: TrendingUp },
      { href: '/market-insights', label: 'Market Insights', icon: TrendingUp },
      { href: '/blog', label: 'Blog & Market Updates', icon: TrendingUp },
    ],
  },
  {
    title: 'Neighborhood & Area',
    items: [
      { href: '/neighborhood', label: 'Maravilla Neighborhood Guide', icon: MapPin },
      { href: '/neighborhoods', label: 'Neighborhoods Near Maravilla', icon: MapPin },
      { href: '/55-plus-communities', label: '55+ Communities', icon: Home },
      { href: '/community', label: 'Community Life', icon: Home },
      { href: '/amenities', label: 'Amenities', icon: Home },
      { href: '/map-and-nearby-places', label: 'Map & Nearby Places', icon: MapPin },
      { href: '/schools', label: 'Schools in Maravilla', icon: BookOpen },
    ],
  },
  {
    title: 'Services & Contact',
    items: [
      { href: '/real-estate-services', label: 'Real Estate Services', icon: FileText },
      { href: '/about', label: 'About Dr. Jan Duffy', icon: Phone },
      { href: '/contact', label: 'Contact & Schedule', icon: Phone },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Maravilla Real Estate Resources
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Guides, market data, neighborhood info, and tools for Maravilla home buyers and sellers. Find what you need and connect with Dr. Jan Duffy for personalized help.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-b'>
        <OnThisPage
          links={[
            { id: 'buying-selling', label: 'Buying & selling' },
            { id: 'value-market', label: 'Value & market' },
            { id: 'neighborhood', label: 'Neighborhood & area' },
            { id: 'services', label: 'Services & contact' },
            { id: 'faqs', label: 'Resources FAQs' },
          ]}
        />
      </div>

      <section id='buying-selling' className='py-16 bg-white' aria-labelledby='buying-selling-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='buying-selling-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            Buying & Selling
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {resourceGroups[0].items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} href={item.href} className='block group'>
                  <Card className='border-0 shadow-lg h-full transition-shadow group-hover:shadow-xl'>
                    <CardHeader>
                      <Icon className='h-8 w-8 text-[#3A8DDE] mb-2' />
                      <CardTitle className='text-lg group-hover:text-[#3A8DDE]'>{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className='text-sm text-[#3A8DDE] group-hover:underline'>View →</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id='value-market' className='py-16 bg-[#F7F9FC]' aria-labelledby='value-market-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='value-market-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            Value & Market
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {resourceGroups[1].items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} href={item.href} className='block group'>
                  <Card className='border-0 shadow-lg h-full transition-shadow group-hover:shadow-xl'>
                    <CardHeader>
                      <Icon className='h-8 w-8 text-[#3A8DDE] mb-2' />
                      <CardTitle className='text-lg group-hover:text-[#3A8DDE]'>{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className='text-sm text-[#3A8DDE] group-hover:underline'>View →</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id='neighborhood' className='py-16 bg-white' aria-labelledby='neighborhood-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='neighborhood-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            Neighborhood & Area
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {resourceGroups[2].items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} href={item.href} className='block group'>
                  <Card className='border-0 shadow-lg h-full transition-shadow group-hover:shadow-xl'>
                    <CardHeader>
                      <Icon className='h-8 w-8 text-[#3A8DDE] mb-2' />
                      <CardTitle className='text-lg group-hover:text-[#3A8DDE]'>{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className='text-sm text-[#3A8DDE] group-hover:underline'>View →</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id='services' className='py-16 bg-[#F7F9FC]' aria-labelledby='services-heading'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 id='services-heading' className='text-3xl font-bold text-[#0A2540] mb-8'>
            Services & Contact
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {resourceGroups[3].items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} href={item.href} className='block group'>
                  <Card className='border-0 shadow-lg h-full transition-shadow group-hover:shadow-xl'>
                    <CardHeader>
                      <Icon className='h-8 w-8 text-[#3A8DDE] mb-2' />
                      <CardTitle className='text-lg group-hover:text-[#3A8DDE]'>{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className='text-sm text-[#3A8DDE] group-hover:underline'>View →</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Script
        id='resources-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Resources', url: `${baseUrl}/resources` },
            ]),
            generateWebPageSchema({
              name: 'Maravilla Real Estate Resources | Guides & Tools',
              description: 'Resources for Maravilla buyers and sellers: guides, market data, neighborhood info.',
              url: `${baseUrl}/resources`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Resources', url: `${baseUrl}/resources` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
