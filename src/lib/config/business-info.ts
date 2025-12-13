/**
 * Centralized business information configuration
 * Update these values to change business info across all pages
 */

export const BUSINESS_INFO = {
  // Business Name
  name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  legalName: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  
  // Phone Number (use consistent format)
  phone: {
    display: '(702) 500-1953',
    href: 'tel:7025001953',
    schema: '+1-702-500-1953', // For structured data
  },
  
  // Business Address (Office Location)
  address: {
    streetAddress: '4380 W Ann Rd Suite 201',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89031',
    addressCountry: 'US',
    full: '4380 W Ann Rd Suite 201, North Las Vegas, NV 89031',
  },
  
  // Community Address (Maravilla Community)
  community: {
    name: 'Maravilla',
    address: 'Maravilla, North Las Vegas, NV 89031',
    locality: 'North Las Vegas',
    region: 'NV',
    postalCode: '89031',
    country: 'US',
  },
  
  // Business Coordinates (Office Location)
  geo: {
    latitude: 36.2465,
    longitude: -115.1475,
  },
  
  // Community Coordinates (Maravilla Location)
  communityGeo: {
    latitude: 36.26276,
    longitude: -115.17182,
  },
  
  // Email
  email: 'DrDuffy@MaravillaHomesForSale.com',
  
  // Business Hours
  hours: {
    display: '6AM-9PM Daily',
    schema: {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '21:00',
    },
  },
  
  // Google Maps Links
  maps: {
    business: 'https://www.google.com/maps/search/?api=1&query=4380+W+Ann+Rd+Suite+201+North+Las+Vegas+NV+89031',
    community: 'https://www.google.com/maps/search/?api=1&query=Maravilla+North+Las+Vegas+NV+89031',
  },
  
  // Google Business Profile
  googleBusinessProfile: 'https://share.google/jwKcbkiXP5lxFx8Kf',
} as const;

