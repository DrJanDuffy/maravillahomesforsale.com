import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import GoogleMap from '@/components/sections/google-map';
import MapSkeleton from '@/components/skeletons/map-skeleton';
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
  Home,
  TreePine,
  Users,
  Building2,
  MapPin,
  Sparkles,
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

// Static generation with ISR - revalidate weekly for neighborhood updates
export const revalidate = 604800; // 1 week

export const metadata = genMetadata({
  title:
    'Craig Ranch Neighborhoods & Collections | North Las Vegas Communities',
  description:
    'Explore Craig Ranch neighborhoods: Jasmine Ranch, Centennial Crossing, Seabreeze, and Century Communities collections (Mohave, Essence, Serenity, Olympic, Monarch). Homes from $370K to $1.8M. Find your perfect community in North Las Vegas. Call (702) 820-5408.',
  keywords:
    'Craig Ranch neighborhoods, Jasmine Ranch, Centennial Crossing, Seabreeze, Century Communities, Mohave Collection, Essence Collection, Serenity Collection, Olympic Collection, Monarch Collection, North Las Vegas communities',
  path: '/neighborhoods',
});

export default function NeighborhoodsPage() {
  const neighborhoods = [
    {
      name: 'Jasmine Ranch',
      description:
        'This subdivision primarily features two-bedroom condos, offering a more affordable entry point into the community.',
      features: ['Two-Bedroom Condos', 'Affordable Entry Point', 'Pool & Spa', 'Fitness Center'],
      icon: Home,
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
    {
      name: 'Centennial Crossing',
      description:
        'This area provides more upscale options, including larger condos/townhomes that can have up to four bedrooms.',
      features: ['Larger Condos/Townhomes', 'Up to 4 Bedrooms', 'Upscale Options', 'Modern Amenities'],
      icon: Building2,
      color: 'text-[#16B286]',
      bgColor: 'bg-[#16B286]/10',
    },
    {
      name: 'Seabreeze',
      description:
        'Homes in this higher-end subdivision often feature larger lots (up to half an acre), guesthouses, and expansive garages.',
      features: ['Larger Lots (up to 0.5 acres)', 'Guesthouses', 'Expansive Garages', 'Higher-End Homes'],
      icon: Sparkles,
      color: 'text-[#0A2540]',
      bgColor: 'bg-[#0A2540]/10',
    },
  ];

  const centuryCollections = [
    {
      name: 'Mohave Collection',
      description: 'Distinctive floor plans designed for modern living',
    },
    {
      name: 'Essence Collection',
      description: 'Thoughtfully designed homes with contemporary features',
    },
    {
      name: 'Serenity Collection',
      description: 'Peaceful living spaces with elegant design elements',
    },
    {
      name: 'Olympic Collection',
      description: 'Premium homes with exceptional quality and finishes',
    },
    {
      name: 'Monarch Collection',
      description: 'Luxury floor plans with sophisticated details',
    },
  ];

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Craig Ranch Neighborhoods & Collections
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Explore the distinct subdivisions and builder collections within the
            master-planned community of Craig Ranch in North Las Vegas. Each
            neighborhood offers unique housing options and amenities.
          </p>
        </div>
      </div>

      {/* Main Neighborhoods Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <MapPin className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Key Craig Ranch Neighborhoods & Subdivisions
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Craig Ranch features a mix of single-family homes and condos across
              several distinct subdivisions, each with its own character and
              amenities.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {neighborhoods.map((neighborhood, index) => {
              const Icon = neighborhood.icon;
              return (
                <Card key={index} className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${neighborhood.bgColor} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`h-6 w-6 ${neighborhood.color}`} />
                    </div>
                    <CardTitle className='text-2xl'>{neighborhood.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='text-base mb-4'>
                      {neighborhood.description}
                    </CardDescription>
                    <div className='space-y-2'>
                      <h4 className='text-sm font-semibold text-[#0A2540] mb-2'>
                        Key Features:
                      </h4>
                      <ul className='space-y-1'>
                        {neighborhood.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='text-sm text-gray-600 flex items-center'
                          >
                            <span className='text-[#16B286] mr-2'>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Century Communities Collections */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#16B286]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Building2 className='h-8 w-8 text-[#16B286]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Century Communities Collections in Craig Ranch
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              A significant portion of Craig Ranch was built by Century
              Communities, which grouped their offerings into several collections
              of floor plans, each with multiple home designs.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {centuryCollections.map((collection, index) => (
              <Card
                key={index}
                className='border-0 shadow-lg bg-white hover:shadow-xl transition-shadow'
              >
                <CardHeader>
                  <CardTitle className='text-lg'>{collection.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{collection.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Housing Styles & Amenities */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <TreePine className='h-8 w-8 text-[#0A2540]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Craig Ranch Housing Styles & Community Amenities
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-bold text-[#0A2540] mb-6'>
                Craig Ranch Housing Styles
              </h3>
              <div className='space-y-4 text-gray-700'>
                <p>
                  Across these neighborhoods, residents find diverse housing
                  styles, primarily{' '}
                  <strong>Spanish and Mediterranean-inspired</strong> single-family
                  homes with:
                </p>
                <ul className='space-y-2 ml-6'>
                  <li className='flex items-start'>
                    <span className='text-[#16B286] mr-2'>•</span>
                    <span>Desert-friendly landscaping</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-[#16B286] mr-2'>•</span>
                    <span>Multi-car garages</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-[#16B286] mr-2'>•</span>
                    <span>Covered patios</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-[#16B286] mr-2'>•</span>
                    <span>Modern floor plans</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-[#0A2540] mb-6'>
                Craig Ranch Community Amenities
              </h3>
              <div className='space-y-4 text-gray-700'>
                <p>
                  The entire master plan is connected by a network of parks,
                  walking trails, and a private{' '}
                  <strong>3.5-acre community park</strong>.
                </p>
                <div className='bg-[#F7F9FC] rounded-lg p-6'>
                  <h4 className='font-semibold text-[#0A2540] mb-3'>
                    Craig Ranch Regional Park (170 acres)
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center'>
                      <TreePine className='h-4 w-4 text-[#16B286] mr-2' />
                      Three dog parks
                    </li>
                    <li className='flex items-center'>
                      <TreePine className='h-4 w-4 text-[#16B286] mr-2' />
                      65,000-square-foot skate park
                    </li>
                    <li className='flex items-center'>
                      <TreePine className='h-4 w-4 text-[#16B286] mr-2' />
                      Amphitheater
                    </li>
                    <li className='flex items-center'>
                      <TreePine className='h-4 w-4 text-[#16B286] mr-2' />
                      Sports facilities (baseball, basketball, tennis, volleyball)
                    </li>
                    <li className='flex items-center'>
                      <TreePine className='h-4 w-4 text-[#16B286] mr-2' />
                      Community gardens
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Range Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#16B286]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Users className='h-8 w-8 text-[#16B286]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Home Price Range
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Home prices in Craig Ranch vary, with new construction and resale
              options available across different square footage ranges.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='border-0 shadow-lg bg-white'>
              <CardHeader>
                <CardTitle className='text-xl'>Entry Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-3xl font-bold text-[#16B286] mb-2'>
                  $415,000+
                </div>
                <CardDescription>
                  3-bedroom homes, perfect for first-time buyers and families
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg bg-white'>
              <CardHeader>
                <CardTitle className='text-xl'>Mid-Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-3xl font-bold text-[#3A8DDE] mb-2'>
                  $500,000 - $650,000
                </div>
                <CardDescription>
                  Spacious homes with modern amenities and premium finishes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg bg-white'>
              <CardHeader>
                <CardTitle className='text-xl'>Luxury</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-3xl font-bold text-[#0A2540] mb-2'>
                  $738,700+
                </div>
                <CardDescription>
                  4+ bedroom homes with larger lots, guesthouses, and premium
                  features
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <MapPin className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Craig Ranch Location
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Explore the location of Craig Ranch and its distinct neighborhoods in
              North Las Vegas. The community is conveniently located near major
              access routes, schools, and the 170-acre Craig Ranch Regional Park.
            </p>
          </div>
          <div className='relative'>
            <Suspense fallback={<MapSkeleton />}>
              <GoogleMap
                address='Craig Ranch, North Las Vegas, NV 89031'
                latitude={36.2831}
                longitude={-115.1331}
                zoom={13}
                height='500px'
                title='Craig Ranch Neighborhoods Location'
              />
            </Suspense>
          </div>
          <div className='mt-6 text-center'>
            <Link
              href='https://www.google.com/maps/search/?api=1&query=Craig+Ranch+North+Las+Vegas+NV+89031'
              target='_blank'
              rel='noopener noreferrer'
              prefetch={false}
              className='text-[#3A8DDE] hover:text-[#2A7DCE] font-semibold inline-flex items-center gap-2'
            >
              <MapPin className='h-4 w-4' />
              Open in Google Maps
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Find Your Perfect Craig Ranch Neighborhood
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Dr. Jan Duffy can provide you with the most current and specific
            listings within the Craig Ranch community that match your
            requirements. Contact her today for personalized guidance.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
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
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id='neighborhoods-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'ResidentialComplex',
              name: 'Craig Ranch',
              description:
                'Master-planned community in North Las Vegas featuring multiple neighborhoods including Jasmine Ranch, Centennial Crossing, Seabreeze, and Century Communities collections.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89031',
                addressCountry: 'US',
              },
              numberOfUnits: {
                '@type': 'QuantitativeValue',
                value: 'Multiple Collections',
              },
              amenityFeature: [
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Craig Ranch Regional Park',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Community Parks',
                  value: true,
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Walking Trails',
                  value: true,
                },
              ],
            },
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Neighborhoods', url: `${baseUrl}/neighborhoods` },
            ]),
            generateWebPageSchema({
              name: 'Craig Ranch Neighborhoods & Collections | North Las Vegas Communities',
              description:
                'Explore the distinct neighborhoods in Craig Ranch: Jasmine Ranch, Centennial Crossing, Seabreeze, and Century Communities collections.',
              url: `${baseUrl}/neighborhoods`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Neighborhoods', url: `${baseUrl}/neighborhoods` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}

