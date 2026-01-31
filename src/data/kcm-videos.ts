/**
 * KCM (Simplifying the Market) video entries for Dr. Jan Duffy.
 * All links use the affiliate param. Add per-video URLs when KCM provides them.
 */

export const KCM_VIDEOS_BASE_URL =
  'https://www.simplifyingthemarket.com/en/videos/?a=956758-ef2edda2f940e018328655620ea05f18';

export interface KcmVideoEntry {
  id: string;
  title: string;
  description?: string;
  /** Full URL to video or videos landing page. */
  url: string;
}

/** Curated list of KCM video titles/descriptions. URLs point to videos page until per-video links exist. */
export const KCM_VIDEO_ENTRIES: KcmVideoEntry[] = [
  {
    id: 'home-sales-2026',
    title: 'Home Sales Picked Up Coming into 2026',
    description: 'Latest market update on sales momentum and what it means for buyers and sellers.',
    url: KCM_VIDEOS_BASE_URL,
  },
  {
    id: 'good-time-to-buy',
    title: "Why It's Still a Good Time to Buy",
    description: 'Rates, inventory, and timing for buyers in the current market.',
    url: KCM_VIDEOS_BASE_URL,
  },
  {
    id: 'market-update',
    title: 'Market Update: North Las Vegas',
    description: 'Local trends and what’s driving the North Las Vegas and Maravilla market.',
    url: KCM_VIDEOS_BASE_URL,
  },
  {
    id: 'buyer-tips',
    title: 'Buyer Tips from Dr. Jan Duffy',
    description: 'Practical steps for home buyers—pre-approval, search, and making an offer.',
    url: KCM_VIDEOS_BASE_URL,
  },
  {
    id: 'seller-tips-2026',
    title: 'Seller Tips for 2026',
    description: 'How to price, stage, and market your home for a successful sale.',
    url: KCM_VIDEOS_BASE_URL,
  },
];
