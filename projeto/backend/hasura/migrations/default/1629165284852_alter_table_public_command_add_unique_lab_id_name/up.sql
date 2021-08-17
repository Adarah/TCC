alter table "public"."command" add constraint "command_lab_id_name_key" unique ("lab_id", "name");
