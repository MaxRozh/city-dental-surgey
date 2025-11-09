import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.dental-clinic.art';
  const currentDate = new Date().toISOString();
  const urls = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/#services`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/#about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/#works`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/#pricing`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/#faq`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: `${baseUrl}/#contact`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.8',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  });
}
