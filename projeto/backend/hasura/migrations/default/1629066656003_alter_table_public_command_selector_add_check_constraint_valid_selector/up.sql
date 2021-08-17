alter table "public"."command_selector" add constraint "valid_selector" check (target ~ '^[A-Za-z0-9_](\.[A-Za-z0-9_])*$');
