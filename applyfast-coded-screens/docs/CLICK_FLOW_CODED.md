# Applyfast coded click-flow map

## Marketing `/`

- `Start free` → `/onboarding`
- `Try Job Analyzer` → `/analyzer`
- `Explore sponsors` → `/sponsors`

## Onboarding `/onboarding`

- Continue to dashboard → `/dashboard`
- Visa status chips update the user visa profile
- Resume upload stores to Supabase Storage later
- Preferences persist to `job_preferences`

## Dashboard `/dashboard`

- Search bar opens command palette later
- Match rows → `/jobs`
- Queue summary → `/tracker`
- Analyze job CTA in sidebar → `/analyzer`

## Job Analyzer `/analyzer`

- Paste job URL → analyze job
- Analyze Job → runs JSearch/company/job extraction + AI sponsor scoring later
- Apply Now → save to tracker as `applied` or open external career link later
- Tailor First → `/resume-tailor`
- Risky → save as risky/saved with warning
- Skip → record skipped decision
- Track this job → `/tracker`

## Job Matches `/jobs`

- Filter dropdowns update query params later
- Job row click updates selected detail panel
- Apply on Stripe → external apply URL later
- Tailor Resume → `/resume-tailor`
- Add to Queue → creates application with status `tailor_first`

## Sponsor Explorer `/sponsors`

- Company row click updates detail panel
- Recent job opening click → `/analyzer` or `/jobs/[id]` later
- View all jobs → `/jobs?company=stripe`

## Resume Tailor `/resume-tailor`

- Approve → creates resume version
- Export PDF → downloads tailored resume later
- Submit Application → only after human review

## Tracker `/tracker`

- Add Application → create application modal later
- Kanban card click → application detail drawer later
- Next Action click → task detail/reminder later
