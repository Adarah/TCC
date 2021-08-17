CREATE TABLE "public"."lab_user_role" ("id" serial NOT NULL, "lab_id" integer NOT NULL, "user_id" integer NOT NULL, "role_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("lab_id", "user_id", "role_id"));
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
CREATE TRIGGER "set_public_lab_user_role_updated_at"
BEFORE UPDATE ON "public"."lab_user_role"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_lab_user_role_updated_at" ON "public"."lab_user_role" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
