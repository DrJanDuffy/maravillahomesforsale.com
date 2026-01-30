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
import { Button } from '@/components/ui/button';
import {
  generateMetadata as genMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateBlogSchema,
} from '@/lib/metadata';
import { parseRSSFeed } from '@/lib/utils/rss-parser';

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maravillahomesforsale.com'
).replace(/\/$/, '');

export const metadata = genMetadata({
  title: 'Blog & Market Updates | Maravilla Real Estate | Dr. Jan Duffy',
  description:
    'Real estate blog and market updates for Maravilla and North Las Vegas. Trends, buying and selling tips, and local insights. Dr. Jan Duffy, REALTOR® (702) 500-1953.',
  keywords:
    'Maravilla blog, North Las Vegas real estate news, Maravilla market updates, Las Vegas real estate trends',
  path: '/blog',
});

type BlogPost = {
  imageUrl: string;
  category: string;
  categoryLink: string;
  title: string;
  postLink: string;
  author: string;
  date: string;
  dateISO: string;
  description?: string;
};

export const revalidate = 3600;

async function getBlogPosts(limit: number): Promise<BlogPost[]> {
  try {
    const RSS_FEED_URL =
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)' },
    });
    if (!response.ok) return [];
    const xmlString = await response.text();
    const feed = parseRSSFeed(xmlString);
    return feed.items.slice(0, limit).map((item) => {
      const categorySlug =
        item.categories[0]?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'market-insights';
      const categoryLink = `https://www.simplifyingthemarket.com/en/category/${categorySlug}/?a=956758-ef2edda2f940e018328655620ea05f18`;
      return {
        title: item.title,
        postLink: item.link,
        description: item.description,
        category: item.categories[0] || 'Market Insights',
        categoryLink,
        author: item.creator,
        date: (() => {
          try {
            return new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
          } catch {
            return item.pubDate;
          }
        })(),
        dateISO: (() => {
          try {
            return new Date(item.pubDate).toISOString();
          } catch {
            return new Date().toISOString();
          }
        })(),
        imageUrl: item.imageUrl || '/photos/01-1 (2).jpg',
      };
    });
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts(9);

  return (
    <PageLayout>
      <div className='bg-gradient-to-r from-[#0A2540] to-[#3A8DDE] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Blog & Market Updates
          </h1>
          <p className='text-xl text-gray-200 max-w-3xl'>
            Real estate trends, buying and selling tips, and local insights for Maravilla and North Las Vegas. Updated regularly from our market insights feed.
          </p>
        </div>
      </div>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
            <p className='text-gray-600'>
              Latest articles from our partner feed. For the full archive and more insights, visit Market Insights.
            </p>
            <Button asChild variant='outline' className='shrink-0'>
              <Link href='/market-insights'>View all Market Insights</Link>
            </Button>
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
                  aria-label={`Read: ${post.title}`}
                >
                  <RSSImage
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-contain transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                </Link>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-2 text-[#3A8DDE] border-[#3A8DDE]/30'>
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
                  <CardTitle className='group-hover:text-[#3A8DDE] transition-colors'>
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

          {posts.length > 0 && (
            <div className='mt-12 text-center'>
              <Button asChild className='bg-[#3A8DDE] hover:bg-[#2A7DCE] text-white'>
                <Link href='/market-insights'>View all Market Insights</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Script
        id='blog-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebPageSchema({
              name: 'Blog & Market Updates | Maravilla Real Estate',
              description: 'Real estate blog and market updates for Maravilla and North Las Vegas.',
              url: `${baseUrl}/blog`,
              breadcrumb: [
                { name: 'Home', url: baseUrl },
                { name: 'Blog', url: `${baseUrl}/blog` },
              ],
            }),
            generateBlogSchema({
              name: 'Blog & Market Updates',
              description: 'Real estate trends and local insights for Maravilla and North Las Vegas.',
              url: `${baseUrl}/blog`,
              author: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
              publisher: 'North Las Vegas Family Homes | Homes by Dr. Jan Duffy',
            }),
            generateBreadcrumbSchema([
              { name: 'Home', url: baseUrl },
              { name: 'Blog', url: `${baseUrl}/blog` },
            ]),
          ]),
        }}
      />
    </PageLayout>
  );
}
