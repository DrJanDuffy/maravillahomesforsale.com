import { MARAVILLA_FAQS } from '@/lib/metadata';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageFAQConfig {
  title: string;
  subtitle: string;
  faqs: readonly FAQItem[];
}

const SELL_FAQS: readonly FAQItem[] = [
  {
    question: 'How do you price a Maravilla home to sell?',
    answer:
      "We price a Maravilla home by analyzing comparable sales, current active competition, buyer demand, and your home's condition and upgrades. The goal is to generate strong buyer interest and protect your net proceeds, not simply \"pick a number.\"",
  },
  {
    question: 'What should I fix before listing in Maravilla?',
    answer:
      'Start with items that remove buyer objections: repairs, touch-up paint, lighting, deep cleaning, and curb appeal. In Maravilla, clean presentation and clear feature callouts often outperform expensive renovations.',
  },
  {
    question: 'Do I need staging to sell my Maravilla home?',
    answer:
      "Not always, but strategic staging (or partial staging) can help Maravilla buyers understand room scale and flow. We'll decide based on your floor plan, vacancy status, and comparable listings buyers are viewing.",
  },
  {
    question: 'How long does it take to sell in Maravilla?',
    answer:
      'Timing varies with price point and inventory. Some Maravilla homes move quickly when priced and presented well. We set expectations using current days-on-market and the buyer pipeline—then track performance week-by-week.',
  },
  {
    question: 'Can you help me buy my next home after selling in Maravilla?',
    answer:
      'Yes. Many sellers in Maravilla are also buyers. We can coordinate the timing, financing, and contingencies so the move is as smooth as possible.',
  },
];

const HOME_VALUATION_FAQS: readonly FAQItem[] = [
  {
    question: 'How is a Maravilla home valuation calculated?',
    answer:
      "A Maravilla valuation is based on comparable closed sales, current active listings, condition and upgrades, layout desirability, lot features, and buyer demand. We also consider what buyers are choosing instead if they don't buy your Maravilla home.",
  },
  {
    question: 'Is an online estimate accurate for Maravilla?',
    answer:
      'Online estimates can be a rough starting point, but Maravilla values often hinge on specific features (layout, condition, finishes, lot position). A local valuation adds context that automated estimates often miss.',
  },
  {
    question: 'Do you provide a CMA for Maravilla?',
    answer:
      'Yes. A CMA (comparative market analysis) for Maravilla includes recent comps, active competition, and a recommended pricing strategy aligned with your timeline and goals.',
  },
  {
    question: 'What information do you need for a Maravilla valuation?',
    answer:
      'At minimum: address, bed/bath count, approximate square footage, key upgrades, and your timeline. Photos can help, but we can start with basics and refine as needed for your Maravilla home.',
  },
  {
    question: 'How often do Maravilla valuations change?',
    answer:
      "Maravilla values can shift with interest rates, inventory, seasonality, and buyer sentiment. That's why we look at the most recent comparable sales and the current competition, not just older data.",
  },
];

const HOMES_FAQS: readonly FAQItem[] = [
  {
    question: 'How many homes are for sale in Maravilla?',
    answer:
      'Inventory changes regularly. Dr. Jan Duffy lists current Maravilla homes for sale with photos, virtual tours, and key details. View the listings on this site or call (702) 500-1953 for the latest availability.',
  },
  {
    question: 'What price range can I expect in Maravilla?',
    answer:
      'Maravilla homes typically range from the mid-$300s to over $1M depending on size, condition, and location. We can filter by price, beds, baths, and features to match your criteria.',
  },
  {
    question: 'Can I tour Maravilla homes in person?',
    answer:
      'Yes. Schedule a tour with Dr. Jan Duffy by calling (702) 500-1953 or using the contact form. In-person and virtual options are available.',
  },
  {
    question: 'Do you represent buyers in Maravilla?',
    answer:
      'Yes. Dr. Jan Duffy represents buyers throughout Maravilla and North Las Vegas, helping with search, showings, offers, and negotiations.',
  },
];

const CONTACT_FAQS: readonly FAQItem[] = [
  {
    question: 'How do I contact Dr. Jan Duffy?',
    answer:
      'Call (702) 500-1953, email DrJanSells@MaravillaHomesForSale.com, or use the contact form on this page. You can also schedule a consultation via the Calendly widget.',
  },
  {
    question: 'What are your office hours?',
    answer:
      'Dr. Jan Duffy is available by appointment. Schedule a call or meeting through the contact page or Calendly. Same-day and next-day consultations are often available.',
  },
  {
    question: 'Do you serve buyers outside Maravilla?',
    answer:
      'Yes. Dr. Jan Duffy serves North Las Vegas, Las Vegas, Henderson, and surrounding areas. Maravilla is a specialty, but she helps with all local real estate needs.',
  },
];

const NEIGHBORHOOD_FAQS: readonly FAQItem[] = [
  {
    question: 'What makes Maravilla a good neighborhood?',
    answer:
      'Maravilla is a master-planned community with parks, trails, top-rated schools, and convenient access to shopping and highways. Families and professionals choose it for value, amenities, and location.',
  },
  {
    question: 'What schools serve Maravilla?',
    answer:
      'Maravilla is served by the Clark County School District. Specific schools and zones depend on the address. Contact Dr. Jan Duffy at (702) 500-1953 for current school information.',
  },
  {
    question: 'Are there HOA fees in Maravilla?',
    answer:
      'Yes. Maravilla has an HOA that maintains common areas and amenities. Fees vary by section. Ask for current HOA details when viewing a specific property.',
  },
];

const NEIGHBORHOODS_FAQS: readonly FAQItem[] = [
  {
    question: 'What neighborhoods are near Maravilla?',
    answer:
      'Maravilla is in North Las Vegas with easy access to Aliante, Eldorado, and other areas. Dr. Jan Duffy can show you Maravilla and nearby communities that fit your lifestyle.',
  },
  {
    question: 'How do I compare Maravilla to other areas?',
    answer:
      'We can compare schools, amenities, price ranges, and commute times. Use the neighborhood pages and market data on this site, or call (702) 500-1953 for a personalized comparison.',
  },
];

const COMMUNITY_FAQS: readonly FAQItem[] = [
  {
    question: 'What amenities does Maravilla offer?',
    answer:
      'Maravilla features parks, walking trails, pools, and community events. Specific amenities vary by section. Explore the community and amenities pages for details.',
  },
  {
    question: 'Is Maravilla family-friendly?',
    answer:
      'Yes. Maravilla is popular with families due to schools, parks, and a strong sense of community. Dr. Jan Duffy can point you to the sections that best fit your family.',
  },
];

const AMENITIES_FAQS: readonly FAQItem[] = [
  {
    question: 'What recreational amenities are in Maravilla?',
    answer:
      'Maravilla offers parks, trails, pools, and other recreational facilities. Exact amenities depend on the neighborhood section. We can match you with areas that have the features you want.',
  },
  {
    question: 'Are there fitness or pool facilities?',
    answer:
      'Community amenities vary by section. Contact Dr. Jan Duffy at (702) 500-1953 for current amenity details for specific Maravilla neighborhoods.',
  },
];

const MAP_FAQS: readonly FAQItem[] = [
  {
    question: 'Where is Maravilla located?',
    answer:
      'Maravilla is in North Las Vegas, Nevada, with convenient access to I-15 and the 215 Beltway. The community is near Aliante, shopping, and major employers.',
  },
  {
    question: 'What is near Maravilla?',
    answer:
      'Maravilla is close to schools, parks, shopping, dining, and healthcare. Use the map on this page to explore nearby places and drive times.',
  },
];

const MARKET_DATA_FAQS: readonly FAQItem[] = [
  {
    question: 'How often is Maravilla market data updated?',
    answer:
      'We strive to keep market data current. Sales and listing statistics are updated regularly. For the latest numbers, call (702) 500-1953 or request a custom report.',
  },
  {
    question: 'What does the market data include?',
    answer:
      'Market data typically includes recent sales, active listings, days on market, price trends, and inventory by price range. We can tailor reports to your needs.',
  },
];

const MARKET_INSIGHTS_FAQS: readonly FAQItem[] = [
  {
    question: 'What are Maravilla market insights?',
    answer:
      'Market insights include trends, buyer behavior, pricing bands, and how Maravilla compares to the broader North Las Vegas market. We use this to advise buyers and sellers.',
  },
  {
    question: 'How can insights help me buy or sell?',
    answer:
      'Insights help you time your move, price correctly, and understand competition. Dr. Jan Duffy uses current data to guide your strategy.',
  },
];

const REAL_ESTATE_SERVICES_FAQS: readonly FAQItem[] = [
  {
    question: 'What real estate services do you offer?',
    answer:
      'Dr. Jan Duffy offers buyer and seller representation, home valuation, market analysis, listing marketing, and full support from search to closing in Maravilla and North Las Vegas.',
  },
  {
    question: 'Do you work with first-time buyers?',
    answer:
      'Yes. First-time buyers get guidance on financing, neighborhoods, and the buying process. Call (702) 500-1953 or schedule a consultation to get started.',
  },
];

const HOME_DESCRIPTIONS_FAQS: readonly FAQItem[] = [
  {
    question: 'What are Maravilla home descriptions?',
    answer:
      'Home descriptions summarize key features, layout, and selling points for Maravilla properties. We use clear, accurate descriptions to help buyers find the right fit.',
  },
  {
    question: 'Can you help describe my home for sale?',
    answer:
      'Yes. Dr. Jan Duffy prepares professional listing descriptions and marketing copy that highlight your home’s best features for the Maravilla market.',
  },
];

const PRIVACY_FAQS: readonly FAQItem[] = [
  {
    question: 'How is my information used?',
    answer:
      'We use your information to respond to inquiries, provide services, and improve the site. We do not sell your personal information to third parties. See our Privacy Policy for full details.',
  },
  {
    question: 'How can I contact you about privacy?',
    answer:
      'For privacy questions or requests, contact Dr. Jan Duffy at DrJanSells@MaravillaHomesForSale.com or (702) 500-1953.',
  },
];

const SEARCH_FAQS: readonly FAQItem[] = [
  {
    question: 'How do I search for Maravilla homes?',
    answer:
      'Use the search tools on this site to filter by price, beds, baths, and features. You can also browse the homes page or contact Dr. Jan Duffy at (702) 500-1953 for a personalized search.',
  },
  {
    question: 'Are listings updated in real time?',
    answer:
      'Listings are updated regularly from the MLS. For the most current availability and new listings, call or email to be added to a custom search.',
  },
];

const ABOUT_FAQS: readonly FAQItem[] = [
  {
    question: 'Who is Dr. Jan Duffy?',
    answer:
      'Dr. Jan Duffy is a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, license S.0197614.LLC. She specializes in Maravilla and North Las Vegas real estate and helps buyers and sellers with data-driven advice and full support.',
  },
  {
    question: 'What areas does Dr. Jan Duffy serve?',
    answer:
      'Dr. Duffy serves Maravilla, North Las Vegas, Las Vegas, Henderson, and surrounding communities. Maravilla is a primary focus, but she works with clients throughout the greater Las Vegas area.',
  },
  {
    question: 'How do I contact Dr. Jan Duffy?',
    answer:
      'Call (702) 500-1953, email DrJanSells@MaravillaHomesForSale.com, or use the contact page to schedule a consultation. Office address: 4380 W Ann Rd Suite 201, North Las Vegas, NV 89031.',
  },
];

const BUYERS_GUIDE_FAQS: readonly FAQItem[] = [
  {
    question: 'How long does it take to buy a home in Maravilla?',
    answer:
      'Timing varies with market conditions and your situation. From search to closing, many Maravilla buyers complete the process in 30–60 days. Pre-approval and a clear wish list help move things along.',
  },
  {
    question: 'Do I need a pre-approval before looking at Maravilla homes?',
    answer:
      'Yes. Pre-approval shows sellers you\'re a serious buyer and clarifies your budget. Dr. Jan Duffy can connect you with lenders who specialize in the North Las Vegas and Maravilla market.',
  },
  {
    question: 'Does Dr. Jan Duffy represent buyers?',
    answer:
      'Yes. Dr. Duffy represents buyers throughout Maravilla and the greater Las Vegas area. She helps with search, showings, offers, negotiations, and closing.',
  },
];

const SCHOOLS_FAQS: readonly FAQItem[] = [
  {
    question: 'What school district serves Maravilla?',
    answer:
      'Maravilla is in North Las Vegas and is served by the Clark County School District (CCSD). Specific elementary, middle, and high schools depend on your address and current CCSD boundaries.',
  },
  {
    question: 'How do I find which schools serve a specific Maravilla address?',
    answer:
      'CCSD publishes boundary maps and school finder tools. Dr. Jan Duffy can also help you confirm assigned schools when you\'re considering a particular property. Call (702) 500-1953 or use the contact page.',
  },
  {
    question: 'Are there private or charter schools near Maravilla?',
    answer:
      'North Las Vegas and the greater Las Vegas area offer private and charter options. Dr. Duffy can point you to resources for exploring alternatives to CCSD.',
  },
];

const RESOURCES_FAQS: readonly FAQItem[] = [
  {
    question: 'What resources are available for Maravilla buyers and sellers?',
    answer:
      'We offer a buyer\'s guide, home valuation, market data, neighborhood and schools info, map and nearby places, real estate services, and contact/scheduling. Use the Resources page to find the right tool or guide.',
  },
  {
    question: 'How do I get a home valuation for a Maravilla property?',
    answer:
      'Visit the Home Valuation page or contact Dr. Jan Duffy at (702) 500-1953. She provides practical value ranges and pricing context based on recent sales and current market conditions.',
  },
];

const PAGE_FAQ_MAP: Record<string, PageFAQConfig> = {
  '/': {
    title: 'Frequently Asked Questions About Maravilla',
    subtitle: 'Find answers to common questions about buying and selling in Maravilla',
    faqs: MARAVILLA_FAQS,
  },
  '/homes': {
    title: 'FAQs About Maravilla Homes for Sale',
    subtitle: 'Common questions about browsing and buying homes in Maravilla',
    faqs: HOMES_FAQS,
  },
  '/contact': {
    title: 'Contact & Consultation FAQs',
    subtitle: 'How to reach Dr. Jan Duffy and schedule a consultation',
    faqs: CONTACT_FAQS,
  },
  '/neighborhood': {
    title: 'Maravilla Neighborhood FAQs',
    subtitle: 'Questions about the Maravilla community and area',
    faqs: NEIGHBORHOOD_FAQS,
  },
  '/neighborhoods': {
    title: 'Neighborhoods Near Maravilla FAQs',
    subtitle: 'Comparing Maravilla and nearby areas',
    faqs: NEIGHBORHOODS_FAQS,
  },
  '/community': {
    title: 'Maravilla Community FAQs',
    subtitle: 'Life and amenities in Maravilla',
    faqs: COMMUNITY_FAQS,
  },
  '/amenities': {
    title: 'Maravilla Amenities FAQs',
    subtitle: 'Parks, pools, and recreational facilities',
    faqs: AMENITIES_FAQS,
  },
  '/map-and-nearby-places': {
    title: 'Map & Location FAQs',
    subtitle: 'Where is Maravilla and what is nearby?',
    faqs: MAP_FAQS,
  },
  '/market-data': {
    title: 'Market Data FAQs',
    subtitle: 'Understanding Maravilla market statistics',
    faqs: MARKET_DATA_FAQS,
  },
  '/market-insights': {
    title: 'Market Insights FAQs',
    subtitle: 'Trends and analysis for Maravilla',
    faqs: MARKET_INSIGHTS_FAQS,
  },
  '/home-valuation': {
    title: 'Maravilla Valuation FAQs',
    subtitle: 'How valuations work and what to expect',
    faqs: HOME_VALUATION_FAQS,
  },
  '/sell': {
    title: 'Maravilla Seller FAQs',
    subtitle: 'Selling your home in Maravilla',
    faqs: SELL_FAQS,
  },
  '/real-estate-services': {
    title: 'Real Estate Services FAQs',
    subtitle: 'Buyer and seller services in Maravilla',
    faqs: REAL_ESTATE_SERVICES_FAQS,
  },
  '/home-descriptions': {
    title: 'Home Descriptions FAQs',
    subtitle: 'How we describe Maravilla properties',
    faqs: HOME_DESCRIPTIONS_FAQS,
  },
  '/privacy': {
    title: 'Privacy Policy FAQs',
    subtitle: 'How we handle your information',
    faqs: PRIVACY_FAQS,
  },
  '/search': {
    title: 'Search FAQs',
    subtitle: 'Finding homes in Maravilla',
    faqs: SEARCH_FAQS,
  },
  '/about': {
    title: 'About Dr. Jan Duffy FAQs',
    subtitle: 'Your Maravilla and North Las Vegas real estate expert',
    faqs: ABOUT_FAQS,
  },
  '/buyers-guide': {
    title: 'Buyer\'s Guide FAQs',
    subtitle: 'Buying a home in Maravilla',
    faqs: BUYERS_GUIDE_FAQS,
  },
  '/schools': {
    title: 'Schools in Maravilla FAQs',
    subtitle: 'Clark County School District and school zones',
    faqs: SCHOOLS_FAQS,
  },
  '/resources': {
    title: 'Resources FAQs',
    subtitle: 'Guides, data, and tools for Maravilla',
    faqs: RESOURCES_FAQS,
  },
};

/**
 * Returns FAQ config for a given path, or null if no FAQs are defined.
 * Normalizes path (trailing slash, lowercase) for lookup.
 */
export function getFAQConfigForPath(path: string): PageFAQConfig | null {
  const normalized = path.replace(/\/$/, '') || '/';
  return PAGE_FAQ_MAP[normalized] ?? null;
}
