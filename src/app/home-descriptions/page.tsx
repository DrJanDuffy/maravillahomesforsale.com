import { Suspense } from 'react';
import PageLayout from '@/components/layout/page-layout';
import JustSoldGallery from '@/components/sections/just-sold-gallery';
import GoogleMap from '@/components/sections/google-map';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, MapPin, DollarSign, TrendingUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Maravilla Home Descriptions | Luxury Homes in North Las Vegas $380k-$600k',
  description:
    'Explore detailed descriptions of Maravilla luxury homes in North Las Vegas. Features include 3-5 bedrooms, gourmet kitchens, smart home technology, and resort-style amenities. Price range $380,000-$600,000.',
  keywords:
    'Maravilla home descriptions, luxury homes North Las Vegas, Maravilla property features, home specifications, Maravilla amenities, North Las Vegas real estate',
  path: '/home-descriptions',
});

export default function HomeDescriptionsPage() {
  return (
    <PageLayout>
      <article>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Maravilla Homes: Detailed Property Descriptions
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl'>
              Discover the exceptional features and specifications of luxury homes in Maravilla, North Las Vegas. From gourmet kitchens to smart home technology, explore what makes these properties truly special.
            </p>
          </div>
        </section>

        {/* Price Range Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
              Price Range: $380,000-$600,000
            </h2>
            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-[#F7F9FC] rounded-lg p-6 text-center'>
                <DollarSign className='h-12 w-12 text-[#3A8DDE] mx-auto mb-4' />
                <h3 className='text-2xl font-bold text-[#0A2540] mb-2'>$380K - $600K</h3>
                <p className='text-gray-600'>Price Range</p>
              </div>
              <div className='bg-[#F7F9FC] rounded-lg p-6 text-center'>
                <Home className='h-12 w-12 text-[#3A8DDE] mx-auto mb-4' />
                <h3 className='text-2xl font-bold text-[#0A2540] mb-2'>3-5 Bedrooms</h3>
                <p className='text-gray-600'>Bedroom Options</p>
              </div>
              <div className='bg-[#F7F9FC] rounded-lg p-6 text-center'>
                <TrendingUp className='h-12 w-12 text-[#3A8DDE] mx-auto mb-4' />
                <h3 className='text-2xl font-bold text-[#0A2540] mb-2'>4.8% YoY</h3>
                <p className='text-gray-600'>Appreciation Rate</p>
              </div>
            </div>
            <p className='text-lg text-gray-700 text-center max-w-3xl mx-auto'>
              Maravilla homes represent exceptional value in North Las Vegas&apos;s 89031 zip code, offering luxury living at competitive prices. These properties combine modern design with practical features, making them ideal for families, professionals, and investors seeking quality real estate in a thriving community.
            </p>
          </div>
        </section>

        {/* Home Specifications */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Home Specifications
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Architectural Styles
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Maravilla homes feature both single-story and two-story designs, providing options for every lifestyle preference. Single-story homes offer convenience and accessibility, perfect for families with young children or those planning for long-term living. Two-story designs maximize living space while maintaining a compact footprint, ideal for growing families who want separation between living and sleeping areas.
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                    <span>Single-story designs: 1,800-2,500 square feet</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                    <span>Two-story designs: 2,500-3,500 square feet</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                    <span>Premium lot options available with mountain views</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Bedroom and Bathroom Configurations
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  These homes are designed with flexibility in mind, offering 3-5 bedrooms to accommodate various family sizes and needs. The bedroom configurations range from cozy 3-bedroom starter homes to spacious 5-bedroom estates perfect for multi-generational living or home offices.
                </p>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                    <span>3-5 bedrooms with flexible layouts</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                    <span>2-4 bathrooms including primary suite bathrooms</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-5 w-5 text-[#3A8DDE] mr-2 mt-0.5 flex-shrink-0' />
                    <span>Guest bathrooms and powder rooms strategically placed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Garage and Storage Solutions
              </h3>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Every Maravilla home includes attached 2-3 car garages, providing ample space for vehicles, storage, and workshop areas. These garages feature automatic door openers, additional storage systems, and direct access to the home interior. The three-car garage options are particularly popular among families with multiple vehicles or those who need extra storage space for recreational equipment.
              </p>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Construction Timeline and Quality
              </h3>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Maravilla homes were built between 2005 and 2014, representing a period of quality construction in North Las Vegas. These properties benefit from established neighborhoods with mature landscaping, proven construction methods, and well-maintained infrastructure. The construction quality from this era is known for solid foundations, quality materials, and attention to detail that stands the test of time.
              </p>
            </div>
          </div>
        </section>

        {/* Interior Features */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Interior Features
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Gourmet Kitchens with Islands
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  The heart of every Maravilla home is its gourmet kitchen, designed for both everyday cooking and entertaining. These kitchens feature large center islands that serve as gathering spaces, food preparation areas, and casual dining spots. The islands often include additional storage, wine refrigerators, and seating for four to six people, making them perfect for socializing while cooking.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Counter space is abundant, with many kitchens featuring extended countertops that wrap around corners and provide multiple work zones. This design allows multiple people to work in the kitchen simultaneously without feeling crowded, making meal preparation a collaborative and enjoyable experience.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Stainless Appliances and Premium Surfaces
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Modern stainless steel appliances are standard in Maravilla homes, including energy-efficient refrigerators, dishwashers, ranges, and microwaves. Many homes feature upgraded appliances such as double ovens, gas cooktops, and built-in wine coolers. The stainless finish provides a timeless, professional look that complements any design style.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Countertops are crafted from granite or quartz, offering durability, beauty, and easy maintenance. These premium surfaces resist stains, scratches, and heat, making them ideal for active kitchens. The natural patterns in granite or the consistent colors of quartz add elegance to the space while providing practical benefits for daily use.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Walk-In Pantries
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Spacious walk-in pantries provide extensive storage for dry goods, small appliances, and bulk purchases. These pantries are designed with adjustable shelving, allowing homeowners to customize storage to their needs. Many feature additional electrical outlets for small appliances, making them functional spaces beyond simple storage. The walk-in design means you can easily see and access everything, reducing food waste and making meal planning more efficient.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Open Concept Layouts
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Open concept designs create seamless flow between the kitchen, dining, and living areas, making homes feel more spacious and connected. This layout is perfect for entertaining, as hosts can interact with guests while preparing meals. It also allows natural light to flow throughout the main living space, creating a bright and airy atmosphere. The open design makes it easier to supervise children while cooking or working in other areas of the home.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Primary Suites with Walk-In Closets
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  The primary bedroom suites in Maravilla homes are designed as private retreats, featuring spacious bedrooms, luxurious bathrooms, and extensive walk-in closets. These closets often include built-in organization systems with drawers, hanging rods at multiple heights, shoe storage, and accessory organizers. Some feature separate areas for different types of clothing, making it easy to maintain organization and find items quickly.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Spa-Inspired Bathrooms
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Primary bathrooms are designed with relaxation in mind, featuring large soaking tubs, separate walk-in showers with multiple showerheads, dual vanities, and premium fixtures. Many include jetted bathtubs for therapeutic relaxation, while others feature modern freestanding tubs. The spa-like atmosphere is enhanced by natural stone or tile finishes, ample natural light, and thoughtful design that creates a sense of luxury and tranquility.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Home Offices and Bonus Rooms
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Many Maravilla homes include dedicated home office spaces or bonus rooms that can be adapted for various uses. These spaces are perfect for remote work, homeschooling, craft rooms, or additional bedrooms. The flexibility allows homeowners to customize the space to their changing needs over time. Some homes feature these rooms on the main level for convenience, while others place them upstairs for privacy.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Smart Home Integration
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Modern Maravilla homes feature smart home technology that allows homeowners to control lighting, temperature, security systems, and entertainment from their smartphones or voice assistants. This technology includes programmable thermostats, smart locks, video doorbells, and integrated home automation systems. These features provide convenience, energy efficiency, and enhanced security, making daily life easier and more connected.
                </p>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Energy-Efficient Systems
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Maravilla homes are equipped with energy-efficient HVAC systems, high-performance windows, and insulation that help reduce utility costs while maintaining comfort. Many homes feature solar panel compatibility, tankless water heaters, and LED lighting throughout. These energy-efficient features not only save money on monthly utility bills but also contribute to environmental sustainability, making them attractive to eco-conscious buyers.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Elements */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Exterior Elements
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Covered Patios
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Covered patios extend the living space outdoors, providing shaded areas for dining, relaxation, and entertaining year-round. These patios are designed to complement the home&apos;s architecture and often include ceiling fans, lighting, and outdoor electrical outlets. Many feature built-in barbecue areas or are designed to accommodate outdoor kitchens, making them perfect for hosting gatherings and enjoying Las Vegas&apos;s mild climate.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The covered design protects furniture and guests from the intense desert sun while allowing for comfortable outdoor living even during the hottest months. Some patios are large enough to accommodate full outdoor dining sets, lounge areas, and play spaces for children, effectively doubling the usable square footage of the home.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Desert Landscaping
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Professional desert landscaping creates beautiful, low-maintenance yards that thrive in North Las Vegas&apos;s climate. These landscapes feature native and drought-tolerant plants such as agave, yucca, desert willow, and various cacti. The designs incorporate rock features, decorative gravel, and strategically placed trees that provide shade without requiring excessive water.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Desert landscaping not only reduces water usage and maintenance requirements but also creates a unique aesthetic that celebrates the natural beauty of the Southwest. Many yards feature pathways, seating areas, and focal points that make the outdoor space functional and visually appealing throughout the year.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Paver Driveways
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Paver driveways add curb appeal and durability to Maravilla homes. These driveways are constructed from interlocking pavers that can withstand heavy vehicle traffic and temperature fluctuations. Unlike traditional concrete, pavers can be easily replaced if damaged, and they offer design flexibility with various colors, patterns, and textures. The professional installation ensures proper drainage and a level surface that enhances the home&apos;s overall appearance.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Professional Irrigation Systems
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Automated irrigation systems ensure efficient water delivery to landscaping while conserving resources. These systems feature programmable timers, multiple zones for different plant types, and sensors that adjust watering based on weather conditions. Many systems can be controlled remotely via smartphone apps, allowing homeowners to manage their landscaping efficiently even when away from home. The professional installation ensures optimal coverage and water conservation.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Security Features
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Many Maravilla homes include enhanced security features such as alarm systems, security cameras, motion-activated lighting, and reinforced entry doors. These features provide peace of mind and can often result in lower homeowner&apos;s insurance premiums. The security systems are typically professionally installed and can be integrated with smart home technology for remote monitoring and control.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Mountain Views
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Premium lot locations offer stunning mountain views that showcase the natural beauty of the Las Vegas Valley. These views are particularly spectacular during sunrise and sunset, creating a daily visual treat for homeowners. Properties with mountain views often command premium prices and are highly sought after by buyers who appreciate the connection to nature and the unique desert landscape that surrounds North Las Vegas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Amenities */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Community Amenities
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Walking Trails and Parks
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Maravilla features an extensive network of walking trails that connect neighborhoods and provide safe, scenic routes for exercise and recreation. These trails wind through the community, passing by parks, schools, and natural areas. The trails are well-maintained and feature benches, lighting, and signage that make them accessible and enjoyable for all ages and fitness levels.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Community parks are strategically located throughout Maravilla, offering playgrounds, sports courts, picnic areas, and open green spaces. These parks serve as gathering places for families and provide opportunities for children to play and socialize. The park amenities are regularly maintained and updated to ensure they remain safe and attractive for community use.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Picnic Areas and Playgrounds
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Designated picnic areas with tables, grills, and shade structures provide perfect settings for family gatherings, birthday parties, and community events. These areas are often located near playgrounds, making them ideal for families with children. The picnic facilities are available on a first-come, first-served basis, though some larger areas may be reservable for special events.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Children&apos;s playgrounds feature age-appropriate equipment, safety surfacing, and shaded areas for parents. The playgrounds are designed to encourage physical activity, creativity, and social interaction among children. Regular maintenance and safety inspections ensure these spaces remain safe and enjoyable for years to come.
                </p>
              </div>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Pet-Friendly Zones
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Maravilla recognizes that pets are important family members, and the community includes designated pet-friendly zones and dog parks. These areas provide safe spaces for dogs to exercise and socialize, with features such as agility equipment, separate areas for large and small dogs, and waste disposal stations. The pet-friendly approach extends throughout the community, with many trails and parks welcoming leashed pets, making it easy for pet owners to enjoy outdoor activities with their furry companions.
                </p>
              </div>
            </div>
        </section>

        {/* Location Benefits */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Location Benefits
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Minutes to I-215
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Maravilla&apos;s proximity to the I-215 Northern Beltway provides easy access to the entire Las Vegas Valley. This major highway connects residents to employment centers, shopping districts, entertainment venues, and the Las Vegas Strip within minutes. The convenient access means shorter commute times and more time to enjoy life at home. Whether heading to work, the airport, or entertainment destinations, the I-215 makes travel throughout the region efficient and stress-free.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Near Aliante Casino
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  The Aliante Casino + Hotel is just minutes away, offering world-class gaming, dining, entertainment, and hotel accommodations. This proximity provides residents with convenient access to fine dining restaurants, live entertainment, and resort amenities without traveling to the Strip. The casino also hosts community events and provides employment opportunities for area residents, making it an important part of the local economy and social scene.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Premier Shopping and Dining
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  North Las Vegas offers exceptional shopping and dining options within minutes of Maravilla. Major shopping centers like Aliante Market Square and Craig Crossing provide everything from everyday essentials to specialty retailers. Dining options range from casual family restaurants to upscale establishments, with cuisine representing cultures from around the world. The variety and quality of nearby shopping and dining make daily errands convenient and dining out an enjoyable experience.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Medical Facilities Nearby
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Access to quality healthcare is essential, and Maravilla residents benefit from proximity to North Vista Hospital, urgent care centers, and specialty medical practices. The VA Medical Center is also within easy reach, providing comprehensive healthcare services for veterans. Pharmacies, dental offices, and wellness centers are conveniently located throughout the area, ensuring that healthcare needs can be met quickly and efficiently.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Top-Rated Schools
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Maravilla is served by excellent schools in the Clark County School District, including highly-rated elementary, middle, and high schools. These schools offer comprehensive academic programs, extracurricular activities, and support services that help students succeed. The proximity to quality education is a major draw for families, and the strong school system contributes to property values and community desirability.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Quick Access to Strip and Downtown
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  While Maravilla offers a peaceful residential environment, the excitement of the Las Vegas Strip and Downtown is just a short drive away. This proximity allows residents to enjoy world-class entertainment, dining, and nightlife whenever desired, while returning home to a quiet, family-friendly neighborhood. The best of both worlds—suburban tranquility and urban excitement—is available to Maravilla homeowners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Market Statistics
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Average Days on Market: 25
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Maravilla homes sell quickly, with an average of just 25 days on the market. This fast turnover indicates strong buyer demand and competitive pricing. The quick sales cycle benefits both buyers and sellers—buyers can move into their new homes promptly, while sellers can complete transactions efficiently. This market velocity reflects the desirability of the Maravilla community and the quality of homes available.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The short time on market also suggests that properties are priced appropriately and presented well, attracting serious buyers who recognize value. Well-maintained homes with desirable features tend to sell even faster, sometimes receiving multiple offers within the first week of listing.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Price Per Square Foot: $215-$275
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The price per square foot range of $215-$275 reflects the quality and desirability of Maravilla homes. This pricing is competitive within the North Las Vegas market and represents excellent value for the features and amenities included. The variation in price per square foot accounts for factors such as lot location, upgrades, condition, and specific home features.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Homes with premium features, recent updates, or desirable lot locations typically command prices at the higher end of this range. Properties that need cosmetic updates or are located on standard lots may fall in the lower range, offering opportunities for buyers to add value through improvements.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Year-Over-Year Appreciation: 4.8%
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Maravilla has experienced consistent appreciation of 4.8% year-over-year, demonstrating strong and stable property value growth. This appreciation rate outpaces inflation and provides solid returns for homeowners. The steady growth indicates a healthy real estate market with sustainable demand, making Maravilla an attractive investment opportunity as well as a great place to live.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The appreciation rate reflects the community&apos;s desirability, quality of construction, and the overall strength of the North Las Vegas real estate market. Homeowners can feel confident that their investment is growing over time, building equity that can be used for future purchases, home improvements, or retirement planning.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Active Listings and Strong Resale Values
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  With 8 active listings currently available, Maravilla offers a healthy selection of homes for buyers to choose from. This inventory level provides options without creating an oversupply that would depress prices. The balance between supply and demand supports strong resale values, ensuring that homeowners can sell their properties for fair market prices when the time comes.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The strong resale values are supported by the community&apos;s ongoing desirability, quality schools, convenient location, and well-maintained properties. These factors combine to create a stable real estate market where homeowners can confidently invest in their properties, knowing that their improvements and maintenance will be reflected in future sale prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Surrounding Neighborhoods */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Surrounding Neighborhoods
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Jasmine Ranch Condos
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Just minutes from Maravilla, Jasmine Ranch offers condominium living options that appeal to first-time buyers, downsizers, and investors. These condos provide an affordable entry point into the North Las Vegas real estate market while still offering access to the area&apos;s amenities and conveniences. The proximity to Maravilla means residents can enjoy the same shopping, dining, and recreational opportunities.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The condominium lifestyle appeals to those who prefer lower maintenance living while still having access to community amenities. Jasmine Ranch condos often feature modern finishes, updated kitchens and bathrooms, and community pools or clubhouses that provide social and recreational opportunities.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Paseo Ridge
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Paseo Ridge is another nearby community that complements Maravilla, offering similar quality construction and community amenities. This neighborhood provides additional housing options for buyers who want to be in the North Las Vegas area but may prefer different floor plans, lot sizes, or price points. The proximity means residents of both communities share access to the same schools, shopping, and recreational facilities.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The variety of nearby neighborhoods creates a diverse and vibrant area with options for buyers at different stages of life and with different preferences. This diversity strengthens the overall real estate market and provides stability through varied housing types and price ranges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
              Contact Dr. Jan Duffy for Maravilla Homes
            </h2>
            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-4'>
                  Current Listings
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Browse our current Maravilla listings with detailed photos, virtual tours, and comprehensive property information. Dr. Jan Duffy maintains an up-to-date inventory of available homes, ensuring you have access to the latest opportunities in the Maravilla market.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-4'>
                  Private Tours
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Schedule private tours of Maravilla homes at your convenience. Dr. Duffy provides personalized attention, answering questions and helping you evaluate properties based on your specific needs and preferences.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-4'>
                  Market Analysis
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Receive comprehensive market analysis for Maravilla properties, including comparable sales, current market trends, and pricing strategies. This analysis helps buyers make informed decisions and sellers price their homes competitively.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-4'>
                  Financing Options
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Connect with trusted lenders who understand the Maravilla market and can help you secure financing that fits your situation. Dr. Duffy works with experienced mortgage professionals who can guide you through the loan process.
                </p>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-[#0A2540] mb-4'>
                  Investment Opportunities
                </h3>
                <p className='text-gray-700 mb-4 leading-relaxed'>
                  Explore investment opportunities in Maravilla, including rental properties, fix-and-flip projects, and long-term appreciation potential. Dr. Duffy provides market insights that help investors identify properties with strong return potential.
                </p>
              </div>
            </div>
            <div className='text-center mt-8'>
              <Button asChild size='lg' className='bg-[#3A8DDE] hover:bg-[#0A2540]'>
                <Link href='/contact'>Contact Dr. Jan Duffy</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <JustSoldGallery />

        {/* Map Section */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8 text-center'>
              Maravilla Location
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
          </div>
        </section>
      </article>

      {/* Structured Data */}
      <Script
        id='home-descriptions-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Maravilla Home Descriptions | Luxury Homes in North Las Vegas',
              description:
                'Detailed descriptions of Maravilla luxury homes featuring 3-5 bedrooms, gourmet kitchens, smart home technology, and resort-style amenities in North Las Vegas.',
              url: `${baseUrl}/home-descriptions`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Home Descriptions', url: `${baseUrl}/home-descriptions` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Home Descriptions', url: `${baseUrl}/home-descriptions` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}

