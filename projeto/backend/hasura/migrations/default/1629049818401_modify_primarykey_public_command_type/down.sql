alter table "public"."command_type" drop constraint "command_type_pkey";
alter table "public"."command_type"
    add constraint "command_type_pkey"
    primary key ("id");
