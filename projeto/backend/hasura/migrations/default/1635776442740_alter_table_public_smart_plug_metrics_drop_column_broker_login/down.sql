alter table "public"."smart_plug_metrics" alter column "broker_login" drop not null;
alter table "public"."smart_plug_metrics" add column "broker_login" text;
