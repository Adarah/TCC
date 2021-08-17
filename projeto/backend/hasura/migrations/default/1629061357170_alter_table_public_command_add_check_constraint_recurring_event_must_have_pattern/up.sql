alter table "public"."command" add constraint "recurring_event_must_have_pattern" check ((NOT is_recurring AND recurrence_pattern IS NULL) OR (is_recurring AND recurrence_pattern IS NOT NULL));
