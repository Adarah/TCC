alter table "public"."command" drop constraint "recurrence_pattern_or_scheduled_time_violation";
alter table "public"."command" add constraint "recurring_event_must_have_recurrence_pattern_and_no_scheduled_t" check (CHECK (is_recurring AND recurrence_pattern IS NOT NULL AND scheduled_time IS NULL));
