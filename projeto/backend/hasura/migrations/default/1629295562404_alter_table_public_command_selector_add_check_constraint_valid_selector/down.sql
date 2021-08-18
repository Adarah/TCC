alter table "public"."command_selector" drop constraint "valid_selector";
alter table "public"."command_selector" add constraint "valid_selector" check (CHECK (selector ~ '^[0-9]+(\.[A-Za-z0-9_]+)*$'::text));
