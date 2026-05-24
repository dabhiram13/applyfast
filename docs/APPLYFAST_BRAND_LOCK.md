# Applyfast Brand Lock

This document is a mandatory source of truth for Codex.

## Product definition
Applyfast is not a generic job board. It is a visa-aware job decision engine for international candidates.

Core v1 loop:
1. User signs up.
2. User completes visa/profile context.
3. User searches or imports a job.
4. Applyfast analyzes sponsor confidence and profile fit.
5. User gets one of four recommendations: Apply Now, Tailor First, Risky, Skip.
6. User saves the job to tracker.
7. Resume tailoring happens only after the job passes sponsor/fit checks.

## Brand personality
Premium, precise, high-trust SaaS. Calm but sharp. Designed for international students and visa-dependent job seekers who are tired of wasting applications.

## Colors
- Lime Green: #B7F34A — primary brand accent and CTA
- Charcoal: #0D0F12 — primary dark surface
- Dark Gray: #1F2328 — secondary dark surface
- Muted Gray: #9CA3AF — secondary text
- Soft Gray: #F3F4F6 — app background and borders
- White: #FFFFFF — light surface and reversed text
- Success Green: #22C55E — success states only, not brand replacement

## Visual rules
- Use lime green sparingly for main actions, active states, and sponsor-confidence highlights.
- Use dark charcoal hero sections and selected premium panels.
- App screens should be mostly clean light surfaces with subtle charcoal/lime accents.
- Use large rounded cards, soft shadows, crisp borders, generous spacing.
- Do not create a playful cartoon UI.
- Do not replace the logo with a different icon.
- Do not introduce blue/purple as a dominant brand color.
- Do not use mass-apply language as the primary positioning.

## Logo files
Use the SVG assets in:
- `/public/brand/logo/applyfast_mark.svg`
- `/public/brand/logo/applyfast_logo_full_light.svg`
- `/public/brand/logo/applyfast_logo_full_dark.svg`

## Reference images
Use the design references in `/public/brand/reference/` to match the intended style:
1. `01_design_system_overview.png` — master design system
2. `02_brand_guidelines.png` — logo/color/type rules
3. `03_landing_page_reference.png` — marketing homepage direction
4. `04_onboarding_reference.png` — onboarding direction
5. `05_dashboard_reference.png` — dashboard direction
6. `06_job_matches_reference.png` — job matches direction
7. `07_sponsor_explorer_reference.png` — sponsor explorer direction
8. `08_resume_tailor_reference.png` — resume tailor/apply queue direction
9. `09_tracker_inbox_reference.png` — tracker direction; inbox is later, not v1

## Screens v1
Build only:
- Marketing homepage
- Auth
- Onboarding
- Dashboard
- Job Analyzer
- Job Matches
- Sponsor Explorer
- Resume Tailor
- Tracker
- Settings

Do not build:
- Chrome extension
- Mass apply
- Recruiter inbox
- Full billing/subscriptions
- Complex admin dashboard
- Mobile app first

## Positioning
Preferred copy direction:
- “Know where to apply before you waste another application.”
- “Stop applying blind.”
- “Visa-aware job search for international candidates.”

Avoid generic claims like:
- “Apply to hundreds of jobs instantly.”
- “The ultimate AI job board.”
- “Fully automated job applications.”
