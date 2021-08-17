alter table "public"."lab_user_role" alter column "user_id" drop not null;
alter table "public"."lab_user_role" add column "user_id" int4;
