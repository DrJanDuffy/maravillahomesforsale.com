export default function AgentSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': 'https://www.maravillahomesforsale.com/#organization',
    'name': 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
    'image': 'https://www.maravillahomesforsale.com/dr-jan-duffy.jpg',
    'description': 'Looking to buy or sell a home in North Las Vegas? Homes by Dr. Jan Duffy is your trusted real estate expert in this growing community. Known for modern home designs, family-friendly amenities, and easy access to I-215 and I-15, North Las Vegas is a top choice for homebuyers.',
    'url': 'https://www.maravillahomesforsale.com',
    'telephone': '+1-702-500-1953',
    'email': 'DrJanSells@MaravillaHomesForSale.com',
    'foundingDate': '2009-09-20',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '4380 W Ann Rd Suite 201',
      'addressLocality': 'North Las Vegas',
      'addressRegion': 'NV',
      'postalCode': '89031',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 36.2719,
      'longitude': -115.1678
    },
    'areaServed': {
      '@type': 'Place',
      'name': 'North Las Vegas, NV, USA'
    },
    'priceRange': '$400,000 - $600,000',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '06:00',
        'closes': '21:00'
      }
    ],
    'sameAs': [
      'https://www.linkedin.com/company/maravilla-homes-for-sale/',
      'https://www.facebook.com/maravillahomesforsale',
      'https://www.youtube.com/@DrDuffy'
    ],
    'hasCredential': {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'Real Estate License',
      'recognizedBy': {
        '@type': 'Organization',
        'name': 'Nevada Real Estate Division'
      },
      'identifier': 'S.0197614'
    },
    'memberOf': {
      '@type': 'Organization',
      'name': 'Berkshire Hathaway HomeServices Nevada Properties'
    },
    'knowsAbout': [
      'North Las Vegas Real Estate',
      'Maravilla Homes',
      'First-time Homebuyers',
      'Home Selling',
      'Property Valuation',
      'VA Loans',
      'FHA Loans'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
