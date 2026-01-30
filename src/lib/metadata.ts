import type { Metadata } from 'next';
import { BUSINESS_INFO } from './config/business-info';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

const businessAddress = {
  streetAddress: BUSINESS_INFO.address.streetAddress,
  addressLocality: BUSINESS_INFO.address.addressLocality,
  addressRegion: BUSINESS_INFO.address.addressRegion,
  postalCode: BUSINESS_INFO.address.postalCode,
  addressCountry: BUSINESS_INFO.address.addressCountry,
} as const;

// Approximate coordinates for the office location.
// If you need exact GPS from GBP, replace these values.
const businessGeo = {
  latitude: BUSINESS_INFO.geo.latitude,
  longitude: BUSINESS_INFO.geo.longitude,
} as const;

const businessName = BUSINESS_INFO.name;
const businessPhone = BUSINESS_INFO.phone.schema;
const businessEmail = BUSINESS_INFO.email;

export const MARAVILLA_FAQS = [
  {
    question: 'What makes Maravilla a desirable community?',
    answer:
      'Maravilla is a premier master-planned community offering exceptional living experiences. The community features beautiful homes, excellent schools, parks, and convenient access to shopping, dining, and major highways. Residents enjoy a tight-knit community atmosphere with numerous amenities and events throughout the year.',
  },
  {
    question: 'What is the average price range for homes in Maravilla?',
    answer:
      'Home prices in Maravilla vary depending on property type, size, and location. We offer a range of homes to suit different budgets and lifestyles. Contact us for current market information and pricing details specific to your preferences.',
  },
  {
    question: 'How long do properties typically stay on the market?',
    answer:
      'Properties in Maravilla typically sell within a competitive timeframe, reflecting the area&apos;s strong demand and desirable location. Market conditions can vary, and we can provide current market data specific to the community.',
  },
  {
    question: 'What types of properties are available?',
    answer:
      'We offer a diverse selection including single-family homes, luxury estates, and new construction properties. Each category features different amenities and price points to suit various buyer needs and preferences.',
  },
  {
    question: 'Do you help with financing and mortgage options?',
    answer:
      'Yes, we work with trusted mortgage partners to help you find the best financing options. We can connect you with lenders who specialize in luxury home financing and offer competitive rates.',
  },
  {
    question: 'Can I schedule a property tour?',
    answer:
      'Absolutely! You can schedule a tour through our website or by contacting us directly. We offer both in-person and virtual tours to accommodate your preferences and schedule.',
  },
] as const;

// Keep CRAIG_RANCH_FAQS for backward compatibility during migration
export const CRAIG_RANCH_FAQS = MARAVILLA_FAQS;

const siteConfig = {
  name: businessName,
  url: siteUrl,
    description:
      'Looking to buy or sell a home in North Las Vegas? Homes by Dr. Jan Duffy is your trusted real estate expert in this growing community. Known for modern home designs, family-friendly amenities, and easy access to I-215 and I-15, North Las Vegas is a top choice for homebuyers. With nearby Aliante shopping, top-rated schools, and great neighborhoods, it\'s no wonder buyers are flocking to this area. For sellers, Dr. Duffy offers proven pricing strategies and expert marketing to help you get the best value for your property. Whether you\'re searching for your dream home or selling your house, Dr. Duffy provides personalized tours, market insights, and full support to make the process easy and stress-free.',
  ogImage: '/photos/01-1 (2).jpg',
  twitterHandle: '@maravillahomes',
  locale: 'en_US',
  type: 'website',
};

/**
 * Generate comprehensive metadata for pages
 */
export function generateMetadata({
  title,
  description,
  keywords,
  path = '/',
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;
  const fullImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${siteConfig.url}${ogImage}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'US-NV',
      'geo.placename': 'North Las Vegas, Las Vegas',
      'geo.position': `${businessGeo.latitude};${businessGeo.longitude}`,
      ICBM: `${businessGeo.latitude}, ${businessGeo.longitude}`,
    },
  };
}

/**
 * Generate LocalBusiness schema for contact pages
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#localbusiness`,
    name: businessName,
    description:
      'Looking to buy or sell a home in North Las Vegas? Homes by Dr. Jan Duffy is your trusted real estate expert in this growing community. Known for modern home designs, family-friendly amenities, and easy access to I-215 and I-15, North Las Vegas is a top choice for homebuyers. With nearby Aliante shopping, top-rated schools, and great neighborhoods, it\'s no wonder buyers are flocking to this area. For sellers, Dr. Duffy offers proven pricing strategies and expert marketing to help you get the best value for your property. Whether you\'re searching for your dream home or selling your house, Dr. Duffy provides personalized tours, market insights, and full support to make the process easy and stress-free. Women-owned business. LGBTQ+ friendly. Offers online appointments.',
    url: siteUrl,
    telephone: businessPhone,
    email: businessEmail,
    image: `${siteUrl}/photos/01-1 (2).jpg`,
    logo: `${siteUrl}/globe.svg`,
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...businessGeo,
    },
    hasMap: BUSINESS_INFO.maps.business,
    areaServed: [
      { '@type': 'Place', name: BUSINESS_INFO.serviceArea },
      { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:00',
        closes: '21:00',
      },
    ],
    specialOpeningHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        opens: '10:00',
        closes: '18:00',
        validFrom: '2026-02-16',
        validThrough: '2026-02-16',
      },
    ],
    ...(BUSINESS_INFO.foundingDate && { foundingDate: BUSINESS_INFO.foundingDate }),
    priceRange: '$$$',
    currenciesAccepted: 'USD',
  };
}

/**
 * Generate Organization schema for Google Knowledge Panel
 * This is required for Google to display your logo and business information in search results
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: businessName,
    legalName: businessName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/globe.svg`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/photos/01-1 (2).jpg`,
    description:
      'Looking to buy or sell a home in North Las Vegas? Homes by Dr. Jan Duffy is your trusted real estate expert in this growing community. Known for modern home designs, family-friendly amenities, and easy access to I-215 and I-15, North Las Vegas is a top choice for homebuyers. With nearby Aliante shopping, top-rated schools, and great neighborhoods, it&apos;s no wonder buyers are flocking to this area. For sellers, Dr. Duffy offers proven pricing strategies and expert marketing to help you get the best value for your property. Whether you&apos;re searching for your dream home or selling your house, Dr. Duffy provides personalized tours, market insights, and full support to make the process easy and stress-free.',
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '06:00',
          closes: '21:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: businessEmail,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/maravillahomesforsale',
      'https://www.linkedin.com/company/maravilla-homes-for-sale/',
      'https://www.youtube.com/@DrDuffy',
    ],
    ...(BUSINESS_INFO.foundingDate && { foundingDate: BUSINESS_INFO.foundingDate }),
  };
}

/**
 * Generate Person schema for E-E-A-T (2025 Best Practice)
 * Showcases expertise, experience, authoritativeness, and trustworthiness
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: 'Dr. Jan Duffy',
    alternateName: ['Jan Duffy', 'Dr. Duffy'],
    jobTitle: 'REALTOR®',
    description:
      'Dr. Jan Duffy is a highly experienced REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Maravilla, Las Vegas, North Las Vegas, and Henderson. With over 15 years of experience, she provides expert, data-driven advice and personalized consultations.',
    image: `${siteUrl}/photos/Dr. Duffy Blue_Headshot.jpg`,
    url: siteUrl,
    email: businessEmail,
    telephone: businessPhone,
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.berkshirehathawayhs.com',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
      identifier: 'S.0197614',
    },
    knowsAbout: [
      'North Las Vegas Real Estate',
      'Maravilla Homes',
      'Luxury Real Estate',
      'First-time Homebuyers',
      'Home Selling',
      'Property Valuation',
      'VA Loans',
      'FHA Loans',
      'Real Estate Market Analysis',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Real Estate Education',
    },
    sameAs: [
      'https://www.facebook.com/maravillahomesforsale',
      'https://www.youtube.com/@DrDuffy',
      'https://www.linkedin.com/company/maravilla-homes-for-sale/',
    ],
  };
}

/**
 * Generate RealEstateAgent schema (Enhanced for 2025)
 */
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}#realestateagent`,
    name: 'Dr. Jan Duffy',
    description:
      'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Maravilla, Las Vegas, North Las Vegas, and Henderson. Over 15 years of experience with proven track record of 500+ homes sold. Women-owned business. LGBTQ+ friendly. Offers online appointments.',
    jobTitle: 'REALTOR®',
    ...(BUSINESS_INFO.foundingDate && { foundingDate: BUSINESS_INFO.foundingDate }),
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.berkshirehathawayhs.com',
    },
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/globe.svg`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/photos/Dr. Duffy Blue_Headshot.jpg`,
    address: {
      '@type': 'PostalAddress',
      ...businessAddress,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'North Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Maravilla',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '06:00',
          closes: '21:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'sms',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: businessEmail,
        contactType: 'customer service',
        areaServed: 'US',
      },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
      identifier: 'S.0197614',
    },
    sameAs: [
      'https://www.facebook.com/maravillahomesforsale',
      'https://www.linkedin.com/company/maravilla-homes-for-sale/',
      'https://www.youtube.com/@DrDuffy',
    ],
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate CollectionPage schema for listings pages
 */
export function generateCollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      name,
      description,
    },
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(breadcrumb && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };
}

export function generateFAQPageSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebSite schema with site name for Google Search
 * This is required for Google to display your site name in search results
 * Must be placed on the homepage only
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'North Las Vegas Family Homes',
    alternateName: [
      'Maravilla Homes',
      'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
      'www.maravillahomesforsale.com',
      'maravillahomesforsale.com',
    ],
    url: siteUrl,
    description:
      'Luxury real estate services in Maravilla, Las Vegas, Nevada. Find your dream home with Dr. Jan Duffy, REALTOR® specializing in Maravilla properties.',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Blog schema for blog/insights pages
 */
export function generateBlogSchema({
  name,
  description,
  url,
  author,
  publisher,
}: {
  name: string;
  description: string;
  url: string;
  author?: string;
  publisher?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name,
    description,
    url,
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
    ...(publisher && {
      publisher: {
        '@type': 'Organization',
        name: publisher,
      },
    }),
  };
}

/**
 * Generate Article schema for individual blog posts/articles
 * 2025 Best Practice: Article schema helps Google understand content structure and improves rich results
 */
export function generateArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${siteUrl}${image}`,
      },
    }),
    datePublished,
    dateModified: dateModified || datePublished,
    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        ...(author.url && { url: author.url }),
      },
    }),
    ...(publisher && {
      publisher: {
        '@type': 'Organization',
        name: publisher.name,
        ...(publisher.logo && {
          logo: {
            '@type': 'ImageObject',
            url: publisher.logo.startsWith('http') ? publisher.logo : `${siteUrl}${publisher.logo}`,
            width: 512,
            height: 512,
          },
        }),
      },
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generate Dataset schema for market data pages
 */
export function generateDatasetSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url,
    license: `${siteUrl}`,
    creator: {
      '@type': 'Organization',
      name: businessName,
    },
  };
}

/**
 * Generate Service schema for real estate services
 * 2025 Best Practice: Service schema helps Google understand what services you offer
 */
export function generateServiceSchema({
  name,
  description,
  serviceType,
  areaServed,
  provider,
}: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string;
  provider?: {
    name: string;
    url: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: provider || {
      '@type': 'LocalBusiness',
      name: businessName,
      url: siteUrl,
      telephone: businessPhone,
    },
    areaServed: areaServed || {
      '@type': 'City',
      name: 'North Las Vegas',
      addressRegion: 'NV',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: siteUrl,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: businessPhone,
        contactType: 'customer service',
      },
    },
  };
}

/**
 * Generate AggregateRating schema for Google Business Profile integration
 * 2025 Best Practice: Ratings schema improves visibility in search results
 */
export function generateAggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
  };
}

/**
 * Generate Review schema for individual reviews
 * 2025 Best Practice: Review schema can show star ratings in search results
 */
export function generateReviewSchema({
  author,
  datePublished,
  reviewBody,
  ratingValue,
  bestRating = 5,
}: {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue,
      bestRating,
    },
  };
}

