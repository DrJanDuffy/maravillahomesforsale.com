import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function FeaturedCommunities() {
  const communities = [
    {
      name: '6 Neighborhoods',
      description:
        'Multiple inspired home collections across 6 distinct neighborhoods',
      avgPrice: '17 Floor Plans',
      homesAvailable: '1,519-2,947 sq.ft.',
      amenities: ['Single Story', 'Two Story', 'Up to 5 Bedrooms'],
    },
    {
      name: 'Parks & Recreation',
      description:
        '7 community parks plus a 3.5-acre park with miles of trails',
      avgPrice: 'Regional Park',
      homesAvailable: 'Nearby Access',
      amenities: ['Walking Trails', 'Playgrounds', 'Open Spaces'],
    },
    {
      name: 'Prime Location',
      description: 'Convenient proximity to major area hubs and transportation',
      avgPrice: 'Easy Access',
      homesAvailable: 'I-15 & 215',
      amenities: ['Nellis AFB', 'VA Hospital', 'Shopping'],
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Featured Craig Ranch Communities
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover the unique character of each area within Craig Ranch
          </p>
        </div>

        {/* Communities Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {communities.map((community, index) => (
            <Card
              key={index}
              className='bg-[#F7F9FC] hover:shadow-lg transition-all duration-300 border-0'
            >
              <CardHeader>
                <CardTitle className='text-2xl text-[#0A2540]'>
                  {community.name}
                </CardTitle>
                <CardDescription className='text-base'>
                  {community.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Average Price:</span>
                    <Badge
                      variant='default'
                      className='bg-[#16B286] text-white font-semibold text-base px-3 py-1'
                    >
                      {community.avgPrice}
                    </Badge>
                  </div>
                  <Separator />
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Homes Available:</span>
                    <Badge variant='secondary' className='font-semibold'>
                      {community.homesAvailable}
                    </Badge>
                  </div>
                </div>

                <Separator className='my-4' />

                <div>
                  <h4 className='text-sm font-semibold text-[#0A2540] mb-3'>
                    Key Amenities:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {community.amenities.map((amenity, amenityIndex) => (
                      <Badge
                        key={amenityIndex}
                        variant='outline'
                        className='bg-white text-[#0A2540] border-gray-200'
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
                >
                  <Link
                    href='http://drjanduffy.realscout.com/onboarding'
                    target='_blank'
                    rel='noopener noreferrer'
                    prefetch={false}
                  >
                    Explore {community.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
