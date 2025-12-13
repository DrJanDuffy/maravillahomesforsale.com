import PageLayout from '@/components/layout/page-layout';
import MarketDataSection from '@/components/sections/market-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Home,
  Calendar,
  BarChart3,
} from 'lucide-react';

import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateDatasetSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

// Incremental Static Regeneration - revalidate every 15 minutes for fresh market data
export const revalidate = 900; // 15 minutes

export const metadata = genMetadata({
  title: 'Maravilla Real Estate Market Data & Trends | Las Vegas',
  description:
    'Latest Maravilla real estate market data: Track pricing trends, sales volume, and market conditions. Updated regularly. Call (702) 500-1953 for market insights.',
  keywords:
    'Maravilla market data, Las Vegas real estate trends, market statistics, home prices, days on market, real estate market analysis, Las Vegas housing market',
  path: '/market-data',
});

export default function MarketDataPage() {
  const trends = [
    {
      period: 'Last 12 Months',
      priceChange: '+1%',
      salesVolume: '849 Sales',
      inventory: '206 Homes',
      avgDaysOnMarket: 46,
      trend: 'up' as const,
    },
    {
      period: 'Current Market',
      priceChange: 'Median: $415K',
      salesVolume: 'List Price: $425K',
      inventory: '2.90 Months Supply',
      avgDaysOnMarket: 46,
      trend: 'up' as const,
    },
    {
      period: 'Price Range',
      priceChange: '$370K - $1.8M',
      salesVolume: 'Avg: $242/sqft',
      inventory: '21,469 Total Homes',
      avgDaysOnMarket: 46,
      trend: 'up' as const,
    },
  ];

  const insights = [
    {
      title: "Strong Seller's Market",
      description: 'Properties are selling quickly with multiple offers common',
      icon: TrendingUp,
      color: 'text-[#16B286]',
    },
    {
      title: 'Price Appreciation',
      description: 'Consistent year-over-year growth in home values',
      icon: DollarSign,
      color: 'text-[#3A8DDE]',
    },
    {
      title: 'High Demand',
      description: 'Growing interest from buyers seeking luxury homes',
      icon: Home,
      color: 'text-[#0A2540]',
    },
  ];

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Maravilla Market Data
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Stay informed with the latest real estate market trends, statistics,
            and insights for Maravilla, Las Vegas.
          </p>
        </div>
      </div>

      <MarketDataSection />

      {/* Market Trends */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <BarChart3 className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Maravilla Market Trends Over Time
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Track how the Maravilla market has evolved
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {trends.map((trend, index) => (
              <Card key={index} className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='text-xl'>{trend.period}</CardTitle>
                  <Badge variant='outline' className='w-fit'>
                    {trend.trend === 'up' ? (
                      <TrendingUp className='h-3 w-3 mr-1 text-[#16B286]' />
                    ) : (
                      <TrendingDown className='h-3 w-3 mr-1 text-red-500' />
                    )}
                    {trend.trend === 'up' ? 'Growth' : 'Decline'}
                  </Badge>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Price Change:</span>
                    <Badge className='bg-[#16B286] text-white'>
                      {trend.priceChange}
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Sales Volume:</span>
                    <Badge className='bg-[#3A8DDE] text-white'>
                      {trend.salesVolume}
                    </Badge>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Inventory:</span>
                    <Badge variant='secondary'>{trend.inventory}</Badge>
                  </div>
                  <div className='flex justify-between items-center pt-2 border-t'>
                    <span className='text-gray-600'>Avg Days on Market:</span>
                    <span className='font-semibold'>
                      {trend.avgDaysOnMarket}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Market Insights
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Key factors driving the Maravilla real estate market
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index} className='border-0 shadow-lg'>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-[${insight.color}]/10 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`h-6 w-6 ${insight.color}`} />
                    </div>
                    <CardTitle>{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-base'>
                      {insight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Outlook */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='border-0 shadow-xl'>
            <CardHeader className='text-center'>
              <div className='w-16 h-16 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                <Calendar className='h-8 w-8 text-[#0A2540]' />
              </div>
              <CardTitle className='text-2xl'>Maravilla Market Outlook</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4 text-gray-600 leading-relaxed'>
              <p>
                On average, homes in Maravilla, North Las Vegas sell after 25
                days on the market compared to the national average of 53 days.
                The median sale price for homes in Maravilla over the last 12
                months is $525,000, reflecting the luxury nature of the community.
                The average price per square foot varies by property type, making
                it an attractive market for both buyers and sellers.
              </p>
              <p>
                Maravilla features luxury homes with premium amenities and
                distinctive floor plans. The market shows strong demand for
                well-maintained properties with modern features. Homes range from
                $380,000 to $600,000+, offering options for various budgets
                while maintaining the community&apos;s luxury standards.
              </p>
              <p>
                Maravilla&apos;s appeal extends beyond its strategic location
                and luxury modern homes. The community offers excellent amenities,
                convenient access to shopping and dining, proximity to parks and
                recreational facilities, and a tight-knit community atmosphere.
                The area&apos;s excellent schools, amenities, and convenient
                location continue to drive buyer interest.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id='market-data-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Maravilla Real Estate Market Data & Trends',
              description:
                'Stay informed with the latest real estate market data, trends, and statistics for Maravilla, Las Vegas. Average prices, days on market, and more.',
              url: `${baseUrl}/market-data`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Market Data', url: `${baseUrl}/market-data` },
              ],
            }),
            generateDatasetSchema({
              name: 'Maravilla Real Estate Market Data',
              description:
                'Comprehensive real estate market data and statistics for Maravilla, Las Vegas including average prices, days on market, inventory levels, and market trends.',
              url: `${baseUrl}/market-data`,
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Market Data', url: `${baseUrl}/market-data` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}
