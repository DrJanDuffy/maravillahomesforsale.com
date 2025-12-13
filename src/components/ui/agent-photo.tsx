/**
 * Agent Photo Component
 * Client component to handle image loading with fallback
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AgentPhotoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function AgentPhoto({
  src,
  alt,
  className = '',
  priority = false,
  sizes,
}: AgentPhotoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback UI when image fails to load
    return (
      <div
        className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] flex items-center justify-center ${className}`}
      >
        <div className='flex flex-col items-center justify-center text-white p-6 text-center'>
          <div className='text-6xl mb-4'>👤</div>
          <h3 className='text-xl font-semibold mb-2'>Dr. Jan Duffy</h3>
          <p className='text-sm text-white/90'>
            REALTOR® with Berkshire Hathaway HomeServices® Nevada
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover'
        sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
        priority={priority}
        onError={() => setImageError(true)}
      />
    </div>
  );
}




