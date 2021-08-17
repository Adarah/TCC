alter table "public"."smart_plug_tag"
  add constraint "smart_plug_tag_smart_plug_id_fkey"
  foreign key ("smart_plug_id")
  references "public"."smart_plug"
  ("id") on update cascade on delete cascade;
