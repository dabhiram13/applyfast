Read these files before coding:
- AGENTS.md
- docs/APPLYFAST_PRODUCT_SPEC.md
- docs/APPLYFAST_DESIGN_SYSTEM.md
- docs/APPLYFAST_BRAND_LOCK.md

Also inspect the visual references in:
- public/brand/logo/
- public/brand/reference/

Your job is to preserve the Applyfast brand and product direction exactly.

Do not invent a new logo, color palette, layout style, or product scope.

When creating or modifying UI:
- Use the existing Applyfast logo assets.
- Use lime green #B7F34A and charcoal #0D0F12 as the core brand colors.
- Match the visual references for spacing, card shapes, premium SaaS feel, and contrast.
- Keep v1 focused on Job Analyzer, Sponsor Confidence, Apply/Skip decisioning, Resume Tailor, and Tracker.
- Do not build Chrome extension, mass apply, recruiter inbox, or billing yet.

First task:
1. Verify all brand assets exist.
2. Update docs/APPLYFAST_DESIGN_SYSTEM.md to reference docs/APPLYFAST_BRAND_LOCK.md.
3. Ensure the Applyfast logo component uses the SVG/logo shape from public/brand/logo or matches it precisely.
4. Run npm run build.
5. Fix only build/design-token errors.
6. Report changed files.
