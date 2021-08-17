alter table "public"."lab" alter column "deleted_at" drop not null;
alter table "public"."lab" add column "deleted_at" timestamptz;
