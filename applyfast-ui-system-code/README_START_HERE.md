# Applyfast Coded UI System

This package is not just reference images. It is a coded, reusable React/Next.js design system and product screen handoff.

## What this contains

- `app/design-system/page.tsx` — coded component gallery / design system board
- `app/page.tsx` — landing page
- `app/onboarding/page.tsx` — onboarding flow
- `app/dashboard/page.tsx` — dashboard
- `app/analyzer/page.tsx` — core Job Analyzer screen
- `app/jobs/page.tsx` — Job Matches screen
- `app/sponsors/page.tsx` — Sponsor Explorer screen
- `app/resume-tailor/page.tsx` — Resume Tailor screen
- `app/tracker/page.tsx` — Tracker screen
- `components/brand/*` — logo components
- `components/ui/*` — reusable primitive UI components
- `components/product/*` — reusable Applyfast product components
- `lib/tokens.ts` — design tokens
- `lib/mock.ts` — stable mock data
- `docs/*` — product, component, and click-flow specifications

## Run locally

```bash
npm install
npm run dev
```

Open:

- `/design-system`
- `/`
- `/onboarding`
- `/analyzer`
- `/jobs`
- `/sponsors`
- `/resume-tailor`
- `/tracker`
- `/dashboard`

## Instruction for Codex

The coded screens are the visual source of truth. Do not invent a new logo, color palette, layout system, or generic job-board UI. Extend these components and wire them to backend services.
