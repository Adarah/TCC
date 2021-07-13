
alter table "public"."smart_plug" add column "chip_id" Text
 not null;

alter table "public"."smart_plug" add column "model" text
 not null;

alter table "public"."smart_plug_metrics" rename column "current" to "power";

alter table "public"."smart_plug_metrics" rename column "smart_plug_id" to "smart_plug_chip_id";

alter table "public"."smart_plug" add constraint "smart_plug_chip_id_key" unique ("chip_id");

alter table "public"."smart_plug_metrics" drop constraint "smart_plug_metrics_smart_plug_id_fkey";

ALTER TABLE "public"."smart_plug_metrics" ALTER COLUMN "smart_plug_chip_id" TYPE Text;

alter table "public"."smart_plug_metrics"
  add constraint "smart_plug_metrics_smart_plug_chip_id_fkey"
  foreign key ("smart_plug_chip_id")
  references "public"."smart_plug"
  ("chip_id") on update restrict on delete restrict;

DROP VIEW smart_plug_status;
CREATE OR REPLACE VIEW "public"."smart_plug_status" AS 
 SELECT s.chip_id,
        CASE
            WHEN ((data.power = (0)::numeric) AND (data."time" >= (now() - '00:01:00'::interval))) THEN 'off'::text
            WHEN ((data.power <> (0)::numeric) AND (data."time" >= (now() - '00:01:00'::interval))) THEN 'on'::text
            ELSE 'unreachable'::text
        END AS status,
    data."time" AS last_message_timestamp
   FROM (smart_plug s
     LEFT JOIN LATERAL ( SELECT m."time",
            m.power,
            m.smart_plug_chip_id
           FROM smart_plug_metrics m
          WHERE (s.chip_id = m.smart_plug_chip_id)
          ORDER BY m."time" DESC
         LIMIT 1) data ON (true))
  ORDER BY s.chip_id, data."time" DESC;
