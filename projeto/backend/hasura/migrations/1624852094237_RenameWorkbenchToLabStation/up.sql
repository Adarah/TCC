
alter table "public"."workbench" rename to "lab_station";

alter table "public"."smart_plug" rename column "workbench_id" to "lab_station_id";

alter table "public"."laboratory" rename to "lab";

alter table "public"."lab_station" rename column "laboratory_id" to "lab_id";
