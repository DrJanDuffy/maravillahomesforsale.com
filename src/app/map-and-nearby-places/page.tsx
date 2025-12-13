import PageLayout from '@/components/layout/page-layout';
import GoogleMap from '@/components/sections/google-map';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MapPin,
  School,
  TreePine,
  UtensilsCrossed,
  Coffee,
  CreditCard,
  Dumbbell,
  ShoppingBag,
  Hospital,
  Car,
  Building2,
} from 'lucide-react';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Maravilla Map & Nearby Places | Schools, Parks, Restaurants, Shopping',
  description:
    'Explore Maravilla, North Las Vegas location with interactive map. Discover nearby schools, parks, restaurants, shopping, gyms, and essential services. Find everything you need within minutes of Maravilla homes.',
  keywords:
    'Maravilla map, North Las Vegas location, nearby schools, parks near Maravilla, restaurants North Las Vegas, shopping Maravilla, gyms near Maravilla',
  path: '/map-and-nearby-places',
});

export default function MapAndNearbyPlacesPage() {
  return (
    <PageLayout>
      <article>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Maravilla Map & Nearby Places
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl'>
              Discover everything Maravilla, North Las Vegas has to offer. Explore schools, parks, restaurants, shopping, and essential services all within minutes of your new home. Browse <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>available homes</Link>, explore the <Link href='/neighborhood' className='text-white hover:text-gray-200 underline font-medium'>neighborhood guide</Link>, or see <Link href='/community' className='text-white hover:text-gray-200 underline font-medium'>community features</Link>.
            </p>
          </div>
        </section>

        {/* Interactive Map */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
              Interactive Location Map
            </h2>
            <Suspense fallback={<div className='h-[500px] bg-gray-200 animate-pulse rounded-lg' />}>
              <GoogleMap
                address='Maravilla, North Las Vegas, NV 89031'
                latitude={36.26276}
                longitude={-115.17182}
                zoom={15}
                height='500px'
                title='Maravilla Community Location'
              />
            </Suspense>
            <div className='mt-6 text-center'>
              <p className='text-gray-600 mb-4'>
                Maravilla is located in North Las Vegas, NV 89031, providing convenient access to major highways, shopping, dining, and entertainment.
              </p>
              <a
                href='https://www.google.com/maps/search/?api=1&query=Maravilla+North+Las+Vegas+NV+89031'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3A8DDE] hover:underline font-medium'
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* Schools */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Nearby Schools
            </h2>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl'>
              Maravilla is served by excellent schools in the Clark County School District, providing quality education from elementary through high school. These schools offer comprehensive academic programs, extracurricular activities, and support services that help students succeed.
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Elementary Schools
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <School className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Triggs Elementary School</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Highly-rated elementary school serving Maravilla students with strong academic programs and supportive learning environment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <School className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Hartke Elementary School</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Quality elementary education with focus on student achievement and character development.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Middle and High Schools
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <School className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Findlay Middle School</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Comprehensive middle school program preparing students for high school success.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <School className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Legacy High School</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Top-rated high school offering advanced placement courses, career and technical education, and comprehensive college preparation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <School className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Shadow Ridge High School</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Excellent high school with strong academic programs and diverse extracurricular opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parks and Recreation */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Parks and Recreation
            </h2>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl'>
              Maravilla residents enjoy access to numerous parks and recreational facilities that provide opportunities for outdoor activities, family fun, and community gatherings. These spaces enhance quality of life and provide venues for healthy, active lifestyles.
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Community Parks
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <TreePine className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Community Parks</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Multiple community parks within walking distance feature sports fields, playgrounds, walking trails, and picnic areas. These parks serve as gathering places for families and provide safe spaces for children to play.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: Walking distance | Features: Sports fields, playgrounds, trails, picnic areas
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <TreePine className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Aliante Nature Discovery Park</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Located 7 minutes away, this nature park offers walking trails, wildlife viewing, and educational programs. The park provides a peaceful escape into nature while remaining close to urban conveniences.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 7 minutes | Features: Nature trails, wildlife viewing, educational programs
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Recreational Facilities
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <TreePine className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Local Community Parks</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Multiple community parks within walking distance offer playgrounds, sports courts, and open green spaces. These parks serve as gathering places for families and provide safe spaces for children to play.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: Walking distance | Features: Playgrounds, sports courts, green spaces
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <TreePine className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>YMCA</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        The local YMCA, just 3 miles away, offers fitness facilities, swimming pools, youth programs, and community activities. Membership provides access to comprehensive health and wellness programs.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 3 miles | Features: Fitness facilities, pools, youth programs
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shopping and Dining */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Shopping and Dining
            </h2>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl'>
              Maravilla residents enjoy convenient access to premier shopping centers and diverse dining options. From everyday essentials to specialty retailers, and from casual family restaurants to upscale dining, everything you need is within minutes of home.
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Shopping Centers
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <ShoppingBag className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Smith&apos;s Marketplace at Craig Crossing</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Full-service grocery store with pharmacy, bakery, deli, and general merchandise. One-stop shopping for everyday needs within 1-2 miles of Maravilla.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 1-2 miles | Features: Groceries, pharmacy, bakery, deli
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <ShoppingBag className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Walmart Supercenter on Craig Road</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Large supercenter offering groceries, household items, electronics, clothing, and more. Convenient one-stop shopping for all your needs.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 1-2 miles | Features: Full supercenter with groceries and general merchandise
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <ShoppingBag className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Aliante Market Square</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Shopping center featuring various retailers, services, and dining options. Convenient location for specialty shopping and services.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: Nearby | Features: Multiple retailers and services
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <ShoppingBag className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Target at Decatur Commons</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Popular retailer offering clothing, home goods, electronics, groceries, and more. Known for quality products and competitive prices.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: Nearby | Features: Full Target store with groceries and general merchandise
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Dining Options
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <UtensilsCrossed className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>National Chain Restaurants</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Popular chains including Applebee&apos;s, Buffalo Wild Wings, and IHOP provide familiar dining options for families. These restaurants offer consistent quality and family-friendly atmospheres.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Options: Applebee&apos;s, Buffalo Wild Wings, IHOP, and more
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <UtensilsCrossed className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Authentic Mexican Restaurants</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Local favorites offering authentic Mexican cuisine, from casual taquerias to full-service restaurants. These establishments provide flavorful, traditional dishes that reflect the area&apos;s cultural diversity.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Variety: Multiple authentic Mexican restaurants in the area
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <UtensilsCrossed className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Fast Food Options</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Numerous fast-food options provide quick, convenient meals for busy families. These establishments offer drive-through service and quick dining options for on-the-go lifestyles.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Convenience: Multiple fast-food options with drive-through service
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Coffee className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Coffee Shops</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Coffee shops and cafes provide places to work, meet, or simply enjoy quality coffee and light meals. These establishments offer Wi-Fi, comfortable seating, and welcoming atmospheres.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Features: Wi-Fi, comfortable seating, quality coffee and light meals
                      </p>
                    </CardContent>
                  </Card>
                </div>
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
            <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl'>
              Maravilla residents have convenient access to essential services including healthcare, banking, government services, and more. These services are strategically located to provide easy access when needed.
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Healthcare Facilities
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Hospital className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>North Vista Hospital</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Full-service hospital located just 7 minutes away, providing emergency care, surgery, and comprehensive medical services. The hospital serves the North Las Vegas community with quality healthcare.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 7 minutes | Services: Emergency care, surgery, comprehensive medical services
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Hospital className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>VA Medical Center</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Comprehensive healthcare services for veterans, located 15 minutes away. The center provides specialized care for veterans and their families.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 15 minutes | Services: Veteran healthcare services
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Hospital className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Pharmacies</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        CVS and Walgreens pharmacies within 2 miles provide prescription services, over-the-counter medications, and health products. Convenient locations for prescription pickup and health needs.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: Within 2 miles | Services: Prescriptions, medications, health products
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Government and Public Services
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Building2 className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>North Las Vegas Police Department</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Police services located just 5 minutes away, providing law enforcement and public safety services. Quick response times ensure community safety.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 5 minutes | Services: Law enforcement, public safety
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Building2 className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>North Las Vegas Fire Station 52</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Fire and emergency medical services located just 3 minutes away, ensuring rapid response to emergencies. The station provides fire protection and emergency medical services.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 3 minutes | Services: Fire protection, emergency medical services
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Building2 className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>North Las Vegas DMV</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Department of Motor Vehicles located 10 minutes away, providing vehicle registration, driver&apos;s license services, and other DMV needs. Convenient location for essential vehicle services.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 10 minutes | Services: Vehicle registration, driver&apos;s licenses
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Building2 className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>US Post Office</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Post office on Craig Road, just 5 minutes away, providing mail services, package shipping, and postal needs. Convenient location for all postal services.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 5 minutes | Services: Mail, shipping, postal services
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Amenities */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Additional Nearby Amenities
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Fitness and Recreation
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Dumbbell className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Planet Fitness</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Affordable fitness center with modern equipment, group classes, and convenient hours. Popular choice for budget-conscious fitness enthusiasts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Dumbbell className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>EoS Fitness</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Full-service fitness center with extensive equipment, group classes, personal training, and spa services. Comprehensive fitness and wellness facility.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Banking and Financial Services
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <CreditCard className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>ATMs and Banks</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Multiple banks and ATMs located throughout the area, providing convenient access to banking services. Major banks have branches nearby for all your financial needs.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Building2 className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Alexander Library</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600'>
                        Public library located 5 minutes away, offering books, digital resources, computer access, and community programs. Great resource for families and students.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Transportation and Access
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Major Highways
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Car className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>I-215 Northern Beltway</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Just 5 minutes from Maravilla, the I-215 provides easy access to the entire Las Vegas Valley. This major highway connects to employment centers, shopping districts, entertainment venues, and the Las Vegas Strip.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 5 minutes | Access: Entire Las Vegas Valley
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Car className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>I-15</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Located 8 minutes away, I-15 provides north-south access through Las Vegas and connects to California, Utah, and beyond. Essential for regional travel and commuting.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 8 minutes | Access: Regional and interstate travel
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Public Transportation
                </h3>
                <div className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Car className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>RTC Bus Stops</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        RTC bus stops located nearby on Craig Road provide public transportation access throughout the Las Vegas Valley. Convenient for those who prefer not to drive or want to reduce transportation costs.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Location: Craig Road | Service: Regional Transportation Commission
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Car className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle>Airport Access</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-2'>
                        Harry Reid International Airport (formerly McCarran) is just 25 minutes away, providing convenient access for business and leisure travel. The proximity makes travel planning easy and reduces commute time to the airport.
                      </p>
                      <p className='text-sm text-gray-500'>
                        Distance: 25 minutes | Airport: Harry Reid International Airport
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entertainment */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Entertainment and Recreation
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Golf and Recreation
                </h3>
                <Card>
                  <CardHeader>
                    <div className='flex items-center gap-3'>
                      <TreePine className='h-6 w-6 text-[#3A8DDE]' />
                      <CardTitle>Aliante Golf Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600 mb-2'>
                      Premier golf course located just 5 minutes away, offering challenging play, beautiful desert scenery, and club amenities. The course provides a great escape for golf enthusiasts and social opportunities for members.
                    </p>
                    <p className='text-sm text-gray-500'>
                      Distance: 5 minutes | Features: Championship golf course, club amenities
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Casino and Entertainment
                </h3>
                <Card>
                  <CardHeader>
                    <div className='flex items-center gap-3'>
                      <Building2 className='h-6 w-6 text-[#3A8DDE]' />
                      <CardTitle>Aliante Casino + Hotel</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600 mb-2'>
                      World-class casino and hotel located 10 minutes away, offering gaming, fine dining, live entertainment, and resort amenities. Provides local entertainment without traveling to the Strip.
                    </p>
                    <p className='text-sm text-gray-500'>
                      Distance: 10 minutes | Features: Gaming, dining, entertainment, hotel
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Las Vegas Strip and Downtown
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                While Maravilla offers a peaceful residential environment, the excitement of the Las Vegas Strip and Downtown is just a short drive away. This proximity allows residents to enjoy world-class entertainment, dining, and nightlife whenever desired, while returning home to a quiet, family-friendly neighborhood.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                The Strip is approximately 20 minutes away, providing access to world-renowned shows, restaurants, shopping, and attractions. Downtown Las Vegas, with its revitalized entertainment district, is also within easy reach. This proximity means residents can enjoy the best of both worlds—suburban tranquility and urban excitement.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Structured Data */}
      <Script
        id='map-nearby-places-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Maravilla Map & Nearby Places | Schools, Parks, Restaurants, Shopping',
              description:
                'Explore Maravilla, North Las Vegas location with interactive map. Discover nearby schools, parks, restaurants, shopping, gyms, and essential services.',
              url: `${baseUrl}/map-and-nearby-places`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Map & Nearby Places', url: `${baseUrl}/map-and-nearby-places` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Map & Nearby Places', url: `${baseUrl}/map-and-nearby-places` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}

