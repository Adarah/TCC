alter table "public"."student_group"
  add constraint "student_group_students_fkey"
  foreign key ("student_id")
  references "public"."user"
  ("id") on update restrict on delete restrict;
