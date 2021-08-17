alter table "public"."command" drop constraint "recurring_event_must_have_recurrence_pattern_and_no_scheduled_t";
alter table "public"."command" add constraint "recurrence_pattern_or_scheduled_time_violation" check ((is_recurring AND recurrence_pattern IS NOT NULL AND scheduled_time IS NULL) OR (NOT is_recurring AND recurrence_pattern IS NULL AND scheduled_time IS NOT NULL));
