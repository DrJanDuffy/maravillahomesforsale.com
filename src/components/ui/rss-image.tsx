'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * RSS Image Component with Error Handling
 * Handles images from RSS feeds that might fail to load
 */
export function RSSImage({
  src,
  alt,
  fill,
  sizes,
  className,
  priority,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Fallback to placeholder if image fails to load
  const handleError = () => {
    if (imageSrc !== '/placeholder-blog.jpg') {
      console.warn(`Failed to load RSS image: ${imageSrc}, using placeholder`);
      setImageError(true);
      setImageSrc('/placeholder-blog.jpg');
    }
  };

  // If image already errored, show placeholder
  if (imageError || !imageSrc || imageSrc === '/placeholder-blog.jpg') {
    return (
      <div
        className={`${className || ''} bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] flex items-center justify-center`}
        style={fill ? { position: 'absolute', inset: 0 } : {}}
      >
        <span className='text-white text-sm font-medium px-4 text-center'>
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={handleError}
      unoptimized={false}
    />
  );
}

