comment on column "public"."user"."role_title" is E'All fields are nullable so we can comply with LGPD (a brazilian version of europe\'s GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.';
alter table "public"."user" alter column "role_title" drop not null;
alter table "public"."user" add column "role_title" text;
