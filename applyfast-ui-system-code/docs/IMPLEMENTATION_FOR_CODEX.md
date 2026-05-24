# Implementation Guidance for Codex

Use this package as coded visual truth. Do not replace it with a new theme.

## First task

1. Run `npm install`
2. Run `npm run build`
3. Fix only build errors
4. Do not redesign

## Next integration order

1. Supabase Auth + protected app routes
2. Supabase schema for profiles, visa profiles, resumes, jobs, companies, sponsor evidence, job scores, saved jobs, applications
3. JSearch adapter for job search
4. Vercel AI Gateway for job analysis + resume parsing/tailoring
5. Inngest for background analysis/reminders
6. Resend for reminders and weekly summaries
7. PostHog events
8. Sentry error boundaries/logging

## The UI should stay componentized

If adding a new visual element, add it as a component first, then compose screens.
