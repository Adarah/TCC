alter table "public"."student_group_metrics"
  add constraint "student_group_metrics_broker_login_fkey"
  foreign key ("broker_login")
  references "public"."student_group"
  ("broker_login") on update cascade on delete no action;
