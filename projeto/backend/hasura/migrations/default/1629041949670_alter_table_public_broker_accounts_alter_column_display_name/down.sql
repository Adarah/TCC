alter table "public"."broker_accounts" rename column "username" to "display_name";
alter table "public"."broker_accounts" drop constraint "broker_accounts_display_name_key";
