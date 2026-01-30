/**
 * North Las Vegas / Maravilla area subareas for /neighborhoods/[slug] pages.
 * Used for generateStaticParams, metadata, and unique content per area.
 */
export type NeighborhoodSlug =
  | 'aliante'
  | 'jasmine-ranch'
  | 'centennial-crossing'
  | 'seabreeze'
  | 'eldorado';

export interface NeighborhoodItem {
  slug: NeighborhoodSlug;
  name: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  /** Optional: school zone or district note */
  schoolsNote?: string;
  /** Optional: driving / access note */
  accessNote?: string;
}

export const NEIGHBORHOODS: Record<NeighborhoodSlug, NeighborhoodItem> = {
  aliante: {
    slug: 'aliante',
    name: 'Aliante',
    shortDescription: 'Master-planned community in North Las Vegas with shopping, nature trails, and family-friendly living.',
    description:
      'Aliante is a master-planned community in North Las Vegas offering a mix of single-family homes, parks, the Aliante Nature Discovery Park, and easy access to Aliante Station and I-215. Families and 55+ buyers alike find top-rated schools, trails, and retail nearby.',
    highlights: [
      'Aliante Nature Discovery Park',
      'Aliante Station & retail',
      'I-215 and I-15 access',
      'Family-friendly and 55+ options',
      'Strong resale value',
    ],
    schoolsNote: 'Served by Clark County School District with several highly rated schools in the zone.',
    accessNote: 'Convenient access to I-215 and I-15 for commuters.',
  },
  'jasmine-ranch': {
    slug: 'jasmine-ranch',
    name: 'Jasmine Ranch',
    shortDescription: 'Maravilla subdivision with two-bedroom condos and an affordable entry point to the community.',
    description:
      'Jasmine Ranch is a Maravilla subdivision featuring primarily two-bedroom condos, offering an affordable entry point into the community. Residents enjoy shared amenities, pool and spa, fitness center, and the broader Maravilla lifestyle.',
    highlights: [
      'Two-bedroom condos',
      'Affordable entry point',
      'Pool & spa',
      'Fitness center',
      'Maravilla amenities',
    ],
    schoolsNote: 'Part of Maravilla; school zones follow Clark County assignments for the area.',
    accessNote: 'Within Maravilla with easy access to North Las Vegas and area highways.',
  },
  'centennial-crossing': {
    slug: 'centennial-crossing',
    name: 'Centennial Crossing',
    shortDescription: 'Upscale Maravilla area with larger condos and townhomes, up to four bedrooms.',
    description:
      'Centennial Crossing offers more upscale options within Maravilla, including larger condos and townhomes with up to four bedrooms. Modern amenities and thoughtful design make it ideal for growing families or those wanting extra space.',
    highlights: [
      'Larger condos and townhomes',
      'Up to 4 bedrooms',
      'Upscale options',
      'Modern amenities',
      'Maravilla community',
    ],
    schoolsNote: 'Clark County School District; specific zones depend on address.',
    accessNote: 'Convenient to North Las Vegas shopping and major routes.',
  },
  seabreeze: {
    slug: 'seabreeze',
    name: 'Seabreeze',
    shortDescription: 'Higher-end Maravilla subdivision with larger lots, guesthouses, and expansive garages.',
    description:
      'Seabreeze is a higher-end subdivision within Maravilla where homes often feature larger lots (up to half an acre), guesthouses, and expansive garages. Ideal for buyers seeking more space and premium finishes while staying in the Maravilla community.',
    highlights: [
      'Larger lots (up to 0.5 acres)',
      'Guesthouses',
      'Expansive garages',
      'Higher-end homes',
      'Maravilla amenities',
    ],
    schoolsNote: 'Clark County School District; contact for current zone information.',
    accessNote: 'Easy access to Maravilla amenities and North Las Vegas.',
  },
  eldorado: {
    slug: 'eldorado',
    name: 'Eldorado',
    shortDescription: 'North Las Vegas area with diverse housing and convenient access to I-15 and I-215.',
    description:
      'Eldorado is a well-established North Las Vegas area with a diverse mix of housing, from single-family homes to townhomes. Residents benefit from convenient access to I-15 and I-215, shopping, and solid school options in the Clark County School District.',
    highlights: [
      'Diverse housing options',
      'I-15 and I-215 access',
      'Established neighborhood',
      'Shopping and services',
      'Strong community',
    ],
    schoolsNote: 'Clark County School District; school zones vary by address.',
    accessNote: 'Convenient highway access for commuting.',
  },
};

export const NEIGHBORHOOD_SLUGS: NeighborhoodSlug[] = Object.keys(
  NEIGHBORHOODS
) as NeighborhoodSlug[];

export function getNeighborhoodBySlug(slug: string): NeighborhoodItem | null {
  return NEIGHBORHOODS[slug as NeighborhoodSlug] ?? null;
}
