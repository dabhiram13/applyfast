# Applyfast Codex Operating Rules

Applyfast is not a generic job board. It is a visa-aware job decision engine for international candidates.

## Product truth
The v1 product loop is:

1. User signs up.
2. User enters visa/profile context.
3. User searches or imports a job.
4. Applyfast analyzes sponsor confidence.
5. User receives one recommendation: Apply Now, Tailor First, Risky, or Skip.
6. User saves the job to the tracker.
7. Resume tailoring happens only after sponsor/fit checks pass.

## Do not build in v1
- Chrome extension
- Mass apply
- Hidden one-click application bots
- Recruiter inbox
- Billing-first UX
- Complex admin dashboard
- Mobile app

## Design system
- Lime: #B7F34A
- Charcoal: #111318 / #0D0F12
- Soft background: #F7F8F5
- White cards, subtle borders, rounded 2xl cards, clean typography
- Premium SaaS, evidence-first, highly readable

## Implementation rules
- Keep Supabase/Auth plumbing from the framework.
- Keep shadcn-style UI primitives.
- Build product screens with mock data first.
- Wire backend integrations only after the UI loop is stable.
- Never commit API keys.
- Use TypeScript strictly.
- Run `npm run build` after substantial changes.

## Current route plan
- `/` marketing homepage
- `/auth/login`, `/auth/sign-up` existing framework auth
- `/onboarding` visa/profile onboarding placeholder
- `/protected/dashboard`
- `/protected/analyzer`
- `/protected/jobs`
- `/protected/sponsors`
- `/protected/resume`
- `/protected/tracker`
- `/protected/settings`
