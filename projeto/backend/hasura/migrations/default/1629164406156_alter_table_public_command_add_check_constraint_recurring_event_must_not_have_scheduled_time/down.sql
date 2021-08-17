alter table "public"."command" drop constraint "recurring_event_must_not_have_scheduled_time";
alter table "public"."command" add constraint "only_one_off_event_should_have_scheduled_time" check (CHECK (NOT is_recurring AND scheduled_time IS NOT NULL OR is_recurring AND scheduled_time IS NULL));
