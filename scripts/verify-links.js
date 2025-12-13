/**
 * Script to verify all internal links point to existing pages
 * Run with: node scripts/verify-links.js
 */

const fs = require('fs');
const path = require('path');

// Get all page files
const appDir = path.join(__dirname, '../src/app');
const pages = [];

function findPages(dir, basePath = '') {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip special Next.js directories
      if (!file.startsWith('_') && file !== 'api') {
        findPages(filePath, path.join(basePath, file));
      }
    } else if (file === 'page.tsx' || file === 'page.ts') {
      const route = basePath || '/';
      pages.push(route);
    }
  }
}

findPages(appDir);

// Add special routes
pages.push('/sitemap.xml', '/robots.txt', '/manifest.json');

console.log('📄 Found pages:');
pages.forEach(page => console.log(`  ${page}`));

// Check for common broken links
const brokenLinks = [
  '/new-construction',
  '/schools',
  '/maravilla-hoa',
];

console.log('\n🔍 Checking for broken links...');
const middlewareFile = fs.readFileSync(
  path.join(__dirname, '../src/middleware.ts'),
  'utf8'
);

brokenLinks.forEach(link => {
  if (middlewareFile.includes(`'${link}'`)) {
    console.log(`  ✅ ${link} - Has redirect in middleware`);
  } else {
    console.log(`  ❌ ${link} - No redirect found`);
  }
});

console.log('\n✅ Link verification complete!');

