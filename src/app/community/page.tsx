import PageLayout from '@/components/layout/page-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  School,
  UtensilsCrossed,
  ShoppingCart,
  TreePine,
  Heart,
  Users,
  Car,
  Building2,
} from 'lucide-react';

import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

// Static generation with ISR - revalidate weekly for community updates
export const revalidate = 604800; // 1 week

export const metadata = genMetadata({
  title:
    'Craig Ranch Community Guide: Schools, Amenities & Lifestyle | Las Vegas',
  description:
    'Discover Craig Ranch community: 170-acre regional park, excellent schools, 5 miles of trails, shopping centers, and family-friendly amenities. Award-winning master-planned community in North Las Vegas. Learn about schools, parks, and lifestyle. Call (702) 820-5408.',
  keywords:
    'Craig Ranch community, Las Vegas schools, Craig Ranch amenities, community guide, Las Vegas lifestyle, North Las Vegas community, Craig Ranch parks, Craig Ranch shopping',
  path: '/community',
});

export default function CommunityPage() {
  const schools = [
    {
      name: 'Eva G. Simmons Elementary School',
      type: 'Public Elementary',
      rating: 'B (Niche)',
      distance: 'Nearby',
      features: 'Family picnics, book bus',
    },
    {
      name: 'Clifford O. Pete Findlay Middle School',
      type: 'Public Middle School',
      rating: 'C (Niche)',
      distance: 'Nearby',
      features: 'Loved by alumni',
    },
    {
      name: 'Mojave High School',
      type: 'Public High School',
      rating: 'C (Niche)',
      distance: 'Nearby',
      features: 'Guitar club, bowling team, boys basketball state champions (2022, 2023)',
    },
  ];

  const amenities = [
    {
      name: 'Craig Ranch Regional Park',
      icon: TreePine,
      description: '170-acre park with amphitheater (10,000+ seats), 65,000 sq ft skate park, 3 dog parks, sports fields, and community gardens',
    },
    {
      name: 'Shopping & Dining',
      icon: ShoppingCart,
      description: 'Restaurant Row on West Craig Road with 25+ restaurants, North Mesa Plaza, Simmons Center, and more',
    },
    {
      name: 'Trails & Recreation',
      icon: Heart,
      description: '5 miles of interconnecting trails with exercise stations, 7 community parks, and 14-acre Sandstone Ridge Park',
    },
    {
      name: 'Entertainment',
      icon: UtensilsCrossed,
      description: 'Cannery Casino Hotel, outdoor concerts, 40+ annual events including Color Run, San Gennaro Feast (50,000+ attendees)',
    },
    {
      name: 'Outdoor Activities',
      icon: TreePine,
      description: '11 miles to Frenchman Mountain Trailhead, 18 miles to Lake Mead National Recreation Area, short drive to Lake Las Vegas',
    },
    {
      name: 'Convenient Access',
      icon: Car,
      description: 'Easy access to Route 95, I-15, Las Vegas Strip (11 miles), North Las Vegas Airport (6 miles), Harry Reid International (15 miles)',
    },
  ];

  const lifestyle = [
    {
      title: 'Family-Friendly',
      description:
        'Safe, welcoming community perfect for families with children',
      icon: Users,
    },
    {
      title: 'Active Lifestyle',
      description:
        'Parks, trails, and recreational facilities for an active lifestyle',
      icon: Heart,
    },
    {
      title: 'Convenient Location',
      description:
        'Easy access to major highways, downtown, and the Las Vegas Strip',
      icon: Car,
    },
  ];

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Community Guide
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            A tight-knit, vibrant master-planned community in North Las Vegas.
            Winner of "Best Planned Community" in 2020. Home to 5 miles of
            trails, 7 parks, and the 170-acre Craig Ranch Regional Park. Centrally
            located near shopping, dining, Nellis Air Force Base, and highways.
          </p>
        </div>
      </div>

      {/* Schools Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <School className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Top-Rated Schools in Craig Ranch
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Craig Ranch is served by excellent public and private schools,
              making it an ideal location for families with children.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {schools.map((school, index) => (
              <Card key={index} className='border-0 shadow-lg'>
                <CardHeader>
                  <CardTitle className='text-xl'>{school.name}</CardTitle>
                  <Badge variant='outline' className='w-fit'>
                    {school.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Rating:</span>
                      <span className='font-semibold text-[#16B286]'>
                        {school.rating}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Distance:</span>
                      <span className='font-semibold'>{school.distance}</span>
                    </div>
                    {school.features && (
                      <div className='pt-2 border-t'>
                        <span className='text-sm text-gray-600'>
                          {school.features}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Community Amenities
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Everything you need is just minutes away in Craig Ranch
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card key={index} className='border-0 shadow-lg'>
                  <CardHeader>
                    <div className='w-12 h-12 bg-[#16B286]/10 rounded-lg flex items-center justify-center mb-4'>
                      <Icon className='h-6 w-6 text-[#16B286]' />
                    </div>
                    <CardTitle>{amenity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{amenity.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shopping & Dining Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#16B286]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <ShoppingCart className='h-8 w-8 text-[#16B286]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Shopping & Dining in Craig Ranch
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Most shopping and dining options are along West Craig Road, now
              known as "Restaurant Row" in North Las Vegas, with more than 25
              restaurants opening in just the last two years.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle>Restaurant Row on West Craig Road</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='space-y-2'>
                  <p>
                    <strong>Lumberjack Restaurant</strong> - Log cabin-themed
                    restaurant serving sandwiches and burgers
                  </p>
                  <p>
                    <strong>El Nopal</strong> - Authentic Mexican specialties
                  </p>
                  <p>
                    <strong>Cupbop</strong> - Korean BBQ in a cup
                  </p>
                  <p>
                    <strong>Pinkbox Doughnuts</strong> - Sweet treats and
                    specialty doughnuts
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle>Shopping Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='space-y-2'>
                  <p>
                    <strong>North Mesa Plaza</strong> - PetSmart, Walmart, and
                    more
                  </p>
                  <p>
                    <strong>Simmons Center</strong> - Albertson&apos;s, Walmart,
                    Amazing Thai, Sean Patrick&apos;s Pub & Grill (24-hour Irish
                    bar with Dublin-style fish and chips)
                  </p>
                  <p>
                    <strong>Cannery Casino Hotel</strong> - Entertainment,
                    dining, and gaming without the Strip crowds
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Lifestyle & Community in Craig Ranch
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Experience the lifestyle that makes Craig Ranch special
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {lifestyle.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className='border-0 shadow-lg text-center'>
                  <CardHeader>
                    <div className='w-16 h-16 bg-[#0A2540]/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Icon className='h-8 w-8 text-[#0A2540]' />
                    </div>
                    <CardTitle className='text-xl'>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-base'>
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Join the Craig Ranch Community?
          </h2>
          <p className='text-xl text-gray-200 mb-8'>
            Discover why so many families choose to call Craig Ranch home.
            Browse available properties or contact us for a personalized
            community tour.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-[#16B286] hover:bg-[#15A276] text-white'
            >
              <Link href='/homes'>View Homes for Sale</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white/10'
            >
              <Link href='/contact'>Schedule Community Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id='community-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Craig Ranch Community Guide: Schools, Amenities & Lifestyle',
              description:
                'Discover schools, amenities, shopping, dining, and lifestyle in Craig Ranch, Las Vegas. Your complete guide to community living.',
              url: `${baseUrl}/community`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Community Guide', url: `${baseUrl}/community` },
              ],
            }),
            {
              '@context': 'https://schema.org',
              '@type': 'Place',
              name: 'Craig Ranch Community',
              description:
                'Master-planned community in North Las Vegas with excellent schools, parks, shopping, and dining',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89031',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.2831,
                longitude: -115.1331,
              },
            },
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Community Guide', url: `${baseUrl}/community` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}
