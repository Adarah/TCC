alter table "public"."lab_user_role" add constraint "lab_user_role_lab_id_user_id_role_id_key" unique (lab_id, user_id, role_id);
alter table "public"."lab_user_role" alter column "role_id" drop not null;
alter table "public"."lab_user_role" add column "role_id" int4;
