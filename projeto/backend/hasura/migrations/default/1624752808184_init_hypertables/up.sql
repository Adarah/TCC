CREATE TABLE smart_plug_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    power DOUBLE PRECISION NOT NULL,
    smart_plug_chip_id TEXT NOT NULL
);

SELECT create_hypertable('smart_plug_metrics', 'time');

CREATE TABLE student_group_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    broker_login TEXT NOT NULL,
    topic TEXT NOT NULL,
    content TEXT NOT NULL
);

SELECT create_hypertable('student_group_metrics', 'time');