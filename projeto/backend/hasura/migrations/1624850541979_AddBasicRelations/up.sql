
CREATE TABLE "public"."laboratory" ("id" serial NOT NULL, "name" Text NOT NULL, "description" text, "location" Text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_laboratory_updated_at"
BEFORE UPDATE ON "public"."laboratory"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_laboratory_updated_at" ON "public"."laboratory" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."workbench" ("id" serial NOT NULL, "name" Text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "laboratory_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("laboratory_id") REFERENCES "public"."laboratory"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_workbench_updated_at"
BEFORE UPDATE ON "public"."workbench"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_workbench_updated_at" ON "public"."workbench" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."smart_plug" ("id" serial NOT NULL, "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "workbench_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("workbench_id") REFERENCES "public"."workbench"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_smart_plug_updated_at"
BEFORE UPDATE ON "public"."smart_plug"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_smart_plug_updated_at" ON "public"."smart_plug" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."smart_plug_metrics" add column "smart_plug_id" integer
 not null;

alter table "public"."smart_plug_metrics"
  add constraint "smart_plug_metrics_smart_plug_id_fkey"
  foreign key ("smart_plug_id")
  references "public"."smart_plug"
  ("id") on update restrict on delete restrict;
