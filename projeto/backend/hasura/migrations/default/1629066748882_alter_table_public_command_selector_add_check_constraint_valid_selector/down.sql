alter table "public"."command_selector" drop constraint "valid_selector";
alter table "public"."command_selector" add constraint "valid_selector" check (CHECK (target ~ '^[A-Za-z0-9_](\.[A-Za-z0-9_])*$'::text));
