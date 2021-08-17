alter table "public"."command" add constraint "only_one_off_event_should_have_scheduled_time" check (true);
