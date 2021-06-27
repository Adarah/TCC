CREATE TABLE smart_plugs (
    id SERIAL PRIMARY KEY
);

CREATE TABLE smart_plug_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    smart_plug_id INT NOT NULL REFERENCES smart_plugs (id) ON DELETE RESTRICT,
    current DOUBLE PRECISION NOT NULL
);

SELECT create_hypertable('smart_plug_metrics', 'time');
