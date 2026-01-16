export default function WebsiteSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.maravillahomesforsale.com/#website',
    'name': 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    'url': 'https://www.maravillahomesforsale.com',
    'description': 'Find exceptional value and quality homes in Maravilla, one of North Las Vegas best value communities. Browse homes for sale with Dr. Jan Duffy.',
    'publisher': {
      '@id': 'https://www.maravillahomesforsale.com/#organization'
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://www.maravillahomesforsale.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
