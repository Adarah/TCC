alter table "public"."command" add constraint "one_off_event_must_not_have_recurrence_pattern" check (NOT is_recurring AND recurrence_pattern IS NULL);
