/**
 * RSS Feed Parser Utility
 * Parses RSS XML and extracts blog post data
 */

export interface RSSItem {
  title: string;
  link: string;
  description: string;
  content: string;
  categories: string[];
  pubDate: string;
  creator: string;
  imageUrl?: string;
}

export interface RSSFeed {
  title: string;
  link: string;
  description: string;
  items: RSSItem[];
}

/**
 * Decode HTML entities in URL
 */
function decodeHtmlEntities(url: string): string {
  return url
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/');
}

/**
 * Extract image URL from HTML content
 * Enhanced to handle multiple RSS feed formats
 */
function extractImageUrl(html: string): string | undefined {
  if (!html) return undefined;
  
  // Remove CDATA wrapper if present
  const cleanHtml = html.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  
  // Pattern 1: Standard img tag with src (most common)
  const imgPatterns = [
    /<img[^>]+src=["']([^"']+)["'][^>]*>/i,
    /<img[^>]*src=["']([^"']+)["']/i,
    /src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg))["']/i,
  ];
  
  for (const pattern of imgPatterns) {
    const match = cleanHtml.match(pattern);
    if (match && match[1]) {
      const url = decodeHtmlEntities(match[1].trim());
      // Skip data URIs and very small images
      if (url && !url.startsWith('data:') && url.length > 10) {
        return url;
      }
    }
  }
  
  // Pattern 2: Look for og:image meta tag
  const ogImageMatch = cleanHtml.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (ogImageMatch && ogImageMatch[1]) {
    const url = decodeHtmlEntities(ogImageMatch[1].trim());
    if (url && !url.startsWith('data:')) {
      return url;
    }
  }
  
  // Pattern 3: Look for any image URL in the HTML (fallback)
  const urlPattern = /https?:\/\/[^\s<>"']+\.(?:jpg|jpeg|png|gif|webp)/i;
  const urlMatch = cleanHtml.match(urlPattern);
  if (urlMatch && urlMatch[0]) {
    const url = decodeHtmlEntities(urlMatch[0].trim());
    if (url && !url.startsWith('data:')) {
      return url;
    }
  }
  
  return undefined;
}

/**
 * Remove CDATA wrapper from text
 */
function removeCDATA(text: string): string {
  if (!text) return text;
  // Remove CDATA wrapper: <![CDATA[...]]>
  return text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
}

/**
 * Clean HTML description to plain text
 */
function cleanDescription(html: string): string {
  if (!html) return '';
  // Remove CDATA wrapper first
  let text = removeCDATA(html);
  // Remove HTML tags
  text = text.replace(/<[^>]*>/g, '');
  // Decode HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  // Trim and limit length
  return text.trim().substring(0, 200);
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

/**
 * Parse RSS XML string (server-side compatible)
 * Uses regex-based parsing for Node.js compatibility
 */
export function parseRSSFeed(xmlString: string): RSSFeed {
  // Extract channel info
  // Use [\s\S] instead of . with s flag for ES2017 compatibility
  const channelMatch = xmlString.match(/<channel>([\s\S]*?)<\/channel>/);
  if (!channelMatch) {
    throw new Error('RSS feed missing channel element');
  }
  
  const channelContent = channelMatch[1];
  
  const title = extractTagContent(channelContent, 'title') || '';
  const link = extractTagContent(channelContent, 'link') || '';
  const description = extractTagContent(channelContent, 'description') || '';
  
  // Extract all items
  const items: RSSItem[] = [];
  // Use [\s\S] instead of . with s flag for ES2017 compatibility
  const itemMatches = channelContent.matchAll(/<item>([\s\S]*?)<\/item>/g);
  
  for (const itemMatch of itemMatches) {
    const itemContent = itemMatch[1];
    
    const itemTitle = extractTagContent(itemContent, 'title') || '';
    const itemLink = extractTagContent(itemContent, 'link') || '';
    const itemDescription = extractTagContent(itemContent, 'description') || '';
    const itemContentEncoded = extractTagContent(itemContent, 'content:encoded') || extractTagContent(itemContent, 'content\\:encoded') || itemDescription;
    const itemPubDate = extractTagContent(itemContent, 'pubDate') || '';
    const itemCreator = extractTagContent(itemContent, 'dc:creator') || extractTagContent(itemContent, 'dc\\:creator') || 'Simplifying the Market';
    
    // Extract categories
    const categories: string[] = [];
    const categoryMatches = itemContent.matchAll(/<category>(.*?)<\/category>/g);
    for (const catMatch of categoryMatches) {
      let categoryText = catMatch[1].trim();
      // Remove CDATA wrapper if present
      categoryText = removeCDATA(categoryText);
      if (categoryText) {
        categories.push(categoryText);
      }
    }
    
    // Extract image from multiple sources
    // Priority order: media:content > media:thumbnail > enclosure > HTML content
    
    let imageUrl: string | undefined;
    
    // Method 1: Try self-closing media:content tag (e.g., <media:content url="..." />)
    const mediaContentSelfClosing = itemContent.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*\/?>/i);
    if (mediaContentSelfClosing && mediaContentSelfClosing[1]) {
      imageUrl = decodeHtmlEntities(mediaContentSelfClosing[1].trim());
    }
    
    // Method 2: Try media:content tag with content
    if (!imageUrl) {
      const mediaContent = extractTagContent(itemContent, 'media:content') || extractTagContent(itemContent, 'media\\:content');
      if (mediaContent) {
        // Check if it's a self-closing tag with attributes
        const urlMatch = mediaContent.match(/url=["']([^"']+)["']/i) || itemContent.match(/<media:content[^>]+url=["']([^"']+)["']/i);
        if (urlMatch && urlMatch[1]) {
          imageUrl = decodeHtmlEntities(urlMatch[1].trim());
        }
      }
    }
    
    // Method 3: Try self-closing media:thumbnail tag
    if (!imageUrl) {
      const mediaThumbnailSelfClosing = itemContent.match(/<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*\/?>/i);
      if (mediaThumbnailSelfClosing && mediaThumbnailSelfClosing[1]) {
        imageUrl = decodeHtmlEntities(mediaThumbnailSelfClosing[1].trim());
      }
    }
    
    // Method 4: Try media:thumbnail tag with content
    if (!imageUrl) {
      const mediaThumbnail = extractTagContent(itemContent, 'media:thumbnail') || extractTagContent(itemContent, 'media\\:thumbnail');
      if (mediaThumbnail) {
        const urlMatch = mediaThumbnail.match(/url=["']([^"']+)["']/i) || itemContent.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
        if (urlMatch && urlMatch[1]) {
          imageUrl = decodeHtmlEntities(urlMatch[1].trim());
        }
      }
    }
    
    // Method 5: Try enclosure tag
    if (!imageUrl) {
      const enclosureSelfClosing = itemContent.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/(?:jpeg|png|gif)["'][^>]*\/?>/i);
      if (enclosureSelfClosing && enclosureSelfClosing[1]) {
        imageUrl = decodeHtmlEntities(enclosureSelfClosing[1].trim());
      } else {
        const enclosureUrl = extractTagContent(itemContent, 'enclosure');
        if (enclosureUrl) {
          const urlMatch = enclosureUrl.match(/url=["']([^"']+)["']/i) || itemContent.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
          if (urlMatch && urlMatch[1]) {
            const url = decodeHtmlEntities(urlMatch[1].trim());
            // Only use if it's an image type
            if (url.match(/\.(jpg|jpeg|png|gif|webp)/i)) {
              imageUrl = url;
            }
          }
        }
      }
    }
    
    // Method 6: Extract from HTML content (description or content:encoded)
    if (!imageUrl) {
      imageUrl = extractImageUrl(itemContentEncoded) || extractImageUrl(itemDescription);
    }
    
    // Method 7: Try extracting from the full item content as a last resort
    if (!imageUrl) {
      imageUrl = extractImageUrl(itemContent);
    }
    
    // Clean up the URL (remove query params that might break Next.js Image)
    if (imageUrl) {
      // Ensure it's an absolute URL
      if (imageUrl.startsWith('//')) {
        imageUrl = 'https:' + imageUrl;
      } else if (imageUrl.startsWith('/')) {
        // If relative, try to construct absolute URL from feed link
        const feedBaseUrl = link.match(/https?:\/\/[^\/]+/)?.[0];
        if (feedBaseUrl) {
          imageUrl = feedBaseUrl + imageUrl;
        }
      }
      
      // Log extracted image URL for debugging (only in development)
      if (process.env.NODE_ENV === 'development') {
        console.log(`[RSS Parser] Extracted image URL for "${itemTitle}": ${imageUrl}`);
      }
    } else {
      // Log when no image is found (only in development)
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[RSS Parser] No image found for "${itemTitle}"`);
      }
    }
    
    items.push({
      title: itemTitle,
      link: itemLink,
      description: cleanDescription(itemDescription),
      content: itemContentEncoded,
      categories: categories.length > 0 ? categories : ['Market Insights'],
      pubDate: itemPubDate,
      creator: itemCreator,
      imageUrl,
    });
  }
  
  return {
    title,
    link,
    description,
    items,
  };
}

/**
 * Extract content from XML tag
 */
function extractTagContent(xml: string, tagName: string): string | null {
  // Handle namespaced tags (e.g., content:encoded, dc:creator)
  const escapedTagName = tagName.replace(/:/g, '\\:');
  const regex = new RegExp(`<${escapedTagName}[^>]*>(.*?)<\/${escapedTagName}>`, 's');
  const match = xml.match(regex);
  if (match && match[1]) {
    // Remove CDATA wrapper if present
    return removeCDATA(match[1].trim());
  }
  return null;
}

/**
 * Fetch and parse RSS feed from URL
 */
export async function fetchRSSFeed(feedUrl: string): Promise<RSSFeed> {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    
    const xmlString = await response.text();
    return parseRSSFeed(xmlString);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
}

