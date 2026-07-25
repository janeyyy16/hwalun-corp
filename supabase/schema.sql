-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_submissions enable row level security;

create policy "anon can insert contact submissions"
  on contact_submissions
  for insert
  to anon
  with check (true);

create table if not exists career_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  department text not null,
  message text,
  resume_path text not null,
  created_at timestamptz not null default now()
);

alter table career_applications enable row level security;

create policy "anon can insert career applications"
  on career_applications
  for insert
  to anon
  with check (true);

-- Private bucket for resume uploads: not publicly browsable/downloadable.
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

create policy "anon can upload resumes"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'resumes');
