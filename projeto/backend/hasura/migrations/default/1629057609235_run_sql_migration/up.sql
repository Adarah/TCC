CREATE TABLE smart_plug_tag (
    id SERIAL PRIMARY KEY,
    smart_plug_id INTEGER,
    path LTREE
);
