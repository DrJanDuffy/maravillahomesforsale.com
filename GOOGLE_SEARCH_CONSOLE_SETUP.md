# Google Search Console Setup Guide

This guide provides step-by-step instructions for completing the remaining Google Search Console setup tasks.

## ✅ Completed Automatically

- ✅ Viewport meta tag added
- ✅ Google Business Profile link added to footer
- ✅ Sitemap.xml generated at `/sitemap.xml`
- ✅ Robots.txt configured at `/robots.txt`
- ✅ Structured data schemas implemented
- ✅ Canonical URLs configured
- ✅ Redirects configured (HTTP→HTTPS, non-www→www)

## 📋 Manual Setup Steps

### 1. Set Google Site Verification in Vercel (gsc-1)

**Steps:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the `maravillahomesforsale.com` project
3. Navigate to **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name:** `GOOGLE_SITE_VERIFICATION`
   - **Value:** Your Google Search Console verification code (format: `abc123def456...`)
   - **Environment:** Production (and Preview if needed)
5. Click **Save**
6. Redeploy the site (or wait for next deployment)

**To get your verification code:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.maravillahomesforsale.com`
3. Choose "HTML tag" verification method
4. Copy the `content` value from the meta tag (e.g., `content="abc123def456..."`)
5. Use that value as the environment variable

**Note:** The verification meta tag is already in `src/app/layout.tsx` and will automatically use this environment variable.

---

### 2. Submit Sitemap to Google Search Console (gsc-2)

**Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `https://www.maravillahomesforsale.com`
3. In the left sidebar, click **Sitemaps**
4. In the "Add a new sitemap" field, enter: `sitemap.xml`
5. Click **Submit**
6. Wait for Google to process (usually within a few hours)

**Verify sitemap is accessible:**
- Visit: `https://www.maravillahomesforsale.com/sitemap.xml`
- Should see XML with all pages listed

---

### 3. Test Structured Data with Google Rich Results Test (gsc-4)

**Steps:**
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test each page type:

   **Homepage:**
   - URL: `https://www.maravillahomesforsale.com/`
   - Should show: `WebPage`, `RealEstateAgent`, `LocalBusiness`, `Organization`, `WebSite`, `FAQPage`, `Service`

   **Contact Page:**
   - URL: `https://www.maravillahomesforsale.com/contact`
   - Should show: `LocalBusiness`, `WebPage`, `BreadcrumbList`

   **Homes Page:**
   - URL: `https://www.maravillahomesforsale.com/homes`
   - Should show: `CollectionPage`, `WebPage`, `BreadcrumbList`

   **Neighborhood Page:**
   - URL: `https://www.maravillahomesforsale.com/neighborhood`
   - Should show: `WebPage`, `BreadcrumbList`

   **Market Insights Page:**
   - URL: `https://www.maravillahomesforsale.com/market-insights`
   - Should show: `Blog`, `Article` (for blog posts), `WebPage`, `BreadcrumbList`

3. For each page, verify:
   - ✅ No errors
   - ✅ All required fields present
   - ✅ Valid JSON-LD format

**Expected Schemas by Page:**
- **All pages:** `WebPage`, `BreadcrumbList`
- **Homepage:** `RealEstateAgent`, `LocalBusiness`, `Organization`, `WebSite`, `FAQPage`, `Service`
- **Contact:** `LocalBusiness`
- **Homes:** `CollectionPage`
- **Market Insights:** `Blog`, `Article` (multiple)

---

### 4. Run PageSpeed Insights (gsc-5)

**Steps:**
1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter URL: `https://www.maravillahomesforsale.com/`
3. Click **Analyze**
4. Review the report:
   - **Performance Score:** Target: 90+ (currently improving)
   - **Core Web Vitals:**
     - LCP (Largest Contentful Paint): Target < 2.5s
     - FID (First Input Delay): Target < 100ms
     - CLS (Cumulative Layout Shift): Target < 0.1

**Recent Optimizations Applied:**
- ✅ Deferred RealScout script to `lazyOnload`
- ✅ Deferred Google Analytics to `lazyOnload`
- ✅ Added DNS prefetch for AWS S3
- ✅ Optimized hero image quality
- ✅ Added cache headers for CSS

**If scores are still low:**
- Check "Opportunities" section for remaining issues
- Consider further image optimization
- Review "Diagnostics" for additional improvements

---

### 5. Test Mobile-Friendliness (gsc-6)

**Steps:**
1. Go to [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Enter URL: `https://www.maravillahomesforsale.com/`
3. Click **Test URL**
4. Verify result shows: **"Page is mobile-friendly"**

**What to check:**
- ✅ Text is readable without zooming
- ✅ Tap targets are appropriately sized
- ✅ Content fits the screen width
- ✅ No horizontal scrolling required

**If issues found:**
- Check viewport meta tag (already added: `width=device-width, initial-scale=1`)
- Verify responsive CSS is working
- Test on actual mobile devices

---

### 6. Verify OG Images are 1200x630px (gsc-8)

**Current OG Image:** `/photos/01-1 (2).jpg`

**To verify dimensions:**
1. Visit: `https://www.maravillahomesforsale.com/photos/01-1%20(2).jpg`
2. Check image dimensions (right-click → Properties or Inspect)
3. Should be: **1200px × 630px** (or close ratio: 1.91:1)

**If image is not 1200x630:**
- Resize the image to exactly 1200×630px
- Maintain aspect ratio (crop if needed)
- Re-upload to `public/photos/01-1 (2).jpg`
- Redeploy site

**Alternative:** Use the OG image API endpoint which generates 1200x630 images:
- URL: `https://www.maravillahomesforsale.com/api/og?title=Your+Title`
- This endpoint uses Next.js `ImageResponse` which generates exactly 1200x630px images

**Note:** The metadata already specifies `width: 1200, height: 630` in OpenGraph tags, which is correct.

---

## 📊 Monitoring & Maintenance

### Weekly Tasks:
- Check Google Search Console for new issues
- Review Core Web Vitals in GSC
- Monitor indexing status

### Monthly Tasks:
- Review PageSpeed Insights scores
- Check for new structured data errors
- Verify all pages are indexed
- Update sitemap if new pages added

---

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Vercel Dashboard](https://vercel.com/dashboard)

---

## ✅ Checklist

- [ ] Google Site Verification code added to Vercel
- [ ] Sitemap submitted to Google Search Console
- [ ] All pages tested with Rich Results Test
- [ ] PageSpeed Insights score reviewed
- [ ] Mobile-friendliness test passed
- [ ] OG image dimensions verified (1200×630px)

---

**Last Updated:** December 13, 2025

