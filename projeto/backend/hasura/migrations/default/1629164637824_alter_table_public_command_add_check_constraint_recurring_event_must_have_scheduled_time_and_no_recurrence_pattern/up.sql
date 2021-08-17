alter table "public"."command" drop constraint "one_off_event_must_not_have_recurrence_pattern";
alter table "public"."command" add constraint "recurring_event_must_have_scheduled_time_and_no_recurrence_pattern" check (NOT is_recurring AND recurrence_pattern IS NULL AND scheduled_time IS NOT NULL);
