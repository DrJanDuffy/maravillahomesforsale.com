import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/config/business-info';

export default function Footer() {
  return (
    <footer className='bg-[#0A2540] text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Footer Content Grid */}
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4 text-white'>
              North Las Vegas Family Homes | Homes by Dr. Jan Duffy
            </h3>
            <p className='text-gray-300 leading-relaxed'>
              Your trusted partner in finding the perfect home in Maravilla.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-white'>Quick Links</h4>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <Link
                  href='/homes'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href='/neighborhood'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Neighborhood Guide
                </Link>
              </li>
              <li>
                <Link
                  href='/community'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href='/home-descriptions'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Home Descriptions
                </Link>
              </li>
              <li>
                <Link
                  href='/amenities'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href='/map-and-nearby-places'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Map & Nearby Places
                </Link>
              </li>
              <li>
                <Link
                  href='/market-data'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Market Data
                </Link>
              </li>
              <li>
                <Link
                  href='/market-insights'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Market Insights
                </Link>
              </li>
              <li>
                <Link
                  href='/home-valuation'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link
                  href='/sell'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link
                  href='/real-estate-services'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Real Estate Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors duration-200 hover:underline'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-white'>Contact Info</h4>
            <ul className='space-y-2 text-gray-300'>
              <li className='flex items-center'>
                <span className='mr-2'>📞</span>
                <a
                  href='tel:7025001953'
                  className='hover:text-white transition-colors'
                >
                  (702) 500-1953
                </a>
              </li>
              <li className='flex items-center'>
                <span className='mr-2'>✉️</span>
                <a
                  href='mailto:DrDuffy@MaravillaHomesForSale.com'
                  className='hover:text-white transition-colors'
                >
                  DrDuffy@MaravillaHomesForSale.com
                </a>
              </li>
              <li className='flex items-center'>
                <span className='mr-2'>📍</span>
                <a
                  href={BUSINESS_INFO.maps.business}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors'
                  aria-label='View our office on Google Maps'
                >
                  {BUSINESS_INFO.address.full}
                </a>
              </li>
              <li className='mt-4'>
                <a
                  href={BUSINESS_INFO.googleBusinessProfile}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-[#3A8DDE] hover:text-white transition-colors text-sm font-medium'
                  aria-label='View Google Business Profile'
                >
                  <svg
                    className='w-4 h-4 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                  </svg>
                  View Google Business Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-white'>Follow Us</h4>
            <p className='text-sm text-gray-300 mb-4'>
              Follow us on social media for the latest updates on Las Vegas 55+
              communities:
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                href='https://www.facebook.com/maravillahomesforsale'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
                className='text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform'
                aria-label='Facebook profile for North Las Vegas Family Homes'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </Link>
              <Link
                href='https://www.youtube.com/@DrDuffy'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
                className='text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform'
                aria-label='YouTube channel for Dr. Jan Duffy'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                </svg>
              </Link>
              <Link
                href='https://www.linkedin.com/company/maravilla-homes-for-sale/'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
                className='text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform'
                aria-label='LinkedIn profile for Maravilla Homes for Sale'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 space-y-2 text-sm'>
          <p>
            &copy; 2007-2025 North Las Vegas Family Homes | Homes by Dr. Jan Duffy. All rights
            reserved.
          </p>
          <p>&copy; 2025 BHH Affiliates, LLC.</p>
          <p className='text-xs text-gray-400 max-w-4xl mx-auto'>
            Real Estate Brokerage Services are offered through the network member
            franchisees of BHH Affiliates, LLC. Most franchisees are independently
            owned and operated. Berkshire Hathaway HomeServices and the Berkshire
            Hathaway HomeServices symbol are registered marks of Columbia Insurance
            Company, a Berkshire Hathaway affiliate.
          </p>
          <p className='text-xs text-gray-400'>
            Dr. Jan Duffy | Nevada Real Estate License #S.0197614.
          </p>
          <p className='text-xs text-gray-400'>Equal Housing Opportunity</p>
          <p className='text-xs text-gray-400'>
            BHH Affiliates, LLC is a Delaware limited liability company. Its
            principal office is located at 18500 Von Karman Ave, Suite 400, Irvine,
            California 92612 USA.
          </p>
        </div>
      </div>
    </footer>
  );
}
