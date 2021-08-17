comment on column "public"."user"."usp_id" is E'All fields are nullable so we can comply with LGPD (a brazilian version of europe\'s GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.';
alter table "public"."user" add constraint "lab_users_usp_id_key" unique (usp_id);
alter table "public"."user" alter column "usp_id" drop not null;
alter table "public"."user" add column "usp_id" text;
