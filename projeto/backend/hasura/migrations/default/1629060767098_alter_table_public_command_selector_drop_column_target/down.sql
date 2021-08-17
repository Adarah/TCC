alter table "public"."command_selector" alter column "target" drop not null;
alter table "public"."command_selector" add column "target" text;
