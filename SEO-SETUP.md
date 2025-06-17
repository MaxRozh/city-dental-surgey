# SEO Setup for City Dental Surgery

This document outlines the SEO improvements implemented for better Google indexing.

## Files Added/Modified

### 1. Robots.txt (`public/robots.txt`)
- Guides search engine crawlers
- Allows indexing of all pages
- Points to sitemap location
- Blocks access to admin and development files
- Allows access to images and assets

### 2. Sitemap (`public/sitemap.xml`)
- Static XML sitemap for better crawlability
- Includes all main sections with priorities and change frequencies
- Updated automatically during build process

### 3. Dynamic Sitemap Route (`app/sitemap.xml/route.ts`)
- Next.js API route for dynamic sitemap generation
- Automatically updates lastmod dates
- Includes proper caching headers

### 4. Structured Data (`components/StructuredData.tsx`)
- JSON-LD structured data for rich snippets
- Includes Organization, WebSite, WebPage, and MedicalBusiness schemas
- Provides Google with detailed business information

### 5. Enhanced Metadata (`app/layout.tsx`)
- Comprehensive meta tags for SEO
- Open Graph tags for social media sharing
- Twitter Card metadata
- Robots meta configuration
- Google verification placeholder

### 6. Section IDs (`app/page.tsx`)
- Added ID attributes to main sections for anchor linking
- Enables direct linking to specific page sections

## SEO Features Implemented

### Technical SEO
- ✅ Robots.txt file
- ✅ XML Sitemap
- ✅ Structured Data (JSON-LD)
- ✅ Meta robots configuration
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Cards

### Content SEO
- ✅ Optimized title tags
- ✅ Meta descriptions
- ✅ Keyword optimization
- ✅ Header structure (H1, H2, H3)
- ✅ Alt text for images
- ✅ Internal linking structure

### Local SEO
- ✅ Business schema markup
- ✅ Local business information
- ✅ Contact details
- ✅ Opening hours
- ✅ Geographic coordinates
- ✅ Address markup

## Usage

### Updating Sitemap
Run the following command to update sitemap dates:
```bash
npm run update-sitemap
```

### Building with SEO
The build process automatically updates the sitemap:
```bash
npm run build
```

## Important Notes

1. **Domain Configuration**: Update the domain in the following files:
   - `public/robots.txt` (line 4)
   - `public/sitemap.xml` (all URL entries)
   - `app/sitemap.xml/route.ts` (baseUrl variable)
   - `components/StructuredData.tsx` (all URL references)

2. **Google Verification**: Add your Google Search Console verification code in `app/layout.tsx`

3. **Social Media**: Update social media links in the structured data

4. **Business Hours**: Verify and update opening hours in structured data

## Monitoring

After deployment, monitor your SEO performance using:
- Google Search Console
- Google Analytics
- Google My Business (for local SEO)

## Next Steps

1. Submit sitemap to Google Search Console
2. Verify Google My Business listing
3. Monitor crawl errors and fix any issues
4. Regularly update content and sitemap dates
5. Add more structured data as needed (reviews, services, etc.)
