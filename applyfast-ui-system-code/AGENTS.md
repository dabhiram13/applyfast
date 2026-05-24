# AGENTS.md — Applyfast UI System Rules

## Product truth

Applyfast is a visa-aware job decision engine for international candidates. It helps users decide whether a job is worth applying to before wasting time tailoring applications.

Core loop:

1. Complete visa/profile onboarding
2. Upload resume and set preferences
3. Analyze job sponsor confidence + visa compatibility + profile fit
4. Decide: Apply Now / Tailor First / Risky / Skip
5. Save and track applications

## Design lock

Use only this visual direction:

- Lime green: `#B7F34A`
- Lime active: `#78C90D`
- Charcoal: `#0D0F12`
- Dark gray: `#1F2328`
- Soft gray: `#F3F4F6`
- White: `#FFFFFF`
- Rounded cards, subtle shadows, premium SaaS spacing
- Dark sidebar + clean white dashboard surfaces
- Applyfast logo from `components/brand/Logo.tsx` and `public/brand/logo/*`

## Do not build in v1

- Chrome extension
- Mass apply
- Recruiter inbox
- Billing-first UX
- Generic job-board homepage
- Random redesign

## Coded source of truth

Read these first:

- `README_START_HERE.md`
- `docs/COMPONENT_SYSTEM.md`
- `docs/CLICK_FLOW_MAP.md`
- `app/design-system/page.tsx`
- `components/*`

## Implementation rule

Use existing reusable components before creating new ones. If a component is missing, add it to `components/ui` or `components/product`, then compose screens from it.
