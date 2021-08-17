alter table "public"."command_selector"
  add constraint "command_selector_lab_id_fkey"
  foreign key ("lab_id")
  references "public"."lab"
  ("id") on update cascade on delete cascade;
