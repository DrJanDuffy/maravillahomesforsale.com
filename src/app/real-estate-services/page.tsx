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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Home,
  DollarSign,
  FileText,
  Users,
  TrendingUp,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Full-Service Real Estate Services | Dr. Jan Duffy Maravilla Expert',
  description:
    'Comprehensive real estate services for buyers, sellers, and investors in Maravilla, North Las Vegas. Property management, investment consulting, transaction services, and specialty services from Dr. Jan Duffy.',
  keywords:
    'real estate services Maravilla, North Las Vegas realtor, property management, investment properties, real estate consulting, home buying services, home selling services',
  path: '/real-estate-services',
});

export default function RealEstateServicesPage() {
  return (
    <PageLayout>
      <article>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Full-Service Real Estate Services
            </h1>
            <p className='text-xl text-gray-200 max-w-3xl'>
              Comprehensive support for buyers, sellers, and investors in Maravilla, North Las Vegas. From property transactions to investment consulting, Dr. Jan Duffy provides expert guidance every step of the way.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl'>
              Dr. Jan Duffy offers a complete range of real estate services tailored to the Maravilla market and North Las Vegas area. Whether you&apos;re buying your first home, selling an investment property, or building a real estate portfolio, these services are designed to meet your specific needs and goals.
            </p>
          </div>
        </section>

        {/* Property Services */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Maravilla Property Services
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              <Card className='border-2 border-[#F7F9FC] hover:border-[#3A8DDE] transition-colors'>
                <CardHeader>
                  <Users className='h-8 w-8 text-[#3A8DDE] mb-2' />
                  <CardTitle>Buyer Representation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-sm'>
                    Expert guidance through the entire home buying process, from search to closing.
                  </p>
                </CardContent>
              </Card>
              <Card className='border-2 border-[#F7F9FC] hover:border-[#3A8DDE] transition-colors'>
                <CardHeader>
                  <Home className='h-8 w-8 text-[#3A8DDE] mb-2' />
                  <CardTitle>Seller Representation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-sm'>
                    Comprehensive marketing and negotiation services to maximize your home&apos;s value.
                  </p>
                </CardContent>
              </Card>
              <Card className='border-2 border-[#F7F9FC] hover:border-[#3A8DDE] transition-colors'>
                <CardHeader>
                  <Building2 className='h-8 w-8 text-[#3A8DDE] mb-2' />
                  <CardTitle>Property Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-sm'>
                    Professional management services for rental properties and investment real estate.
                  </p>
                </CardContent>
              </Card>
              <Card className='border-2 border-[#F7F9FC] hover:border-[#3A8DDE] transition-colors'>
                <CardHeader>
                  <TrendingUp className='h-8 w-8 text-[#3A8DDE] mb-2' />
                  <CardTitle>Investment Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-sm'>
                    Identify and acquire properties with strong rental income and appreciation potential.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Commercial Real Estate
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Dr. Jan Duffy provides commercial real estate services for businesses looking to buy, sell, or lease commercial properties in North Las Vegas. This includes retail spaces, office buildings, warehouses, and mixed-use developments. Commercial transactions require specialized knowledge of zoning, leasing structures, and market analysis that differs from residential real estate.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The commercial real estate services include property valuation, lease negotiations, tenant representation, and investment analysis. Dr. Duffy works with business owners, investors, and developers to identify properties that meet their specific operational needs and investment goals. The commercial market in North Las Vegas offers opportunities for businesses seeking growth and investors looking for stable income properties.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Luxury Properties
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Luxury property services are tailored to high-end buyers and sellers who expect exceptional service, discretion, and expertise. These services include access to exclusive listings, private showings, and specialized marketing strategies that target affluent buyers. Luxury properties in Maravilla and surrounding areas require a different approach to pricing, marketing, and negotiation.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The luxury market demands attention to detail, from staging and photography to marketing materials and presentation. Dr. Duffy understands the unique needs of luxury buyers and sellers, providing white-glove service that matches the quality of the properties being represented. This includes coordinating with luxury home stagers, photographers, and marketing professionals who specialize in high-end real estate.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  New Construction
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  New construction services help buyers navigate the process of purchasing newly built homes, including working with builders, selecting options and upgrades, and managing the construction timeline. This service is particularly valuable in North Las Vegas, where new construction continues to expand the housing inventory and provide modern, energy-efficient homes with the latest features and technology.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  New construction buyers benefit from representation that ensures their interests are protected throughout the building process. This includes reviewing contracts, monitoring construction progress, conducting inspections, and negotiating upgrades and modifications. Dr. Duffy works with reputable builders in the area to help buyers find new construction homes that meet their specifications and budget.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Land and Lots
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Land and lot services assist buyers and sellers of undeveloped property, including residential lots, commercial parcels, and investment land. These transactions require specialized knowledge of zoning regulations, development potential, utility availability, and environmental considerations. Land purchases can be complex, requiring due diligence that goes beyond typical residential property transactions.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Whether you&apos;re looking to build a custom home, develop a commercial property, or invest in land for future appreciation, Dr. Duffy provides the expertise needed to evaluate opportunities and complete successful transactions. The North Las Vegas area offers various land opportunities for different purposes, from residential development to commercial projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Services */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Maravilla Transaction Services
            </h2>
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Listing Services
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Comprehensive listing services include professional photography, virtual tours, detailed property descriptions, and strategic pricing based on current market conditions. Dr. Duffy uses multiple listing services, online platforms, and marketing channels to ensure maximum exposure for your property. The listing process includes preparing the home for sale, staging recommendations, and creating marketing materials that highlight the property&apos;s best features.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The listing services extend beyond initial marketing to include ongoing promotion, open houses, private showings, and follow-up with potential buyers. Dr. Duffy maintains communication throughout the listing period, providing regular updates on showings, feedback, and market activity. This proactive approach helps sellers stay informed and make decisions based on current market conditions.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Price Negotiations
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Expert negotiation services help buyers and sellers achieve their goals while protecting their interests. Dr. Duffy brings extensive experience in the Maravilla market, understanding what buyers are willing to pay and what sellers can reasonably expect. This market knowledge informs negotiation strategies that balance achieving the best price with completing successful transactions.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Negotiations involve more than just price—they include terms, contingencies, repairs, closing dates, and other factors that can significantly impact the transaction. Dr. Duffy navigates these complexities, working to find solutions that satisfy all parties while protecting her clients&apos; interests. The goal is always to complete transactions that leave all parties satisfied with the outcome.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Contract Review
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Real estate contracts are complex legal documents that require careful review to ensure they protect your interests. Dr. Duffy reviews all contract terms, explains implications, and recommends modifications when necessary. This service is essential for both buyers and sellers, as contract terms can significantly impact the transaction&apos;s outcome and your financial obligations.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Contract review includes examining contingencies, timelines, financing terms, inspection requirements, and other provisions that could affect the transaction. Dr. Duffy works with legal professionals when necessary to ensure contracts are properly structured and protect her clients&apos; interests. This thorough approach helps prevent problems and ensures smooth transactions.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Closing Coordination
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Closing coordination involves managing all aspects of the transaction from contract acceptance through final closing. This includes coordinating with lenders, title companies, inspectors, appraisers, and other professionals involved in the process. Dr. Duffy ensures that all deadlines are met, documents are properly prepared, and the closing process proceeds smoothly.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The closing coordination service includes regular communication with all parties, tracking progress, resolving issues that arise, and ensuring that buyers and sellers are prepared for closing day. This comprehensive management reduces stress and helps prevent delays or problems that could derail the transaction. Dr. Duffy&apos;s experience with the closing process helps identify and resolve potential issues before they become problems.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Property Valuation
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Accurate property valuation is essential for making informed decisions about buying or selling. Dr. Duffy provides comprehensive market analysis that considers comparable sales, current market conditions, property condition, and unique features that affect value. This analysis helps sellers price their homes competitively and helps buyers make informed offers.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The valuation process includes examining recent sales of similar properties, analyzing market trends, and considering factors such as location, condition, upgrades, and market timing. Dr. Duffy&apos;s knowledge of the Maravilla market provides insights that automated valuations cannot match, ensuring that valuations reflect the true market value of properties in this specific area.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Market Analysis
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Market analysis services provide detailed information about current market conditions, trends, and forecasts for the Maravilla area and North Las Vegas. This analysis helps buyers and sellers understand market dynamics, pricing trends, and what to expect in the coming months. The analysis includes data on inventory levels, days on market, price trends, and buyer activity.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Regular market analysis helps clients make informed decisions about timing their transactions, pricing strategies, and investment opportunities. Dr. Duffy provides ongoing market updates that keep clients informed about changes that could affect their real estate goals. This information is valuable for both immediate transactions and long-term planning.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Title Services
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Title services coordination ensures that property titles are clear and transferable, protecting buyers from future ownership disputes. Dr. Duffy works with reputable title companies to conduct title searches, resolve any issues that arise, and ensure that titles are properly transferred at closing. This service is essential for protecting buyers&apos; interests and ensuring smooth transactions.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Title issues can delay or derail transactions, making early identification and resolution critical. Dr. Duffy&apos;s experience with title services helps identify potential problems early in the process, allowing time for resolution before closing. This proactive approach helps prevent delays and ensures that transactions proceed as planned.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Escrow Handling
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Escrow services ensure that funds and documents are properly held and distributed according to contract terms. Dr. Duffy coordinates with escrow companies to ensure that all requirements are met, funds are properly deposited, and distributions occur as specified in the contract. This coordination helps ensure that transactions close smoothly and all parties receive what they&apos;re entitled to.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The escrow process involves multiple parties and complex requirements that must be coordinated carefully. Dr. Duffy&apos;s experience with escrow procedures helps navigate this process efficiently, ensuring that all deadlines are met and requirements are satisfied. This attention to detail helps prevent problems and ensures successful closings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className='py-16 bg-[#F7F9FC]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Maravilla Specialty Services
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  First-Time Buyers
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  First-time buyer services provide comprehensive guidance for those purchasing their first home. This includes education about the buying process, financing options, down payment assistance programs, and what to expect throughout the transaction. First-time buyers often have unique needs and concerns that require extra attention and explanation.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy helps first-time buyers understand their options, navigate the financing process, and make informed decisions about properties that meet their needs and budget. The goal is to make the first-time buying experience positive and educational, setting buyers up for success in homeownership. This includes connecting buyers with trusted lenders, inspectors, and other professionals who can help throughout the process.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Short Sales
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Short sale services help homeowners who owe more on their mortgage than their home is worth. This complex process requires negotiation with lenders, extensive documentation, and specialized knowledge of short sale procedures. Dr. Duffy has experience navigating short sales, helping homeowners avoid foreclosure while achieving the best possible outcome.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Short sales require patience, persistence, and expertise in dealing with lenders and their requirements. Dr. Duffy works with homeowners to prepare necessary documentation, negotiate with lenders, and complete transactions that satisfy all parties. This service can provide relief for homeowners facing financial difficulties while protecting their credit and future options.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Foreclosures
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Foreclosure services help buyers purchase bank-owned properties and help homeowners navigate the foreclosure process. Buying foreclosed properties requires understanding of the foreclosure process, bank requirements, and potential risks. Dr. Duffy provides guidance that helps buyers make informed decisions about foreclosure opportunities.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Foreclosure purchases can offer value opportunities but require careful evaluation and specialized knowledge. Dr. Duffy helps buyers understand the foreclosure process, evaluate properties, and navigate the unique requirements of bank-owned property transactions. This service includes coordinating with banks, understanding their procedures, and ensuring that transactions proceed smoothly.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Relocation Services
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Relocation services assist individuals and families moving to or from the North Las Vegas area. This includes area orientation, school information, neighborhood research, and coordination with employers&apos; relocation programs. Relocating can be stressful, and having expert guidance helps make the transition smoother.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides comprehensive relocation support that helps newcomers understand the area, find suitable neighborhoods, and make informed decisions about where to live. This includes information about schools, amenities, commute times, and lifestyle factors that affect quality of life. The goal is to help relocating families find homes and neighborhoods that meet their needs and preferences.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Short-Term Rentals
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Short-term rental services help property owners navigate the growing short-term rental market, including Airbnb and VRBO. This includes understanding regulations, maximizing rental income, and managing properties for short-term rental success. The short-term rental market offers opportunities for property owners but requires specialized knowledge and management.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides guidance on short-term rental regulations, property preparation, pricing strategies, and management options. This service helps property owners determine if short-term rentals are right for their properties and how to maximize success in this market. The goal is to help owners make informed decisions about rental strategies that align with their goals.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Property Staging
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Property staging services help sellers prepare their homes for sale, maximizing appeal and value. This includes recommendations for decluttering, depersonalizing, and arranging furniture to showcase the home&apos;s best features. Professional staging can significantly impact how quickly a home sells and the price it commands.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy works with professional stagers to help sellers prepare their homes for maximum market appeal. This includes recommendations for improvements, repairs, and updates that can increase value and speed of sale. The goal is to present homes in their best light, helping buyers visualize themselves living in the space.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Virtual Tours
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Virtual tour services provide immersive online experiences that allow buyers to explore properties remotely. This technology has become essential in modern real estate marketing, allowing buyers to preview properties before scheduling in-person showings. Virtual tours increase property exposure and help buyers make more informed decisions about which properties to visit.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy utilizes professional virtual tour technology to create engaging online experiences that showcase properties effectively. These tours include 360-degree views, detailed room-by-room navigation, and interactive features that help buyers understand the property&apos;s layout and features. Virtual tours are particularly valuable for out-of-town buyers and those with busy schedules.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  3D Home Tours
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  3D home tours provide advanced virtual reality experiences that allow buyers to explore properties in immersive detail. This cutting-edge technology creates realistic 3D models of properties that buyers can navigate as if they were physically present. 3D tours are the next evolution in virtual property viewing, providing unprecedented detail and interactivity.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy offers 3D tour services for properties that warrant this advanced technology, providing buyers with the most comprehensive virtual viewing experience available. These tours help buyers make more confident decisions and can reduce the number of in-person showings needed. The technology is particularly valuable for luxury properties and those targeting out-of-town buyers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#0A2540] mb-8'>
              Maravilla Consulting Services
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Investment Strategy
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Investment strategy consulting helps investors develop comprehensive plans for building real estate portfolios. This includes analyzing market opportunities, evaluating different investment strategies, and identifying properties that align with investment goals. Dr. Duffy provides market insights that help investors make informed decisions about where and how to invest.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  The investment strategy service considers factors such as cash flow, appreciation potential, tax benefits, and risk tolerance. Dr. Duffy helps investors understand different investment approaches, from buy-and-hold rentals to fix-and-flip projects, and identify strategies that match their goals and resources. This comprehensive approach helps investors build portfolios that generate returns while managing risk.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Portfolio Management
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Portfolio management services help investors optimize their existing real estate holdings, including evaluating performance, identifying improvement opportunities, and making decisions about buying, selling, or refinancing properties. This ongoing service helps investors maximize returns and manage their portfolios effectively.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides regular portfolio reviews that analyze performance, market conditions, and opportunities for improvement. This includes recommendations for property improvements, rental rate optimization, and strategic decisions about portfolio composition. The goal is to help investors achieve their financial goals through effective portfolio management.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Market Trends Analysis
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Market trends analysis provides detailed insights into current and emerging trends in the North Las Vegas real estate market. This includes analysis of pricing trends, inventory levels, buyer behavior, and economic factors that affect the market. Understanding these trends helps buyers, sellers, and investors make informed decisions.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides regular market analysis that identifies trends, explains their implications, and forecasts future market conditions. This information helps clients time their transactions, price their properties, and identify investment opportunities. The analysis considers both local market conditions and broader economic factors that affect real estate.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  ROI Assessment
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Return on investment (ROI) assessment helps investors evaluate the potential returns of real estate investments. This includes analyzing cash flow, appreciation potential, tax benefits, and overall investment performance. Accurate ROI assessment is essential for making informed investment decisions and comparing different opportunities.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides comprehensive ROI analysis that considers all factors affecting investment returns, including purchase price, financing costs, operating expenses, rental income, and appreciation potential. This analysis helps investors understand the true potential of investments and make decisions that align with their financial goals. The assessment includes projections and sensitivity analysis that help investors understand different scenarios.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Property Development
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Property development consulting helps investors and developers evaluate development opportunities, including land acquisition, zoning analysis, and project feasibility. This service requires specialized knowledge of development processes, regulations, and market conditions that affect development success.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides guidance on development opportunities in North Las Vegas, including analysis of zoning, utilities, market demand, and development costs. This service helps developers and investors identify viable projects and navigate the development process. The goal is to help clients make informed decisions about development opportunities that align with their goals and resources.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Zoning Guidance
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Zoning guidance helps property owners and investors understand zoning regulations and how they affect property use and value. This includes analysis of current zoning, potential zoning changes, and how zoning affects development potential. Understanding zoning is essential for making informed decisions about property purchases and development projects.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides zoning analysis that explains current regulations, potential changes, and their implications for property use and value. This service helps clients understand what they can and cannot do with properties, identify development opportunities, and avoid costly mistakes. The analysis includes coordination with planning departments and zoning professionals when necessary.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Tax Planning
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Tax planning services help property owners and investors understand tax implications of real estate transactions and ownership. This includes analysis of capital gains, depreciation, 1031 exchanges, and other tax strategies that can optimize tax outcomes. Understanding tax implications is essential for maximizing investment returns and minimizing tax liability.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides tax planning guidance that helps clients understand how real estate decisions affect their tax situation. This includes coordination with tax professionals to ensure that strategies are properly implemented and compliant with tax laws. The goal is to help clients optimize their tax outcomes while achieving their real estate goals.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                  Property Insurance
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Property insurance guidance helps property owners understand insurance requirements, options, and how to obtain appropriate coverage. This includes analysis of different types of insurance, coverage levels, and how insurance affects property ownership costs. Adequate insurance is essential for protecting property investments.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Dr. Duffy provides insurance guidance that helps clients understand their insurance needs and options. This includes coordination with insurance professionals to ensure that properties are properly insured and that coverage is appropriate for the property type and use. The goal is to help clients obtain adequate coverage at competitive rates while protecting their investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className='py-16 bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Maravilla Contact Information
            </h2>
            <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
              <div className='text-center'>
                <Phone className='h-8 w-8 mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                <p className='text-gray-200'>
                  <a href='tel:7025001953' className='hover:underline'>
                    (702) 500-1953
                  </a>
                </p>
              </div>
              <div className='text-center'>
                <FileText className='h-8 w-8 mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>License</h3>
                <p className='text-gray-200'>NV Lic #S.0197614.LLC</p>
              </div>
              <div className='text-center'>
                <Clock className='h-8 w-8 mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Hours</h3>
                <p className='text-gray-200'>6AM-9PM Daily</p>
              </div>
            </div>
            <div className='text-center mt-8'>
              <Button asChild size='lg' variant='secondary' className='bg-white text-[#0A2540] hover:bg-gray-100'>
                <Link href='/contact'>Contact Dr. Jan Duffy</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>

      {/* Structured Data */}
      <Script
        id='real-estate-services-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Full-Service Real Estate Services | Dr. Jan Duffy Maravilla Expert',
              description:
                'Comprehensive real estate services for buyers, sellers, and investors in Maravilla, North Las Vegas including property management, investment consulting, and transaction services.',
              url: `${baseUrl}/real-estate-services`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Real Estate Services', url: `${baseUrl}/real-estate-services` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Real Estate Services', url: `${baseUrl}/real-estate-services` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}

