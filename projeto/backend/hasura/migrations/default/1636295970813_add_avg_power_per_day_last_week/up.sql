CREATE OR REPLACE VIEW avg_power_per_day_last_week AS
WITH p AS (
SELECT DATE(time_bucket('1 day', time)) AS day, avg(power) AS power
  FROM smart_plug_metrics
  GROUP BY day
  ORDER BY day DESC LIMIT 7
)
SELECT *
FROM p
ORDER BY day ASC;
