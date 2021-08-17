alter table "public"."command_selector" add constraint "command_selector_command_id_target_key" unique ("command_id", "target");
