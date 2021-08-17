alter table "public"."smart_plug_metrics" drop constraint "smart_plug_metrics_smart_plug_chip_id_fkey",
  add constraint "smart_plug_metrics_smart_plug_chip_id_fkey"
  foreign key ("smart_plug_chip_id")
  references "public"."smart_plug"
  ("chip_id") on update restrict on delete restrict;
