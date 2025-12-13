'use client';

import { useIsMobile, useInView } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

export default function RecentSales() {
  const isMobile = useIsMobile();
  const { ref: setInViewRef, isInView } = useInView({
    rootMargin: '200px',
    threshold: 0,
  });
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const combinedRef = (node: HTMLDivElement | null) => {
    widgetRef.current = node;
    setInViewRef(node);
  };

  useEffect(() => {
    if (!isInView || isInitialized || !widgetRef.current || typeof window === 'undefined') {
      return;
    }

    const initWidget = () => {
      if (widgetRef.current && typeof window !== 'undefined') {
        if (typeof customElements !== 'undefined' && customElements.get('realscout-your-listings')) {
          const widget = document.createElement('realscout-your-listings');
          widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
          widget.setAttribute('sort-order', 'STATUS_AND_SIGNIFICANT_CHANGE');
          widget.setAttribute('listing-status', 'Sold');
          widget.setAttribute('property-types', 'SFR,MF,TC,LAL,MOBILE,OTHER');

          widgetRef.current.innerHTML = '';
          widgetRef.current.appendChild(widget);
          setIsInitialized(true);
        } else {
          const checkInterval = setInterval(() => {
            if (typeof customElements !== 'undefined' && customElements.get('realscout-your-listings')) {
              clearInterval(checkInterval);
              initWidget();
            }
          }, 100);

          setTimeout(() => clearInterval(checkInterval), 5000);
        }
      }
    };

    if (typeof customElements !== 'undefined' && customElements.get('realscout-your-listings')) {
      initWidget();
    } else {
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
  }, [isInView, isInitialized]);

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
            Recent Sales
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            View recently sold properties in Maravilla and surrounding areas
          </p>
        </div>
        <div className='bg-[#F7F9FC] rounded-xl p-8 shadow-lg border border-gray-200'>
          <style dangerouslySetInnerHTML={{ __html: `
            realscout-your-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `}} />
          <div
            ref={combinedRef}
            className='recent-sales-widget-container min-h-[400px]'
          >
            <div className='text-center py-8'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
              <p className='text-gray-500 text-sm'>Loading recent sales...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

