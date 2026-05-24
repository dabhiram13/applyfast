-- Applyfast core schema draft. Review before applying to production.

create table if not exists public.visa_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  visa_status text not null,
  graduation_date date,
  work_authorization_notes text,
  target_roles text[] default '{}',
  target_locations text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text,
  industry text,
  headquarters text,
  sponsor_confidence int default 0,
  h1b_approvals int default 0,
  median_wage int,
  avg_reply_days numeric,
  ghost_rate numeric,
  created_at timestamptz default now()
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete set null,
  source text,
  source_job_id text,
  title text not null,
  company_name text not null,
  location text,
  salary_min int,
  salary_max int,
  description text,
  url text,
  created_at timestamptz default now()
);

create table if not exists public.job_sponsor_scores (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  sponsor_confidence int not null,
  profile_match int not null,
  recommendation text not null check (recommendation in ('Apply Now','Tailor First','Risky','Skip')),
  evidence jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  job_id uuid references public.jobs(id) on delete set null,
  status text not null default 'Saved',
  recommendation text,
  sponsor_confidence int,
  notes text,
  follow_up_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.visa_profiles enable row level security;
alter table public.job_sponsor_scores enable row level security;
alter table public.applications enable row level security;

create policy "Users can manage own visa profiles" on public.visa_profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own scores" on public.job_sponsor_scores
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own applications" on public.applications
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
