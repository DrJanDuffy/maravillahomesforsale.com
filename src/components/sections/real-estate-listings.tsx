'use client';

import { useIsMobile } from '@/hooks';
import { useEffect, useRef } from 'react';

export default function RealEstateListings() {
  const isMobile = useIsMobile();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the RealScout widget element dynamically
    if (widgetRef.current && typeof window !== 'undefined') {
      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('sort-order', 'STATUS_AND_SIGNIFICANT_CHANGE');
      widget.setAttribute('listing-status', 'For Sale');
      widget.setAttribute('property-types', 'SFR,MF,TC');
      widget.setAttribute('price-min', '600000');
      widget.setAttribute('price-max', '1200000');
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', 'true');
      widget.setAttribute('map-height', '400px');
      widget.setAttribute('listings-per-page', '12');
      widget.setAttribute('show-pagination', 'true');

      // Clear existing content and append the widget
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(widget);
    }
  }, [isMobile]);

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Available Craig Ranch Properties
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover the latest luxury homes available in Craig Ranch
          </p>
        </div>

        {/* RealScout Listings Widget */}
        <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg'>
          <div className='mb-6'>
            <h3 className='text-2xl font-semibold text-[#0A2540] mb-2'>
              Current Craig Ranch Listings
            </h3>
            <p className='text-gray-600'>
              Browse our curated selection of premium properties in the $600K -
              $1.2M range
            </p>
          </div>

          {/* RealScout Office Listings Widget */}
          <div
            ref={widgetRef}
            className='real-estate-listings-container min-h-[400px] flex items-center justify-center'
          >
            <div className='text-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
              <p className='text-gray-500 text-sm'>
                Loading luxury properties in Craig Ranch...
              </p>
            </div>
          </div>

          {/* Fallback Content */}
          <div className='mt-8 text-center'>
            <p className='text-gray-400 text-xs'>
              If listings don't appear, please refresh the page or contact us
              directly.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className='mt-12 grid md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='bg-[#3A8DDE] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🏠</span>
            </div>
            <h4 className='text-lg font-semibold text-[#0A2540] mb-2'>
              Premium Properties
            </h4>
            <p className='text-gray-600'>
              Hand-selected luxury homes with exceptional quality and amenities
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-[#16B286] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>📍</span>
            </div>
            <h4 className='text-lg font-semibold text-[#0A2540] mb-2'>
              Prime Location
            </h4>
            <p className='text-gray-600'>
              Properties in the most desirable areas of Craig Ranch
            </p>
          </div>

          <div className='text-center'>
            <div className='bg-[#0A2540] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>💎</span>
            </div>
            <h4 className='text-lg font-semibold text-[#0A2540] mb-2'>
              Luxury Features
            </h4>
            <p className='text-gray-600'>
              High-end finishes, modern amenities, and exceptional craftsmanship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
