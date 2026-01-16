/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    /**
     * Baseline security headers for Lighthouse/Edge "Trust & Safety" audits.
     * Note: A fully strict CSP (nonces + Trusted Types) requires deeper refactors and testing.
     */
    const contentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      // Next.js + next/script inline blocks require unsafe-inline unless using nonces.
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://em.realscout.com https://assets.calendly.com https://embed.homebotapp.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://embed.homebotapp.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://connect.facebook.net https://graph.facebook.com https://em.realscout.com https://*.realscout.com https://calendly.com https://*.calendly.com https://embed.homebotapp.com https://*.homebotapp.com https://api.homebotapp.com",
      "frame-src 'self' https://www.google.com https://www.google.com/maps https://calendly.com https://*.calendly.com https://embed.homebotapp.com https://*.homebotapp.com",
      'upgrade-insecure-requests',
    ].join('; ');

    const securityHeaders = [
      { key: 'Content-Security-Policy', value: contentSecurityPolicy },
      // HSTS: required to pass includeSubDomains/preload audits. Ensure ALL subdomains are HTTPS before enabling.
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ];

    // Cache headers for static assets to improve repeat visit performance
    const cacheHeaders = [
      {
        source: '/:path*(.jpg|.jpeg|.png|.gif|.webp|.svg|.ico|.woff|.woff2|.ttf|.eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache CSS files for better repeat visit performance
      {
        source: '/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      ...cacheHeaders,
    ];
  },
  images: {
    // 2025 Best Practice: Optimize image loading with modern formats
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Increase cache TTL to 1 day for better repeat visit performance
    // The cache headers we set above (1 year) will take precedence for static assets
    minimumCacheTTL: 86400,
    // 2025 Best Practice: Enable image optimization for better Core Web Vitals
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow specific external image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.simplifyingthemarket.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '*.simplifyingthemarket.com',
        pathname: '/**',
      },
      // Allow common CDN patterns that might host images
      {
        protocol: 'https',
        hostname: '**.wp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        pathname: '/**',
      },
    ],
    // Allow unoptimized images for external sources that might have issues
    unoptimized: false,
  },
  // Optimize rendering performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Enable React compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
