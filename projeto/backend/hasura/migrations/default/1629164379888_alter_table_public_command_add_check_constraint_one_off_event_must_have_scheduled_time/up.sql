alter table "public"."command" add constraint "one_off_event_must_have_scheduled_time" check (NOT is_recurring AND scheduled_time IS NOT NULL);
