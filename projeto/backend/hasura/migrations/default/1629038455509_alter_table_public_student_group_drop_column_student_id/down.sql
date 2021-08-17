comment on column "public"."student_group"."student_id" is E'Students are always grouped in groups of one or more students for each lab. Each group is usually assigned a lab_station.';
alter table "public"."student_group" alter column "student_id" drop not null;
alter table "public"."student_group" add column "student_id" text;
