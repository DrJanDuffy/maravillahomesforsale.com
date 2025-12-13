/**
 * ListingCard Component
 * Displays property listing information with responsive design (320px-1440px)
 * Server component by default (Next.js 16)
 */

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Bed,
  Bath,
  Square,
  MapPin,
  DollarSign,
  Calendar,
} from 'lucide-react';

export interface ListingCardProps {
  /** Property ID */
  id: string;
  /** Property address */
  address: string;
  /** City */
  city: string;
  /** State */
  state: string;
  /** ZIP code */
  zipCode: string;
  /** Listing price */
  price: number;
  /** Number of bedrooms */
  bedrooms: number;
  /** Number of bathrooms */
  bathrooms: number;
  /** Square footage */
  squareFeet: number;
  /** Property image URL */
  imageUrl: string;
  /** Property image alt text */
  imageAlt?: string;
  /** Listing status */
  status?: 'For Sale' | 'Pending' | 'Sold' | 'Off Market';
  /** Days on market */
  daysOnMarket?: number;
  /** Property type */
  propertyType?: string;
  /** Year built */
  yearBuilt?: number;
  /** Lot size in square feet */
  lotSize?: number;
  /** Link to full listing details */
  listingUrl?: string;
  /** Cloudinary image ID (if using Cloudinary) */
  cloudinaryId?: string;
}

/**
 * Format currency for display
 */
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with commas
 */
function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Get Cloudinary image URL from environment variable
 */
function getCloudinaryUrl(cloudinaryId?: string): string | null {
  if (!cloudinaryId) return null;
  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudinaryCloudName) return null;
  return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/w_800,h_600,c_fill/${cloudinaryId}`;
}

export default function ListingCard({
  id,
  address,
  city,
  state,
  zipCode,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  imageUrl,
  imageAlt,
  status = 'For Sale',
  daysOnMarket,
  propertyType,
  yearBuilt,
  lotSize,
  listingUrl,
  cloudinaryId,
}: ListingCardProps) {
  // Use Cloudinary URL if available, otherwise use provided imageUrl
  const displayImageUrl =
    getCloudinaryUrl(cloudinaryId) || imageUrl || '/placeholder-property.jpg';
  const displayImageAlt =
    imageAlt || `${address}, ${city}, ${state} ${zipCode}`;

  const statusColors = {
    'For Sale': 'bg-green-100 text-green-800 border-green-200',
    Pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Sold: 'bg-gray-100 text-gray-800 border-gray-200',
    'Off Market': 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <Card
      className='group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full'
      role='article'
      aria-label={`Property listing: ${address}`}
    >
      {/* Image Section */}
      <div className='relative w-full aspect-[4/3] overflow-hidden bg-gray-100'>
        <Image
          src={displayImageUrl}
          alt={displayImageAlt}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          priority={false}
        />
        {status && (
          <div className='absolute top-4 left-4'>
            <Badge
              className={`${statusColors[status]} border font-semibold`}
              aria-label={`Listing status: ${status}`}
            >
              {status}
            </Badge>
          </div>
        )}
        {daysOnMarket !== undefined && daysOnMarket > 0 && (
          <div className='absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium'>
            <Calendar className='inline h-3 w-3 mr-1' aria-hidden='true' />
            {daysOnMarket} days
          </div>
        )}
      </div>

      {/* Content Section */}
      <CardHeader className='flex-grow'>
        <div className='space-y-2'>
          <div className='flex items-start justify-between gap-2'>
            <h3 className='text-xl font-bold text-[#0A2540] line-clamp-2 group-hover:text-[#3A8DDE] transition-colors'>
              {address}
            </h3>
          </div>
          <div className='flex items-center text-gray-600 text-sm'>
            <MapPin className='h-4 w-4 mr-1' aria-hidden='true' />
            <span>
              {city}, {state} {zipCode}
            </span>
          </div>
          <div className='flex items-center gap-1 text-2xl font-bold text-[#0A2540]'>
            <DollarSign className='h-5 w-5' aria-hidden='true' />
            <span>{formatCurrency(price)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        {/* Property Details */}
        <div className='grid grid-cols-3 gap-4 py-2 border-t border-b border-gray-200'>
          <div className='flex items-center gap-2'>
            <Bed className='h-5 w-5 text-[#3A8DDE]' aria-hidden='true' />
            <div>
              <div className='text-sm text-gray-600'>Bedrooms</div>
              <div className='font-semibold text-[#0A2540]'>{bedrooms}</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Bath className='h-5 w-5 text-[#3A8DDE]' aria-hidden='true' />
            <div>
              <div className='text-sm text-gray-600'>Bathrooms</div>
              <div className='font-semibold text-[#0A2540]'>{bathrooms}</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Square className='h-5 w-5 text-[#3A8DDE]' aria-hidden='true' />
            <div>
              <div className='text-sm text-gray-600'>Sq Ft</div>
              <div className='font-semibold text-[#0A2540]'>
                {formatNumber(squareFeet)}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {(propertyType || yearBuilt || lotSize) && (
          <div className='space-y-1 text-sm text-gray-600'>
            {propertyType && (
              <div>
                <span className='font-medium'>Type:</span> {propertyType}
              </div>
            )}
            {yearBuilt && (
              <div>
                <span className='font-medium'>Built:</span> {yearBuilt}
              </div>
            )}
            {lotSize && (
              <div>
                <span className='font-medium'>Lot Size:</span>{' '}
                {formatNumber(lotSize)} sq ft
              </div>
            )}
          </div>
        )}
      </CardContent>

      {/* Footer with CTA */}
      <CardFooter className='pt-4'>
        {listingUrl ? (
          <Button
            asChild
            className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            aria-label={`View details for ${address}`}
          >
            <Link href={listingUrl}>View Details</Link>
          </Button>
        ) : (
          <Button
            className='w-full bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'
            aria-label={`Contact about ${address}`}
          >
            Contact Agent
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}




