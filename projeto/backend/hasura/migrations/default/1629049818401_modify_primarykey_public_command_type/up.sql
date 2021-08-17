BEGIN TRANSACTION;
ALTER TABLE "public"."command_type" DROP CONSTRAINT "command_type_pkey";

ALTER TABLE "public"."command_type"
    ADD CONSTRAINT "command_type_pkey" PRIMARY KEY ("type");
COMMIT TRANSACTION;
