CREATE TRIGGER "set_public_lab_user_role_updated_at"
BEFORE UPDATE ON "public"."lab_user_role"
FOR EACH ROW EXECUTE FUNCTION set_current_timestamp_updated_at();COMMENT ON TRIGGER "set_public_lab_user_role_updated_at" ON "public"."lab_user_role"
IS E'trigger to set value of column "updated_at" to current timestamp on row update';
