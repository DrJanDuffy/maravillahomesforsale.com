import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    short_name: 'North Las Vegas Family Homes',
    description:
      'Luxury real estate services in Maravilla, Las Vegas, Nevada',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A2540',
    theme_color: '#3A8DDE',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['real estate', 'business', 'lifestyle'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    prefer_related_applications: false,
  };
}
