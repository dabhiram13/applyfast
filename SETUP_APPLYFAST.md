# Applyfast Setup

This project was prepared from your uploaded BuildThisNow framework, but converted into a Codex-only Applyfast starter.

## Local setup

```bash
cd applyfast_from_framework
cp .env.example .env.local
npm install
npm run build
npm run dev
```

## Fill `.env.local`
Start with Supabase only:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Then add later:

```env
RESEND_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
JSEARCH_API_KEY=
VERCEL_AI_GATEWAY_API_KEY=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
SENTRY_AUTH_TOKEN=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Product routes

- `/` marketing page
- `/auth/login`
- `/auth/sign-up`
- `/protected/dashboard`
- `/protected/analyzer`
- `/protected/jobs`
- `/protected/sponsors`
- `/protected/resume`
- `/protected/tracker`
- `/protected/settings`

## Codex workflow

Read these first:

- `AGENTS.md`
- `docs/APPLYFAST_PRODUCT_SPEC.md`
- `docs/APPLYFAST_BUILD_PLAN.md`
- `docs/APPLYFAST_DATABASE_SCHEMA.md`
- `docs/APPLYFAST_DESIGN_SYSTEM.md`
- `prompts/CODEX_NEXT_STEPS.md`

## Important

Do not build Chrome extension, mass apply, recruiter inbox, or billing in v1. Build the Job Analyzer + Sponsor Confidence loop first.
