CREATE TABLE student_group_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    topic TEXT NOT NULL,
    content TEXT NOT NULL
);

SELECT create_hypertable('student_group_metrics', 'time');
