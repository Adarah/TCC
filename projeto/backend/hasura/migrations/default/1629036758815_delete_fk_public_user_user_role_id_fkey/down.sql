alter table "public"."user"
  add constraint "user_role_id_fkey"
  foreign key ("role_title")
  references "public"."role"
  ("title") on update restrict on delete restrict;
