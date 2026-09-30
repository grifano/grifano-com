---
name: sorlenko-portfolio
description: Plans, writes and updates Serhii Orlenko's hiring portfolio from its Webflow export, aligning evidence-based career copy, selected projects and a portrait-led visual identity. Use for this portfolio's content, redesign and implementation tasks.
---

# Serhii Orlenko portfolio

Help a recruiter or design lead understand Serhii's design contribution, inspect relevant work, open his CV and contact him. The source is a static Webflow export, not a new SaaS application.

## Read what the task needs

Paths below resolve from the workspace root:

- `antigravity/identity-and-copy.md`: source status, professional identity, draft English copy and unresolved claims. Read before changing biographical or project copy.
- `antigravity/audit-and-plan.md`: current export defects, proposed hierarchy, implementation phases and acceptance criteria. Read before structural changes.
- `antigravity/visual-direction.html`: proposed portrait-led color and type direction. This is a design proposal, not proof that the live site already uses it.
- `antigravity/prompt.md`: a prepared implementation brief; use only when the user's current task calls for implementation.

If a referenced file is unavailable, inspect the current source and available evidence; identify the specific missing information rather than inventing a replacement history.

## Evidence before copy

For a claim, distinguish current direct evidence, dated document evidence, a recommendation, and an unknown. New user corrections can supersede older sources; flag conflicts with externally verifiable metrics rather than silently choosing a convenient number.

- Commercial freelance work counts as commercial experience. It does not automatically establish in-house product ownership or a seniority level.
- Upwork jobs, completed contracts, clients and portfolio projects are different quantities. Do not turn “39 total jobs” into “39 completed projects.” Prefer a profile link when a counter adds little value.
- Competitor analysis is not user interviewing. A planned test is not a completed test. A persona is not proof that research happened.
- Mark each case by actual role, project type and stage: concept, prototype, implementation or live product. Describe outputs and learning when there are no measured outcomes.
- The export labels Krowden and Ideacto as Figma-to-Webflow. Do not claim authorship of the supplied design without evidence.
- TachoBook can show driving-domain knowledge; personal domain knowledge does not replace user validation. SpendiQ is documented as a responsive web app, not a shipped native iOS app.
- Missing facts belong in the working notes. Do not put invented metrics, lorem ipsum or unresolved placeholders into public copy.

## Shape the portfolio

Use the smallest structure that makes the evidence readable: identity and photo, selected work, concise professional background, CV, contact. Let the strength of the available cases determine the count and order; two supported cases are better than an arbitrary quota.

For each selected project, show the user problem, Serhii's contribution, a concrete design decision, relevant visuals, outcome or current stage, and a working destination. Keep clients' UI colors intact; the portfolio shell carries Serhii's brand.

Keep Webflow and technical understanding as supporting strengths. Explain the move toward sustained product-team work without claiming that the transition has already happened. Avoid a long service catalogue, free-consultation sales funnel and certificate wall on the hiring homepage.

## Use the actual portrait

The user selected `images/uxui-designer-profile.jpg` (square portrait with blue bandana). Preserve the original. Optimize delivery copies only when implementation is requested; do not generate a replacement face or recolor the portrait.

Update both `src` and `srcset`; check all responsive candidates. Keep the whole bandana and face visible. Provide intrinsic dimensions, useful alt text and appropriate loading priority. Remove dependence on the old initial `opacity: 0` / scale reveal for essential content.

Proposed palette: background `#F7F8FA`, white surface, text `#172033`, muted text `#566176`, primary `#1D4ED8`, hover `#173EA8`, tint `#E8EEFC`. Treat this as the current proposal until the user accepts or changes it. Use blue selectively around the already saturated photograph.

## Implement at the requested scope

Inspect version-control status and current source before editing. Preserve unrelated changes. For a local redesign, reuse the static export and make coherent, reviewable changes; do not add React, a CMS, authentication or a backend solely to change copy and colors.

Map semantic color tokens and inspect hardcoded values, SVG fills, navigation and states. Old routes may reference missing styles and images; changing a stylesheet filename alone is not proof of repair. Consolidate or rebuild necessary routes while preserving recoverable originals and deciding redirects before a later release.

Use a real CV file and verified destinations. Exported Webflow form markup alone does not send messages; prefer direct email/LinkedIn for this compact portfolio, or implement and test a real form when requested. Never simulate successful delivery.

## Verify and explain

Use `portfolio-web-review` when available; otherwise perform the relevant checks directly. Inspect desktop and mobile layouts, links, keyboard use, focus, reduced motion, visible critical content without animation, image crops and actual color states. Check public copy against evidence.

Report what changed, why, which checks actually ran, and what remains unverified. Screenshots and token calculations are evidence for their own scope, not a blanket accessibility or performance certification. Continue authorized work; ask only for missing facts or decisions that materially affect it.

