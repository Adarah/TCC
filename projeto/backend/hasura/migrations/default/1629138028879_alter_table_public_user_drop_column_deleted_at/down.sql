comment on column "public"."user"."deleted_at" is E'All fields are nullable so we can comply with LGPD (a brazilian version of europe\'s GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.';
alter table "public"."user" alter column "deleted_at" drop not null;
alter table "public"."user" add column "deleted_at" timestamptz;
