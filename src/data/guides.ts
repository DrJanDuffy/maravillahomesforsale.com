/**
 * Client guides for buyers and sellers.
 * Used by /guides index and /guides/[slug] pages.
 */
export type GuideSlug =
  | 'buying-home-winter-2026'
  | 'selling-house-winter-2026'
  | 'first-time-homebuyer';

export interface GuideSection {
  id: string;
  title: string;
  /** Paragraph(s) or list items. */
  content: string | string[];
}

export interface GuideItem {
  slug: GuideSlug;
  title: string;
  description: string;
  /** For meta description and cards. */
  metaDescription: string;
  sections: GuideSection[];
}

export const GUIDES: Record<GuideSlug, GuideItem> = {
  'buying-home-winter-2026': {
    slug: 'buying-home-winter-2026',
    title: 'Things to Consider When Buying a Home Winter 2026',
    description: 'Key factors for buyers in the winter 2026 market: rates, inventory, and timing.',
    metaDescription:
      'What to consider when buying a home in winter 2026. Rates, inventory, and timing for North Las Vegas and Maravilla. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
    sections: [
      {
        id: 'rates-and-budget',
        title: 'Rates and budget',
        content:
          'Mortgage rates can shift in winter. Get pre-approved so you know your price range and monthly payment. Locking a rate when you find the right home can protect you if rates rise.',
      },
      {
        id: 'inventory-and-timing',
        title: 'Inventory and timing',
        content:
          'Winter often has fewer new listings but less competition. Serious sellers who list in winter may be motivated. Consider touring homes early in the season and being ready to move quickly on the right property.',
      },
      {
        id: 'condition-and-inspection',
        title: 'Condition and inspection',
        content: [
          'Winter can reveal heating, insulation, and roof issues—schedule a thorough home inspection.',
          'Check that systems (HVAC, water heater) are in good working order.',
          'Consider snow or rain runoff and drainage if the area gets winter weather.',
        ],
      },
      {
        id: 'location-and-schools',
        title: 'Location and schools',
        content:
          'If schools matter, confirm district boundaries and ratings for the address. North Las Vegas and Maravilla are served by the Clark County School District; Dr. Jan Duffy can help you verify assigned schools.',
      },
      {
        id: 'next-steps',
        title: 'Next steps',
        content:
          'Get pre-approved, define your must-haves, and browse current listings. Schedule a consultation with Dr. Jan Duffy to discuss your timeline and the winter 2026 market in North Las Vegas and Maravilla.',
      },
    ],
  },
  'selling-house-winter-2026': {
    slug: 'selling-house-winter-2026',
    title: 'Things to Consider When Selling Your House Winter 2026',
    description: 'How to prepare and price your home for a winter 2026 sale.',
    metaDescription:
      'What to consider when selling your house in winter 2026. Pricing, presentation, and timing in North Las Vegas and Maravilla. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
    sections: [
      {
        id: 'pricing-strategy',
        title: 'Pricing strategy',
        content:
          'Winter buyers are often serious. Price based on recent comparable sales and current competition—overpricing can lengthen days on market. A competitive list price can attract motivated buyers and support a smoother sale.',
      },
      {
        id: 'curb-appeal-and-presentation',
        title: 'Curb appeal and presentation',
        content: [
          'Keep walkways and driveways clear of leaves and debris; ensure good lighting for shorter days.',
          'Inside, focus on warmth and cleanliness: declutter, clean, and consider subtle staging so rooms feel inviting.',
          'Highlight heating and energy-efficient features—buyers notice comfort and utility costs in winter.',
        ],
      },
      {
        id: 'photos-and-marketing',
        title: 'Photos and marketing',
        content:
          'Professional photos and a strong listing description matter year-round. If the yard looks bare, emphasize interior shots and community amenities. Dr. Jan Duffy uses proven marketing to reach buyers actively searching in winter.',
      },
      {
        id: 'flexibility-and-timing',
        title: 'Flexibility and timing',
        content:
          'Winter buyers may have tighter timelines (relocation, lease end). Being flexible on showings and closing dates can make your home more attractive. Discuss your ideal timeline with your agent so the listing and offer strategy align.',
      },
      {
        id: 'next-steps',
        title: 'Next steps',
        content:
          'Get a home valuation and a clear plan for listing. Contact Dr. Jan Duffy for a winter 2026 marketing and pricing strategy tailored to your North Las Vegas or Maravilla home.',
      },
    ],
  },
  'first-time-homebuyer': {
    slug: 'first-time-homebuyer',
    title: 'First-Time Homebuyer Guide',
    description: 'A practical guide to buying your first home in North Las Vegas and Maravilla.',
    metaDescription:
      'First-time homebuyer guide: pre-approval, down payment, and steps to buy in North Las Vegas and Maravilla. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
    sections: [
      {
        id: 'get-pre-approved',
        title: 'Get pre-approved',
        content:
          'Before you fall in love with a home, get pre-approved with a lender. Pre-approval shows sellers you’re serious and tells you your price range and estimated monthly payment. Dr. Jan Duffy can connect you with lenders who work with first-time buyers and programs that may help with down payment or closing costs.',
      },
      {
        id: 'define-your-needs',
        title: 'Define your needs',
        content: [
          'Decide on must-haves: beds, baths, area, and lifestyle (schools, commute, amenities).',
          'Separate “must-haves” from “nice-to-haves” so you can compare homes fairly.',
          'Explore neighborhoods: Maravilla and North Las Vegas offer a range of options; tours and open houses help you narrow the list.',
        ],
      },
      {
        id: 'search-and-tour',
        title: 'Search and tour',
        content:
          'Use our site to browse homes for sale and filter by price, beds, and features. Schedule tours with Dr. Jan Duffy to see properties in person. She’ll point out what to look for and answer questions about the area, resale value, and condition.',
      },
      {
        id: 'make-an-offer-and-close',
        title: 'Make an offer and close',
        content:
          'When you find the right home, Dr. Duffy will help you craft a competitive offer based on comparable sales and market conditions. After your offer is accepted, you’ll complete inspections, appraisal, and final paperwork. She coordinates with the lender, title, and other parties so you understand each step and close on time.',
      },
      {
        id: 'next-steps',
        title: 'Next steps',
        content:
          'Get pre-approved, browse current listings, and schedule a consultation. Dr. Jan Duffy is ready to help first-time buyers in North Las Vegas and Maravilla from search to closing.',
      },
    ],
  },
};

export const GUIDE_SLUGS: GuideSlug[] = Object.keys(GUIDES) as GuideSlug[];

export function getGuideBySlug(slug: string): GuideItem | null {
  return GUIDES[slug as GuideSlug] ?? null;
}
