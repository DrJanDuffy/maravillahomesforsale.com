'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Local photos from public/photos directory
// Using the primary versions (without -2 or -3 suffixes) and ordering them numerically
const PHOTO_PATHS = [
  '/photos/01-1 (2).jpg',
  '/photos/02-1 (1).jpg',
  '/photos/03-1 (3)-2.jpg',
  '/photos/04-1 (4).jpg',
  '/photos/05-1 (5).jpg',
  '/photos/06-1 (6).jpg',
  '/photos/07-1 (7).jpg',
  '/photos/08-1 (8).jpg',
  '/photos/09-1 (9).jpg',
  '/photos/10-1 (10).jpg',
  '/photos/11-1 (11).jpg',
  '/photos/12-1 (12).jpg',
  '/photos/13-1 (15).jpg',
  '/photos/14-1 (22).jpg',
  '/photos/15-1 (16).jpg',
  '/photos/16-1 (18).jpg',
  '/photos/17-1 (19).jpg',
  '/photos/18-1 (17).jpg',
  '/photos/19-1 (20).jpg',
  '/photos/20-1 (23).jpg',
  '/photos/21-1 (24).jpg',
  '/photos/22-1 (25).jpg',
  '/photos/23-1 (21).jpg',
  '/photos/24-1 (26).jpg',
  '/photos/25-1 (13).jpg',
  '/photos/26-1 (14).jpg',
  '/photos/27-1 (30).jpg',
  '/photos/28-1 (27).jpg',
  '/photos/29-1 (31).jpg',
  '/photos/30-1 (28).jpg',
  '/photos/31-1 (29)-3.jpg',
];

export default function JustSoldGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = selectedPhoto === 0 ? PHOTO_PATHS.length - 1 : selectedPhoto - 1;
    } else {
      newIndex = selectedPhoto === PHOTO_PATHS.length - 1 ? 0 : selectedPhoto + 1;
    }
    
    setSelectedPhoto(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        const newIndex = selectedPhoto === 0 ? PHOTO_PATHS.length - 1 : selectedPhoto - 1;
        setSelectedPhoto(newIndex);
      } else if (e.key === 'ArrowRight') {
        const newIndex = selectedPhoto === PHOTO_PATHS.length - 1 ? 0 : selectedPhoto + 1;
        setSelectedPhoto(newIndex);
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
              North Las Vegas Family Homes: Just Sold
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Browse through {PHOTO_PATHS.length} stunning photos of recently sold Maravilla properties
            </p>
          </div>

          {/* Desktop Grid */}
          <div className='hidden md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6'>
            {PHOTO_PATHS.map((photoPath, index) => (
              <div
                key={photoPath}
                className='group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100'
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photoPath}
                  alt={`Maravilla Homes, North Las Vegas, NV - Just Sold Property Photo ${index + 1}`}
                  fill
                  className='object-contain group-hover:scale-105 transition-transform duration-300'
                  sizes='(max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw'
                  loading={index < 8 ? 'eager' : 'lazy'}
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors' />
              </div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className='md:hidden grid grid-cols-2 gap-4'>
            {PHOTO_PATHS.map((photoPath, index) => (
              <div
                key={photoPath}
                className='relative aspect-[4/3] rounded-lg overflow-hidden shadow-md active:scale-95 transition-transform bg-gray-100'
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photoPath}
                  alt={`Maravilla Homes, North Las Vegas, NV - Just Sold Property Photo ${index + 1}`}
                  fill
                  className='object-contain'
                  sizes='50vw'
                  loading={index < 4 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <p className='text-gray-500 text-sm'>
              Click any photo to view full size • {PHOTO_PATHS.length} photos total
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
            {selectedPhoto !== null ? selectedPhoto + 1 : 0} of {PHOTO_PATHS.length}
          </div>

          {/* Full Size Image */}
          {selectedPhoto !== null && (
            <div
              className='relative w-full h-full max-w-7xl max-h-[90vh]'
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTO_PATHS[selectedPhoto]}
                alt={`Maravilla Homes, North Las Vegas, NV - Just Sold Property Photo ${selectedPhoto + 1}`}
                fill
                className='object-contain'
                sizes='100vw'
                priority
              />
            </div>
          )}

        </div>
      )}
    </>
  );
}

