alter table "public"."broker_accounts" add constraint "broker_accounts_display_name_key" unique ("display_name");
alter table "public"."broker_accounts" rename column "display_name" to "username";
