alter table "public"."role"
  add constraint "role_parent_role_id_fkey"
  foreign key ("parent_role_id")
  references "public"."role"
  ("id") on update cascade on delete cascade;
