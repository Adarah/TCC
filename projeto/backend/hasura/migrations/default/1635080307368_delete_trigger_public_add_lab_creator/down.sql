CREATE TRIGGER "add_lab_creator"
AFTER INSERT ON "public"."lab"
FOR EACH ROW EXECUTE FUNCTION insert_lab_creator_as_owner();
