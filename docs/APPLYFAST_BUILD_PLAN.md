# Applyfast Build Plan

## Phase 0: Foundation
- Use framework `webapp` as base.
- Replace BuildThisNow brand with Applyfast.
- Keep auth, Supabase, Stripe, Inngest, Sentry, PostHog scaffolding.
- Add Codex-only `AGENTS.md`.

## Phase 1: Static product loop
- Marketing homepage
- Protected app shell
- Dashboard
- Job Analyzer
- Job Matches
- Sponsor Explorer
- Resume Tailor placeholder
- Tracker

## Phase 2: Database
- Create Applyfast schema in Supabase.
- Add RLS.
- Seed mock companies/jobs.
- Replace local mock data with Supabase reads.

## Phase 3: Integrations
- JSearch adapter for initial job discovery.
- Vercel AI Gateway for job analysis and resume parsing.
- Inngest for background sponsor scoring and reminders.
- Resend for onboarding/follow-up emails.
- PostHog events.
- Sentry error monitoring.

## Phase 4: Beta polish
- Empty states
- Loading states
- Error states
- Mobile responsiveness
- Analytics funnels
- Invite-only beta

## Phase 5: Monetization
- Stripe checkout only after beta validation.
