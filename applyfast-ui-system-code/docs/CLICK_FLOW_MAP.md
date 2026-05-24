# Applyfast Click Flow Map

## Landing page

- `Start free` → `/onboarding`
- `Start free — 2 min` → `/onboarding`
- `Try Job Analyzer` → `/analyzer`
- `Design System` → `/design-system`
- `Analyzer` → `/analyzer`
- `Sponsors` → `/sponsors`
- `Tracker` → `/tracker`

## App sidebar

- Dashboard → `/dashboard`
- Job Matches → `/jobs`
- Applications / Tracker → `/tracker`
- Inbox → `/tracker` for v1 placeholder
- Apply Queue → `/resume-tailor` for v1 placeholder
- Sponsors → `/sponsors`
- Resume Tailor → `/resume-tailor`
- Job Analyzer → `/analyzer`
- Settings → `/settings`

## Onboarding

- Save for later → `/dashboard`
- Continue to dashboard → `/dashboard`
- Continue to Visa Status → remains in onboarding until backend multi-step state exists

## Job Analyzer

- Analyze Job → run job analysis API later; for current coded handoff, keep mock analysis visible
- Select saved job → `/jobs`
- Apply Now → creates/saves application, then `/tracker`
- Tailor First → `/resume-tailor`
- Risky → save as risky status in tracker later
- Skip → dismiss/hide job later
- Add to tracker → `/tracker`

## Job Matches

- Analyze this job → `/analyzer`
- Add to tracker → `/tracker`

## Sponsor Explorer

- Company row click → selected company detail panel on same page
- Recent job opening click → `/analyzer`
- View all jobs → `/jobs`

## Resume Tailor

- Approve → marks tailored version approved
- Export PDF → downloads resume later
- Submit Application → `/tracker`

## Tracker

- Add Application → create application modal later
- Next Action item → selected application detail later
- Upcoming interview → interview prep later
