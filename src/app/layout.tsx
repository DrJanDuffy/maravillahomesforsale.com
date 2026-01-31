import type { Metadata } from 'next';
import Script from 'next/script';
import { Source_Sans_3, Open_Sans } from 'next/font/google';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generatePersonSchema,
  generateRealEstateAgentSchema,
} from '@/lib/metadata';
import { BUSINESS_INFO } from '@/lib/config/business-info';
import './globals.css';

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  process.env.GOOGLE_SITE_VERIFICATION;

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-ZG0VF199TR';
const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function isNonPlaceholderId(value: string | undefined): value is string {
  if (!value) return false;
  const normalized = value.trim();
  if (!normalized) return false;
  if (normalized.includes('XXXX')) return false;
  if (normalized.includes('YOUR_')) return false;
  return true;
}

function isValidGtmId(value: string | undefined): value is string {
  if (!isNonPlaceholderId(value)) return false;
  return /^GTM-[A-Z0-9]+$/i.test(value);
}

function isValidGaId(value: string | undefined): value is string {
  if (!isNonPlaceholderId(value)) return false;
  // GA4 measurement ID format (most common): G-XXXXXXXXXX
  return /^G-[A-Z0-9]+$/i.test(value);
}

function isValidFacebookPixelId(value: string | undefined): value is string {
  if (!isNonPlaceholderId(value)) return false;
  // Pixel IDs are numeric.
  return /^\d{8,20}$/.test(value.trim());
}

// Ensure these assets exist in /public to avoid 404s for crawlers.
const ogImageUrl = `${siteUrl}/photos/01-1 (2).jpg`;
const logoUrl = `${siteUrl}/globe.svg`;

// Optimize fonts with next/font
const sourceSansPro = Source_Sans_3({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-pro',
});

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  description:
    'North Las Vegas Family Homes: find your dream home in Maravilla & North Las Vegas. Family-friendly community, top schools, parks. Dr. Jan Duffy, REALTOR®. Call (702) 500-1953.',
  keywords:
    'North Las Vegas family homes, Maravilla homes for sale, North Las Vegas real estate, Maravilla Las Vegas, Dr. Jan Duffy REALTOR, Berkshire Hathaway Nevada, first-time home buyer North Las Vegas, Maravilla community, North Las Vegas neighborhoods, homes for sale Maravilla, Nevada real estate',
  authors: [
    { name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy', url: siteUrl },
  ],
  creator: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  publisher: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    description:
      "North Las Vegas Family Homes: Maravilla & North Las Vegas real estate. Family-friendly community, top schools. Dr. Jan Duffy, REALTOR®. (702) 500-1953.",
    url: siteUrl,
    siteName: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
      images: [
        {
          url: '/photos/01-1 (2).jpg',
          width: 1200,
          height: 630,
          alt: 'Maravilla community and neighborhood area view, North Las Vegas',
          // 2025 Best Practice: Add secure URL for OG images
          secureUrl: `${siteUrl}/photos/01-1 (2).jpg`,
        },
      ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    description:
      "North Las Vegas Family Homes: Maravilla & North Las Vegas real estate. Dr. Jan Duffy, REALTOR®. (702) 500-1953.",
    images: ['/photos/01-1 (2).jpg'],
    // 2025 Best Practice: Add Twitter site handle if available
    creator: '@maravillahomes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      // 2025 Best Practice: Allow large image previews for Google Images
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  category: 'Real Estate',
  classification: 'Luxury Real Estate',
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'North Las Vegas, Las Vegas',
    'geo.position': '36.2465;-115.1475',
    ICBM: '36.2465, -115.1475',
    'DC.title': 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    'DC.creator': 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    'DC.subject': 'Luxury Real Estate, North Las Vegas, Maravilla',
    'DC.description': 'Luxury homes in Maravilla, North Las Vegas',
    'DC.publisher': 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    'DC.contributor': 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': siteUrl,
    'DC.language': 'en',
    'DC.coverage': 'North Las Vegas, Nevada',
    'DC.rights': 'Copyright 2007-2025 North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${sourceSansPro.variable} ${openSans.variable}`}>
      <head>
        {/* 2025 Best Practice: Mobile-first viewport for Google's mobile-first indexing */}
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
        {/* 2025 Best Practice: Theme color for better mobile experience */}
        <meta name='theme-color' content='#0A2540' />
        {/* 2025 Best Practice: Color scheme for dark mode support */}
        <meta name='color-scheme' content='light dark' />
        {/* Favicon for Google Search results - SVG primary, ICO fallback */}
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        {/* Apple Touch Icon for iOS devices */}
        <link rel='apple-touch-icon' href='/favicon.svg' />
        {/* Preconnect to critical third-party origins for faster resource loading */}
        {/* RealScout: Preconnect for widget (310ms LCP savings per Lighthouse) */}
        <link rel='preconnect' href='https://em.realscout.com' crossOrigin='anonymous' />
        {/* Google Analytics: Preconnect for tracking */}
        <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='anonymous' />
        <link rel='preconnect' href='https://www.google-analytics.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://www.google-analytics.com' />
        {/* Facebook Pixel: DNS prefetch only (loaded lazily) */}
        <link rel='dns-prefetch' href='https://connect.facebook.net' />
        {/* Preload critical hero image for LCP optimization */}
        <link
          rel='preload'
          href='/photos/01-1 (2).jpg'
          as='image'
          fetchPriority='high'
        />

        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>

        {/* Google Analytics (GA4) - Defer to lazyOnload to improve LCP/FCP */}
        {/* Analytics doesn't need to block initial render */}
        {isValidGaId(gaMeasurementId) ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
                gaMeasurementId
              )}`}
              strategy='lazyOnload'
            />
            <Script id='google-analytics' strategy='lazyOnload'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}

        {/* Google Tag Manager - only load when configured (prevents gtm.js 404) */}
        {isValidGtmId(gtmId) ? (
          <Script id='google-tag-manager' strategy='afterInteractive'>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        ) : null}

        {/* Facebook Pixel - only load when configured
            Note: Meta's script currently triggers a browser deprecation warning (unload listeners).
            The only way to remove that warning is to not load the script.
            Using lazyOnload to defer loading and reduce impact on initial page load. */}
        {isValidFacebookPixelId(facebookPixelId) ? (
          <Script id='facebook-pixel' strategy='lazyOnload'>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}

        {/* Structured Data for E-E-A-T: Person Schema (2025 Best Practice) */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />

        {/* Structured Data for Real Estate Agent */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRealEstateAgentSchema()),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />

        {/* Structured Data for Organization - Required for Google Knowledge Panel */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />

        {/* Structured Data for Website - Site Name for Google Search */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />

        {/* Structured Data for Service - 2025 Best Practice */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Real Estate Services',
              description:
                'Professional real estate services including home buying, selling, property valuation, and market analysis in North Las Vegas and Maravilla communities.',
              serviceType: 'Real Estate Services',
              provider: {
                '@type': 'LocalBusiness',
                name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
                url: siteUrl,
                telephone: '+1-702-500-1953',
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
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Real Estate Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Home Buying Services',
                      description: 'North Las Vegas Family Homes: expert assistance finding your dream home in North Las Vegas and Maravilla',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Home Selling Services',
                      description: 'Professional marketing and sales services to maximize your property value',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Property Valuation',
                      description: 'North Las Vegas Family Homes: accurate home valuations and market analysis for North Las Vegas and Maravilla',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Market Analysis',
                      description: 'Comprehensive market insights and trends for North Las Vegas real estate',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className='antialiased'>
        {/* Google Tag Manager (noscript) */}
        {isValidGtmId(gtmId) ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(
                gtmId
              )}`}
              height='0'
              width='0'
              className='hidden'
            />
          </noscript>
        ) : null}

        {/* RealScout Web Components Script - Defer to lazyOnload since widget uses intersection observer */}
        {/* Widget only loads when in viewport, so script can load lazily too */}
        <Script
          id='realscout-script'
          src='https://em.realscout.com/widgets/realscout-web-components.umd.js'
          type='module'
          strategy='lazyOnload'
        />
        {children}
      </body>
    </html>
  );
}
