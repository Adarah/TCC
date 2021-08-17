alter table "public"."command_type" alter column "id" set default nextval('command_type_id_seq'::regclass);
alter table "public"."command_type" alter column "id" drop not null;
alter table "public"."command_type" add column "id" int4;
