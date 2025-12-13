'use client';

import { useIsMobile } from '@/hooks';
import { useEffect, useRef } from 'react';

export default function CraigRanchPropertySearch() {
  const isMobile = useIsMobile();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the RealScout property search widget element dynamically
    if (widgetRef.current && typeof window !== 'undefined') {
      const widget = document.createElement('realscout-property-search');
      widget.setAttribute('office-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
      widget.setAttribute('show-filters', 'true');
      widget.setAttribute('show-sort', 'true');
      widget.setAttribute('show-map', 'true');
      widget.setAttribute('map-height', '500px');
      widget.setAttribute('listings-per-page', '12');
      widget.setAttribute('show-pagination', 'true');

      // Clear existing content and append the widget
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(widget);
    }
  }, [isMobile]);

  return (
    <div
      ref={widgetRef}
      className='real-estate-search-container min-h-[500px] flex items-center justify-center'
    >
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
        <p className='text-gray-500 text-sm'>
          Loading property search...
        </p>
      </div>
    </div>
  );
}


