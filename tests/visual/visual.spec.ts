import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  const keyViewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 },
  ];

  for (const vp of keyViewports) {
    test(`Visual snapshot - ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      // Allow ambient animations to pause or settle for stable snapshot comparison
      await page.waitForTimeout(500);

      // Snapshot critical sections rather than whole page to keep test resilient
      const header = page.locator('header.custom-header');
      await expect(header).toBeVisible();
      
      const hero = page.locator('.custom-hero');
      await expect(hero).toBeVisible();

      // Check header snapshot
      await expect(header).toHaveScreenshot(`header-${vp.name}.png`, {
        maxDiffPixelRatio: 0.05,
      });
    });
  }
});
