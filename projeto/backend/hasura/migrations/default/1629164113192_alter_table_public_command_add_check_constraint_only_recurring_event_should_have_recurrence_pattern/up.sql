alter table "public"."command" drop constraint "only_recurring_event_must_have_pattern";
alter table "public"."command" add constraint "only_recurring_event_should_have_recurrence_pattern" check (NOT is_recurring AND recurrence_pattern IS NULL OR is_recurring AND recurrence_pattern IS NOT NULL);
