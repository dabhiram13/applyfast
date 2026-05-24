# Integration Plan

## Supabase
Auth, Postgres, Storage, RLS.

## JSearch
Initial job search source. Normalize every job before scoring.

## Vercel AI Gateway
Job summarization, sponsorship text extraction, resume parsing, tailored bullet suggestions.

## Inngest
Background job scoring, reminders, weekly digest, sponsor data refresh.

## Resend
Welcome email, follow-up reminders, weekly progress digest.

## PostHog
Track funnel events: sign_up, onboarding_completed, job_analyzed, decision_shown, job_saved, resume_tailored.

## Sentry
Runtime and server error monitoring.

## Stripe
Installed but not active in v1. Use after beta validation.
