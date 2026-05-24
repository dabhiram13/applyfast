# Applyfast coded screen package

This is a **coded design handoff**, not just screenshots. It gives Codex or any coding agent exact React/Next.js screens to preserve the Applyfast design system and product flow.

## Run locally

```bash
npm install
npm run dev
```

Routes:

- `/` — marketing landing page
- `/onboarding` — visa/profile onboarding
- `/dashboard` — command dashboard
- `/analyzer` — core Job Analyzer screen
- `/jobs` — Job Matches screen
- `/sponsors` — Sponsor Explorer screen
- `/resume-tailor` — Resume Tailor workflow
- `/tracker` — Application Tracker
- `/settings` — settings/integrations placeholder

## Product truth

Applyfast is **not a generic job board**. It is a visa-aware job decision engine.

Core loop:

```text
profile + visa context → analyze job → sponsor confidence → Apply Now / Tailor First / Risky / Skip → save/track
```

## Codex rule

Do not redesign from scratch. Use the coded screens as the source of truth. Codex should wire backend data, fix responsiveness, connect APIs, and improve code quality without changing product direction or visual identity.
