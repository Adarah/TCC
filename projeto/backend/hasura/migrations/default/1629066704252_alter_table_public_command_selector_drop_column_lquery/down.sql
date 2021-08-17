alter table "public"."command_selector" alter column "lquery" drop not null;
alter table "public"."command_selector" add column "lquery" lquery;
