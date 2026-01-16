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
 * 
 * IMPORTANT: All redirects are consolidated to avoid redirect chains.
 * This prevents Google from seeing "Page with redirect" issues.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const protocol = request.nextUrl.protocol;
  const pathname = url.pathname;

  // Canonical domain
  const canonicalDomain = 'www.maravillahomesforsale.com';
  const canonicalProtocol = 'https:';
  const isProductionDomain = 
    hostname === 'maravillahomesforsale.com' || 
    hostname === canonicalDomain;

  // Helper function to create redirect with proper headers
  const createRedirect = (targetUrl: URL): NextResponse => {
    const response = NextResponse.redirect(targetUrl, 301); // Permanent redirect
    // Add canonical header to help Google understand the final destination
    // This signals to Google that the target URL is the canonical version
    response.headers.set('Link', `<${targetUrl.toString()}>; rel="canonical"`);
    return response;
  };

  // Handle missing pages that should redirect
  // These are legacy routes that should redirect to appropriate pages
  const redirectMap: Record<string, string> = {
    '/tour': '/homes', // Property tours redirect to homes page
    '/tour/mls': '/homes', // MLS tours redirect to homes page (not /search which is noindex)
    '/ap': '/homes', // "ap" might be "apartment" or abbreviation - redirect to homes
    '/mls': '/homes', // MLS listings redirect to homes page
    '/lc': '/contact', // Legacy contact route
    '/ub': '/homes', // Unknown legacy route - redirect to homes
    '/message/share': '/contact', // Social sharing route - redirect to contact
    '/new-construction': '/homes', // New construction redirects to homes (can filter for new builds)
    '/schools': '/map-and-nearby-places', // Schools page redirects to map page (has school info)
    '/maravilla-hoa': '/neighborhood', // HOA info redirects to neighborhood page (has community info)
  };

  // Check if this path should redirect to another page
  if (redirectMap[pathname]) {
    url.pathname = redirectMap[pathname];
    url.protocol = canonicalProtocol;
    url.hostname = canonicalDomain;
    return createRedirect(url);
  }

  // CRITICAL: Consolidate HTTP→HTTPS and non-www→www into a single redirect
  // This prevents redirect chains that Google flags as "Page with redirect"
  const needsProtocolRedirect = protocol === 'http:';
  const needsDomainRedirect = 
    isProductionDomain &&
    protocol === canonicalProtocol &&
    hostname === 'maravillahomesforsale.com' &&
    !hostname.startsWith('www.') &&
    !hostname.includes('localhost') &&
    !hostname.includes('vercel.app');

  // If both conditions are true, redirect directly to canonical URL (consolidated redirect)
  if (needsProtocolRedirect || needsDomainRedirect) {
    url.protocol = canonicalProtocol;
    url.hostname = canonicalDomain;
    // Preserve pathname and query string
    return createRedirect(url);
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

