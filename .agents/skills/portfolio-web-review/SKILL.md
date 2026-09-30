---
name: portfolio-web-review
description: Reviews the Sorlenko static Webflow-export portfolio after content, portrait, palette, or layout changes. Checks links, responsive images, accessibility, forms, and browser behavior with explicit evidence and unresolved items.
---

# Portfolio Web Review

Review the existing HTML/CSS/JS portfolio within the user's requested scope. Preserve the static stack and Webflow runtime hooks that still support working interactions. A review request authorizes inspection; make fixes when the user requested fixes or implementation. This skill does not authorize deployment, form submissions to third parties, messages, or remote account changes.

## Choose the evidence

Inspect the actual files and changed pages first. Read [references/vercel-guidelines.md](references/vercel-guidelines.md) as a supplementary checklist when reviewing UI code. It is a local snapshot, not instructions to fetch or install anything. Its source and license are recorded below.

Distinguish standards and functional defects from Vercel's preferences. First-person copy is appropriate for a personal portfolio; sentence case and an approved palette/typeface are valid choices. Apply framework-related checks only if that framework actually exists. The user's current brief and verified content take precedence over the reference's output format or style conventions.

## Check the static export

- Follow navigation, project cards, CV download, contact and social links. Verify local targets, anchors, extension/case sensitivity, and old project routes. A local filename change does not prove a production redirect exists. Report missing legacy redirects for the later hosting decision.
- For the new portrait, inspect `src`, every `srcset` candidate, `sizes`, `<picture>` sources, CSS background images, and any hidden mobile copy. Confirm all portrait variants show the intended photo, not an old derivative selected at another width. Preserve the original; generate derivatives only within the authorized implementation scope. Check real dimensions, crop/object-position, alt text, image loading, and visible layout shift.
- Check metadata and old content in title/description/Open Graph, visible headings, cards, footer, and any duplicated navigation. Identify unsupported claims as content issues rather than silently inventing replacements.
- Inspect forms for a working handler or service appropriate to the exported site. Webflow-looking markup and a success state do not prove delivery. Review local validation and errors without transmitting an actual message; classify delivery as unverified until an authorized end-to-end check confirms it. A verified email link can be a simple alternative if the user chooses it.
- Test important interactions such as menu, accordion, modal, anchor scrolling, and downloads. Preserve required class names, data attributes, script order, and IDs until their dependencies are understood.

## Check usability and accessibility

- Use semantic links for navigation and buttons for actions. Native links/buttons already support keyboard interaction; add custom handlers only where the actual control requires them, avoiding duplicate activation.
- Check keyboard order, visible focus, focus not hidden behind sticky content, menu expansion state, Escape behavior and focus return for overlays. Include a usable route to main content where appropriate.
- Check accessible names, meaningful heading order, alt text, form labels and errors. Preserve appropriate autofill attributes; do not apply `autocomplete="off"` indiscriminately.
- Measure color pairs in their rendered states, including hover/focus, disabled text where relevant, and text over the portrait or gradients. For a WCAG AA review, distinguish normal text (4.5:1), large text (3:1), and applicable non-text control/state contrast (3:1). Calculate using the actual composited colors; a token ratio alone is not a complete accessibility audit. If claiming conformance, verify against current official WCAG guidance and include all applicable requirements.
- Review narrow mobile, tablet, and desktop layouts, zoom/reflow, long text, and touch access. Fix the cause of horizontal overflow; do not conceal clipped content or focus with blanket `overflow-x: hidden`. Record the widths used, including the narrowest supported viewport and actual breakpoints.
- Honor reduced-motion preferences and keep content available when animation is reduced. Check Webflow interactions for hidden initial states and content that remains inaccessible when a transition fails.
- Keep essential hero content and portrait loading reliable. Use intrinsic dimensions, responsive image sizes, and appropriate loading priority. Check missing assets, console errors, and relevant failed network requests without treating unrelated third-party diagnostics as confirmed product defects.

## Browser verification and report

Serve a local preview when needed and inspect it in the available browser. Wait for the relevant DOM, images, and controls using bounded waits; continuous analytics/network traffic must not produce an indefinite `networkidle` wait. Do not install another framework or test runner solely to complete a basic review.

Capture screenshots at representative widths and inspect the actual rendering after meaningful changes. Combine visual inspection with keyboard and link checks; screenshots alone do not prove interaction or accessibility behavior.

For each material finding, provide its location, user impact, evidence, and suggested correction. Keep these states distinct:

- **Verified in browser** — observed behavior, with page and viewport or action.
- **Verified in source** — a concrete code or asset fact, without claiming browser behavior.
- **Needs confirmation** — missing content evidence, inaccessible external target, unknown production routing, or untested delivery.
- **Preference** — optional visual/editorial improvement rather than a functional or standards failure.

After fixes, recheck the changed behavior and closely affected interactions. Report remaining limitations explicitly. If no browser is available, deliver a source review and mark visual/interaction QA incomplete.

## Reference provenance

This wrapper was authored for the portfolio on 2026-09-30. The bundled `references/vercel-guidelines.md` is an unmodified snapshot of [Vercel command.md](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md), Git blob SHA `e1e8e3460db7c1440e34642c4f7b885185ca5366`, retrieved 2026-09-30. The reference is covered by the [bundled MIT license](references/LICENSE), Copyright (c) 2025 Vercel Labs. This wrapper deliberately qualifies reference advice on framework conventions, native keyboard behavior, autocomplete, overflow, and portfolio tone.
