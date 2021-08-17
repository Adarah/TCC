alter table "public"."command" drop constraint "recurring_event_must_have_recurrence_pattern";
alter table "public"."command" add constraint "recurring_event_must_have_recurrence_pattern_and_no_scheduled_time" check (is_recurring AND recurrence_pattern IS NOT NULL AND scheduled_time IS NULL);
