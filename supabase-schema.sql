-- Run in Supabase SQL Editor. Each authenticated parent's progress is private.
create table if not exists public.study_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null default '{"name":"","attempts":[]}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.study_progress enable row level security;
revoke all on public.study_progress from anon;
grant select, insert, update on public.study_progress to authenticated;
drop policy if exists "Read own progress" on public.study_progress;
drop policy if exists "Insert own progress" on public.study_progress;
drop policy if exists "Update own progress" on public.study_progress;
create policy "Read own progress" on public.study_progress for select to authenticated using (user_id = (select auth.uid()));
create policy "Insert own progress" on public.study_progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Update own progress" on public.study_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
