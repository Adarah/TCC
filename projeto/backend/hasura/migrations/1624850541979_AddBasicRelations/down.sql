
alter table "public"."smart_plug_metrics" drop constraint "smart_plug_metrics_smart_plug_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."smart_plug_metrics" add column "smart_plug_id" integer
 not null;

DROP TABLE "public"."smart_plug";

DROP TABLE "public"."workbench";

DROP TABLE "public"."laboratory";
