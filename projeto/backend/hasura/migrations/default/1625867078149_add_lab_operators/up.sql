
alter table "public"."user_role" rename to "role";

UPDATE role
SET title = 'anonymous'
WHERE title = 'viewer';

UPDATE role
SET title = 'lab_operator',
    comment = 'An employee of the university that works in the lab.'
WHERE title = 'operator';

CREATE TABLE "public"."lab_operator" ("id" serial NOT NULL, "operator_id" text NOT NULL, "lab_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("lab_id") REFERENCES "public"."lab"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("operator_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);
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
CREATE TRIGGER "set_public_lab_operator_updated_at"
BEFORE UPDATE ON "public"."lab_operator"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_lab_operator_updated_at" ON "public"."lab_operator" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."lab" add column "deleted_at" timestamptz
 null;

alter table "public"."lab_station" add column "deleted_at" timestamptz
 null;

alter table "public"."smart_plug" add column "deleted_at" timestamptz
 null;
