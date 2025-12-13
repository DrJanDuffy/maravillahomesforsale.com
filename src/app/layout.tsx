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
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? 'G-MPLYNTN4V7';
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
const ogImageUrl = `${siteUrl}/54-DJI_20250707171528_0828_D.jpg`;
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
  title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  description:
    "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities, excellent schools, and convenient location. View current listings from $600K to $1.2M.",
  keywords:
    'Craig Ranch, Las Vegas homes, luxury real estate, Nevada homes, Las Vegas real estate, Craig Ranch community, luxury homes Las Vegas, Craig Ranch properties, Las Vegas luxury real estate, Craig Ranch homes for sale, Las Vegas real estate agent, Craig Ranch neighborhood, luxury properties Las Vegas, Craig Ranch real estate market, Las Vegas home values',
  authors: [
    { name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy', url: siteUrl },
  ],
  creator: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  publisher: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
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
    title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    description:
      "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities with premium amenities and excellent location.",
    url: siteUrl,
    siteName: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/54-DJI_20250707171528_0828_D.jpg',
        width: 1200,
        height: 630,
        alt: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    description:
      "Discover luxury homes in Craig Ranch, Las Vegas. Find your dream home in one of the city's most prestigious communities.",
    images: ['/54-DJI_20250707171528_0828_D.jpg'],
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
    'DC.title': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.creator': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.subject': 'Luxury Real Estate, Las Vegas, Craig Ranch',
    'DC.description': 'Luxury homes in Craig Ranch, Las Vegas',
    'DC.publisher': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.contributor': 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': siteUrl,
    'DC.language': 'en',
    'DC.coverage': 'Las Vegas, Nevada',
    'DC.rights': 'Copyright 2007-2025 Craig Ranch Vegas | Homes By Dr. Jan Duffy',
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
        {/* Favicon for Google Search results - must be square, at least 48x48px, stable URL */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        {/* Apple Touch Icon for iOS devices */}
        <link rel='apple-touch-icon' href='/favicon.ico' />
        {/* Preconnect to critical third-party origins for faster resource loading */}
        <link rel='preconnect' href='https://em.realscout.com' crossOrigin='anonymous' />
        <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://www.google-analytics.com' />

        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>

        {/* Google Analytics (GA4) - only load when configured */}
        {isValidGaId(gaMeasurementId) ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
                gaMeasurementId
              )}`}
              strategy='afterInteractive'
            />
            <Script id='google-analytics' strategy='afterInteractive'>
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
                'REALTOR® with Berkshire Hathaway HomeServices® Nevada, specializing in luxury homes and estates in Craig Ranch, Las Vegas, North Las Vegas, and Henderson',
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
                name: 'Craig Ranch',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Las Vegas',
                  addressRegion: 'NV',
                  addressCountry: 'US',
                },
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-702-820-5408',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              memberOf: {
                '@type': 'Organization',
                name: 'Berkshire Hathaway HomeServices Nevada',
              },
              sameAs: [
                'https://www.facebook.com/DrJanDuffyRealtorCentennialHills',
                'https://www.instagram.com/drjanduffy',
                'https://www.youtube.com/@DrDuffy',
                'https://twitter.com/drjanduffy',
                'https://www.linkedin.com/in/lvrmembers',
                'https://www.tiktok.com/@dr.janduffy',
                'https://www.pinterest.com/bhhsluxury',
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
              name: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
              description:
                'Luxury real estate services in Craig Ranch, North Las Vegas, Las Vegas, Nevada. Expert real estate agent specializing in Craig Ranch homes and properties.',
              url: siteUrl,
              telephone: '+1-702-820-5408',
              email: 'DrDuffy@CraigRanchHomes.com',
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
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '10:00',
                  closes: '16:00',
                },
                // Sunday: By appointment (omit hours rather than guessing)
              ],
              priceRange: '$$$',
              currenciesAccepted: 'USD',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-820-5408',
                  contactType: 'customer service',
                  areaServed: 'US',
                  availableLanguage: ['English'],
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '09:00',
                    closes: '18:00',
                  },
                },
                {
                  '@type': 'ContactPoint',
                  email: 'DrDuffy@CraigRanchHomes.com',
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

        {/* RealScout Web Components Script - Load with high priority for better performance */}
        <Script
          id='realscout-script'
          src='https://em.realscout.com/widgets/realscout-web-components.umd.js'
          type='module'
          strategy='afterInteractive'
        />
        {children}
      </body>
    </html>
  );
}
