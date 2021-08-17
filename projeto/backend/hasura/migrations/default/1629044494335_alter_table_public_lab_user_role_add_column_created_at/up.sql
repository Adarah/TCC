alter table "public"."lab_user_role" add column "created_at" timestamptz
 null default now();
