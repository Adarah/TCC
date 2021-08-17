alter table "public"."lab_user_role"
  add constraint "lab_user_role_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("id") on update cascade on delete cascade;
