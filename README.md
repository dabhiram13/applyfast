# Applyfast

Applyfast is a visa-aware job decision engine for international candidates. It helps users decide whether a job is worth applying to before wasting time tailoring resumes or submitting applications.

## Core v1 loop

```text
Profile + visa context
→ analyze job
→ sponsor confidence
→ Apply Now / Tailor First / Risky / Skip
→ save to tracker
→ tailor resume only after fit check
```

## Stack inherited from framework

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- shadcn-style UI components
- Supabase Auth/Postgres/Storage scaffold
- Inngest scaffold
- Stripe scaffold, not active in v1
- PostHog scaffold
- Sentry scaffold

## Setup

```bash
cp .env.example .env.local
npm install
npm run build
npm run dev
```

## Key routes

- `/` marketing homepage
- `/auth/login`
- `/auth/sign-up`
- `/protected/dashboard`
- `/protected/analyzer`
- `/protected/jobs`
- `/protected/sponsors`
- `/protected/resume`
- `/protected/tracker`
- `/protected/settings`

## Codex instructions

Read `AGENTS.md` and everything under `docs/` before making changes.

Do not build Chrome extension, mass apply, recruiter inbox, or billing in v1.
