import Link from 'next/link';
import { RSSImage } from '@/components/ui/rss-image';
import PageLayout from '@/components/layout/page-layout';
import { Badge } from '@/components/ui/badge';
import Script from 'next/script';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateBlogSchema,
} from '@/lib/metadata';
import { parseRSSFeed } from '@/lib/utils/rss-parser';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.craigranchhomes.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Craig Ranch Las Vegas Homes Market Insights | Craig Ranch Vegas | Homes By Dr. Jan Duffy',
  description:
    'Read the latest real estate market insights and trends for Craig Ranch, North Las Vegas and Las Vegas, Nevada. Expert analysis on home prices, market conditions, and buying/selling strategies. Updated articles from Simplifying the Market. Call (702) 820-5408.',
  keywords:
    'Craig Ranch market insights, Craig Ranch real estate news, Las Vegas market insights, North Las Vegas real estate trends',
  path: '/market-insights',
});

type BlogPost = {
  imageUrl: string;
  category: string;
  categoryLink: string;
  title: string;
  postLink: string;
  author: string;
  date: string;
  description?: string;
};

// Mark page as dynamic since it fetches from external API
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

async function getBlogPosts(limit: number): Promise<BlogPost[]> {
  try {
    // Fetch directly from RSS feed instead of API route to avoid build-time issues
    const RSS_FEED_URL =
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
    
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch RSS feed:', response.statusText);
      return [];
    }

    const xmlString = await response.text();
    const feed = parseRSSFeed(xmlString);

    // Return first N items
    return feed.items.slice(0, limit).map((item) => {
      const categorySlug = item.categories[0]?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'market-insights';
      const categoryLink = `https://www.simplifyingthemarket.com/en/category/${categorySlug}/?a=956758-ef2edda2f940e018328655620ea05f18`;
      
      return {
        title: item.title,
        postLink: item.link,
        description: item.description,
        category: item.categories[0] || 'Market Insights',
        categoryLink,
        author: item.creator,
        date: formatDate(item.pubDate),
        imageUrl: item.imageUrl || '/placeholder-blog.jpg',
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Format date from RSS pubDate
 */
function formatDate(pubDate: string): string {
  try {
    const date = new Date(pubDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return pubDate;
  }
}

export default async function MarketInsightsPage() {
  const posts = await getBlogPosts(12);

  return (
    <PageLayout>
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#0A2540] mb-4'>
              Craig Ranch Las Vegas Homes Market Insights
            </h1>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              The latest real estate insights and trends (source:{' '}
              <Link
                href='https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'
                target='_blank'
                rel='noopener noreferrer'
                prefetch={false}
                className='text-[#3A8DDE] hover:underline'
              >
                Simplifying the Market
              </Link>
              ).
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post, index) => (
              <Card
                key={`${post.postLink}-${index}`}
                className='group overflow-hidden h-full hover:shadow-xl transition-all duration-300'
              >
                <Link
                  href={post.postLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  prefetch={false}
                  className='block relative w-full h-[200px] overflow-hidden'
                  aria-label={`Read article: ${post.title}`}
                >
                  <RSSImage
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                </Link>

                <CardHeader>
                  <Badge
                    variant='outline'
                    className='w-fit mb-2 text-[#3A8DDE] border-[#3A8DDE]/30'
                  >
                    <Link
                      href={post.categoryLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      prefetch={false}
                      className='hover:underline'
                    >
                      {post.category}
                    </Link>
                  </Badge>

                  <CardTitle className='group-hover:text-[#3A8DDE] transition-colors duration-300'>
                    <Link
                      href={post.postLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      prefetch={false}
                      className='line-clamp-2'
                    >
                      {post.title}
                    </Link>
                  </CardTitle>

                  {post.description && (
                    <CardDescription className='line-clamp-3 mt-2'>
                      {post.description}
                    </CardDescription>
                  )}
                </CardHeader>

                <CardFooter className='flex-col items-start gap-2 pt-0'>
                  <CardDescription className='text-xs uppercase'>
                    {post.author}
                  </CardDescription>
                  <CardDescription className='text-xs'>{post.date}</CardDescription>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Script
        id='market-insights-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Craig Ranch Las Vegas Homes Market Insights',
              description:
                'Read the latest real estate market insights and trends for Craig Ranch, North Las Vegas and Las Vegas, Nevada.',
              url: `${baseUrl}/market-insights`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Market Insights', url: `${baseUrl}/market-insights` },
              ],
            }),
            generateBlogSchema({
              name: 'Craig Ranch Las Vegas Homes Market Insights',
              description:
                'Real estate market insights and trends for Craig Ranch, North Las Vegas and Las Vegas, Nevada.',
              url: `${baseUrl}/market-insights`,
              author: 'Simplifying the Market',
              publisher: 'Craig Ranch Vegas | Homes By Dr. Jan Duffy',
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Market Insights', url: `${baseUrl}/market-insights` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}


