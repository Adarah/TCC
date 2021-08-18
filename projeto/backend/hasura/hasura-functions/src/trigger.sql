CREATE FUNCTION enrich_smart_plug_path()
    RETURNS TRIGGER
    LANGUAGE PLPGSQL
    AS
$$
BEGIN
    UPDATE "smart_plug"
    SET path = path || text2ltree(lab_station_id) || lab_station_id(id)
    WHERE id = NEW.id;
END;
$$

CREATE TRIGGER fix_smart_plug_path AFTER INSERT ON "smart_plug" FOR EACH ROW EXECUTE PROCEDURE enrich_smart_plug_path();