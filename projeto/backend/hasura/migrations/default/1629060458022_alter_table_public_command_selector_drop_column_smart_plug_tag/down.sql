alter table "public"."command_selector" alter column "smart_plug_tag" drop not null;
alter table "public"."command_selector" add column "smart_plug_tag" ltree;
