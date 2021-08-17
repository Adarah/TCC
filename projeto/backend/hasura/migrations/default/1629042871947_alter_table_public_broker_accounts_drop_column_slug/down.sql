comment on column "public"."broker_accounts"."slug" is E'Students are always grouped in groups of one or more students for each lab. Each group is usually assigned a lab_station.';
alter table "public"."broker_accounts" add constraint "student_group_slug_key" unique (slug);
alter table "public"."broker_accounts" alter column "slug" drop not null;
alter table "public"."broker_accounts" add column "slug" text;
