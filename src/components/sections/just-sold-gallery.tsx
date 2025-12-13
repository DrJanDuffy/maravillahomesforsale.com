'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Photo IDs from the live site
const PHOTO_IDS = [
  2923016, 2916762, 2916763, 2916764, 2916765, 2916766, 2916767, 2916768,
  2916769, 2916770, 2916771, 2916772, 2916773, 2916774, 2916775, 2916776,
  2916777, 2916778, 2916779, 2916780, 2916781, 2916782, 2916783, 2916784,
  2916785, 2916761, 2916786, 2916787, 2916788, 2916789, 2916790, 2916791,
];

function getPhotoUrl(photoId: number, size: 'thumb' | 'full' = 'thumb'): string {
  const baseUrl = 'https://photos.cribflyer-proxy.com/cdn-cgi/image';
  if (size === 'thumb') {
    return `${baseUrl}/width=400,fit=contain,rotate=0,format=auto,quality=85/4616/59105/${photoId}/photo.jpg`;
  }
  return `${baseUrl}/width=1500,fit=contain,rotate=0,format=auto,quality=85/4616/59105/${photoId}/photo.jpg`;
}

export default function JustSoldGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    const currentIndex = PHOTO_IDS.indexOf(selectedPhoto);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? PHOTO_IDS.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === PHOTO_IDS.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedPhoto(PHOTO_IDS[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = PHOTO_IDS.indexOf(selectedPhoto);
        const newIndex = currentIndex === 0 ? PHOTO_IDS.length - 1 : currentIndex - 1;
        setSelectedPhoto(PHOTO_IDS[newIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = PHOTO_IDS.indexOf(selectedPhoto);
        const newIndex = currentIndex === PHOTO_IDS.length - 1 ? 0 : currentIndex + 1;
        setSelectedPhoto(PHOTO_IDS[newIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <>
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-[#0A2540] mb-4'>
              Just Sold: Maravilla Homes
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Browse through 32 stunning photos of recently sold Maravilla properties
            </p>
          </div>

          {/* Desktop Grid */}
          <div className='hidden md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6'>
            {PHOTO_IDS.map((photoId, index) => (
              <div
                key={photoId}
                className='group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100'
                onClick={() => openLightbox(photoId)}
              >
                <Image
                  src={getPhotoUrl(photoId, 'thumb')}
                  alt={`Maravilla Homes, North Las Vegas, NV - Photo ${index + 1}`}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                  sizes='(max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw'
                  loading={index < 8 ? 'eager' : 'lazy'}
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors' />
              </div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className='md:hidden grid grid-cols-2 gap-4'>
            {PHOTO_IDS.map((photoId, index) => (
              <div
                key={photoId}
                className='relative aspect-[4/3] rounded-lg overflow-hidden shadow-md active:scale-95 transition-transform bg-gray-100'
                onClick={() => openLightbox(photoId)}
              >
                <Image
                  src={getPhotoUrl(photoId, 'thumb')}
                  alt={`Maravilla Homes, North Las Vegas, NV - Photo ${index + 1}`}
                  fill
                  className='object-cover'
                  sizes='50vw'
                  loading={index < 4 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <p className='text-gray-500 text-sm'>
              Click any photo to view full size • {PHOTO_IDS.length} photos total
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4'
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10'
            aria-label='Close lightbox'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('prev');
            }}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10'
            aria-label='Previous photo'
          >
            <svg
              className='w-10 h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('next');
            }}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10'
            aria-label='Next photo'
          >
            <svg
              className='w-10 h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>

          {/* Photo Counter */}
          <div className='absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm z-10'>
            {PHOTO_IDS.indexOf(selectedPhoto) + 1} of {PHOTO_IDS.length}
          </div>

          {/* Full Size Image */}
          <div
            className='relative w-full h-full max-w-7xl max-h-[90vh]'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getPhotoUrl(selectedPhoto, 'full')}
              alt={`Maravilla Homes, North Las Vegas, NV - Photo ${PHOTO_IDS.indexOf(selectedPhoto) + 1}`}
              fill
              className='object-contain'
              sizes='100vw'
              priority
            />
          </div>

        </div>
      )}
    </>
  );
}

