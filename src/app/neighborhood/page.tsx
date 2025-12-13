import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layout/page-layout';
import FeaturedCommunities from '@/components/sections/featured-communities';
import NorthLasVegasNeighborhoods from '@/components/sections/north-las-vegas-neighborhoods';
import MaravillaListings from '@/components/sections/maravilla-listings';
import MaravillaPropertySearch from '@/components/sections/maravilla-property-search';
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
  Hospital,
  Dumbbell,
  Building2,
  UtensilsCrossed,
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
    'Maravilla is a premier master-planned community in Las Vegas featuring luxury homes, excellent schools, parks, and convenient amenities. Discover why families choose Maravilla. Call (702) 500-1953.',
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
            A premier master-planned community in North Las Vegas featuring luxury homes, excellent schools, parks, and convenient access to shopping, dining, and major highways.
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

      {/* Detailed Neighborhood Information */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Property Overview
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Nestled in the heart of North Las Vegas&apos;s 89031 zip code, Maravilla offers the perfect blend of suburban serenity and urban convenience. Celebrated for its pristine upkeep and desert-friendly landscaping, this residence is part of a well-established neighborhood that has matured beautifully over the years. The community features a diverse selection of <Link href='/homes' className='text-[#3A8DDE] hover:underline font-medium'>homes ranging from $380,000 to $600,000</Link>, providing options for various budgets and preferences. Explore <Link href='/home-descriptions' className='text-[#3A8DDE] hover:underline font-medium'>detailed home descriptions</Link> and <Link href='/amenities' className='text-[#3A8DDE] hover:underline font-medium'>community amenities</Link>.
          </p>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Maravilla homes are known for their quality construction, modern amenities, and thoughtful design. Properties feature 3-5 bedrooms, 2-4 bathrooms, and range from 1,800 to 3,500 square feet. The homes were built between 2005 and 2014, representing a period of quality construction in North Las Vegas. These properties benefit from established neighborhoods with mature landscaping, proven construction methods, and well-maintained infrastructure. View <Link href='/map-and-nearby-places' className='text-[#3A8DDE] hover:underline font-medium'>nearby places</Link> and <Link href='/community' className='text-[#3A8DDE] hover:underline font-medium'>community features</Link>.
          </p>
        </div>
      </section>

      {/* Location & Transportation */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Location & Transportation
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Maravilla is conveniently connected to major routes, making it easy to access the entire Las Vegas Valley and beyond. The strategic location provides excellent connectivity while maintaining a peaceful residential atmosphere. See our <Link href='/map-and-nearby-places' className='text-[#3A8DDE] hover:underline font-medium'>interactive map</Link> and explore <Link href='/community' className='text-[#3A8DDE] hover:underline font-medium'>community amenities</Link>.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Highway Access
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <MapPin className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Just 5 minutes from the I-215 Northern Beltway, providing easy access to the entire Las Vegas Valley</span>
                </li>
                <li className='flex items-start'>
                  <MapPin className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>8 minutes to I-15, connecting to California, Utah, and regional destinations</span>
                </li>
                <li className='flex items-start'>
                  <MapPin className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>A short 20-minute drive to Downtown Las Vegas for entertainment and business</span>
                </li>
                <li className='flex items-start'>
                  <MapPin className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Only 25 minutes to Harry Reid International Airport (formerly McCarran) for convenient travel</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Public Transportation
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                RTC bus stops located nearby on Craig Road provide public transportation access throughout the Las Vegas Valley. This convenient option is perfect for those who prefer not to drive or want to reduce transportation costs. The public transit system connects Maravilla to employment centers, shopping districts, and entertainment venues throughout the region.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                The proximity to major highways and public transportation options means residents can easily commute to work, access shopping and entertainment, and travel throughout the Las Vegas area without long drive times. This connectivity is one of Maravilla&apos;s key advantages, providing the best of both worlds—peaceful residential living with easy access to everything the Las Vegas Valley has to offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping & Dining */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Shopping & Dining in Maravilla
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Within a 1-2 mile radius, you&apos;ll find a variety of shopping and dining options that make daily errands convenient and dining out enjoyable. The area offers everything from everyday essentials to specialty retailers, and from casual family restaurants to upscale dining establishments. Discover more <Link href='/map-and-nearby-places' className='text-[#3A8DDE] hover:underline font-medium'>nearby places</Link> and <Link href='/community' className='text-[#3A8DDE] hover:underline font-medium'>community features</Link>.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Shopping Centers
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                <strong>Shopping:</strong>
              </p>
              <ul className='space-y-2 text-gray-700 mb-6'>
                <li className='flex items-start'>
                  <ShoppingBag className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Smith&apos;s Marketplace at Craig Crossing - Full-service grocery store with pharmacy, bakery, and deli</span>
                </li>
                <li className='flex items-start'>
                  <ShoppingBag className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Walmart Supercenter on Craig Road - Large supercenter offering groceries, household items, electronics, and more</span>
                </li>
                <li className='flex items-start'>
                  <ShoppingBag className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Aliante Market Square - Shopping center featuring various retailers, services, and dining options</span>
                </li>
                <li className='flex items-start'>
                  <ShoppingBag className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Target at Decatur Commons - Popular retailer offering clothing, home goods, electronics, and groceries</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Dining Options
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                A mix of national chains and local favorites provides diverse dining options for every taste and occasion. The area features:
              </p>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-start'>
                  <UtensilsCrossed className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Applebee&apos;s - Family-friendly casual dining with American favorites</span>
                </li>
                <li className='flex items-start'>
                  <UtensilsCrossed className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Buffalo Wild Wings - Sports bar atmosphere with wings and American cuisine</span>
                </li>
                <li className='flex items-start'>
                  <UtensilsCrossed className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>IHOP - Breakfast and family dining with extensive menu</span>
                </li>
                <li className='flex items-start'>
                  <UtensilsCrossed className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Authentic Mexican restaurants - Local favorites offering traditional Mexican cuisine</span>
                </li>
                <li className='flex items-start'>
                  <UtensilsCrossed className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Numerous fast-food options - Quick, convenient meals for busy families</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recreation & Entertainment */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Recreation & Entertainment
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Endless opportunities for relaxation and fun are available within minutes of Maravilla. From outdoor recreation to entertainment venues, residents have access to a wide variety of activities that enhance quality of life.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Outdoor Recreation
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Aliante Golf Club</strong> - 5 minutes away, offering challenging play, beautiful desert scenery, and club amenities</span>
                </li>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Local Community Parks</strong> - Within walking distance, featuring sports fields, playgrounds, walking trails, and picnic areas</span>
                </li>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Aliante Nature Discovery Park</strong> - 7 minutes away, offering walking trails, wildlife viewing, and educational programs</span>
                </li>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Walking distance to local parks with playgrounds, sports courts, and open green spaces</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Entertainment Venues
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Aliante Casino + Hotel</strong> - 10 minutes away, offering world-class gaming, fine dining, live entertainment, and resort amenities</span>
                </li>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Las Vegas Strip</strong> - Approximately 20 minutes away, providing access to world-renowned shows, restaurants, shopping, and attractions</span>
                </li>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Downtown Las Vegas</strong> - Within easy reach, featuring a revitalized entertainment district with restaurants, bars, and attractions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Services */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Essential Services
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Convenient access to critical services ensures that Maravilla residents can meet all their essential needs without traveling far from home. These services are strategically located to provide easy access when needed.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Healthcare Facilities
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <Hospital className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>North Vista Hospital</strong> - 7 minutes away, providing emergency care, surgery, and comprehensive medical services</span>
                </li>
                <li className='flex items-start'>
                  <Hospital className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>VA Medical Center</strong> - 15 minutes away, offering comprehensive healthcare services for veterans</span>
                </li>
                <li className='flex items-start'>
                  <Hospital className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Pharmacies</strong> - CVS and Walgreens within 2 miles, providing prescription services and health products</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Public Safety & Government Services
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>North Las Vegas Police Department</strong> - 5 minutes away, providing law enforcement and public safety services</span>
                </li>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>North Las Vegas Fire Station 52</strong> - 3 minutes away, ensuring rapid response to emergencies</span>
                </li>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>North Las Vegas DMV</strong> - 10 minutes away, providing vehicle registration and driver&apos;s license services</span>
                </li>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>US Post Office</strong> - On Craig Road, 5 minutes away, providing mail services and package shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className='py-16 bg-[#F7F9FC]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Community Features
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            Maravilla is enriched with community amenities that enhance quality of life and provide opportunities for recreation, education, and social connection. These features make the neighborhood more than just a place to live—they create a true community.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Fitness & Recreation Facilities
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <Dumbbell className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Local YMCA</strong> - Just 3 miles away, offering fitness facilities, swimming pools, youth programs, and community activities</span>
                </li>
                <li className='flex items-start'>
                  <Dumbbell className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Planet Fitness</strong> - Nearby affordable fitness center with modern equipment and group classes</span>
                </li>
                <li className='flex items-start'>
                  <Dumbbell className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>EoS Fitness</strong> - Full-service fitness center with extensive equipment, group classes, and spa services</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Educational & Cultural Resources
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Alexander Library</strong> - 5 minutes away, offering books, digital resources, computer access, and community programs</span>
                </li>
                <li className='flex items-start'>
                  <Building2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span><strong>Community Programs</strong> - Various community events, classes, and activities organized throughout the year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Climate */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
            Local Climate
          </h2>
          <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
            North Las Vegas boasts a sunny desert climate that attracts residents seeking year-round outdoor activities and comfortable living. The climate is characterized by abundant sunshine, low humidity, and minimal rainfall, making it ideal for those who enjoy outdoor recreation and prefer to avoid harsh winters.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Weather Patterns
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Around 294 sunny days per year, providing ample opportunity for outdoor activities</span>
                </li>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Summer highs averaging 106°F in July, with low humidity making temperatures more comfortable</span>
                </li>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Winter lows dipping to around 39°F in December, providing mild winters without harsh cold</span>
                </li>
                <li className='flex items-start'>
                  <TreePine className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                  <span>Minimal rainfall, typical of a desert environment, reducing concerns about weather-related disruptions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Climate Benefits
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                The desert climate offers numerous benefits for residents, including the ability to enjoy outdoor activities year-round. The low humidity makes even hot summer days more bearable, and the mild winters mean you can spend time outdoors throughout the year. The abundant sunshine provides natural light for homes and creates a bright, cheerful atmosphere.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                The climate is also ideal for desert landscaping, which requires minimal water and maintenance. This makes it easier and more cost-effective to maintain attractive yards and gardens. The dry climate also means fewer issues with mold, mildew, and other moisture-related problems that can affect homes in more humid climates.
              </p>
            </div>
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
                address='Maravilla, North Las Vegas, NV 89031'
                latitude={36.26276}
                longitude={-115.17182}
                zoom={15}
                height='500px'
                title='Maravilla Community Location'
              />
            </Suspense>
          </div>
          <div className='mt-6 text-center'>
            <Link
              href='https://www.google.com/maps/search/?api=1&query=Maravilla+North+Las+Vegas+NV+89031'
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
              latitude: 36.26276,
              longitude: -115.17182,
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
