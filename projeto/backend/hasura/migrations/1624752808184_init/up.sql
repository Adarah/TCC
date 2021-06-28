CREATE TABLE smart_plug_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    current DOUBLE PRECISION NOT NULL
);

SELECT create_hypertable('smart_plug_metrics', 'time');
