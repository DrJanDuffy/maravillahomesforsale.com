'use client';

import { useState } from 'react';

type GoogleMapProps = {
  address?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  height?: string;
  className?: string;
  title?: string;
};

export default function GoogleMap({
  address = 'Craig Ranch, North Las Vegas, NV 89031',
  latitude = 36.2831,
  longitude = -115.1331,
  zoom = 14,
  height = '400px',
  className = '',
  title = 'Craig Ranch Location',
}: GoogleMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Use iframe embed without API key (free and simple)
  const getMapUrl = () => {
    if (address) {
      const encodedAddress = encodeURIComponent(address);
      return `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
    } else {
      return `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div
        className='w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 relative'
        style={{ height }}
      >
        {!mapLoaded && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-100 z-10'>
            <div className='text-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A8DDE] mx-auto mb-4'></div>
              <p className='text-gray-500 text-sm'>Loading map...</p>
            </div>
          </div>
        )}
        <iframe
          src={getMapUrl()}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title={title}
          onLoad={() => setMapLoaded(true)}
          className='w-full h-full'
        />
      </div>
    </div>
  );
}

