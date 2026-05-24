# Applyfast Product Spec

## Positioning
Applyfast helps international candidates stop applying blind. It analyzes sponsor confidence, profile fit, and visa risk before a candidate spends time tailoring or submitting an application.

## Target user
- F-1 students
- OPT candidates
- STEM OPT candidates
- H-1B candidates and transfers
- International graduates applying in the US market

## Core pain
The candidate does not know if a job or company is worth applying to because sponsorship data is unclear, inconsistent, or generic.

## V1 wedge
A single decision engine:

`Job -> sponsor confidence -> profile fit -> Apply Now / Tailor First / Risky / Skip -> save/track`

## V1 modules
1. Marketing page
2. Auth
3. Visa/profile onboarding
4. Job Analyzer
5. Job Matches
6. Sponsor Explorer
7. Resume Tailor placeholder
8. Application Tracker
9. Settings/integrations readiness

## Recommendation meanings
- Apply Now: strong sponsorship evidence and profile fit.
- Tailor First: sponsor signal is acceptable but resume needs improvement.
- Risky: unclear sponsorship, low salary signal, or poor evidence.
- Skip: low sponsorship confidence or incompatible visa/location/role profile.

## Later modules
- Real sponsor-data ingestion
- Chrome extension
- ATS autofill
- Billing
- Recruiter inbox
- Team/admin tools
