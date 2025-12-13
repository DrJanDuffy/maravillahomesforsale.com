# Photos Directory

This directory contains photos for the Maravilla Homes for Sale website.

## Folder Structure

- `just-sold/` - Photos of recently sold properties
- `properties/` - General property photos and listings
- `community/` - Community amenities, parks, and neighborhood photos
- `amenities/` - Home and community amenities photos
- `home-descriptions/` - Photos for home description pages

## Image Guidelines

- **Format**: Use JPG or WebP for photos
- **Naming**: Use descriptive, lowercase filenames with hyphens (e.g., `maravilla-community-park.jpg`)
- **Optimization**: Images should be optimized before uploading
- **Sizes**: 
  - Thumbnails: 400px width
  - Full size: 1500px width
  - Hero images: 1920px width

## Usage in Code

Photos in this directory can be referenced in Next.js using:
```tsx
import Image from 'next/image';

<Image 
  src="/photos/just-sold/property-1.jpg" 
  alt="Description"
  width={400}
  height={300}
/>
```

## Current Photos

The site currently uses:
- Hero background: `/54-DJI_20250707171528_0828_D.jpg` (in public root)
- Just Sold Gallery: Uses external CDN URLs from cribflyer-proxy.com

