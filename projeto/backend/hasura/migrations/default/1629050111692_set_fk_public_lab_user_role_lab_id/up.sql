alter table "public"."lab_user_role"
  add constraint "lab_user_role_lab_id_fkey"
  foreign key ("lab_id")
  references "public"."lab"
  ("id") on update cascade on delete cascade;
