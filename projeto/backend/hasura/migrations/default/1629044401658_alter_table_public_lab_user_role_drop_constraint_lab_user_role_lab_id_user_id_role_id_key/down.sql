alter table "public"."lab_user_role" add constraint "lab_user_role_lab_id_user_id_role_id_key" unique ("lab_id", "user_id", "role_id");
