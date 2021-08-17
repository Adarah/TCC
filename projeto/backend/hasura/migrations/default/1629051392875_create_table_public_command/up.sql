CREATE TABLE "public"."command" ("id" serial NOT NULL, "type" Text NOT NULL, "created_by" text NOT NULL, "lab_id" integer NOT NULL, "is_recurring" boolean NOT NULL, "recurrence_pattern" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("type") REFERENCES "public"."command_type"("type") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("lab_id") REFERENCES "public"."lab"("id") ON UPDATE cascade ON DELETE cascade, CONSTRAINT "recurring_event_must_have_pattern" CHECK (NOT is_recurring OR (is_recurring AND recurrence_pattern IS NOT NULL)));
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
CREATE TRIGGER "set_public_command_updated_at"
BEFORE UPDATE ON "public"."command"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_command_updated_at" ON "public"."command" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
