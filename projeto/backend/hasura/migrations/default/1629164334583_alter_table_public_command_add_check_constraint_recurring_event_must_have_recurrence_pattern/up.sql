alter table "public"."command" drop constraint "only_recurring_event_should_have_recurrence_pattern";
alter table "public"."command" add constraint "recurring_event_must_have_recurrence_pattern" check (is_recurring AND recurrence_pattern IS NOT NULL);
