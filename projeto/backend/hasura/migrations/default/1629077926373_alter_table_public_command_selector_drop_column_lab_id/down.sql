alter table "public"."command_selector"
  add constraint "command_selector_lab_id_fkey"
  foreign key (lab_id)
  references "public"."lab"
  (id) on update cascade on delete cascade;
alter table "public"."command_selector" alter column "lab_id" drop not null;
alter table "public"."command_selector" add column "lab_id" int4;
