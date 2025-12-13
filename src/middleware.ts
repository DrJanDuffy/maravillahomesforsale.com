import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to handle redirects for SEO and canonical URLs
 * 
 * Redirects:
 * - HTTP to HTTPS
 * - Non-www to www
 * - Missing pages to appropriate destinations
 * 
 * Canonical domain: https://www.maravillahomesforsale.com
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const protocol = request.nextUrl.protocol;
  const pathname = url.pathname;

  // Canonical domain
  const canonicalDomain = 'www.maravillahomesforsale.com';
  const canonicalProtocol = 'https:';

  // Handle missing pages that should redirect
  const redirectMap: Record<string, string> = {
    '/tour': '/search',
    '/tour/mls': '/search',
    '/ap': '/homes', // "ap" might be "apartment" or abbreviation - redirect to homes
  };

  // Check if this path should redirect to another page
  if (redirectMap[pathname]) {
    url.pathname = redirectMap[pathname];
    url.protocol = canonicalProtocol;
    url.hostname = canonicalDomain;
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // Redirect HTTP to HTTPS
  if (protocol === 'http:') {
    url.protocol = canonicalProtocol;
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // Redirect non-www to www (only for production domain)
  // Check if hostname is exactly the non-www version (not localhost, not vercel preview, etc.)
  if (
    protocol === canonicalProtocol &&
    hostname === 'maravillahomesforsale.com' &&
    !hostname.startsWith('www.') &&
    !hostname.includes('localhost') &&
    !hostname.includes('vercel.app')
  ) {
    url.hostname = canonicalDomain;
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // If already on canonical domain with HTTPS, continue
  return NextResponse.next();
}

// Only run middleware on specific paths (exclude static files, API routes, etc.)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};

