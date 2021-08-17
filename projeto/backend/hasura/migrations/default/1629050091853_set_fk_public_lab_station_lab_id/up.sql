alter table "public"."lab_station" drop constraint "workbench_laboratory_id_fkey",
  add constraint "lab_station_lab_id_fkey"
  foreign key ("lab_id")
  references "public"."lab"
  ("id") on update cascade on delete cascade;
