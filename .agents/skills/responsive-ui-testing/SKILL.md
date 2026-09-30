---
name: responsive-ui-testing
description: Instructs Antigravity to run a mandatory responsive UI testing workflow (Playwright) whenever reviewing, finishing, testing, or modifying responsive web UI.
---

# Responsive UI Testing Workflow

Whenever the user asks to:
- finish a UI feature
- review UI
- test responsive design
- fix mobile layout
- verify a page
- perform frontend QA

Antigravity must follow this responsive testing workflow as part of the Definition of Done. Never declare the UI complete while responsive tests are failing.

## Workflow Steps

1. **Verify or Start Development Server**:
   Ensure the local server is reachable (e.g., `python3 -m http.server 4173` or Playwright's integrated `webServer`).
2. **Run Playwright Responsive Tests**:
   Execute:
   ```bash
   npm run test:responsive
   ```
3. **Cover Representative Viewports**:
   - **Mobile**: `320×568`, `360×800`, `375×812`, `393×852`, `430×932`
   - **Intermediate mobile/phablet**: `340`, `390`, `412`, `480`, `600`
   - **Tablet**: `768×1024`, `820×1180`, `900`, `1024×768`
   - **Desktop**: `1280×800`, `1440×900`
4. **Inspect Automated Detections & Screenshots**:
   - Programmatic horizontal overflow detection (identifies offending elements causing `scrollWidth > clientWidth`).
   - Check screenshots in `test-results/` or Playwright HTML report on failure.
5. **Detect Responsive & Layout Problems**:
   - Accidental horizontal scrolling or overflowing elements.
   - Cramped, wrapped, or overlapping navigation bars / mobile menus.
   - Clipped headings or broken word breaks.
   - Grid or card collision / improper collapse.
   - Squeezed buttons or touch targets below 44px on mobile.
6. **Fix Genuine Responsive Bugs**:
   - Fix root cause in CSS/HTML (use fluid typography, flex wrap, proper media queries, min-width, gap).
   - Avoid blanket `overflow-x: hidden` unless deliberately part of the layout.
   - Do not break desktop designs to fix mobile layouts.
7. **Rerun Tests**:
   - Execute `npm run test:responsive` to ensure all tests pass cleanly on Chromium and WebKit.
8. **Report Results**:
   - Document any resolved issues and verified viewports before presenting to the user.
