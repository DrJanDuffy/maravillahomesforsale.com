/**
 * Cloudinary Configuration
 * Never hardcode Cloudinary IDs - use environment variables
 */

/**
 * Get Cloudinary cloud name from environment variable
 */
export function getCloudinaryCloudName(): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    throw new Error(
      'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME environment variable is not set'
    );
  }
  return cloudName;
}

/**
 * Get Cloudinary API key from environment variable
 */
export function getCloudinaryApiKey(): string {
  const apiKey = process.env.CLOUDINARY_API_KEY;
  if (!apiKey) {
    throw new Error('CLOUDINARY_API_KEY environment variable is not set');
  }
  return apiKey;
}

/**
 * Get Cloudinary API secret from environment variable
 */
export function getCloudinaryApiSecret(): string {
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiSecret) {
    throw new Error('CLOUDINARY_API_SECRET environment variable is not set');
  }
  return apiSecret;
}

/**
 * Generate Cloudinary image URL
 * @param imageId - Cloudinary image ID (public_id)
 * @param transformations - Optional Cloudinary transformations
 */
export function getCloudinaryImageUrl(
  imageId: string,
  transformations?: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'thumb';
    quality?: number | 'auto';
    format?: 'auto' | 'webp' | 'jpg' | 'png';
  }
): string {
  const cloudName = getCloudinaryCloudName();
  let url = `https://res.cloudinary.com/${cloudName}/image/upload`;

  if (transformations) {
    const {
      width,
      height,
      crop = 'fill',
      quality = 'auto' as number | 'auto',
      format = 'auto',
    } = transformations;

    const transformParts: string[] = [];
    if (width) transformParts.push(`w_${width}`);
    if (height) transformParts.push(`h_${height}`);
    transformParts.push(`c_${crop}`);
    transformParts.push(`q_${quality}`);
    transformParts.push(`f_${format}`);

    url += `/${transformParts.join(',')}`;
  }

  url += `/${imageId}`;

  return url;
}

/**
 * Generate Cloudinary image URL for property listings
 * Optimized for property cards (800x600)
 */
export function getPropertyImageUrl(imageId: string): string {
  return getCloudinaryImageUrl(imageId, {
    width: 800,
    height: 600,
    crop: 'fill',
    quality: 'auto',
    format: 'auto',
  });
}

/**
 * Generate Cloudinary image URL for OG images
 * Optimized for social sharing (1200x630)
 */
export function getOGImageUrl(imageId: string): string {
  return getCloudinaryImageUrl(imageId, {
    width: 1200,
    height: 630,
    crop: 'fill',
    quality: 'auto',
    format: 'auto',
  });
}

