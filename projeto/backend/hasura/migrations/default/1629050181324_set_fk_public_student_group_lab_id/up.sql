alter table "public"."student_group" drop constraint "student_group_lab_fkey",
  add constraint "student_group_lab_id_fkey"
  foreign key ("lab_id")
  references "public"."lab"
  ("id") on update cascade on delete cascade;
