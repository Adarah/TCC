alter table "public"."command"
  add constraint "command_created_by_fkey"
  foreign key ("created_by")
  references "public"."user"
  ("id") on update cascade on delete restrict;
