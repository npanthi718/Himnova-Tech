const fs = require('fs');
const path = require('path');

// 1. nicheProducts.ts
const npPath = path.join(__dirname, '..', 'src', 'data', 'nicheProducts.ts');
let npContent = fs.readFileSync(npPath, 'utf-8');
npContent = npContent.replace(/\/images\/solutions\/([a-zA-Z0-9_-]+)\.svg(\?v=\d+)?/g, '/images/solutions/$1.svg?v=2');
fs.writeFileSync(npPath, npContent);

// 2. siteData.ts
const sdPath = path.join(__dirname, '..', 'src', 'config', 'siteData.ts');
let sdContent = fs.readFileSync(sdPath, 'utf-8');
sdContent = sdContent.replace(/\/images\/projects\/([a-zA-Z0-9_-]+)\.svg(\?v=\d+)?/g, '/images/projects/$1.svg?v=2');
fs.writeFileSync(sdPath, sdContent);

// 3. blogPosts.ts
const bpPath = path.join(__dirname, '..', 'src', 'data', 'blogs', 'blogPosts.ts');
let bpContent = fs.readFileSync(bpPath, 'utf-8');
bpContent = bpContent.replace(/\/images\/blogs\/([a-zA-Z0-9_-]+)\.svg(\?v=\d+)?/g, '/images/blogs/$1.svg?v=2');
fs.writeFileSync(bpPath, bpContent);

console.log('Successfully added ?v=2 cache-buster to all SVG image paths');
