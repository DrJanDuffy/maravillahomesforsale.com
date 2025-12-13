import PageLayout from '@/components/layout/page-layout';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/lib/metadata';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, Car, Droplets, Wifi, UtensilsCrossed, TreePine, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Maravilla Homes Amenities | Luxury Features in North Las Vegas',
  description:
    'Discover the extensive amenities available in Maravilla homes, including open floor plans, attached garages, jetted bathtubs, swimming pools, smart home technology, and community features in North Las Vegas.',
  keywords:
    'Maravilla amenities, home features North Las Vegas, luxury home amenities, Maravilla community features, property amenities, North Las Vegas real estate features',
  path: '/amenities',
});

const amenities = [
  { name: 'Open floor plan', icon: Home },
  { name: 'Attached garage', icon: Car },
  { name: 'Jetted bathtub', icon: Droplets },
  { name: 'Laminate flooring', icon: Home },
  { name: 'Cable-ready', icon: Wifi },
  { name: 'Community walking paths', icon: TreePine },
  { name: 'Laundry room', icon: Home },
  { name: 'Central air conditioning', icon: Home },
  { name: 'Dining area', icon: UtensilsCrossed },
  { name: 'Pantry', icon: Home },
  { name: 'Large windows', icon: Home },
  { name: 'Courtyard', icon: TreePine },
  { name: 'Swimming Pool', icon: Droplets },
];

export default function AmenitiesPage() {
  return (
    <PageLayout>
      <article>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Maravilla Homes Amenities
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl'>
              Explore the comprehensive amenities that make <Link href='/homes' className='text-white hover:text-gray-200 underline font-medium'>Maravilla homes</Link> exceptional. From interior features to community amenities, discover what sets these properties apart in North Las Vegas. See <Link href='/home-descriptions' className='text-white hover:text-gray-200 underline font-medium'>detailed home descriptions</Link>, explore the <Link href='/neighborhood' className='text-white hover:text-gray-200 underline font-medium'>neighborhood</Link>, or view <Link href='/map-and-nearby-places' className='text-white hover:text-gray-200 underline font-medium'>nearby places</Link>.
            </p>
          </div>
        </section>

        {/* Interior Amenities Overview */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Interior Home Amenities
            </h2>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl'>
              Maravilla homes are designed with thoughtful amenities that enhance daily living, provide comfort, and support modern lifestyles. These features are carefully selected to offer both immediate enjoyment and long-term value, making each home a true sanctuary for its residents.
            </p>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <Card key={index} className='border-2 border-[#F7F9FC] hover:border-[#3A8DDE] transition-colors'>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Icon className='h-6 w-6 text-[#3A8DDE]' />
                        <CardTitle className='text-lg'>{amenity.name}</CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Floor Plan */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Open Floor Plan Design
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Spacious and Connected Living
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Open floor plans are a signature feature of Maravilla homes, creating seamless flow between the kitchen, dining, and living areas. This design philosophy eliminates unnecessary walls and barriers, allowing natural light to flood the main living space and creating an airy, expansive feeling even in homes of moderate size.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The open design facilitates better communication and interaction among family members, whether they&apos;re cooking, dining, or relaxing. Parents can easily supervise children playing in the living area while preparing meals in the kitchen, and the entire family can gather comfortably for meals, games, or conversation without feeling separated by walls.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  This layout is particularly popular for entertaining, as hosts can interact with guests throughout the main living space rather than being isolated in the kitchen. The open design also makes homes feel larger than their square footage suggests, providing excellent value and a modern aesthetic that appeals to contemporary buyers.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Flexible Space Utilization
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The open floor plan allows homeowners to define spaces through furniture placement and area rugs rather than fixed walls. This flexibility means the same home can adapt to different needs over time—a play area for young children can become a formal dining space as the family grows, or a home office can be created in a corner of the living area.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The lack of walls also means that heating and cooling systems work more efficiently, as air can circulate freely throughout the main living space. This can result in lower utility costs and more consistent temperatures throughout the home. The open design also makes it easier to install and enjoy features like whole-home audio systems or integrated lighting that enhances the entire living area.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  For those who prefer some separation, many open floor plan homes include partial walls, columns, or built-in features that provide visual definition while maintaining the open feeling. These design elements allow for the best of both worlds—openness and connection with subtle boundaries that help organize the space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attached Garage */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Attached Garage Features
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Convenience and Security
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Attached garages in Maravilla homes provide direct access to the home interior, eliminating the need to walk outside in inclement weather or during extreme temperatures. This convenience is especially valuable in Las Vegas, where summer temperatures can be extreme. The attached design also provides an additional layer of security, as you can enter your home without being exposed to the exterior environment.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Most Maravilla homes feature 2-3 car garages, providing ample space for vehicles, storage, and workshop areas. The three-car garage options are particularly popular among families with multiple vehicles, recreational equipment, or those who need extra storage space. These garages often include additional storage systems, built-in shelving, and overhead storage solutions that maximize the usable space.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The garages are equipped with automatic door openers, keypad entry systems, and adequate lighting for safety and convenience. Many homeowners also use their garages as additional workspace for hobbies, home improvement projects, or as a staging area for groceries and packages before bringing them into the main living space.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Storage and Organization
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The attached garages in Maravilla homes offer extensive storage opportunities beyond vehicle parking. Homeowners often install wall-mounted storage systems, ceiling-mounted racks for seasonal items, and workbenches for tools and projects. This additional storage space helps keep the main living areas uncluttered while providing easy access to items that are used regularly.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Many garages feature built-in storage solutions such as cabinets, shelving units, and tool organizers that help maintain organization. The garage space can also accommodate large items like bicycles, outdoor equipment, and bulk purchases that don&apos;t fit easily in the home interior. This flexibility makes the garage an essential part of the home&apos;s overall functionality.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The garage also serves as a buffer zone between the exterior and interior of the home, helping to maintain cleaner indoor air quality by providing a space where shoes, outerwear, and items from outside can be stored before entering the main living space. This feature is particularly valuable for families with children or pets who spend time outdoors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jetted Bathtub */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Jetted Bathtub Luxury
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Therapeutic Relaxation
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Jetted bathtubs are a premium amenity found in many Maravilla homes, particularly in the primary bathroom suites. These bathtubs feature strategically placed jets that create a therapeutic massage effect, helping to relieve muscle tension, reduce stress, and promote relaxation. The jets can be adjusted for intensity and direction, allowing users to customize their bathing experience.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The therapeutic benefits of jetted bathtubs make them especially appealing to those with active lifestyles, athletes, or anyone who experiences muscle tension or stress. The warm water combined with the massage action of the jets creates a spa-like experience in the comfort of your own home, eliminating the need for expensive spa visits or gym memberships for hydrotherapy.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Modern jetted bathtubs feature advanced technology including quiet operation, easy-to-clean systems, and energy-efficient pumps. Many include features such as chromotherapy (color-changing lights), aromatherapy systems, and built-in heaters that maintain water temperature throughout extended soaks. These features enhance the luxury experience and make the bathtub a true centerpiece of the bathroom.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Design and Aesthetics
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Jetted bathtubs in Maravilla homes are designed to complement the overall bathroom aesthetic, often featuring elegant finishes, comfortable contours, and spacious designs that accommodate full-body relaxation. The bathtubs are typically positioned to take advantage of natural light or provide privacy, creating a serene environment for unwinding after a long day.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The presence of a jetted bathtub adds significant value to the home and is a feature that many buyers specifically seek. This amenity can be a deciding factor for buyers who prioritize relaxation and self-care, making homes with jetted bathtubs more competitive in the market. The luxury appeal also contributes to the overall perception of the home as a high-quality, well-appointed property.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Maintenance of jetted bathtubs is straightforward with modern systems that include self-cleaning features and easy access to jets for periodic deep cleaning. The investment in a jetted bathtub pays dividends in both daily enjoyment and property value, making it a worthwhile feature for homeowners who appreciate the finer things in life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Laminate Flooring */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Laminate Flooring Benefits
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Durability and Easy Maintenance
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Laminate flooring in Maravilla homes provides the beauty of hardwood with superior durability and easier maintenance. This flooring option is resistant to scratches, dents, and stains, making it ideal for high-traffic areas and homes with children or pets. The protective wear layer ensures that the floor maintains its appearance even under heavy use.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The easy maintenance of laminate flooring is a significant advantage for busy homeowners. Unlike hardwood, laminate doesn&apos;t require refinishing, waxing, or special cleaning products. Regular sweeping and occasional mopping with a damp cloth keep the floors looking new for years. This low-maintenance feature is especially valuable in the desert climate, where dust and debris can be a constant concern.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Modern laminate flooring features realistic wood grain patterns and textures that closely mimic natural hardwood, providing the aesthetic appeal of wood without the maintenance requirements. The variety of styles and colors available allows homeowners to choose flooring that complements their interior design preferences while enjoying the practical benefits of laminate.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Cost-Effective and Versatile
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Laminate flooring offers excellent value, providing the look of premium hardwood at a fraction of the cost. This cost-effectiveness makes it possible to install high-quality flooring throughout the home without exceeding budget constraints. The installation process is also typically faster and less disruptive than hardwood installation.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The versatility of laminate flooring means it can be used in virtually any room of the home, including kitchens, bathrooms, and basements where moisture resistance is important. Many laminate products feature water-resistant properties that make them suitable for areas where traditional hardwood would be problematic. This versatility increases the usable square footage of the home and provides design consistency throughout.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Laminate flooring is also an environmentally friendly choice, as many products are made from recycled materials and can be recycled at the end of their useful life. The long lifespan and durability of laminate mean less frequent replacement, reducing waste and environmental impact over time. This combination of practicality, aesthetics, and environmental responsibility makes laminate flooring an excellent choice for modern homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cable-Ready and Technology */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Cable-Ready and Technology Features
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Pre-Wired for Modern Connectivity
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Cable-ready homes in Maravilla are pre-wired with coaxial cable and Ethernet connections, making it easy to connect cable television, internet services, and home networking systems. This pre-wiring eliminates the need for unsightly cables running along baseboards or through walls, providing a clean, professional installation that enhances the home&apos;s appearance.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The cable-ready infrastructure supports high-speed internet connections, streaming services, and home automation systems. Multiple connection points throughout the home ensure that every room can have access to cable and internet services without the need for additional wiring or installation work. This feature is essential for modern families who rely on internet connectivity for work, education, and entertainment.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The pre-wired design also makes it easier to install security systems, intercom systems, and whole-home audio or video distribution. These systems can be integrated seamlessly into the existing infrastructure, providing enhanced functionality without major renovations or disruptions to the home&apos;s structure.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Smart Home Compatibility
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The cable-ready infrastructure in Maravilla homes provides the foundation for smart home technology integration. Homeowners can easily add smart thermostats, security cameras, lighting controls, and other connected devices that enhance convenience, security, and energy efficiency. The existing wiring supports these systems and makes installation straightforward.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Smart home technology allows homeowners to control various aspects of their home remotely via smartphone apps or voice assistants. This includes adjusting temperature, monitoring security cameras, controlling lighting, and managing entertainment systems. The cable-ready infrastructure ensures that these systems have the connectivity they need to function optimally.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The integration of smart home technology not only provides convenience but can also result in energy savings and increased home security. Programmable systems can optimize energy usage, while security systems provide peace of mind whether you&apos;re at home or away. These features add value to the home and appeal to tech-savvy buyers who appreciate modern conveniences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Walking Paths */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Community Walking Paths
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Health and Wellness Opportunities
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Maravilla features an extensive network of walking paths that provide safe, scenic routes for exercise, recreation, and socializing. These paths wind through the community, connecting neighborhoods, parks, and natural areas while providing opportunities for residents to maintain active, healthy lifestyles. The paths are designed to accommodate walkers, joggers, and cyclists of all ages and fitness levels.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Regular use of the walking paths promotes cardiovascular health, helps maintain healthy weight, and provides mental health benefits through outdoor exercise and exposure to nature. The paths offer a convenient alternative to gym memberships, allowing residents to exercise right in their own neighborhood without the need to travel or pay membership fees.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The walking paths also serve as social spaces where neighbors can meet, walk together, and build community connections. These casual interactions help create a sense of belonging and neighborhood cohesion that enhances the overall quality of life in Maravilla. The paths are particularly popular in the early morning and evening hours when the weather is most pleasant.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Safety and Accessibility
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The walking paths in Maravilla are designed with safety in mind, featuring adequate lighting, clear signage, and well-maintained surfaces that reduce the risk of accidents. The paths are separated from vehicle traffic where possible, providing a safe environment for pedestrians and cyclists. Regular maintenance ensures that the paths remain in good condition and free of hazards.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Accessibility is a priority in the path design, with features that accommodate users with mobility challenges, strollers, and wheelchairs. The paths are wide enough to allow multiple users to pass comfortably, and the surfaces are smooth and level to prevent tripping hazards. These design considerations ensure that the paths are usable by all members of the community.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The paths connect to key community destinations such as schools, parks, shopping areas, and community centers, making them practical transportation routes as well as recreational facilities. This connectivity encourages walking as a mode of transportation, reducing vehicle traffic and promoting a more sustainable, pedestrian-friendly community environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Laundry Room */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Dedicated Laundry Room
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Functional and Organized Space
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Dedicated laundry rooms in Maravilla homes provide a functional, organized space for washing, drying, and folding clothes. These rooms are designed with efficiency in mind, featuring adequate space for full-size washers and dryers, storage for laundry supplies, and counter space for folding. The dedicated room keeps laundry activities out of the main living areas, maintaining a cleaner, more organized home environment.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Many laundry rooms include built-in storage solutions such as cabinets, shelves, and hanging rods for air-drying delicate items. Some feature utility sinks for hand-washing or pre-treating stains, and additional counter space for sorting and folding laundry. These features make the laundry process more efficient and less of a chore.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The laundry room can also serve as a secondary storage area for cleaning supplies, seasonal items, or household tools. This additional storage capacity helps keep the main living areas uncluttered while providing easy access to items that are used regularly. The versatility of the laundry room makes it a valuable feature that enhances the overall functionality of the home.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Convenience and Efficiency
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Having a dedicated laundry room means that laundry activities don&apos;t interfere with other household activities. The separate space allows for multiple loads of laundry to be processed simultaneously, and provides a place to store clean laundry until it can be put away. This organization reduces clutter in other areas of the home and makes laundry management more efficient.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The laundry room&apos;s location within the home is often strategically planned for convenience. Many are located near bedrooms for easy access to clothing, or near the garage for handling heavily soiled items before they enter the main living space. This thoughtful placement enhances the overall flow and functionality of the home.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Modern laundry rooms in Maravilla homes often feature upgraded appliances, improved ventilation, and adequate electrical and plumbing connections for high-efficiency washers and dryers. These features support energy-efficient laundry practices and ensure that the laundry room can accommodate modern appliances that save time, water, and energy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Central Air Conditioning */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Central Air Conditioning
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Essential Comfort in Desert Climate
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Central air conditioning is an essential amenity in Maravilla homes, providing consistent, comfortable temperatures throughout the home during Las Vegas&apos;s hot summers. The central system ensures that every room maintains a comfortable temperature, eliminating hot spots and providing relief from the intense desert heat. This feature is not just a luxury but a necessity for comfortable living in North Las Vegas.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Modern central air conditioning systems in Maravilla homes are energy-efficient, featuring programmable thermostats, zone controls, and high-efficiency compressors that reduce energy consumption while maintaining comfort. These systems can be controlled remotely via smartphone apps, allowing homeowners to adjust temperatures before arriving home or while away, optimizing both comfort and energy usage.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The central system also includes air filtration that improves indoor air quality by removing dust, allergens, and pollutants. This is particularly valuable in the desert environment where dust and pollen can be concerns. Regular maintenance of the system ensures optimal performance and extends its lifespan, protecting the homeowner&apos;s investment.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Energy Efficiency and Cost Savings
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Energy-efficient central air conditioning systems help reduce monthly utility costs while maintaining comfort. Modern systems use advanced technology such as variable-speed compressors and smart thermostats that optimize energy usage based on occupancy and preferences. These features can result in significant savings on electricity bills, especially during the peak summer months.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The central system is more efficient than window units or portable air conditioners, providing better cooling performance with lower energy consumption. The whole-home approach means that cooling is distributed evenly, eliminating the need for multiple units and reducing overall energy usage. This efficiency is both environmentally responsible and economically beneficial.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Many central air conditioning systems in Maravilla homes are designed to work in conjunction with other energy-efficient features such as high-performance windows, improved insulation, and programmable thermostats. This integrated approach maximizes energy efficiency and ensures that the home remains comfortable year-round while minimizing environmental impact and utility costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Area */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Dedicated Dining Area
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Formal and Casual Dining Options
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Maravilla homes feature dedicated dining areas that accommodate both formal and casual dining experiences. These spaces are designed to be flexible, allowing homeowners to use them for everyday family meals, formal dinner parties, or casual gatherings. The dining area often connects to the kitchen for easy serving and cleanup, while maintaining its own distinct identity within the home.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The dining area provides a designated space for meals that encourages family togetherness and proper mealtime routines. Having a dedicated space for dining helps establish healthy eating habits and provides a setting for family conversations and connection. The separation from other living areas also helps create a more formal atmosphere when entertaining guests.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Many dining areas in Maravilla homes feature large windows that provide natural light and views of the backyard or surrounding landscape. This connection to the outdoors enhances the dining experience and creates a pleasant atmosphere for meals. The windows also allow for natural ventilation, reducing the need for artificial lighting and cooling during appropriate times of day.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Versatility and Functionality
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The dining area can serve multiple functions beyond just eating. Many homeowners use this space for homework, crafts, or as an extension of the home office. The table provides a large, flat surface that&apos;s perfect for various activities, while the dedicated space ensures that these activities don&apos;t interfere with other household functions.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  The dining area&apos;s location within the home is often strategically planned to provide easy access to the kitchen while maintaining separation from the main living areas. This placement facilitates efficient meal service and cleanup while allowing the dining area to function as a semi-private space for meals and conversations.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The size and configuration of dining areas in Maravilla homes vary to accommodate different family sizes and entertaining needs. Some feature space for large dining tables that seat eight or more, while others are designed for more intimate gatherings. This variety ensures that buyers can find a home that matches their specific dining and entertaining preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Amenities */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Additional Premium Amenities
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Walk-In Pantry
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Walk-in pantries in Maravilla homes provide extensive storage for dry goods, canned foods, small appliances, and bulk purchases. These spacious pantries feature adjustable shelving that can be customized to accommodate different storage needs, making it easy to organize and access food items. The walk-in design means you can see everything at a glance, reducing food waste and making meal planning more efficient.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Many pantries include additional features such as electrical outlets for small appliances, wine storage, and space for cleaning supplies. This versatility makes the pantry a valuable organizational tool that helps keep the kitchen uncluttered while providing easy access to frequently used items. The pantry&apos;s location near the kitchen ensures convenience while maintaining separation from the main cooking area.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Large Windows
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Large windows throughout Maravilla homes provide abundant natural light, creating bright, airy interiors that feel spacious and welcoming. These windows offer views of the surrounding landscape, whether it&apos;s the desert scenery, mountain vistas, or well-maintained community areas. The natural light reduces the need for artificial lighting during the day, saving energy and creating a more pleasant living environment.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The large windows are designed with energy efficiency in mind, featuring double-pane glass, low-emissivity coatings, and proper sealing that help maintain comfortable indoor temperatures while reducing energy costs. Many windows also include features such as tilt-in sashes for easy cleaning and built-in blinds or shades for privacy and light control.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Courtyard
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Courtyards in Maravilla homes provide private outdoor spaces that extend the living area beyond the home&apos;s interior. These enclosed spaces offer privacy and security while providing a place for outdoor dining, relaxation, and entertaining. Courtyards are often designed with desert landscaping, seating areas, and features such as fire pits or water features that enhance the outdoor living experience.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The courtyard design is particularly well-suited to the Las Vegas climate, providing a protected outdoor space that can be enjoyed year-round. The enclosed nature of courtyards provides wind protection and creates a microclimate that&apos;s more comfortable than open yards. This design feature adds significant value and appeal to Maravilla homes.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Swimming Pool
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Swimming pools are a premium amenity found in select Maravilla homes, providing a private oasis for relaxation, exercise, and entertainment. These pools are designed to complement the home&apos;s architecture and landscaping, creating a cohesive outdoor living environment. Pool features may include built-in spas, water features, and energy-efficient equipment that reduces operating costs.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Private pools are especially valuable in Las Vegas, where the hot summers make swimming a popular activity. The pool area often includes decking, seating areas, and outdoor kitchens that create a complete outdoor entertainment space. This amenity significantly enhances the home&apos;s value and appeal, making it a sought-after feature for buyers who prioritize outdoor living and recreation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Experience Maravilla Amenities Firsthand
            </h2>
            <p className='text-xl text-gray-200 mb-8 max-w-2xl mx-auto'>
              Schedule a private tour to see these exceptional amenities in person. Dr. Jan Duffy can help you find the perfect Maravilla home with the features that matter most to you.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' variant='secondary' className='bg-white text-[#0A2540] hover:bg-gray-100'>
                <Link href='/contact'>Contact Dr. Jan Duffy</Link>
              </Button>
              <Button asChild size='lg' variant='outline' className='border-white text-white hover:bg-white/10'>
                <Link href='/homes'>View Available Homes</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>

      {/* Structured Data */}
      <Script
        id='amenities-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Maravilla Homes Amenities | Luxury Features in North Las Vegas',
              description:
                'Comprehensive guide to amenities in Maravilla homes including open floor plans, attached garages, jetted bathtubs, swimming pools, and community features.',
              url: `${baseUrl}/amenities`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Amenities', url: `${baseUrl}/amenities` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Amenities', url: `${baseUrl}/amenities` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}

