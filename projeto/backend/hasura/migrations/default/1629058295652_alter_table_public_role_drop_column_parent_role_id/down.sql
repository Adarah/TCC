alter table "public"."role" alter column "parent_role_id" drop not null;
alter table "public"."role" add column "parent_role_id" int4;
