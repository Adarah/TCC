
alter table "public"."lab_station" rename column "lab_id" to "laboratory_id";

alter table "public"."lab" rename to "laboratory";

alter table "public"."smart_plug" rename column "lab_station_id" to "workbench_id";

alter table "public"."lab_station" rename to "workbench";
