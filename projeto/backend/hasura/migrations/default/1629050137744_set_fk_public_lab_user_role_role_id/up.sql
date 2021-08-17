alter table "public"."lab_user_role"
  add constraint "lab_user_role_role_id_fkey"
  foreign key ("role_id")
  references "public"."role"
  ("id") on update cascade on delete cascade;
