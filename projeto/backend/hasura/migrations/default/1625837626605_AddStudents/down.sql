
alter table "public"."user" rename column "role_title" to "role_id";

alter table "public"."user_role" rename column "title" to "value";

alter table "public"."user" drop constraint "user_role_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "role_id" text
 not null;

alter table "public"."student_group" rename column "student_id" to "students";

alter table "public"."student_group" rename column "lab_id" to "lab";

comment on column "public"."student_group"."created_at" is E'Students are always grouped in groups of one or more students for each lab. Each group is usually assigned a lab_station.';
alter table "public"."student_group" alter column "created_at" set default now();
alter table "public"."student_group" alter column "created_at" drop not null;
alter table "public"."student_group" add column "created_at" timestamptz;

comment on column "public"."student_group"."updated_at" is E'Students are always grouped in groups of one or more students for each lab. Each group is usually assigned a lab_station.';
alter table "public"."student_group" alter column "updated_at" set default now();
alter table "public"."student_group" alter column "updated_at" drop not null;
alter table "public"."student_group" add column "updated_at" timestamptz;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."student_group" add column "group_name" text
 not null;

comment on TABLE "public"."student_group" is E'NULL';

comment on TABLE "public"."student_group" is E'NULL';

DROP TABLE "public"."student_group";

comment on TABLE "public"."user" is E'NULL';

comment on TABLE "public"."user" is E'NULL';

comment on TABLE "public"."user" is E'NULL';

comment on column "public"."user"."id" is NULL;

alter table "public"."user" alter column "id" set default nextval('lab_users_id_seq'::regclass);
ALTER TABLE "public"."user" ALTER COLUMN "id" TYPE integer;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "deleted_at" timestamptz
 null;

alter table "public"."user" rename to "users";

alter table "public"."user_role" rename to "user_roles";

alter table "public"."users" rename to "lab_users";

comment on TABLE "public"."smart_plug" is E'NULL';

comment on TABLE "public"."smart_plug" is E'NULL';

comment on TABLE "public"."smart_plug" is E'NULL';

DELETE FROM "public"."user_roles" WHERE "value" = 'viewer';

DELETE FROM "public"."user_roles" WHERE "value" = 'operator';

DELETE FROM "public"."user_roles" WHERE "value" = 'student';

DROP TABLE "public"."user_roles";

comment on TABLE "public"."lab_users" is E'NULL';

DROP TABLE "public"."lab_users";
