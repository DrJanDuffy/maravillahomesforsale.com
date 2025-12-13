import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layout/page-layout';
import FeaturedCommunities from '@/components/sections/featured-communities';
import NorthLasVegasNeighborhoods from '@/components/sections/north-las-vegas-neighborhoods';
import MaravillaListings from '@/components/sections/craig-ranch-listings';
import MaravillaPropertySearch from '@/components/sections/craig-ranch-property-search';
import GoogleMap from '@/components/sections/google-map';
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';
import CommunitiesSkeleton from '@/components/skeletons/communities-skeleton';
import MapSkeleton from '@/components/skeletons/map-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

const DynamicFeaturedCommunities = dynamic(
  () => import('@/components/sections/featured-communities'),
  {
    loading: () => <CommunitiesSkeleton />,
    ssr: true,
  }
);
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
  ShoppingBag,
  TreePine,
  Car,
  Heart,
  Users,
  Home,
  DollarSign,
  TrendingUp,
  MapPin,
  Search,
} from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

// Static generation with ISR - revalidate weekly for community updates
export const revalidate = 604800; // 1 week

export const metadata = genMetadata({
  title: 'Maravilla Homes & Real Estate | Las Vegas Community Guide',
  description:
    'Maravilla is a premier master-planned community in Las Vegas featuring luxury homes, excellent schools, parks, and convenient amenities. Discover why families choose Maravilla. Call (702) 820-5408.',
  keywords:
    'Maravilla, Las Vegas homes, luxury homes, Las Vegas real estate, family neighborhood, master-planned community, Maravilla schools, Maravilla amenities, Las Vegas properties',
  path: '/neighborhood',
});

export default function NeighborhoodPage() {
  const highlights = [
    {
      icon: School,
      title: 'Top-Rated Schools',
      description:
        'Excellent public and private schools serving the Maravilla community',
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping & Dining',
      description:
        'Convenient access to premium shopping centers and diverse dining options',
      color: 'text-[#16B286]',
      bgColor: 'bg-[#16B286]/10',
    },
    {
      icon: TreePine,
      title: 'Parks & Trails',
      description:
        'Community parks, walking trails, and recreational facilities perfect for families',
      color: 'text-[#0A2540]',
      bgColor: 'bg-[#0A2540]/10',
    },
    {
      icon: Car,
      title: 'Prime Location',
      description:
        'Near Nellis Air Force Base, VA Hospital, I-15, and the 215 Beltway for easy access throughout the valley',
      color: 'text-[#3A8DDE]',
      bgColor: 'bg-[#3A8DDE]/10',
    },
  ];

  const stats = [
    { label: 'Neighborhoods', value: '6', icon: Heart },
    { label: 'Floor Plans', value: '13', icon: Users },
    { label: 'Home Size', value: '1,519-2,638 sq.ft.', icon: Home },
    { label: 'Zip Code', value: '89031', icon: MapPin },
  ];

  const realEstateStats = [
    { label: 'Homes For Sale', value: '206', icon: Home },
    { label: 'Average Value', value: '$427,967', icon: DollarSign },
    { label: 'Price per Sq Ft', value: '$242', icon: TrendingUp },
    { label: 'Median Sale Price', value: '$415,000', icon: DollarSign },
  ];

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Welcome to Maravilla
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            A tight-knit, vibrant master-planned community in North Las Vegas.
            A premier master-planned community in Las Vegas featuring luxury homes, excellent schools, parks, and convenient access to shopping, dining, and major highways.
          </p>
        </div>
      </div>

      {/* Featured Listings Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              View All Homes for Sale in Maravilla
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Explore all available properties in Maravilla, Las Vegas
            </p>
          </div>

          <div className='bg-white rounded-xl p-8 shadow-lg'>
            <Suspense fallback={<ListingsSkeleton />}>
              <MaravillaListings
                priceMin='400000'
                priceMax='500000'
                showMap={false}
                listingsPerPage='6'
              />
            </Suspense>
            <div className='mt-6 text-center'>
              <Button
                asChild
                size='lg'
                className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
              >
                <Link href='#search-listings'>
                  Search All Maravilla Homes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-3xl font-bold text-[#0A2540] mb-6'>
                About Maravilla
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  Maravilla is a premier master-planned community in Las Vegas,
                  offering exceptional living experiences for families and
                  individuals seeking luxury homes in a beautiful setting. The
                  community is strategically located with convenient access to
                  shopping, dining, entertainment, and major highways, making it
                  an ideal place to live.
                </p>
                <p>
                  Maravilla&apos;s appeal extends beyond its strategic location and
                  luxury modern homes. The community features beautiful parks,
                  recreational facilities, and a tight-knit atmosphere that
                  brings residents together. Whether you&apos;re looking for a
                  family-friendly environment or a peaceful retreat, Maravilla
                  offers the perfect balance of convenience and lifestyle.
                </p>
                <p>
                  The community offers a diverse selection of homes including
                  single-family residences and luxury estates. Properties are
                  designed with attention to detail and feature modern amenities
                  and quality construction that defines luxury living in Las
                  Vegas.
                </p>
              </div>
            </div>
            <div className='bg-[#F7F9FC] rounded-xl p-8'>
              <h3 className='text-2xl font-bold text-[#0A2540] mb-6'>
                Maravilla Community Stats
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className='text-center'>
                      <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
                        <Icon className='h-6 w-6 text-[#3A8DDE]' />
                      </div>
                      <div className='text-2xl font-bold text-[#0A2540] mb-1'>
                        {stat.value}
                      </div>
                      <div className='text-sm text-gray-600'>{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real Estate Stats */}
          <div className='mb-16 bg-gradient-to-r from-[#F7F9FC] to-white rounded-xl p-8 border border-gray-200'>
            <h3 className='text-2xl font-bold text-[#0A2540] mb-6 text-center'>
                Maravilla Real Estate Stats
            </h3>
            <div className='grid md:grid-cols-4 gap-6'>
              {realEstateStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className='text-center'>
                    <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
                      <Icon className='h-6 w-6 text-[#3A8DDE]' />
                    </div>
                    <div className='text-2xl font-bold text-[#0A2540] mb-1'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Home Specifications */}
          <div className='mb-16 bg-gradient-to-r from-[#F7F9FC] to-white rounded-xl p-8 border border-gray-200'>
            <h3 className='text-2xl font-bold text-[#0A2540] mb-6 text-center'>
                Maravilla Home Specifications
            </h3>
            <div className='grid md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#3A8DDE] mb-2'>13</div>
                <div className='text-gray-600'>Floor Plans</div>
                <div className='text-xs text-gray-500 mt-1'>
                  by Century Communities
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#16B286] mb-2'>
                  1,519-2,638
                </div>
                <div className='text-gray-600'>Square Feet</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#0A2540] mb-2'>5</div>
                <div className='text-gray-600'>Bedrooms Max</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#3A8DDE] mb-2'>3</div>
                <div className='text-gray-600'>Bathrooms Max</div>
              </div>
            </div>
            <div className='mt-6 text-center'>
              <p className='text-gray-600'>
                Single and two-story homes with 2 bay garages, designed for
                every family member
              </p>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
            What Makes Maravilla Special
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className='border-0 shadow-lg'>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${highlight.bgColor} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`h-6 w-6 ${highlight.color}`} />
                    </div>
                    <CardTitle>{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{highlight.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maravilla Parks & Amenities Section */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#16B286]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <TreePine className='h-8 w-8 text-[#16B286]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Maravilla Parks & Amenities
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              beautiful outdoor spaces for recreation, relaxation, and community
              events. Residents enjoy access to parks with walking trails,
              recreational facilities, and gathering areas perfect for families
              and outdoor enthusiasts.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Amphitheater</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seating for over 10,000 people for concerts, outdoor movies,
                  and community events. A hot spot for summer entertainment.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Skate Park</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  65,000 square-foot skate park for all skill levels
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Sports Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Two lighted competition baseball fields, tennis, volleyball
                  and basketball courts
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Dog Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Three dedicated dog parks for your furry family members
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Community Gardens</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Community gardens for residents to grow fresh produce
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Civic Plazas & Ramadas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Four civic plazas and eight reservable ramadas for gatherings
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Playgrounds</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Two playgrounds with unique features including giant rabbit,
                  fiberglass tarantula, rattlesnake slide, and treehouse with
                  forest sounds
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-lg'>Nature Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nature discovery area at the edge of the park&apos;s pond for
                  children to explore
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
                Maravilla Location
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Located in Las Vegas, Maravilla is conveniently situated with easy
              access to major highways, shopping centers, schools, and
              entertainment. The community offers excellent connectivity to
              parks, and shopping.
            </p>
          </div>
          <div className='relative'>
            <Suspense fallback={<MapSkeleton />}>
              <GoogleMap
                address='Maravilla, Las Vegas, NV'
                latitude={36.1699}
                longitude={-115.1398}
                zoom={13}
                height='500px'
                title='Maravilla Community Location'
              />
            </Suspense>
          </div>
          <div className='mt-6 text-center'>
            <Link
              href='https://www.google.com/maps/search/?api=1&query=Maravilla+Las+Vegas+NV'
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

      {/* Schools Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <School className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
                Maravilla Schools
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Maravilla is served by excellent public and private schools within
              the Clark County School District. Below are the nearby schools
              serving the Maravilla community:
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mb-4'>
                  <School className='h-6 w-6 text-[#3A8DDE]' />
                </div>
                <CardTitle>Elementary Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <strong>Eva G. Simmons Elementary School</strong>
                  <br />
                  <span className='text-sm text-gray-500 mt-2 block'>
                    B ranking on Niche • Family picnics • Book bus
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#16B286]/10 rounded-lg flex items-center justify-center mb-4'>
                  <School className='h-6 w-6 text-[#16B286]' />
                </div>
                <CardTitle>Middle Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <strong>Clifford O. Pete Findlay Middle School</strong>
                  <br />
                  <span className='text-sm text-gray-500 mt-2 block'>
                    C ranking on Niche • Loved by alumni
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='border-0 shadow-lg'>
              <CardHeader>
                <div className='w-12 h-12 bg-[#0A2540]/10 rounded-lg flex items-center justify-center mb-4'>
                  <School className='h-6 w-6 text-[#0A2540]' />
                </div>
                <CardTitle>High Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <strong>Mojave High School</strong>
                  <br />
                  <span className='text-sm text-gray-500 mt-2 block'>
                    C ranking on Niche • Guitar club • Bowling team • Boys&apos;
                    basketball back-to-back state championships (2022, 2023)
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Maravilla Homes Section */}
      <section id='search-listings' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='w-16 h-16 bg-[#3A8DDE]/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <Search className='h-8 w-8 text-[#3A8DDE]' />
            </div>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
              Search Maravilla Homes for Sale
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Browse available properties in Maravilla, Las Vegas. Use the
              filters below to find your perfect home.
            </p>
          </div>

          {/* Real Estate Stats Summary */}
          <div className='mb-8 bg-gradient-to-r from-[#F7F9FC] to-white rounded-xl p-6 border border-gray-200'>
            <div className='flex flex-wrap items-center justify-center gap-6'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#0A2540]'>206</div>
                <div className='text-sm text-gray-600'>Homes For Sale</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#3A8DDE]'>$427,967</div>
                <div className='text-sm text-gray-600'>Average Value</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#16B286]'>$242</div>
                <div className='text-sm text-gray-600'>Price per Sq Ft</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#0A2540]'>$415,000</div>
                <div className='text-sm text-gray-600'>Median Sale Price</div>
              </div>
              <div className='flex flex-wrap gap-2 justify-center w-full mt-4'>
                <Badge variant='outline' className='text-sm'>
                  Price Range: $370K - $1.8M
                </Badge>
                <Badge variant='outline' className='text-sm'>
                  46 Days on Market
                </Badge>
              </div>
            </div>
          </div>

          {/* RealScout Listings Widget - Maravilla Filtered */}
          <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg mb-8'>
            <div className='mb-6'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
                Current Maravilla Listings
              </h3>
              <p className='text-gray-600'>
                Properties in Maravilla, Las Vegas - Browse available homes
                across various price ranges
              </p>
            </div>

            <Suspense fallback={<ListingsSkeleton />}>
              <MaravillaListings
                priceMin='370000'
                priceMax='1800000'
                showMap={true}
                listingsPerPage='12'
              />
            </Suspense>

            <div className='mt-6 text-center'>
              <p className='text-gray-400 text-xs mb-4'>
                If listings don&apos;t appear, please refresh the page or contact us
                directly.
              </p>
              <Button
                asChild
                variant='outline'
                className='bg-white hover:bg-gray-50'
              >
                <Link href='/homes'>View All North Las Vegas Listings</Link>
              </Button>
            </div>
          </div>

          {/* Advanced Property Search Widget */}
          <div className='bg-white rounded-xl p-8 shadow-lg border border-gray-200'>
            <div className='mb-6'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
                Advanced Maravilla Property Search
              </h3>
              <p className='text-gray-600'>
                Use our advanced search tool to find properties matching your
                specific criteria in Maravilla and surrounding areas.
              </p>
            </div>

            <Suspense
              fallback={
                <div className='min-h-[500px] flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
                    <p className='text-gray-500 text-sm'>
                      Loading property search...
                    </p>
                  </div>
                </div>
              }
            >
              <MaravillaPropertySearch />
            </Suspense>
          </div>
        </div>
      </section>

      <Suspense fallback={<CommunitiesSkeleton />}>
        <DynamicFeaturedCommunities />
      </Suspense>
      <NorthLasVegasNeighborhoods />

      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-4'>
            Ready to Call Maravilla Home?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Discover why so many families choose Maravilla. Browse available
            properties or contact us to learn more about this exceptional
            community.
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
              <Link href='/neighborhoods'>Explore Neighborhoods</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/contact'>Contact Dr. Jan Duffy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data for Neighborhood/Community */}
      <Script
        id='maravilla-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
            '@context': 'https://schema.org',
            '@type': 'ResidentialComplex',
            name: 'Maravilla',
            description:
              'A premier master-planned community in Las Vegas, Nevada featuring luxury homes, excellent schools, parks, and convenient amenities.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.2831,
              longitude: -115.1331,
            },
            numberOfBedrooms: {
              '@type': 'QuantitativeValue',
              minValue: 3,
              maxValue: 5,
            },
            numberOfBathroomsTotal: {
              '@type': 'QuantitativeValue',
              minValue: 2,
              maxValue: 3,
            },
            floorSize: {
              '@type': 'QuantitativeValue',
              minValue: 1519,
              maxValue: 2638,
              unitCode: 'SQM',
            },
            amenityFeature: [
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Gated Community',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Maravilla Parks',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Walking Trails',
                value: true,
              },
              {
                '@type': 'LocationFeatureSpecification',
                name: 'Community Parks',
                value: true,
              },
            ],
            nearbyAttraction: [
              {
                '@type': 'TouristAttraction',
                name: 'Maravilla Parks',
                description:
                  'Community parks featuring recreational facilities, walking trails, and gathering areas for residents',
              },
            ],
            },
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Maravilla Neighborhood', url: `${baseUrl}/neighborhood` },
            ]),
            generateWebPageSchema({
              name: 'Maravilla Homes & Real Estate | Las Vegas Community Guide',
              description:
                'Maravilla homes for sale in Las Vegas. Discover luxury homes in this premier master-planned community with excellent schools, parks, and convenient amenities.',
              url: `${baseUrl}/neighborhood`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Maravilla Neighborhood', url: `${baseUrl}/neighborhood` },
              ],
            }),
          ]),
        }}
      />
    </PageLayout>
  );
}
