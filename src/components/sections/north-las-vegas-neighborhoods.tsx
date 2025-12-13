import Link from 'next/link';

type Neighborhood = {
  name: string;
  description: string;
  avgPrice: string;
  homesAvailable: number;
  amenities: string[];
  image: string;
};

const neighborhoods: Neighborhood[] = [
  {
    name: 'Aliante',
    description: 'Family-friendly community with excellent schools and parks',
    avgPrice: '$450K',
    homesAvailable: 18,
    amenities: ['Top Schools', 'Parks', 'Shopping Center', 'Golf Course'],
    image: '/images/aliante.jpg',
  },
  {
    name: 'Ardiente',
    description: 'Luxury homes with resort-style amenities and mountain views',
    avgPrice: '$750K',
    homesAvailable: 12,
    amenities: ['Resort Pool', 'Fitness Center', 'Mountain Views', 'Clubhouse'],
    image: '/images/ardiente.jpg',
  },
  {
    name: 'Craig Ranch',
    description:
      'Prestigious community with luxury homes and premium amenities',
    avgPrice: '$875K',
    homesAvailable: 25,
    amenities: ['Golf Course', 'Clubhouse', 'Tennis Courts', 'Walking Trails'],
    image: '/images/craig-ranch.jpg',
  },
  {
    name: 'Del Webb at North Ranch',
    description: 'Active adult community for 55+ with resort-style living',
    avgPrice: '$550K',
    homesAvailable: 15,
    amenities: [
      '55+ Community',
      'Resort Pool',
      'Fitness Center',
      'Social Activities',
    ],
    image: '/images/del-webb.jpg',
  },
  {
    name: 'Eldorado',
    description: 'Established neighborhood with mature landscaping and charm',
    avgPrice: '$380K',
    homesAvailable: 22,
    amenities: [
      'Mature Trees',
      'Established Community',
      'Convenient Location',
      'Parks',
    ],
    image: '/images/eldorado.jpg',
  },
  {
    name: 'Heartland at Tule Springs',
    description: 'New construction community with modern amenities',
    avgPrice: '$520K',
    homesAvailable: 30,
    amenities: [
      'New Construction',
      'Modern Amenities',
      'Community Pool',
      'Playground',
    ],
    image: '/images/heartland.jpg',
  },
  {
    name: 'Sun City Aliante',
    description:
      'Active adult community with extensive amenities and activities',
    avgPrice: '$480K',
    homesAvailable: 20,
    amenities: [
      '55+ Community',
      'Extensive Amenities',
      'Social Activities',
      'Golf',
    ],
    image: '/images/sun-city.jpg',
  },
  {
    name: 'Valley Vista',
    description: 'Affordable family community with great location',
    avgPrice: '$420K',
    homesAvailable: 28,
    amenities: ['Affordable Homes', 'Family Friendly', 'Good Schools', 'Parks'],
    image: '/images/valley-vista.jpg',
  },
  {
    name: 'The Villages at Tule Springs',
    description: 'Master-planned community with luxury homes and amenities',
    avgPrice: '$680K',
    homesAvailable: 16,
    amenities: [
      'Master Planned',
      'Luxury Homes',
      'Resort Amenities',
      'Nature Trails',
    ],
    image: '/images/villages-tule-springs.jpg',
  },
];

const NeighborhoodCard = ({ neighborhood }: { neighborhood: Neighborhood }) => {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2'>
      {/* Placeholder for neighborhood image */}
      <div className='h-48 bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] flex items-center justify-center'>
        <div className='text-white text-center'>
          <div className='text-4xl mb-2'>🏘️</div>
          <div className='text-sm opacity-80'>{neighborhood.name}</div>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-semibold text-[#0A2540] mb-3'>
          {neighborhood.name}
        </h3>
        <p className='text-gray-600 mb-4 leading-relaxed'>
          {neighborhood.description}
        </p>

        <div className='space-y-3 mb-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Average Price:</span>
            <span className='text-[#16B286] font-semibold text-lg'>
              {neighborhood.avgPrice}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Homes Available:</span>
            <span className='text-[#3A8DDE] font-semibold'>
              {neighborhood.homesAvailable}
            </span>
          </div>
        </div>

        <div className='mb-6'>
          <h4 className='text-sm font-semibold text-[#0A2540] mb-2'>
            Key Amenities:
          </h4>
          <div className='flex flex-wrap gap-2'>
            {neighborhood.amenities.map((amenity, index) => (
              <span
                key={index}
                className='bg-[#F7F9FC] px-3 py-1 rounded-full text-sm text-[#0A2540] border border-gray-200'
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <Link
          href='http://drjanduffy.realscout.com/onboarding'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={false}
          className='w-full bg-[#3A8DDE] text-white py-3 rounded-lg font-semibold hover:bg-[#2A7DCE] transition-colors duration-200 block text-center'
        >
          View {neighborhood.name} Homes
        </Link>
      </div>
    </div>
  );
};

const NorthLasVegasNeighborhoods = () => {
  return (
    <section className='py-20 bg-[#F7F9FC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            North Las Vegas Neighborhoods
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover the diverse communities of North Las Vegas, each offering
            unique amenities and lifestyle options
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {neighborhoods.map((neighborhood, index) => (
            <NeighborhoodCard key={index} neighborhood={neighborhood} />
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-[#0A2540] mb-4'>
              Find Your Perfect North Las Vegas Home
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Whether you're looking for a family-friendly community, luxury
              living, or an active adult lifestyle, North Las Vegas has the
              perfect neighborhood for you. Let us help you find your dream
              home.
            </p>
            <Link
              href='http://drjanduffy.realscout.com/onboarding'
              target='_blank'
              rel='noopener noreferrer'
              prefetch={false}
              className='bg-[#16B286] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#15A276] transition-colors duration-200 inline-block'
            >
              Start Your Home Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NorthLasVegasNeighborhoods;
