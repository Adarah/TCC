CREATE OR REPLACE FUNCTION enrich_smart_plug_path()
    RETURNS TRIGGER
    LANGUAGE PLPGSQL
    AS
$$
BEGIN
    -- Hasura is inserting the X-Hasura-Lab-Id session variable by default in the path.
    NEW.path := NEW.path || text2ltree(NEW.lab_station_id::text) || text2ltree(nextval(pg_get_serial_sequence('smart_plug', 'id'))::text);
    RETURN NEW;
END;
$$;

CREATE TRIGGER fix_smart_plug_path
BEFORE INSERT ON "smart_plug"
FOR EACH ROW
EXECUTE PROCEDURE enrich_smart_plug_path();

COMMENT ON FUNCTION audit.audit_table(regclass) IS $body$
This function assumes the contents of path is the lab_id given by x-hasura-lab-id
$body$;