# Applyfast Component System

## Brand

- `ApplyfastLogo` — full wordmark, supports light/dark contexts through `darkWord`
- `ApplyfastMark` — standalone icon mark

## Primitive UI components

Located in `components/ui/Core.tsx`:

- `Button`
- `Card`
- `Badge`
- `Input`
- `ProgressRing`
- `MetricCard`

## Layout components

Located in `components/layout/AppShell.tsx`:

- `AppShell` — dark sidebar + main app canvas
- `TopBar` — page title, subtitle, search/action row

## Product components

Located in `components/product`:

- `JobCard` — job match row/card with company logo, visa badges, salary, risk, match ring
- `CompanyRow` — sponsor explorer row with sponsor confidence and H-1B approvals
- `DecisionPanel` — Apply Now / Tailor First / Risky / Skip system
- `ResumeDiff` — resume tailoring before/after diff blocks
- `TrackerKanban` — application tracker board

## Screen composition

Each screen should be composed from the reusable components above. Avoid one-off large JSX blocks unless the section is unique to that page.

## Routes

- `/` landing
- `/design-system` component gallery
- `/onboarding` onboarding
- `/dashboard` dashboard
- `/analyzer` core job analyzer
- `/jobs` job matches
- `/sponsors` sponsor explorer
- `/resume-tailor` resume tailor
- `/tracker` application tracker
- `/settings` profile/settings
