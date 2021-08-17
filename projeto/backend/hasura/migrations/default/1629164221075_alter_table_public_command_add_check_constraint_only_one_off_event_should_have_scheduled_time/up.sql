alter table "public"."command" add constraint "only_one_off_event_should_have_scheduled_time" check (NOT is_recurring AND scheduled_time IS NOT NULL OR is_recurring AND scheduled_time IS NULL);
