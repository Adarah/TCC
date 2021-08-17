alter table "public"."smart_plug" drop constraint "smart_plug_lab_station_id_fkey",
  add constraint "smart_plug_workbench_id_fkey"
  foreign key ("lab_station_id")
  references "public"."lab_station"
  ("id") on update restrict on delete restrict;
