import PageLayout from '@/components/layout/page-layout';
import {
  generateMetadata as genMetadata,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/metadata';
import Script from 'next/script';
import { BUSINESS_INFO } from '@/lib/config/business-info';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Privacy Policy | North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
  description:
    'Privacy Policy for North Las Vegas Family Homes | Homes by Dr. Jan Duffy. Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, personal information',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <PageLayout>
      <article className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-[#0A2540] mb-8'>
            Privacy Policy
          </h1>

          <div className='prose prose-lg max-w-none space-y-6 text-gray-700'>
            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Information We Collect
              </h2>
              <p>
                North Las Vegas Family Homes | Homes by Dr. Jan Duffy (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) collects information that you provide
                directly to us when you:
              </p>
              <ul className='list-disc pl-6 space-y-2 mt-4'>
                <li>Fill out forms on our website</li>
                <li>Contact us via phone, email, or other methods</li>
                <li>Request property information or schedule a tour</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className='list-disc pl-6 space-y-2 mt-4'>
                <li>Provide real estate services and respond to your inquiries</li>
                <li>Send you property listings and market information</li>
                <li>Improve our website and services</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Information Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className='list-disc pl-6 space-y-2 mt-4'>
                <li>Service providers who assist us in operating our business</li>
                <li>Real estate partners when necessary to provide services</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal
                information. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className='list-disc pl-6 space-y-2 mt-4'>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to improve your
                experience on our website. You can control cookies through your
                browser settings.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className='mt-4 space-y-2'>
                <p>
                  <strong>North Las Vegas Family Homes | Homes by Dr. Jan Duffy</strong>
                </p>
                <p>{BUSINESS_INFO.address.full}</p>
                <p>
                  Phone: <a href='tel:7025001953' className='text-[#3A8DDE] hover:underline'>(702) 500-1953</a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href='mailto:DrDuffy@MaravillaHomesForSale.com'
                    className='text-[#3A8DDE] hover:underline'
                  >
                    DrDuffy@MaravillaHomesForSale.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-semibold text-[#0A2540] mb-4'>
                Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The most recent
                version will always be posted on this page with an updated date.
              </p>
              <p className='mt-4 text-sm text-gray-500'>
                Last updated: January 2025
              </p>
            </section>
          </div>
        </div>
      </article>

      <Script
        id='privacy-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Privacy Policy | North Las Vegas Family Homes',
              description:
                'Privacy Policy for North Las Vegas Family Homes | Homes by Dr. Jan Duffy. Learn how we collect, use, and protect your personal information.',
              url: `${baseUrl}/privacy`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Privacy Policy', url: `${baseUrl}/privacy` },
              ],
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Privacy Policy', url: `${baseUrl}/privacy` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}

