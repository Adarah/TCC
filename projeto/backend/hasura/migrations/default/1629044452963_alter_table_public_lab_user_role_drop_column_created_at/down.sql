alter table "public"."lab_user_role" alter column "created_at" set default now();
alter table "public"."lab_user_role" alter column "created_at" drop not null;
alter table "public"."lab_user_role" add column "created_at" timestamptz;
