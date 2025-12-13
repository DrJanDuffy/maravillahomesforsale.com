'use client';

import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function MarketDataSection() {
  const currentStats = [
    {
      label: 'Average Home Price',
      value: '$875,000',
      change: '+5.2%',
      changeType: 'positive',
      description: 'vs last year',
    },
    {
      label: 'Days on Market',
      value: '23',
      change: '-12%',
      changeType: 'positive',
      description: 'vs last year',
    },
    {
      label: 'Active Listings',
      value: '156',
      change: '+8.5%',
      changeType: 'neutral',
      description: 'vs last month',
    },
    {
      label: 'Price per Sq Ft',
      value: '$285',
      change: '+3.1%',
      changeType: 'positive',
      description: 'vs last year',
    },
  ];

  const trends = [
    { period: 'Last 30 Days', price: '+2.1%', sales: '+15%', inventory: '+8%' },
    {
      period: 'Last 90 Days',
      price: '+4.3%',
      sales: '+22%',
      inventory: '+12%',
    },
    { period: 'Last Year', price: '+5.2%', sales: '+18%', inventory: '+5%' },
  ];

  return (
    <section className='py-20 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Craig Ranch Market Data
          </h2>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            Stay informed with the latest real estate market trends and
            statistics
          </p>
        </div>

        <Tabs defaultValue='current' className='w-full'>
          <TabsList className='grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/10 backdrop-blur-sm'>
            <TabsTrigger
              value='current'
              className='data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-200'
            >
              Current Stats
            </TabsTrigger>
            <TabsTrigger
              value='trends'
              className='data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-200'
            >
              Market Trends
            </TabsTrigger>
          </TabsList>

          <TabsContent value='current'>
            {/* Market Stats Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {currentStats.map((stat, index) => (
                <Card
                  key={index}
                  className='bg-white/10 backdrop-blur-sm border-white/20 text-center'
                >
                  <CardHeader>
                    <CardTitle className='text-white text-lg font-medium'>
                      {stat.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='text-3xl font-bold text-white mb-2'>
                      {stat.value}
                    </div>
                    <Badge
                      variant='secondary'
                      className={`${
                        stat.changeType === 'positive'
                          ? 'bg-[#16B286]/20 text-[#16B286] border-[#16B286]/30'
                          : stat.changeType === 'negative'
                            ? 'bg-red-400/20 text-red-300 border-red-400/30'
                            : 'bg-gray-300/20 text-gray-300 border-gray-300/30'
                      } mb-2`}
                    >
                      {stat.change}
                    </Badge>
                    <CardDescription className='text-gray-300 text-sm mt-2'>
                      {stat.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='trends'>
            <div className='grid md:grid-cols-3 gap-6'>
              {trends.map((trend, index) => (
                <Card
                  key={index}
                  className='bg-white/10 backdrop-blur-sm border-white/20'
                >
                  <CardHeader>
                    <CardTitle className='text-white'>{trend.period}</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-300'>Price Change:</span>
                      <Badge
                        variant='secondary'
                        className='bg-[#16B286]/20 text-[#16B286] border-[#16B286]/30'
                      >
                        {trend.price}
                      </Badge>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-300'>Sales Volume:</span>
                      <Badge
                        variant='secondary'
                        className='bg-[#16B286]/20 text-[#16B286] border-[#16B286]/30'
                      >
                        {trend.sales}
                      </Badge>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-300'>Inventory:</span>
                      <Badge
                        variant='secondary'
                        className='bg-white/20 text-white border-white/30'
                      >
                        {trend.inventory}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Market Insights */}
        <div className='mt-16 text-center'>
          <Card className='bg-white/10 backdrop-blur-sm border-white/20'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-white'>
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto'>
                The Craig Ranch market continues to show strong growth with
                increasing demand for luxury homes. Properties are selling
                faster than ever, with an average of 23 days on market. The
                area&apos;s excellent schools, amenities, and convenient
                location continue to drive buyer interest.
              </CardDescription>
              <div className='mt-6'>
                <Button
                  asChild
                  className='bg-[#16B286] hover:bg-[#15A276] text-white'
                >
                  <Link
                    href='http://drjanduffy.realscout.com/onboarding'
                    target='_blank'
                    rel='noopener noreferrer'
                    prefetch={false}
                  >
                    View Full Market Report
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
