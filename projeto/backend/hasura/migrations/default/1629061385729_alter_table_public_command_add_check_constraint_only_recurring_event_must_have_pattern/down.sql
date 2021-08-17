alter table "public"."command" drop constraint "only_recurring_event_must_have_pattern";
alter table "public"."command" add constraint "recurring_event_must_have_pattern" check (CHECK (NOT is_recurring AND recurrence_pattern IS NULL OR is_recurring AND recurrence_pattern IS NOT NULL));
