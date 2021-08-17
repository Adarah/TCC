CREATE TABLE smart_plug_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    current DOUBLE PRECISION NOT NULL
);

SELECT create_hypertable('smart_plug_metrics', 'time');

CREATE TABLE student_group_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    topic TEXT NOT NULL,
    content TEXT NOT NULL
);

SELECT create_hypertable('student_group_metrics', 'time');