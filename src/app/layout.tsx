import type { Metadata } from 'next';
import Script from 'next/script';
import { Source_Sans_3, Open_Sans } from 'next/font/google';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from '@/lib/metadata';
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
    'Find exceptional value in Maravilla, Las Vegas. Discover quality homes with great value in a well-planned community featuring excellent amenities, top-rated schools, and convenient location.',
  keywords:
    'Maravilla, Las Vegas homes, luxury real estate, Nevada homes, Las Vegas real estate, Maravilla community, luxury homes Las Vegas, Maravilla properties, Las Vegas luxury real estate, Maravilla homes for sale, Las Vegas real estate agent, Maravilla neighborhood, luxury properties Las Vegas, Maravilla real estate market, Las Vegas home values',
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
      "Find exceptional value in Maravilla, North Las Vegas. Discover quality homes with great value in a well-planned community featuring excellent amenities and convenient location.",
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
      "Find exceptional value in Maravilla, North Las Vegas. Discover quality homes with great value in a well-planned community.",
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
        {/* Viewport meta tag - Next.js adds this automatically, but explicit for clarity */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* Favicon for Google Search results - must be square, at least 48x48px, stable URL */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        {/* Apple Touch Icon for iOS devices */}
        <link rel='apple-touch-icon' href='/favicon.ico' />
        {/* Preconnect to critical third-party origins for faster resource loading */}
        {/* RealScout: Preconnect for widget (310ms LCP savings per Lighthouse) */}
        <link rel='preconnect' href='https://em.realscout.com' crossOrigin='anonymous' />
        {/* Google Analytics: Preconnect for tracking */}
        <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='anonymous' />
        <link rel='preconnect' href='https://www.google-analytics.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://www.google-analytics.com' />
        {/* Facebook Pixel: DNS prefetch only (loaded lazily) */}
        <link rel='dns-prefetch' href='https://connect.facebook.net' />
        {/* AWS S3: Preconnect for background images (better than dns-prefetch for same-origin resources) */}
        <link rel='preconnect' href='https://cribflyer-publicsite.s3.amazonaws.com' crossOrigin='anonymous' />
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

        {/* Structured Data for Real Estate Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              '@id': `${siteUrl}#realestateagent`,
              name: 'Dr. Jan Duffy',
              description:
                'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Maravilla, North Las Vegas, Las Vegas, and Henderson',
              jobTitle: 'REALTOR®',
              worksFor: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              url: siteUrl,
              logo: logoUrl,
              image: ogImageUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '851 W Lone Mountain Rd',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89032',
                addressCountry: 'US',
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
                  addressLocality: 'North Las Vegas',
                  addressRegion: 'NV',
                  addressCountry: 'US',
                },
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-702-500-1953',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              memberOf: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              sameAs: [
                'https://www.facebook.com/maravillahomesforsale',
                'https://www.youtube.com/@DrDuffy',
                'https://www.linkedin.com/company/maravilla-homes-for-sale/',
              ],
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${siteUrl}#localbusiness`,
              name: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
              description:
                'Looking to buy or sell a home in North Las Vegas? Homes by Dr. Jan Duffy is your trusted real estate expert in this growing community. Known for modern home designs, family-friendly amenities, and easy access to I-215 and I-15, North Las Vegas is a top choice for homebuyers. With nearby Aliante shopping, top-rated schools, and great neighborhoods, it&apos;s no wonder buyers are flocking to this area. For sellers, Dr. Duffy offers proven pricing strategies and expert marketing to help you get the best value for your property. Whether you&apos;re searching for your dream home or selling your house, Dr. Duffy provides personalized tours, market insights, and full support to make the process easy and stress-free.',
              url: siteUrl,
              telephone: '+1-702-500-1953',
              email: 'DrDuffy@MaravillaHomesForSale.com',
              image: ogImageUrl,
              logo: {
                '@type': 'ImageObject',
                url: logoUrl,
                width: 512,
                height: 512,
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '851 W Lone Mountain Rd',
                addressLocality: 'North Las Vegas',
                addressRegion: 'NV',
                postalCode: '89032',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.2465,
                longitude: -115.1475,
              },
              hasMap:
                'https://www.google.com/maps/search/?api=1&query=851+W+Lone+Mountain+Rd+North+Las+Vegas+NV+89032',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '06:00',
                  closes: '21:00',
                },
              ],
              priceRange: '$$$',
              currenciesAccepted: 'USD',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-500-1953',
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
                  email: 'DrDuffy@MaravillaHomesForSale.com',
                  contactType: 'customer service',
                  areaServed: 'US',
                  availableLanguage: ['English'],
                },
              ],
            }),
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
                      description: 'Expert assistance finding and purchasing your dream home in Maravilla and North Las Vegas',
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
                      description: 'Accurate home valuations and market analysis for Maravilla properties',
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
