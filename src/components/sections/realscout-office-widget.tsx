'use client';

import { useIsMobile, useInView } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import ListingsSkeleton from '@/components/skeletons/listings-skeleton';

type RealScoutOfficeWidgetProps = {
  agentEncodedId?: string;
  showMap?: boolean;
  listingsPerPage?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
};

function RealScoutOfficeWidgetContent({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  showMap = true,
  listingsPerPage = '12',
  priceMin,
  priceMax,
  className = '',
}: RealScoutOfficeWidgetProps) {
  const isMobile = useIsMobile();
  const { ref: setInViewRef, isInView } = useInView({
    rootMargin: '200px', // Start loading when widget is within 200px of viewport
    threshold: 0,
  });
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Combine refs: set the intersection observer ref and store in our ref
  const combinedRef = (node: HTMLDivElement | null) => {
    widgetRef.current = node;
    setInViewRef(node);
  };

  useEffect(() => {
    // Only initialize widget when it's visible and not already initialized
    if (!isInView || isInitialized || !widgetRef.current || typeof window === 'undefined') {
      return;
    }

    // Wait for RealScout script to load before creating widget
    const initWidget = () => {
      if (widgetRef.current && typeof window !== 'undefined') {
        // Check if RealScout is available
        if (typeof customElements !== 'undefined' && customElements.get('realscout-office-listings')) {
          const widget = document.createElement('realscout-office-listings');
          widget.setAttribute('agent-encoded-id', agentEncodedId);
          widget.setAttribute('sort-order', 'STATUS_AND_SIGNIFICANT_CHANGE');
          widget.setAttribute('listing-status', 'For Sale');
          widget.setAttribute('property-types', 'SFR,MF,TC');
          if (priceMin) {
            widget.setAttribute('price-min', priceMin);
          }
          if (priceMax) {
            widget.setAttribute('price-max', priceMax);
          }
          widget.setAttribute('layout', isMobile ? 'mobile' : 'desktop');
          widget.setAttribute('show-filters', 'true');
          widget.setAttribute('show-sort', 'true');
          widget.setAttribute('show-map', showMap ? 'true' : 'false');
          widget.setAttribute('map-height', '400px');
          widget.setAttribute('listings-per-page', listingsPerPage);
          widget.setAttribute('show-pagination', 'true');

          // Clear existing content and append the widget
          widgetRef.current.innerHTML = '';
          widgetRef.current.appendChild(widget);
          setIsInitialized(true);
        } else {
          // Wait for RealScout to load
          const checkInterval = setInterval(() => {
            if (typeof customElements !== 'undefined' && customElements.get('realscout-office-listings')) {
              clearInterval(checkInterval);
              initWidget();
            }
          }, 100);

          // Timeout after 5 seconds
          setTimeout(() => clearInterval(checkInterval), 5000);
        }
      }
    };

    // Check if script is already loaded, otherwise wait
    if (typeof customElements !== 'undefined' && customElements.get('realscout-office-listings')) {
      initWidget();
    } else {
      // Listen for RealScout loaded event or check on load
      if (document.readyState === 'complete') {
        initWidget();
      } else {
        window.addEventListener('load', initWidget);
        window.addEventListener('realscout-loaded', initWidget);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', initWidget);
        window.removeEventListener('realscout-loaded', initWidget);
      }
    };
  }, [isInView, isInitialized, isMobile, agentEncodedId, showMap, listingsPerPage, priceMin, priceMax]);

  return (
    <div
      ref={combinedRef}
      className={`real-estate-office-widget-container min-h-[400px] ${className}`}
    >
      <div className='text-center py-8'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
        <p className='text-gray-500 text-sm'>Loading office listings...</p>
      </div>
    </div>
  );
}

export default function RealScoutOfficeWidget(props: RealScoutOfficeWidgetProps) {
  return <RealScoutOfficeWidgetContent {...props} />;
}

