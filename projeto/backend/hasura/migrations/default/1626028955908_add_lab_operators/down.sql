
alter table "public"."lab_operator" drop constraint "lab_operator_operator_id_lab_id_key";

ALTER TABLE "public"."smart_plug" DROP COLUMN "deleted_at";

ALTER TABLE "public"."lab_station" DROP COLUMN "deleted_at";

ALTER TABLE "public"."lab" DROP COLUMN "deleted_at";

DROP TABLE "public"."lab_operator";

UPDATE role
SET title = 'viewer'
WHERE title = 'anonymous';

UPDATE role
SET title = 'operator',
    comment = 'An employee of the university that works in the lab.'
WHERE title = 'lab_operator';

alter table "public"."role" rename to "user_role";
