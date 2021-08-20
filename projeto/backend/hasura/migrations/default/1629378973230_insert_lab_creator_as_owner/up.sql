CREATE OR REPLACE FUNCTION insert_lab_creator_as_owner()
    RETURNS TRIGGER
    LANGUAGE PLPGSQL
    AS
$$
DECLARE session_variables JSON;
BEGIN
    session_variables := current_setting('hasura.user', 't')::JSON;
    INSERT INTO lab_user_role(lab_id, user_id, role_id)
    SELECT NEW.id, session_variables ->> 'x-hasura-user-id', r.id
    FROM role r
    WHERE path = 'owner';
    RETURN NEW;
END;
$$;

CREATE TRIGGER add_lab_creator
AFTER INSERT ON "lab"
FOR EACH ROW
EXECUTE PROCEDURE insert_lab_creator_as_owner();