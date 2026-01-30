'use client';

import { usePathname } from 'next/navigation';
import { getFAQConfigForPath } from '@/data/page-faqs';
import FAQSection from '@/components/FAQSection';

/**
 * Renders page-specific FAQ section with JSON-LD schema.
 * Used in PageLayout so every page gets Breadcrumbs + FAQ.
 */
export default function PageFAQSection() {
  const pathname = usePathname();
  const config = getFAQConfigForPath(pathname ?? '');

  if (!config || !config.faqs.length) return null;

  return (
    <FAQSection
      title={config.title}
      subtitle={config.subtitle}
      faqs={[...config.faqs]}
      className='py-20 bg-[#F7F9FC]'
    />
  );
}
