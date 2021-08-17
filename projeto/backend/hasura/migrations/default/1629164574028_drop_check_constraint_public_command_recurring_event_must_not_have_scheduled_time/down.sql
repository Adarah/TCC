alter table "public"."command" add constraint "recurring_event_must_not_have_scheduled_time" check (CHECK (is_recurring AND scheduled_time IS NULL));
