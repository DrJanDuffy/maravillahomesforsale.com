# Google Search Console: "Page with redirect"

## What this report means

**"Page with redirect"** in GSC means: Google requested these URLs and received a **301/302 redirect** instead of content. Google does **not** index the redirecting URL; it indexes the **destination** URL. So this report is expected for:

- **Protocol/host variants:** `http://...`, `http://www...`, `https://maravillahomesforsale.com/` → all redirect to canonical `https://www.maravillahomesforsale.com/`
- **Legacy paths:** `/schools` → `/map-and-nearby-places`, `/tour` and `/ap` → `/homes`

Those source URLs are **supposed** to redirect. The important part is that the **destination** URLs are the ones that should be indexed.

## Why "Validation Failed" appears

When you click **Validate fix**, Google re-crawls the same URLs. Because they still redirect by design, the issue does not "go away," so validation can show as **Failed**. That does **not** mean something is broken—it means Google is still correctly seeing redirects.

## What to verify in GSC

1. **Canonical URLs are indexed**
   - **URL Inspection** → test: `https://www.maravillahomesforsale.com/`
   - Expect: "URL is on Google" and that it’s the canonical version.
   - Also spot-check: `https://www.maravillahomesforsale.com/homes`, `https://www.maravillahomesforsale.com/map-and-nearby-places`.

2. **Sitemap**
   - **Sitemaps** → confirm only **canonical** URLs are listed (no `http://`, no non-www, no `/schools`, `/tour`, `/ap`). This project’s sitemap already follows that.

3. **Internal links**
   - Site-wide links use `https://www.maravillahomesforsale.com` and final paths (e.g. `/homes`, `/map-and-nearby-places`, `/contact`) so crawlers don’t keep hitting redirect URLs from your own links.

## What this project does

| Item | Implementation |
|------|----------------|
| **Canonical domain** | `https://www.maravillahomesforsale.com` |
| **Single-hop domain redirect** | `vercel.json`: non-www → www. Middleware: HTTP → HTTPS + www when needed. |
| **Path redirects** | Middleware: `/schools` → `/map-and-nearby-places`, `/tour`, `/ap` → `/homes`, etc. |
| **Robots** | Legacy paths `/tour`, `/mls`, `/schools`, `/ap`, etc. are in `disallow` so we don’t encourage crawling them (they still redirect if hit). |
| **Sitemap** | Only canonical base URL and final paths (no redirect-only URLs). |

## Summary

- The **8 affected URLs** in "Page with redirect" are expected: they redirect to the canonical site.
- **Validation Failed** often just means "these URLs still redirect," which is correct.
- Focus on confirming that **destination** URLs (e.g. `https://www.maravillahomesforsale.com/`, `/homes`, `/map-and-nearby-places`) are **indexed** and that the sitemap and internal links use only canonical URLs.
