import { Suspense } from 'react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageFAQSection from '@/components/PageFAQSection';
import RealScoutOfficeWidget from '@/components/sections/realscout-office-widget';
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';

interface PageLayoutProps {
  children: React.ReactNode;
}

// Loading fallback for navigation
function NavigationFallback() {
  return (
    <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='h-8 w-48 bg-gray-200 animate-pulse rounded'></div>
          <div className='hidden md:flex space-x-8'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className='h-4 w-16 bg-gray-200 animate-pulse rounded'></div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Suspense fallback={<NavigationFallback />}>
        <Navigation />
      </Suspense>
      <main className='flex-grow'>
        <Breadcrumbs />
        {children}
        {/* Office RealScout widget on every page for SEO and engagement */}
        <section className='py-16 bg-white border-t' aria-labelledby='office-listings-heading'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-8'>
              <h2 id='office-listings-heading' className='text-3xl font-bold text-[#0A2540] mb-2'>
                North Las Vegas Family Homes: Listings from Dr. Jan Duffy
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Browse current office listings. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada.
              </p>
            </div>
            <div className='bg-[#F7F9FC] rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200'>
              <Suspense fallback={<ListingsSkeleton />}>
                <RealScoutOfficeWidget
                  agentEncodedId='QWdlbnQtMjI1MDUw'
                  showMap={true}
                  listingsPerPage='12'
                />
              </Suspense>
            </div>
          </div>
        </section>
        <PageFAQSection />
      </main>
      <Footer />
    </div>
  );
}
