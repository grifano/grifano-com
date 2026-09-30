/// <reference types="@unlighthouse/core" />
import { defineConfig } from '@unlighthouse/core';

const site = process.env.SITE_URL || 'http://127.0.0.1:4173';

export default defineConfig({
  root: '.',
  site,
  outputPath: '.unlighthouse',
  scanner: {
    // Only scan paths within this site
    exclude: [
      '/401.html',
      '/404.html',
      '/style-guide.html',
      '/antigravity/**',
      '/node_modules/**',
      '*.bak',
      '*.pdf'
    ],
    dynamicSampling: false,
    robotsTxt: false,
    sitemap: false,
  },
  ci: {
    budget: {
      seo: 90,
      accessibility: 90,
      'best-practices': 85,
      performance: 65,
    },
  },
  puppeteerOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});
