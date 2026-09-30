import { test, expect } from '@playwright/test';

// Viewport matrix
export const VIEWPORTS = [
  // Mobile
  { name: 'mobile-320', width: 320, height: 568 },
  { name: 'mobile-340', width: 340, height: 600 },
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'iphone-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'iphone-393', width: 393, height: 852 },
  { name: 'mobile-412', width: 412, height: 915 },
  { name: 'mobile-large-430', width: 430, height: 932 },
  { name: 'mobile-480', width: 480, height: 854 },
  { name: 'mobile-600', width: 600, height: 900 },
  // Tablet
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-820', width: 820, height: 1180 },
  { name: 'tablet-900', width: 900, height: 1200 },
  { name: 'tablet-landscape-1024', width: 1024, height: 768 },
  // Desktop
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

test.describe('Responsive Portfolio Tests', () => {
  for (const vp of VIEWPORTS) {
    test(`Viewport ${vp.name} (${vp.width}x${vp.height}) - No overflow & responsive integrity`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(300); // Allow layout/fonts to settle

      // 1. Programmatic Horizontal Overflow Detection
      const overflowDetails = await page.evaluate(() => {
        const docElem = document.documentElement;
        const body = document.body;
        const viewportWidth = window.innerWidth;
        const scrollWidth = Math.max(docElem.scrollWidth, body.scrollWidth);
        const hasOverflow = scrollWidth > viewportWidth + 1; // 1px threshold for sub-pixel anti-aliasing

        let offendingElements: Array<{ tag: string; id: string; className: string; right: number; width: number }> = [];

        if (hasOverflow) {
          const all = document.querySelectorAll('*');
          all.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.right > viewportWidth + 1) {
              offendingElements.push({
                tag: el.tagName.toLowerCase(),
                id: el.id,
                className: typeof el.className === 'string' ? el.className : '',
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              });
            }
          });
        }

        return {
          viewportWidth,
          scrollWidth,
          hasOverflow,
          offendingCount: offendingElements.length,
          offendingElements: offendingElements.slice(0, 10), // Report first 10 elements
        };
      });

      // 6. Screenshot generation organized by viewport
      await page.screenshot({
        path: `test-results/screenshots/${vp.name}.png`,
        fullPage: true,
      });

      if (overflowDetails.hasOverflow) {
        const offendingDesc = overflowDetails.offendingElements
          .map((e) => `<${e.tag} class="${e.className}" id="${e.id}"> (width: ${e.width}px, right: ${e.right}px)`)
          .join('\n  ');
        expect(
          overflowDetails.hasOverflow,
          `Horizontal overflow detected at ${vp.width}px! Page scrollWidth=${overflowDetails.scrollWidth}px vs viewport=${vp.viewportWidth}px.\nOffending elements:\n  ${offendingDesc}`
        ).toBe(false);
      }

      // 2. Header and Navigation Checks
      const header = page.locator('header.custom-header');
      await expect(header).toBeVisible();

      // Check header width fits viewport
      const headerBox = await header.boundingBox();
      expect(headerBox).not.toBeNull();
      if (headerBox) {
        expect(headerBox.width).toBeLessThanOrEqual(vp.width + 1);
      }

      // Check logo / wordmark in header specifically
      const wordmark = page.locator('header.custom-header .custom-wordmark');
      await expect(wordmark).toBeVisible();

      if (vp.width <= 768) {
        // Mobile / tablet: menu button should be visible and functional
        const menuBtn = page.locator('.menu-toggle-btn');
        await expect(menuBtn).toBeVisible();
        await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');

        // Test interaction: open menu
        await menuBtn.click();
        await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
        const nav = page.locator('#primary-nav');
        await expect(nav).toBeVisible();

        // Close menu again
        await menuBtn.click();
        await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
      } else {
        // Desktop: primary nav is directly visible
        const nav = page.locator('#primary-nav');
        await expect(nav).toBeVisible();
      }

      // 3. Hero Section Checks
      const hero = page.locator('.custom-hero');
      await expect(hero).toBeVisible();
      const heroTitle = page.locator('#hero-title');
      await expect(heroTitle).toBeVisible();

      // 4. Important Sections Checks
      await expect(page.locator('#selected-work')).toBeAttached();
      await expect(page.locator('#about')).toBeAttached();
      await expect(page.locator('#contact')).toBeAttached();

      // 5. Interactive touch targets check for mobile (< 600px)
      if (vp.width <= 600) {
        const buttons = page.locator('.custom-button');
        const count = await buttons.count();
        for (let i = 0; i < Math.min(count, 5); i++) {
          const btn = buttons.nth(i);
          if (await btn.isVisible()) {
            const box = await btn.boundingBox();
            if (box) {
              expect(box.height).toBeGreaterThanOrEqual(34); // minimum accessible tap target height
            }
          }
        }
      }
    });
  }
});
