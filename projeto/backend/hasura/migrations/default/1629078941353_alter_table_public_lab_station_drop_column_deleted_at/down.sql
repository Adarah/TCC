alter table "public"."lab_station" alter column "deleted_at" drop not null;
alter table "public"."lab_station" add column "deleted_at" timestamptz;
