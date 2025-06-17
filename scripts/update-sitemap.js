#!/usr/bin/env node

/**
 * Script to update the sitemap.xml with current date
 * Run this script whenever you update your website content
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

try {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Replace all lastmod dates with current date
  sitemapContent = sitemapContent.replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${currentDate}</lastmod>`
  );
  
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`✅ Sitemap updated with date: ${currentDate}`);
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
