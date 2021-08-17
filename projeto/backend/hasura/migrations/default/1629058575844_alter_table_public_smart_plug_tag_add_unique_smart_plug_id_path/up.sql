alter table "public"."smart_plug_tag" add constraint "smart_plug_tag_smart_plug_id_path_key" unique ("smart_plug_id", "path");
