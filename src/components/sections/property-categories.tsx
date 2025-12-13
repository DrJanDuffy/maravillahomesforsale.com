import Link from 'next/link';
import Image from 'next/image';
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

export default function PropertyCategories() {
  const categories = [
    {
      title: 'Single Story Homes',
      description: 'Spacious single-story homes perfect for families',
      price: '1,519 - 2,947 sq.ft.',
      image: '/single story Craig Ranch Homes (2).jpg',
      count: '17 Floor Plans',
      features: ['Up to 5 Bedrooms', 'Up to 3 Bathrooms', '2 Bay Garage'],
    },
    {
      title: 'Two Story Homes',
      description: 'Elegant two-story homes with modern layouts',
      price: '1,519 - 2,947 sq.ft.',
      image: '/double story home craig ranch las vegas.jpg',
      count: '17 Floor Plans',
      features: ['Up to 5 Bedrooms', 'Up to 3 Bathrooms', '2 Bay Garage'],
    },
    {
      title: 'Gated Community',
      description: 'Master planned community with incredible amenities',
      price: '6 Neighborhoods',
      image: '/gated community home craig ranch las vegas.jpg',
      count: '7 Parks + Trails',
      features: ['Gated Entry', 'Regional Park', 'Miles of Trails'],
    },
  ];

  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Craig Ranch Property Categories
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Explore our diverse selection of premium properties in Craig Ranch
          </p>
        </div>

        {/* Property Categories Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {categories.map((category, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg'
            >
              {/* Property Image */}
              <div className='relative h-48 w-full overflow-hidden'>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority={index === 0}
                />
              </div>

              <CardHeader>
                <CardTitle className='text-2xl text-[#0A2540]'>
                  {category.title}
                </CardTitle>
                <CardDescription className='text-base'>
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  {category.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant='outline'
                      className='text-[#0A2540] border-[#0A2540]/20'
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className='flex justify-between items-center pt-2'>
                  <span className='text-[#16B286] font-semibold text-lg'>
                    {category.price}
                  </span>
                  <Badge variant='secondary' className='text-sm'>
                    {category.count}
                  </Badge>
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
                    View Properties
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
