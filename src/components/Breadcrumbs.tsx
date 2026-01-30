'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NEIGHBORHOODS } from '@/data/neighborhoods';
import { GUIDES } from '@/data/guides';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const routeNames: Record<string, string> = {
  '': 'Home',
  'about': 'About Dr. Jan Duffy',
  'buyers-guide': 'Buyer\'s Guide',
  'homes': 'Homes for Sale',
  'neighborhood': 'Neighborhood Guide',
  'resources': 'Resources',
  'schools': 'Schools',
  'neighborhoods': 'Neighborhoods',
  'market-data': 'Market Data',
  'market-insights': 'Market Insights',
  'home-valuation': 'Home Valuation',
  'sell': 'Sell Your Home',
  'contact': 'Contact',
  'amenities': 'Amenities',
  'community': 'Community',
  'home-descriptions': 'Home Descriptions',
  'map-and-nearby-places': 'Map & Nearby Places',
  'real-estate-services': 'Real Estate Services',
  'privacy': 'Privacy Policy',
  'search': 'Search',
  'maravilla-hoa': 'HOA Information',
  'new-construction': 'New Construction',
  'blog': 'Blog & Market Updates',
  '55-plus-communities': '55+ Communities',
  'first-time-buyers': 'First-Time Buyers',
  'guides': 'Guides',
  // Guide slugs (full title from GUIDES below when path is /guides/[slug])
  'buying-home-winter-2026': 'Things to Consider When Buying a Home Winter 2026',
  'selling-house-winter-2026': 'Things to Consider When Selling Your House Winter 2026',
  'first-time-homebuyer': 'First-Time Homebuyer Guide',
  // Neighborhood subarea slugs (name from NEIGHBORHOODS below)
  'aliante': 'Aliante',
  'jasmine-ranch': 'Jasmine Ranch',
  'centennial-crossing': 'Centennial Crossing',
  'seabreeze': 'Seabreeze',
  'eldorado': 'Eldorado',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;
  
  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const name =
        routeNames[segment] ??
        (segments[0] === 'neighborhoods' && index === 1 && NEIGHBORHOODS[segment as keyof typeof NEIGHBORHOODS]
          ? NEIGHBORHOODS[segment as keyof typeof NEIGHBORHOODS].name
          : segments[0] === 'guides' && index === 1 && GUIDES[segment as keyof typeof GUIDES]
            ? GUIDES[segment as keyof typeof GUIDES].title
            : segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));
      return { name, href };
    }),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://www.maravillahomesforsale.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-6 lg:px-8 bg-gray-50 border-b">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 max-w-7xl mx-auto">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
