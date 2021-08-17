alter table "public"."command" alter column "created_by" drop not null;
alter table "public"."command" add column "created_by" text;
