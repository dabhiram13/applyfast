# Applyfast Database Schema

## V1 tables
- profiles
- visa_profiles
- resumes
- jobs
- companies
- company_aliases
- sponsor_evidence
- job_sponsor_scores
- saved_jobs
- applications
- application_events
- followup_reminders
- ai_runs
- feedback_events

## Sensitive data
Resumes and visa context are user-sensitive. Use Supabase RLS and user-scoped policies.

## Principle
Persist the decision evidence. A user should understand why Applyfast said Apply Now, Tailor First, Risky, or Skip.
