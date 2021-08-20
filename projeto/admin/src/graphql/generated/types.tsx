import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  lquery: any;
  ltree: any;
  ltxtquery: any;
  timestamptz: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export enum CreateCommandCommandTypeEnum {
  Sleep = 'sleep',
  WakeUp = 'wake_up'
}

export type CreateCommandOutput = {
  __typename?: 'CreateCommandOutput';
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "command" */
export type Command = {
  __typename?: 'command';
  /** An array relationship */
  command_selectors: Array<Command_Selector>;
  /** An aggregate relationship */
  command_selectors_aggregate: Command_Selector_Aggregate;
  /** An object relationship */
  command_type: Command_Type;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_recurring: Scalars['Boolean'];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars['Int'];
  name: Scalars['String'];
  recurrence_pattern?: Maybe<Scalars['String']>;
  scheduled_time?: Maybe<Scalars['timestamptz']>;
  type: Command_Type_Enum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "command" */
export type CommandCommand_SelectorsArgs = {
  distinct_on?: Maybe<Array<Command_Selector_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Selector_Order_By>>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};


/** columns and relationships of "command" */
export type CommandCommand_Selectors_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Selector_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Selector_Order_By>>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};

/** aggregated selection of "command" */
export type Command_Aggregate = {
  __typename?: 'command_aggregate';
  aggregate?: Maybe<Command_Aggregate_Fields>;
  nodes: Array<Command>;
};

/** aggregate fields of "command" */
export type Command_Aggregate_Fields = {
  __typename?: 'command_aggregate_fields';
  avg?: Maybe<Command_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Command_Max_Fields>;
  min?: Maybe<Command_Min_Fields>;
  stddev?: Maybe<Command_Stddev_Fields>;
  stddev_pop?: Maybe<Command_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Command_Stddev_Samp_Fields>;
  sum?: Maybe<Command_Sum_Fields>;
  var_pop?: Maybe<Command_Var_Pop_Fields>;
  var_samp?: Maybe<Command_Var_Samp_Fields>;
  variance?: Maybe<Command_Variance_Fields>;
};


/** aggregate fields of "command" */
export type Command_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Command_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Command_Avg_Fields = {
  __typename?: 'command_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "command". All fields are combined with a logical 'AND'. */
export type Command_Bool_Exp = {
  _and?: Maybe<Array<Command_Bool_Exp>>;
  _not?: Maybe<Command_Bool_Exp>;
  _or?: Maybe<Array<Command_Bool_Exp>>;
  command_selectors?: Maybe<Command_Selector_Bool_Exp>;
  command_type?: Maybe<Command_Type_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_recurring?: Maybe<Boolean_Comparison_Exp>;
  lab?: Maybe<Lab_Bool_Exp>;
  lab_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  recurrence_pattern?: Maybe<String_Comparison_Exp>;
  scheduled_time?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<Command_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "command" */
export enum Command_Constraint {
  /** unique or primary key constraint */
  CommandLabIdNameKey = 'command_lab_id_name_key',
  /** unique or primary key constraint */
  CommandPkey = 'command_pkey'
}

/** input type for inserting data into table "command" */
export type Command_Insert_Input = {
  command_selectors?: Maybe<Command_Selector_Arr_Rel_Insert_Input>;
  is_recurring?: Maybe<Scalars['Boolean']>;
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  recurrence_pattern?: Maybe<Scalars['String']>;
  scheduled_time?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Command_Type_Enum>;
};

/** aggregate max on columns */
export type Command_Max_Fields = {
  __typename?: 'command_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  recurrence_pattern?: Maybe<Scalars['String']>;
  scheduled_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Command_Min_Fields = {
  __typename?: 'command_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  recurrence_pattern?: Maybe<Scalars['String']>;
  scheduled_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "command" */
export type Command_Mutation_Response = {
  __typename?: 'command_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Command>;
};

/** input type for inserting object relation for remote table "command" */
export type Command_Obj_Rel_Insert_Input = {
  data: Command_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Command_On_Conflict>;
};

/** on conflict condition type for table "command" */
export type Command_On_Conflict = {
  constraint: Command_Constraint;
  update_columns?: Array<Command_Update_Column>;
  where?: Maybe<Command_Bool_Exp>;
};

/** Ordering options when selecting data from "command". */
export type Command_Order_By = {
  command_selectors_aggregate?: Maybe<Command_Selector_Aggregate_Order_By>;
  command_type?: Maybe<Command_Type_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_recurring?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  recurrence_pattern?: Maybe<Order_By>;
  scheduled_time?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: command */
export type Command_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "command" */
export enum Command_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRecurring = 'is_recurring',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  Name = 'name',
  /** column name */
  RecurrencePattern = 'recurrence_pattern',
  /** column name */
  ScheduledTime = 'scheduled_time',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "command_selector" */
export type Command_Selector = {
  __typename?: 'command_selector';
  /** An object relationship */
  command: Command;
  command_id: Scalars['Int'];
  id: Scalars['Int'];
  selector: Scalars['String'];
};

/** aggregated selection of "command_selector" */
export type Command_Selector_Aggregate = {
  __typename?: 'command_selector_aggregate';
  aggregate?: Maybe<Command_Selector_Aggregate_Fields>;
  nodes: Array<Command_Selector>;
};

/** aggregate fields of "command_selector" */
export type Command_Selector_Aggregate_Fields = {
  __typename?: 'command_selector_aggregate_fields';
  avg?: Maybe<Command_Selector_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Command_Selector_Max_Fields>;
  min?: Maybe<Command_Selector_Min_Fields>;
  stddev?: Maybe<Command_Selector_Stddev_Fields>;
  stddev_pop?: Maybe<Command_Selector_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Command_Selector_Stddev_Samp_Fields>;
  sum?: Maybe<Command_Selector_Sum_Fields>;
  var_pop?: Maybe<Command_Selector_Var_Pop_Fields>;
  var_samp?: Maybe<Command_Selector_Var_Samp_Fields>;
  variance?: Maybe<Command_Selector_Variance_Fields>;
};


/** aggregate fields of "command_selector" */
export type Command_Selector_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Command_Selector_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "command_selector" */
export type Command_Selector_Aggregate_Order_By = {
  avg?: Maybe<Command_Selector_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Command_Selector_Max_Order_By>;
  min?: Maybe<Command_Selector_Min_Order_By>;
  stddev?: Maybe<Command_Selector_Stddev_Order_By>;
  stddev_pop?: Maybe<Command_Selector_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Command_Selector_Stddev_Samp_Order_By>;
  sum?: Maybe<Command_Selector_Sum_Order_By>;
  var_pop?: Maybe<Command_Selector_Var_Pop_Order_By>;
  var_samp?: Maybe<Command_Selector_Var_Samp_Order_By>;
  variance?: Maybe<Command_Selector_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "command_selector" */
export type Command_Selector_Arr_Rel_Insert_Input = {
  data: Array<Command_Selector_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Command_Selector_On_Conflict>;
};

/** aggregate avg on columns */
export type Command_Selector_Avg_Fields = {
  __typename?: 'command_selector_avg_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "command_selector" */
export type Command_Selector_Avg_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "command_selector". All fields are combined with a logical 'AND'. */
export type Command_Selector_Bool_Exp = {
  _and?: Maybe<Array<Command_Selector_Bool_Exp>>;
  _not?: Maybe<Command_Selector_Bool_Exp>;
  _or?: Maybe<Array<Command_Selector_Bool_Exp>>;
  command?: Maybe<Command_Bool_Exp>;
  command_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  selector?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "command_selector" */
export enum Command_Selector_Constraint {
  /** unique or primary key constraint */
  CommandSelectorCommandIdTargetKey = 'command_selector_command_id_target_key',
  /** unique or primary key constraint */
  CommandSelectorPkey = 'command_selector_pkey'
}

/** input type for inserting data into table "command_selector" */
export type Command_Selector_Insert_Input = {
  command?: Maybe<Command_Obj_Rel_Insert_Input>;
  command_id?: Maybe<Scalars['Int']>;
  selector?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Command_Selector_Max_Fields = {
  __typename?: 'command_selector_max_fields';
  command_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selector?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "command_selector" */
export type Command_Selector_Max_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selector?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Command_Selector_Min_Fields = {
  __typename?: 'command_selector_min_fields';
  command_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selector?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "command_selector" */
export type Command_Selector_Min_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selector?: Maybe<Order_By>;
};

/** response of any mutation on the table "command_selector" */
export type Command_Selector_Mutation_Response = {
  __typename?: 'command_selector_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Command_Selector>;
};

/** on conflict condition type for table "command_selector" */
export type Command_Selector_On_Conflict = {
  constraint: Command_Selector_Constraint;
  update_columns?: Array<Command_Selector_Update_Column>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};

/** Ordering options when selecting data from "command_selector". */
export type Command_Selector_Order_By = {
  command?: Maybe<Command_Order_By>;
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selector?: Maybe<Order_By>;
};

/** primary key columns input for table: command_selector */
export type Command_Selector_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "command_selector" */
export enum Command_Selector_Select_Column {
  /** column name */
  CommandId = 'command_id',
  /** column name */
  Id = 'id',
  /** column name */
  Selector = 'selector'
}

/** input type for updating data in table "command_selector" */
export type Command_Selector_Set_Input = {
  selector?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Command_Selector_Stddev_Fields = {
  __typename?: 'command_selector_stddev_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "command_selector" */
export type Command_Selector_Stddev_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Command_Selector_Stddev_Pop_Fields = {
  __typename?: 'command_selector_stddev_pop_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "command_selector" */
export type Command_Selector_Stddev_Pop_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Command_Selector_Stddev_Samp_Fields = {
  __typename?: 'command_selector_stddev_samp_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "command_selector" */
export type Command_Selector_Stddev_Samp_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Command_Selector_Sum_Fields = {
  __typename?: 'command_selector_sum_fields';
  command_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "command_selector" */
export type Command_Selector_Sum_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "command_selector" */
export enum Command_Selector_Update_Column {
  /** column name */
  Selector = 'selector'
}

/** aggregate var_pop on columns */
export type Command_Selector_Var_Pop_Fields = {
  __typename?: 'command_selector_var_pop_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "command_selector" */
export type Command_Selector_Var_Pop_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Command_Selector_Var_Samp_Fields = {
  __typename?: 'command_selector_var_samp_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "command_selector" */
export type Command_Selector_Var_Samp_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Command_Selector_Variance_Fields = {
  __typename?: 'command_selector_variance_fields';
  command_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "command_selector" */
export type Command_Selector_Variance_Order_By = {
  command_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** input type for updating data in table "command" */
export type Command_Set_Input = {
  is_recurring?: Maybe<Scalars['Boolean']>;
  recurrence_pattern?: Maybe<Scalars['String']>;
  type?: Maybe<Command_Type_Enum>;
};

/** aggregate stddev on columns */
export type Command_Stddev_Fields = {
  __typename?: 'command_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Command_Stddev_Pop_Fields = {
  __typename?: 'command_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Command_Stddev_Samp_Fields = {
  __typename?: 'command_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Command_Sum_Fields = {
  __typename?: 'command_sum_fields';
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "command_type" */
export type Command_Type = {
  __typename?: 'command_type';
  comment?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** aggregated selection of "command_type" */
export type Command_Type_Aggregate = {
  __typename?: 'command_type_aggregate';
  aggregate?: Maybe<Command_Type_Aggregate_Fields>;
  nodes: Array<Command_Type>;
};

/** aggregate fields of "command_type" */
export type Command_Type_Aggregate_Fields = {
  __typename?: 'command_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Command_Type_Max_Fields>;
  min?: Maybe<Command_Type_Min_Fields>;
};


/** aggregate fields of "command_type" */
export type Command_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Command_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "command_type". All fields are combined with a logical 'AND'. */
export type Command_Type_Bool_Exp = {
  _and?: Maybe<Array<Command_Type_Bool_Exp>>;
  _not?: Maybe<Command_Type_Bool_Exp>;
  _or?: Maybe<Array<Command_Type_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
};

export enum Command_Type_Enum {
  Sleep = 'sleep',
  WakeUp = 'wake_up'
}

/** Boolean expression to compare columns of type "command_type_enum". All fields are combined with logical 'AND'. */
export type Command_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Command_Type_Enum>;
  _in?: Maybe<Array<Command_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Command_Type_Enum>;
  _nin?: Maybe<Array<Command_Type_Enum>>;
};

/** aggregate max on columns */
export type Command_Type_Max_Fields = {
  __typename?: 'command_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Command_Type_Min_Fields = {
  __typename?: 'command_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "command_type". */
export type Command_Type_Order_By = {
  comment?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "command_type" */
export enum Command_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id'
}

/** update columns of table "command" */
export enum Command_Update_Column {
  /** column name */
  IsRecurring = 'is_recurring',
  /** column name */
  RecurrencePattern = 'recurrence_pattern',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Command_Var_Pop_Fields = {
  __typename?: 'command_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Command_Var_Samp_Fields = {
  __typename?: 'command_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Command_Variance_Fields = {
  __typename?: 'command_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "lab" */
export type Lab = {
  __typename?: 'lab';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  lab_stations: Array<Lab_Station>;
  /** An aggregate relationship */
  lab_stations_aggregate: Lab_Station_Aggregate;
  /** An array relationship */
  lab_user_roles: Array<Lab_User_Role>;
  /** An aggregate relationship */
  lab_user_roles_aggregate: Lab_User_Role_Aggregate;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  student_groups: Array<Student_Group>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "lab" */
export type LabLab_StationsArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


/** columns and relationships of "lab" */
export type LabLab_Stations_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


/** columns and relationships of "lab" */
export type LabLab_User_RolesArgs = {
  distinct_on?: Maybe<Array<Lab_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_User_Role_Order_By>>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};


/** columns and relationships of "lab" */
export type LabLab_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_User_Role_Order_By>>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};


/** columns and relationships of "lab" */
export type LabStudent_GroupsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/** aggregated selection of "lab" */
export type Lab_Aggregate = {
  __typename?: 'lab_aggregate';
  aggregate?: Maybe<Lab_Aggregate_Fields>;
  nodes: Array<Lab>;
};

/** aggregate fields of "lab" */
export type Lab_Aggregate_Fields = {
  __typename?: 'lab_aggregate_fields';
  avg?: Maybe<Lab_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Lab_Max_Fields>;
  min?: Maybe<Lab_Min_Fields>;
  stddev?: Maybe<Lab_Stddev_Fields>;
  stddev_pop?: Maybe<Lab_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lab_Stddev_Samp_Fields>;
  sum?: Maybe<Lab_Sum_Fields>;
  var_pop?: Maybe<Lab_Var_Pop_Fields>;
  var_samp?: Maybe<Lab_Var_Samp_Fields>;
  variance?: Maybe<Lab_Variance_Fields>;
};


/** aggregate fields of "lab" */
export type Lab_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lab_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Lab_Avg_Fields = {
  __typename?: 'lab_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "lab". All fields are combined with a logical 'AND'. */
export type Lab_Bool_Exp = {
  _and?: Maybe<Array<Lab_Bool_Exp>>;
  _not?: Maybe<Lab_Bool_Exp>;
  _or?: Maybe<Array<Lab_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab_stations?: Maybe<Lab_Station_Bool_Exp>;
  lab_user_roles?: Maybe<Lab_User_Role_Bool_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  student_groups?: Maybe<Student_Group_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lab" */
export enum Lab_Constraint {
  /** unique or primary key constraint */
  LaboratoryPkey = 'laboratory_pkey'
}

/** input type for inserting data into table "lab" */
export type Lab_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  lab_stations?: Maybe<Lab_Station_Arr_Rel_Insert_Input>;
  lab_user_roles?: Maybe<Lab_User_Role_Arr_Rel_Insert_Input>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  student_groups?: Maybe<Student_Group_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Lab_Max_Fields = {
  __typename?: 'lab_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Lab_Min_Fields = {
  __typename?: 'lab_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "lab" */
export type Lab_Mutation_Response = {
  __typename?: 'lab_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab>;
};

/** input type for inserting object relation for remote table "lab" */
export type Lab_Obj_Rel_Insert_Input = {
  data: Lab_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Lab_On_Conflict>;
};

/** on conflict condition type for table "lab" */
export type Lab_On_Conflict = {
  constraint: Lab_Constraint;
  update_columns?: Array<Lab_Update_Column>;
  where?: Maybe<Lab_Bool_Exp>;
};

/** Ordering options when selecting data from "lab". */
export type Lab_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_stations_aggregate?: Maybe<Lab_Station_Aggregate_Order_By>;
  lab_user_roles_aggregate?: Maybe<Lab_User_Role_Aggregate_Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  student_groups_aggregate?: Maybe<Student_Group_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lab */
export type Lab_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "lab" */
export enum Lab_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lab" */
export type Lab_Set_Input = {
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "lab_station" */
export type Lab_Station = {
  __typename?: 'lab_station';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  smart_plugs: Array<Smart_Plug>;
  /** An aggregate relationship */
  smart_plugs_aggregate: Smart_Plug_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "lab_station" */
export type Lab_StationSmart_PlugsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};


/** columns and relationships of "lab_station" */
export type Lab_StationSmart_Plugs_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

/** aggregated selection of "lab_station" */
export type Lab_Station_Aggregate = {
  __typename?: 'lab_station_aggregate';
  aggregate?: Maybe<Lab_Station_Aggregate_Fields>;
  nodes: Array<Lab_Station>;
};

/** aggregate fields of "lab_station" */
export type Lab_Station_Aggregate_Fields = {
  __typename?: 'lab_station_aggregate_fields';
  avg?: Maybe<Lab_Station_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Lab_Station_Max_Fields>;
  min?: Maybe<Lab_Station_Min_Fields>;
  stddev?: Maybe<Lab_Station_Stddev_Fields>;
  stddev_pop?: Maybe<Lab_Station_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lab_Station_Stddev_Samp_Fields>;
  sum?: Maybe<Lab_Station_Sum_Fields>;
  var_pop?: Maybe<Lab_Station_Var_Pop_Fields>;
  var_samp?: Maybe<Lab_Station_Var_Samp_Fields>;
  variance?: Maybe<Lab_Station_Variance_Fields>;
};


/** aggregate fields of "lab_station" */
export type Lab_Station_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lab_Station_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lab_station" */
export type Lab_Station_Aggregate_Order_By = {
  avg?: Maybe<Lab_Station_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lab_Station_Max_Order_By>;
  min?: Maybe<Lab_Station_Min_Order_By>;
  stddev?: Maybe<Lab_Station_Stddev_Order_By>;
  stddev_pop?: Maybe<Lab_Station_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lab_Station_Stddev_Samp_Order_By>;
  sum?: Maybe<Lab_Station_Sum_Order_By>;
  var_pop?: Maybe<Lab_Station_Var_Pop_Order_By>;
  var_samp?: Maybe<Lab_Station_Var_Samp_Order_By>;
  variance?: Maybe<Lab_Station_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lab_station" */
export type Lab_Station_Arr_Rel_Insert_Input = {
  data: Array<Lab_Station_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Lab_Station_On_Conflict>;
};

/** aggregate avg on columns */
export type Lab_Station_Avg_Fields = {
  __typename?: 'lab_station_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "lab_station" */
export type Lab_Station_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lab_station". All fields are combined with a logical 'AND'. */
export type Lab_Station_Bool_Exp = {
  _and?: Maybe<Array<Lab_Station_Bool_Exp>>;
  _not?: Maybe<Lab_Station_Bool_Exp>;
  _or?: Maybe<Array<Lab_Station_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab?: Maybe<Lab_Bool_Exp>;
  lab_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  smart_plugs?: Maybe<Smart_Plug_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lab_station" */
export enum Lab_Station_Constraint {
  /** unique or primary key constraint */
  WorkbenchPkey = 'workbench_pkey'
}

/** input type for inserting data into table "lab_station" */
export type Lab_Station_Insert_Input = {
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  smart_plugs?: Maybe<Smart_Plug_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Lab_Station_Max_Fields = {
  __typename?: 'lab_station_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "lab_station" */
export type Lab_Station_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lab_Station_Min_Fields = {
  __typename?: 'lab_station_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "lab_station" */
export type Lab_Station_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lab_station" */
export type Lab_Station_Mutation_Response = {
  __typename?: 'lab_station_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab_Station>;
};

/** input type for inserting object relation for remote table "lab_station" */
export type Lab_Station_Obj_Rel_Insert_Input = {
  data: Lab_Station_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Lab_Station_On_Conflict>;
};

/** on conflict condition type for table "lab_station" */
export type Lab_Station_On_Conflict = {
  constraint: Lab_Station_Constraint;
  update_columns?: Array<Lab_Station_Update_Column>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

/** Ordering options when selecting data from "lab_station". */
export type Lab_Station_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  smart_plugs_aggregate?: Maybe<Smart_Plug_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lab_station */
export type Lab_Station_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "lab_station" */
export enum Lab_Station_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lab_station" */
export type Lab_Station_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Lab_Station_Stddev_Fields = {
  __typename?: 'lab_station_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "lab_station" */
export type Lab_Station_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lab_Station_Stddev_Pop_Fields = {
  __typename?: 'lab_station_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "lab_station" */
export type Lab_Station_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lab_Station_Stddev_Samp_Fields = {
  __typename?: 'lab_station_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "lab_station" */
export type Lab_Station_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lab_Station_Sum_Fields = {
  __typename?: 'lab_station_sum_fields';
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "lab_station" */
export type Lab_Station_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** update columns of table "lab_station" */
export enum Lab_Station_Update_Column {
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Lab_Station_Var_Pop_Fields = {
  __typename?: 'lab_station_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "lab_station" */
export type Lab_Station_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lab_Station_Var_Samp_Fields = {
  __typename?: 'lab_station_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "lab_station" */
export type Lab_Station_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lab_Station_Variance_Fields = {
  __typename?: 'lab_station_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "lab_station" */
export type Lab_Station_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev on columns */
export type Lab_Stddev_Fields = {
  __typename?: 'lab_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Lab_Stddev_Pop_Fields = {
  __typename?: 'lab_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Lab_Stddev_Samp_Fields = {
  __typename?: 'lab_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Lab_Sum_Fields = {
  __typename?: 'lab_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "lab" */
export enum Lab_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "lab_user_role" */
export type Lab_User_Role = {
  __typename?: 'lab_user_role';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars['Int'];
  /** An object relationship */
  role: Role;
  role_id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** aggregated selection of "lab_user_role" */
export type Lab_User_Role_Aggregate = {
  __typename?: 'lab_user_role_aggregate';
  aggregate?: Maybe<Lab_User_Role_Aggregate_Fields>;
  nodes: Array<Lab_User_Role>;
};

/** aggregate fields of "lab_user_role" */
export type Lab_User_Role_Aggregate_Fields = {
  __typename?: 'lab_user_role_aggregate_fields';
  avg?: Maybe<Lab_User_Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Lab_User_Role_Max_Fields>;
  min?: Maybe<Lab_User_Role_Min_Fields>;
  stddev?: Maybe<Lab_User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<Lab_User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lab_User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<Lab_User_Role_Sum_Fields>;
  var_pop?: Maybe<Lab_User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<Lab_User_Role_Var_Samp_Fields>;
  variance?: Maybe<Lab_User_Role_Variance_Fields>;
};


/** aggregate fields of "lab_user_role" */
export type Lab_User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lab_User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lab_user_role" */
export type Lab_User_Role_Aggregate_Order_By = {
  avg?: Maybe<Lab_User_Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lab_User_Role_Max_Order_By>;
  min?: Maybe<Lab_User_Role_Min_Order_By>;
  stddev?: Maybe<Lab_User_Role_Stddev_Order_By>;
  stddev_pop?: Maybe<Lab_User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lab_User_Role_Stddev_Samp_Order_By>;
  sum?: Maybe<Lab_User_Role_Sum_Order_By>;
  var_pop?: Maybe<Lab_User_Role_Var_Pop_Order_By>;
  var_samp?: Maybe<Lab_User_Role_Var_Samp_Order_By>;
  variance?: Maybe<Lab_User_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lab_user_role" */
export type Lab_User_Role_Arr_Rel_Insert_Input = {
  data: Array<Lab_User_Role_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Lab_User_Role_On_Conflict>;
};

/** aggregate avg on columns */
export type Lab_User_Role_Avg_Fields = {
  __typename?: 'lab_user_role_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "lab_user_role" */
export type Lab_User_Role_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lab_user_role". All fields are combined with a logical 'AND'. */
export type Lab_User_Role_Bool_Exp = {
  _and?: Maybe<Array<Lab_User_Role_Bool_Exp>>;
  _not?: Maybe<Lab_User_Role_Bool_Exp>;
  _or?: Maybe<Array<Lab_User_Role_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab?: Maybe<Lab_Bool_Exp>;
  lab_id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Role_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "lab_user_role" */
export enum Lab_User_Role_Constraint {
  /** unique or primary key constraint */
  LabUserRoleLabIdUserIdKey = 'lab_user_role_lab_id_user_id_key',
  /** unique or primary key constraint */
  LabUserRolePkey = 'lab_user_role_pkey'
}

/** input type for incrementing numeric columns in table "lab_user_role" */
export type Lab_User_Role_Inc_Input = {
  role_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "lab_user_role" */
export type Lab_User_Role_Insert_Input = {
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Lab_User_Role_Max_Fields = {
  __typename?: 'lab_user_role_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "lab_user_role" */
export type Lab_User_Role_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lab_User_Role_Min_Fields = {
  __typename?: 'lab_user_role_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "lab_user_role" */
export type Lab_User_Role_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "lab_user_role" */
export type Lab_User_Role_Mutation_Response = {
  __typename?: 'lab_user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab_User_Role>;
};

/** on conflict condition type for table "lab_user_role" */
export type Lab_User_Role_On_Conflict = {
  constraint: Lab_User_Role_Constraint;
  update_columns?: Array<Lab_User_Role_Update_Column>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "lab_user_role". */
export type Lab_User_Role_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  role?: Maybe<Role_Order_By>;
  role_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: lab_user_role */
export type Lab_User_Role_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "lab_user_role" */
export enum Lab_User_Role_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "lab_user_role" */
export type Lab_User_Role_Set_Input = {
  role_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Lab_User_Role_Stddev_Fields = {
  __typename?: 'lab_user_role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "lab_user_role" */
export type Lab_User_Role_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lab_User_Role_Stddev_Pop_Fields = {
  __typename?: 'lab_user_role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "lab_user_role" */
export type Lab_User_Role_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lab_User_Role_Stddev_Samp_Fields = {
  __typename?: 'lab_user_role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "lab_user_role" */
export type Lab_User_Role_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lab_User_Role_Sum_Fields = {
  __typename?: 'lab_user_role_sum_fields';
  id?: Maybe<Scalars['Int']>;
  lab_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "lab_user_role" */
export type Lab_User_Role_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** update columns of table "lab_user_role" */
export enum Lab_User_Role_Update_Column {
  /** column name */
  RoleId = 'role_id'
}

/** aggregate var_pop on columns */
export type Lab_User_Role_Var_Pop_Fields = {
  __typename?: 'lab_user_role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "lab_user_role" */
export type Lab_User_Role_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lab_User_Role_Var_Samp_Fields = {
  __typename?: 'lab_user_role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "lab_user_role" */
export type Lab_User_Role_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lab_User_Role_Variance_Fields = {
  __typename?: 'lab_user_role_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lab_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "lab_user_role" */
export type Lab_User_Role_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Lab_Var_Pop_Fields = {
  __typename?: 'lab_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Lab_Var_Samp_Fields = {
  __typename?: 'lab_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Lab_Variance_Fields = {
  __typename?: 'lab_variance_fields';
  id?: Maybe<Scalars['Float']>;
};



/** Boolean expression to compare columns of type "ltree". All fields are combined with logical 'AND'. */
export type Ltree_Comparison_Exp = {
  /** is the left argument an ancestor of right (or equal)? */
  _ancestor?: Maybe<Scalars['ltree']>;
  /** does array contain an ancestor of `ltree`? */
  _ancestor_any?: Maybe<Array<Scalars['ltree']>>;
  /** is the left argument a descendant of right (or equal)? */
  _descendant?: Maybe<Scalars['ltree']>;
  /** does array contain a descendant of `ltree`? */
  _descendant_any?: Maybe<Array<Scalars['ltree']>>;
  _eq?: Maybe<Scalars['ltree']>;
  _gt?: Maybe<Scalars['ltree']>;
  _gte?: Maybe<Scalars['ltree']>;
  _in?: Maybe<Array<Scalars['ltree']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['ltree']>;
  _lte?: Maybe<Scalars['ltree']>;
  /** does `ltree` match `lquery`? */
  _matches?: Maybe<Scalars['lquery']>;
  /** does `ltree` match any `lquery` in array? */
  _matches_any?: Maybe<Array<Scalars['String']>>;
  /** does `ltree` match `ltxtquery`? */
  _matches_fulltext?: Maybe<Scalars['ltxtquery']>;
  _neq?: Maybe<Scalars['ltree']>;
  _nin?: Maybe<Array<Scalars['ltree']>>;
};


/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  CreateCommand?: Maybe<CreateCommandOutput>;
  /** delete data from the table: "command" */
  delete_command?: Maybe<Command_Mutation_Response>;
  /** delete single row from the table: "command" */
  delete_command_by_pk?: Maybe<Command>;
  /** delete data from the table: "command_selector" */
  delete_command_selector?: Maybe<Command_Selector_Mutation_Response>;
  /** delete single row from the table: "command_selector" */
  delete_command_selector_by_pk?: Maybe<Command_Selector>;
  /** delete data from the table: "lab" */
  delete_lab?: Maybe<Lab_Mutation_Response>;
  /** delete single row from the table: "lab" */
  delete_lab_by_pk?: Maybe<Lab>;
  /** delete data from the table: "lab_station" */
  delete_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** delete single row from the table: "lab_station" */
  delete_lab_station_by_pk?: Maybe<Lab_Station>;
  /** delete data from the table: "lab_user_role" */
  delete_lab_user_role?: Maybe<Lab_User_Role_Mutation_Response>;
  /** delete single row from the table: "lab_user_role" */
  delete_lab_user_role_by_pk?: Maybe<Lab_User_Role>;
  /** delete data from the table: "smart_plug" */
  delete_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** delete single row from the table: "smart_plug" */
  delete_smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** delete data from the table: "student_group" */
  delete_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** delete single row from the table: "student_group" */
  delete_student_group_by_pk?: Maybe<Student_Group>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "command" */
  insert_command?: Maybe<Command_Mutation_Response>;
  /** insert a single row into the table: "command" */
  insert_command_one?: Maybe<Command>;
  /** insert data into the table: "command_selector" */
  insert_command_selector?: Maybe<Command_Selector_Mutation_Response>;
  /** insert a single row into the table: "command_selector" */
  insert_command_selector_one?: Maybe<Command_Selector>;
  /** insert data into the table: "lab" */
  insert_lab?: Maybe<Lab_Mutation_Response>;
  /** insert a single row into the table: "lab" */
  insert_lab_one?: Maybe<Lab>;
  /** insert data into the table: "lab_station" */
  insert_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** insert a single row into the table: "lab_station" */
  insert_lab_station_one?: Maybe<Lab_Station>;
  /** insert data into the table: "lab_user_role" */
  insert_lab_user_role?: Maybe<Lab_User_Role_Mutation_Response>;
  /** insert a single row into the table: "lab_user_role" */
  insert_lab_user_role_one?: Maybe<Lab_User_Role>;
  /** insert data into the table: "smart_plug" */
  insert_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** insert a single row into the table: "smart_plug" */
  insert_smart_plug_one?: Maybe<Smart_Plug>;
  /** insert data into the table: "smart_plug_tag" */
  insert_smart_plug_tag?: Maybe<Smart_Plug_Tag_Mutation_Response>;
  /** insert a single row into the table: "smart_plug_tag" */
  insert_smart_plug_tag_one?: Maybe<Smart_Plug_Tag>;
  /** insert data into the table: "student_group" */
  insert_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** insert a single row into the table: "student_group" */
  insert_student_group_one?: Maybe<Student_Group>;
  /** update data of the table: "command" */
  update_command?: Maybe<Command_Mutation_Response>;
  /** update single row of the table: "command" */
  update_command_by_pk?: Maybe<Command>;
  /** update data of the table: "command_selector" */
  update_command_selector?: Maybe<Command_Selector_Mutation_Response>;
  /** update single row of the table: "command_selector" */
  update_command_selector_by_pk?: Maybe<Command_Selector>;
  /** update data of the table: "lab" */
  update_lab?: Maybe<Lab_Mutation_Response>;
  /** update single row of the table: "lab" */
  update_lab_by_pk?: Maybe<Lab>;
  /** update data of the table: "lab_station" */
  update_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** update single row of the table: "lab_station" */
  update_lab_station_by_pk?: Maybe<Lab_Station>;
  /** update data of the table: "lab_user_role" */
  update_lab_user_role?: Maybe<Lab_User_Role_Mutation_Response>;
  /** update single row of the table: "lab_user_role" */
  update_lab_user_role_by_pk?: Maybe<Lab_User_Role>;
  /** update data of the table: "smart_plug" */
  update_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** update single row of the table: "smart_plug" */
  update_smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** update data of the table: "student_group" */
  update_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** update single row of the table: "student_group" */
  update_student_group_by_pk?: Maybe<Student_Group>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootCreateCommandArgs = {
  is_recurring: Scalars['Boolean'];
  name: Scalars['String'];
  recurrence_pattern?: Maybe<Scalars['String']>;
  scheduled_time_unix?: Maybe<Scalars['Int']>;
  selectors: Array<Scalars['String']>;
  type: CreateCommandCommandTypeEnum;
};


/** mutation root */
export type Mutation_RootDelete_CommandArgs = {
  where: Command_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Command_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Command_SelectorArgs = {
  where: Command_Selector_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Command_Selector_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LabArgs = {
  where: Lab_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lab_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Lab_StationArgs = {
  where: Lab_Station_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lab_Station_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Lab_User_RoleArgs = {
  where: Lab_User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lab_User_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Smart_PlugArgs = {
  where: Smart_Plug_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smart_Plug_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Student_GroupArgs = {
  where: Student_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Student_Group_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CommandArgs = {
  objects: Array<Command_Insert_Input>;
  on_conflict?: Maybe<Command_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Command_OneArgs = {
  object: Command_Insert_Input;
  on_conflict?: Maybe<Command_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Command_SelectorArgs = {
  objects: Array<Command_Selector_Insert_Input>;
  on_conflict?: Maybe<Command_Selector_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Command_Selector_OneArgs = {
  object: Command_Selector_Insert_Input;
  on_conflict?: Maybe<Command_Selector_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LabArgs = {
  objects: Array<Lab_Insert_Input>;
  on_conflict?: Maybe<Lab_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_OneArgs = {
  object: Lab_Insert_Input;
  on_conflict?: Maybe<Lab_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_StationArgs = {
  objects: Array<Lab_Station_Insert_Input>;
  on_conflict?: Maybe<Lab_Station_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_Station_OneArgs = {
  object: Lab_Station_Insert_Input;
  on_conflict?: Maybe<Lab_Station_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_User_RoleArgs = {
  objects: Array<Lab_User_Role_Insert_Input>;
  on_conflict?: Maybe<Lab_User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_User_Role_OneArgs = {
  object: Lab_User_Role_Insert_Input;
  on_conflict?: Maybe<Lab_User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_PlugArgs = {
  objects: Array<Smart_Plug_Insert_Input>;
  on_conflict?: Maybe<Smart_Plug_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Plug_OneArgs = {
  object: Smart_Plug_Insert_Input;
  on_conflict?: Maybe<Smart_Plug_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Plug_TagArgs = {
  objects: Array<Smart_Plug_Tag_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Smart_Plug_Tag_OneArgs = {
  object: Smart_Plug_Tag_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Student_GroupArgs = {
  objects: Array<Student_Group_Insert_Input>;
  on_conflict?: Maybe<Student_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Student_Group_OneArgs = {
  object: Student_Group_Insert_Input;
  on_conflict?: Maybe<Student_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CommandArgs = {
  _set?: Maybe<Command_Set_Input>;
  where: Command_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Command_By_PkArgs = {
  _set?: Maybe<Command_Set_Input>;
  pk_columns: Command_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Command_SelectorArgs = {
  _set?: Maybe<Command_Selector_Set_Input>;
  where: Command_Selector_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Command_Selector_By_PkArgs = {
  _set?: Maybe<Command_Selector_Set_Input>;
  pk_columns: Command_Selector_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LabArgs = {
  _set?: Maybe<Lab_Set_Input>;
  where: Lab_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_By_PkArgs = {
  _set?: Maybe<Lab_Set_Input>;
  pk_columns: Lab_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_StationArgs = {
  _set?: Maybe<Lab_Station_Set_Input>;
  where: Lab_Station_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_Station_By_PkArgs = {
  _set?: Maybe<Lab_Station_Set_Input>;
  pk_columns: Lab_Station_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_User_RoleArgs = {
  _inc?: Maybe<Lab_User_Role_Inc_Input>;
  _set?: Maybe<Lab_User_Role_Set_Input>;
  where: Lab_User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lab_User_Role_By_PkArgs = {
  _inc?: Maybe<Lab_User_Role_Inc_Input>;
  _set?: Maybe<Lab_User_Role_Set_Input>;
  pk_columns: Lab_User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_PlugArgs = {
  _set?: Maybe<Smart_Plug_Set_Input>;
  where: Smart_Plug_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smart_Plug_By_PkArgs = {
  _set?: Maybe<Smart_Plug_Set_Input>;
  pk_columns: Smart_Plug_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Student_GroupArgs = {
  _set?: Maybe<Student_Group_Set_Input>;
  where: Student_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Student_Group_By_PkArgs = {
  _set?: Maybe<Student_Group_Set_Input>;
  pk_columns: Student_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "command" */
  command: Array<Command>;
  /** fetch aggregated fields from the table: "command" */
  command_aggregate: Command_Aggregate;
  /** fetch data from the table: "command" using primary key columns */
  command_by_pk?: Maybe<Command>;
  /** fetch data from the table: "command_selector" */
  command_selector: Array<Command_Selector>;
  /** fetch aggregated fields from the table: "command_selector" */
  command_selector_aggregate: Command_Selector_Aggregate;
  /** fetch data from the table: "command_selector" using primary key columns */
  command_selector_by_pk?: Maybe<Command_Selector>;
  /** fetch data from the table: "command_type" */
  command_type: Array<Command_Type>;
  /** fetch aggregated fields from the table: "command_type" */
  command_type_aggregate: Command_Type_Aggregate;
  /** fetch data from the table: "command_type" using primary key columns */
  command_type_by_pk?: Maybe<Command_Type>;
  /** fetch data from the table: "lab" */
  lab: Array<Lab>;
  /** fetch aggregated fields from the table: "lab" */
  lab_aggregate: Lab_Aggregate;
  /** fetch data from the table: "lab" using primary key columns */
  lab_by_pk?: Maybe<Lab>;
  /** fetch data from the table: "lab_station" */
  lab_station: Array<Lab_Station>;
  /** fetch aggregated fields from the table: "lab_station" */
  lab_station_aggregate: Lab_Station_Aggregate;
  /** fetch data from the table: "lab_station" using primary key columns */
  lab_station_by_pk?: Maybe<Lab_Station>;
  /** fetch data from the table: "lab_user_role" */
  lab_user_role: Array<Lab_User_Role>;
  /** fetch aggregated fields from the table: "lab_user_role" */
  lab_user_role_aggregate: Lab_User_Role_Aggregate;
  /** fetch data from the table: "lab_user_role" using primary key columns */
  lab_user_role_by_pk?: Maybe<Lab_User_Role>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "smart_plug" */
  smart_plug: Array<Smart_Plug>;
  /** fetch aggregated fields from the table: "smart_plug" */
  smart_plug_aggregate: Smart_Plug_Aggregate;
  /** fetch data from the table: "smart_plug" using primary key columns */
  smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** fetch data from the table: "smart_plug_metrics" */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** fetch data from the table: "smart_plug_status" */
  smart_plug_status: Array<Smart_Plug_Status>;
  /** fetch aggregated fields from the table: "smart_plug_status" */
  smart_plug_status_aggregate: Smart_Plug_Status_Aggregate;
  /** fetch data from the table: "smart_plug_tag" */
  smart_plug_tag: Array<Smart_Plug_Tag>;
  /** fetch data from the table: "student_group" */
  student_group: Array<Student_Group>;
  /** fetch data from the table: "student_group" using primary key columns */
  student_group_by_pk?: Maybe<Student_Group>;
  /** fetch data from the table: "student_group_metrics" */
  student_group_metrics: Array<Student_Group_Metrics>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCommandArgs = {
  distinct_on?: Maybe<Array<Command_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Order_By>>;
  where?: Maybe<Command_Bool_Exp>;
};


export type Query_RootCommand_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Order_By>>;
  where?: Maybe<Command_Bool_Exp>;
};


export type Query_RootCommand_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommand_SelectorArgs = {
  distinct_on?: Maybe<Array<Command_Selector_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Selector_Order_By>>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};


export type Query_RootCommand_Selector_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Selector_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Selector_Order_By>>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};


export type Query_RootCommand_Selector_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommand_TypeArgs = {
  distinct_on?: Maybe<Array<Command_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Type_Order_By>>;
  where?: Maybe<Command_Type_Bool_Exp>;
};


export type Query_RootCommand_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Type_Order_By>>;
  where?: Maybe<Command_Type_Bool_Exp>;
};


export type Query_RootCommand_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLabArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};


export type Query_RootLab_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};


export type Query_RootLab_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLab_StationArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


export type Query_RootLab_Station_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


export type Query_RootLab_Station_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLab_User_RoleArgs = {
  distinct_on?: Maybe<Array<Lab_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_User_Role_Order_By>>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};


export type Query_RootLab_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_User_Role_Order_By>>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};


export type Query_RootLab_User_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSmart_PlugArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};


export type Query_RootSmart_Plug_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};


export type Query_RootSmart_Plug_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSmart_Plug_MetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};


export type Query_RootSmart_Plug_StatusArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Status_Order_By>>;
  where?: Maybe<Smart_Plug_Status_Bool_Exp>;
};


export type Query_RootSmart_Plug_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Status_Order_By>>;
  where?: Maybe<Smart_Plug_Status_Bool_Exp>;
};


export type Query_RootSmart_Plug_TagArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Tag_Order_By>>;
  where?: Maybe<Smart_Plug_Tag_Bool_Exp>;
};


export type Query_RootStudent_GroupArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};


export type Query_RootStudent_Group_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStudent_Group_MetricsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Metrics_Order_By>>;
  where?: Maybe<Student_Group_Metrics_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: Maybe<Array<Role_Bool_Exp>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Role_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT. The "path" column is modified by a BEFORE INSERT trigger to correctly format it to <lab_id.lab_station_id.id>
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_Plug = {
  __typename?: 'smart_plug';
  chip_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  lab_station: Lab_Station;
  lab_station_id: Scalars['Int'];
  /** An array relationship */
  metrics: Array<Smart_Plug_Metrics>;
  model: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['ltree'];
  /** An object relationship */
  status?: Maybe<Smart_Plug_Status>;
  updated_at: Scalars['timestamptz'];
};


/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT. The "path" column is modified by a BEFORE INSERT trigger to correctly format it to <lab_id.lab_station_id.id>
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_PlugMetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

/** aggregated selection of "smart_plug" */
export type Smart_Plug_Aggregate = {
  __typename?: 'smart_plug_aggregate';
  aggregate?: Maybe<Smart_Plug_Aggregate_Fields>;
  nodes: Array<Smart_Plug>;
};

/** aggregate fields of "smart_plug" */
export type Smart_Plug_Aggregate_Fields = {
  __typename?: 'smart_plug_aggregate_fields';
  avg?: Maybe<Smart_Plug_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Smart_Plug_Max_Fields>;
  min?: Maybe<Smart_Plug_Min_Fields>;
  stddev?: Maybe<Smart_Plug_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Plug_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Plug_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Plug_Sum_Fields>;
  var_pop?: Maybe<Smart_Plug_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Plug_Var_Samp_Fields>;
  variance?: Maybe<Smart_Plug_Variance_Fields>;
};


/** aggregate fields of "smart_plug" */
export type Smart_Plug_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Smart_Plug_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "smart_plug" */
export type Smart_Plug_Aggregate_Order_By = {
  avg?: Maybe<Smart_Plug_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Smart_Plug_Max_Order_By>;
  min?: Maybe<Smart_Plug_Min_Order_By>;
  stddev?: Maybe<Smart_Plug_Stddev_Order_By>;
  stddev_pop?: Maybe<Smart_Plug_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Smart_Plug_Stddev_Samp_Order_By>;
  sum?: Maybe<Smart_Plug_Sum_Order_By>;
  var_pop?: Maybe<Smart_Plug_Var_Pop_Order_By>;
  var_samp?: Maybe<Smart_Plug_Var_Samp_Order_By>;
  variance?: Maybe<Smart_Plug_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "smart_plug" */
export type Smart_Plug_Arr_Rel_Insert_Input = {
  data: Array<Smart_Plug_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Smart_Plug_On_Conflict>;
};

/** aggregate avg on columns */
export type Smart_Plug_Avg_Fields = {
  __typename?: 'smart_plug_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "smart_plug" */
export type Smart_Plug_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_plug". All fields are combined with a logical 'AND'. */
export type Smart_Plug_Bool_Exp = {
  _and?: Maybe<Array<Smart_Plug_Bool_Exp>>;
  _not?: Maybe<Smart_Plug_Bool_Exp>;
  _or?: Maybe<Array<Smart_Plug_Bool_Exp>>;
  chip_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab_station?: Maybe<Lab_Station_Bool_Exp>;
  lab_station_id?: Maybe<Int_Comparison_Exp>;
  metrics?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
  model?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  path?: Maybe<Ltree_Comparison_Exp>;
  status?: Maybe<Smart_Plug_Status_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_plug" */
export enum Smart_Plug_Constraint {
  /** unique or primary key constraint */
  SmartPlugChipIdKey = 'smart_plug_chip_id_key',
  /** unique or primary key constraint */
  SmartPlugPathKey = 'smart_plug_path_key',
  /** unique or primary key constraint */
  SmartPlugPkey = 'smart_plug_pkey'
}

/** input type for inserting data into table "smart_plug" */
export type Smart_Plug_Insert_Input = {
  chip_id?: Maybe<Scalars['String']>;
  lab_station?: Maybe<Lab_Station_Obj_Rel_Insert_Input>;
  lab_station_id?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Smart_Plug_Max_Fields = {
  __typename?: 'smart_plug_max_fields';
  chip_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_station_id?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['ltree']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "smart_plug" */
export type Smart_Plug_Max_Order_By = {
  chip_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
  model?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "smart_plug_metrics" */
export type Smart_Plug_Metrics = {
  __typename?: 'smart_plug_metrics';
  power: Scalars['float8'];
  /** An object relationship */
  smart_plug: Smart_Plug;
  smart_plug_chip_id: Scalars['String'];
  time: Scalars['timestamptz'];
};

/** order by aggregate values of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Aggregate_Order_By = {
  avg?: Maybe<Smart_Plug_Metrics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Smart_Plug_Metrics_Max_Order_By>;
  min?: Maybe<Smart_Plug_Metrics_Min_Order_By>;
  stddev?: Maybe<Smart_Plug_Metrics_Stddev_Order_By>;
  stddev_pop?: Maybe<Smart_Plug_Metrics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Smart_Plug_Metrics_Stddev_Samp_Order_By>;
  sum?: Maybe<Smart_Plug_Metrics_Sum_Order_By>;
  var_pop?: Maybe<Smart_Plug_Metrics_Var_Pop_Order_By>;
  var_samp?: Maybe<Smart_Plug_Metrics_Var_Samp_Order_By>;
  variance?: Maybe<Smart_Plug_Metrics_Variance_Order_By>;
};

/** order by avg() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Avg_Order_By = {
  power?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_plug_metrics". All fields are combined with a logical 'AND'. */
export type Smart_Plug_Metrics_Bool_Exp = {
  _and?: Maybe<Array<Smart_Plug_Metrics_Bool_Exp>>;
  _not?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
  _or?: Maybe<Array<Smart_Plug_Metrics_Bool_Exp>>;
  power?: Maybe<Float8_Comparison_Exp>;
  smart_plug?: Maybe<Smart_Plug_Bool_Exp>;
  smart_plug_chip_id?: Maybe<String_Comparison_Exp>;
  time?: Maybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Max_Order_By = {
  power?: Maybe<Order_By>;
  smart_plug_chip_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** order by min() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Min_Order_By = {
  power?: Maybe<Order_By>;
  smart_plug_chip_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "smart_plug_metrics". */
export type Smart_Plug_Metrics_Order_By = {
  power?: Maybe<Order_By>;
  smart_plug?: Maybe<Smart_Plug_Order_By>;
  smart_plug_chip_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** select columns of table "smart_plug_metrics" */
export enum Smart_Plug_Metrics_Select_Column {
  /** column name */
  Power = 'power',
  /** column name */
  SmartPlugChipId = 'smart_plug_chip_id',
  /** column name */
  Time = 'time'
}

/** order by stddev() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Stddev_Order_By = {
  power?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Stddev_Pop_Order_By = {
  power?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Stddev_Samp_Order_By = {
  power?: Maybe<Order_By>;
};

/** order by sum() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Sum_Order_By = {
  power?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Var_Pop_Order_By = {
  power?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Var_Samp_Order_By = {
  power?: Maybe<Order_By>;
};

/** order by variance() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Variance_Order_By = {
  power?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Plug_Min_Fields = {
  __typename?: 'smart_plug_min_fields';
  chip_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lab_station_id?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['ltree']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "smart_plug" */
export type Smart_Plug_Min_Order_By = {
  chip_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
  model?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "smart_plug" */
export type Smart_Plug_Mutation_Response = {
  __typename?: 'smart_plug_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Plug>;
};

/** input type for inserting object relation for remote table "smart_plug" */
export type Smart_Plug_Obj_Rel_Insert_Input = {
  data: Smart_Plug_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Smart_Plug_On_Conflict>;
};

/** on conflict condition type for table "smart_plug" */
export type Smart_Plug_On_Conflict = {
  constraint: Smart_Plug_Constraint;
  update_columns?: Array<Smart_Plug_Update_Column>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_plug". */
export type Smart_Plug_Order_By = {
  chip_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station?: Maybe<Lab_Station_Order_By>;
  lab_station_id?: Maybe<Order_By>;
  metrics_aggregate?: Maybe<Smart_Plug_Metrics_Aggregate_Order_By>;
  model?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  status?: Maybe<Smart_Plug_Status_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: smart_plug */
export type Smart_Plug_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "smart_plug" */
export enum Smart_Plug_Select_Column {
  /** column name */
  ChipId = 'chip_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LabStationId = 'lab_station_id',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "smart_plug" */
export type Smart_Plug_Set_Input = {
  chip_id?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "smart_plug_status" */
export type Smart_Plug_Status = {
  __typename?: 'smart_plug_status';
  chip_id?: Maybe<Scalars['String']>;
  last_message_timestamp?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  smart_plug?: Maybe<Smart_Plug>;
  status?: Maybe<Scalars['String']>;
};

/** aggregated selection of "smart_plug_status" */
export type Smart_Plug_Status_Aggregate = {
  __typename?: 'smart_plug_status_aggregate';
  aggregate?: Maybe<Smart_Plug_Status_Aggregate_Fields>;
  nodes: Array<Smart_Plug_Status>;
};

/** aggregate fields of "smart_plug_status" */
export type Smart_Plug_Status_Aggregate_Fields = {
  __typename?: 'smart_plug_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Smart_Plug_Status_Max_Fields>;
  min?: Maybe<Smart_Plug_Status_Min_Fields>;
};


/** aggregate fields of "smart_plug_status" */
export type Smart_Plug_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Smart_Plug_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "smart_plug_status". All fields are combined with a logical 'AND'. */
export type Smart_Plug_Status_Bool_Exp = {
  _and?: Maybe<Array<Smart_Plug_Status_Bool_Exp>>;
  _not?: Maybe<Smart_Plug_Status_Bool_Exp>;
  _or?: Maybe<Array<Smart_Plug_Status_Bool_Exp>>;
  chip_id?: Maybe<String_Comparison_Exp>;
  last_message_timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  smart_plug?: Maybe<Smart_Plug_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Smart_Plug_Status_Max_Fields = {
  __typename?: 'smart_plug_status_max_fields';
  chip_id?: Maybe<Scalars['String']>;
  last_message_timestamp?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Smart_Plug_Status_Min_Fields = {
  __typename?: 'smart_plug_status_min_fields';
  chip_id?: Maybe<Scalars['String']>;
  last_message_timestamp?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "smart_plug_status". */
export type Smart_Plug_Status_Order_By = {
  chip_id?: Maybe<Order_By>;
  last_message_timestamp?: Maybe<Order_By>;
  smart_plug?: Maybe<Smart_Plug_Order_By>;
  status?: Maybe<Order_By>;
};

/** select columns of table "smart_plug_status" */
export enum Smart_Plug_Status_Select_Column {
  /** column name */
  ChipId = 'chip_id',
  /** column name */
  LastMessageTimestamp = 'last_message_timestamp',
  /** column name */
  Status = 'status'
}

/** aggregate stddev on columns */
export type Smart_Plug_Stddev_Fields = {
  __typename?: 'smart_plug_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Plug_Stddev_Pop_Fields = {
  __typename?: 'smart_plug_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Plug_Stddev_Samp_Fields = {
  __typename?: 'smart_plug_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Smart_Plug_Sum_Fields = {
  __typename?: 'smart_plug_sum_fields';
  id?: Maybe<Scalars['Int']>;
  lab_station_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "smart_plug" */
export type Smart_Plug_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** columns and relationships of "smart_plug_tag" */
export type Smart_Plug_Tag = {
  __typename?: 'smart_plug_tag';
  /** An object relationship */
  smart_plug?: Maybe<Smart_Plug>;
};

/** Boolean expression to filter rows from the table "smart_plug_tag". All fields are combined with a logical 'AND'. */
export type Smart_Plug_Tag_Bool_Exp = {
  _and?: Maybe<Array<Smart_Plug_Tag_Bool_Exp>>;
  _not?: Maybe<Smart_Plug_Tag_Bool_Exp>;
  _or?: Maybe<Array<Smart_Plug_Tag_Bool_Exp>>;
  smart_plug?: Maybe<Smart_Plug_Bool_Exp>;
};

/** input type for inserting data into table "smart_plug_tag" */
export type Smart_Plug_Tag_Insert_Input = {
  path?: Maybe<Scalars['ltree']>;
  smart_plug?: Maybe<Smart_Plug_Obj_Rel_Insert_Input>;
  smart_plug_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "smart_plug_tag" */
export type Smart_Plug_Tag_Mutation_Response = {
  __typename?: 'smart_plug_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Plug_Tag>;
};

/** Ordering options when selecting data from "smart_plug_tag". */
export type Smart_Plug_Tag_Order_By = {
  smart_plug?: Maybe<Smart_Plug_Order_By>;
};

/** update columns of table "smart_plug" */
export enum Smart_Plug_Update_Column {
  /** column name */
  ChipId = 'chip_id',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Smart_Plug_Var_Pop_Fields = {
  __typename?: 'smart_plug_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "smart_plug" */
export type Smart_Plug_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Plug_Var_Samp_Fields = {
  __typename?: 'smart_plug_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "smart_plug" */
export type Smart_Plug_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Plug_Variance_Fields = {
  __typename?: 'smart_plug_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lab_station_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "smart_plug" */
export type Smart_Plug_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** columns and relationships of "student_group" */
export type Student_Group = {
  __typename?: 'student_group';
  broker_login: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars['Int'];
  /** An array relationship */
  metrics: Array<Student_Group_Metrics>;
};


/** columns and relationships of "student_group" */
export type Student_GroupMetricsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Metrics_Order_By>>;
  where?: Maybe<Student_Group_Metrics_Bool_Exp>;
};

/** order by aggregate values of table "student_group" */
export type Student_Group_Aggregate_Order_By = {
  avg?: Maybe<Student_Group_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Group_Max_Order_By>;
  min?: Maybe<Student_Group_Min_Order_By>;
  stddev?: Maybe<Student_Group_Stddev_Order_By>;
  stddev_pop?: Maybe<Student_Group_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Student_Group_Stddev_Samp_Order_By>;
  sum?: Maybe<Student_Group_Sum_Order_By>;
  var_pop?: Maybe<Student_Group_Var_Pop_Order_By>;
  var_samp?: Maybe<Student_Group_Var_Samp_Order_By>;
  variance?: Maybe<Student_Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "student_group" */
export type Student_Group_Arr_Rel_Insert_Input = {
  data: Array<Student_Group_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Student_Group_On_Conflict>;
};

/** order by avg() on columns of table "student_group" */
export type Student_Group_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "student_group". All fields are combined with a logical 'AND'. */
export type Student_Group_Bool_Exp = {
  _and?: Maybe<Array<Student_Group_Bool_Exp>>;
  _not?: Maybe<Student_Group_Bool_Exp>;
  _or?: Maybe<Array<Student_Group_Bool_Exp>>;
  broker_login?: Maybe<String_Comparison_Exp>;
  comment?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab?: Maybe<Lab_Bool_Exp>;
  lab_id?: Maybe<Int_Comparison_Exp>;
  metrics?: Maybe<Student_Group_Metrics_Bool_Exp>;
};

/** unique or primary key constraints on table "student_group" */
export enum Student_Group_Constraint {
  /** unique or primary key constraint */
  BrokerAccountsDisplayNameKey = 'broker_accounts_display_name_key',
  /** unique or primary key constraint */
  StudentGroupPkey = 'student_group_pkey'
}

/** input type for inserting data into table "student_group" */
export type Student_Group_Insert_Input = {
  broker_login?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "student_group" */
export type Student_Group_Max_Order_By = {
  broker_login?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** columns and relationships of "student_group_metrics" */
export type Student_Group_Metrics = {
  __typename?: 'student_group_metrics';
  broker_login: Scalars['String'];
  content: Scalars['String'];
  /** An object relationship */
  student_group: Student_Group;
  time: Scalars['timestamptz'];
  topic: Scalars['String'];
};

/** order by aggregate values of table "student_group_metrics" */
export type Student_Group_Metrics_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Group_Metrics_Max_Order_By>;
  min?: Maybe<Student_Group_Metrics_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "student_group_metrics". All fields are combined with a logical 'AND'. */
export type Student_Group_Metrics_Bool_Exp = {
  _and?: Maybe<Array<Student_Group_Metrics_Bool_Exp>>;
  _not?: Maybe<Student_Group_Metrics_Bool_Exp>;
  _or?: Maybe<Array<Student_Group_Metrics_Bool_Exp>>;
  broker_login?: Maybe<String_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  student_group?: Maybe<Student_Group_Bool_Exp>;
  time?: Maybe<Timestamptz_Comparison_Exp>;
  topic?: Maybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "student_group_metrics" */
export type Student_Group_Metrics_Max_Order_By = {
  broker_login?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  topic?: Maybe<Order_By>;
};

/** order by min() on columns of table "student_group_metrics" */
export type Student_Group_Metrics_Min_Order_By = {
  broker_login?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  topic?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "student_group_metrics". */
export type Student_Group_Metrics_Order_By = {
  broker_login?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  student_group?: Maybe<Student_Group_Order_By>;
  time?: Maybe<Order_By>;
  topic?: Maybe<Order_By>;
};

/** select columns of table "student_group_metrics" */
export enum Student_Group_Metrics_Select_Column {
  /** column name */
  BrokerLogin = 'broker_login',
  /** column name */
  Content = 'content',
  /** column name */
  Time = 'time',
  /** column name */
  Topic = 'topic'
}

/** order by min() on columns of table "student_group" */
export type Student_Group_Min_Order_By = {
  broker_login?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_group" */
export type Student_Group_Mutation_Response = {
  __typename?: 'student_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Student_Group>;
};

/** on conflict condition type for table "student_group" */
export type Student_Group_On_Conflict = {
  constraint: Student_Group_Constraint;
  update_columns?: Array<Student_Group_Update_Column>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "student_group". */
export type Student_Group_Order_By = {
  broker_login?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  metrics_aggregate?: Maybe<Student_Group_Metrics_Aggregate_Order_By>;
};

/** primary key columns input for table: student_group */
export type Student_Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "student_group" */
export enum Student_Group_Select_Column {
  /** column name */
  BrokerLogin = 'broker_login',
  /** column name */
  Comment = 'comment',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id'
}

/** input type for updating data in table "student_group" */
export type Student_Group_Set_Input = {
  broker_login?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "student_group" */
export type Student_Group_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "student_group" */
export type Student_Group_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "student_group" */
export type Student_Group_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "student_group" */
export type Student_Group_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** update columns of table "student_group" */
export enum Student_Group_Update_Column {
  /** column name */
  BrokerLogin = 'broker_login',
  /** column name */
  Comment = 'comment',
  /** column name */
  DisplayName = 'display_name'
}

/** order by var_pop() on columns of table "student_group" */
export type Student_Group_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "student_group" */
export type Student_Group_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "student_group" */
export type Student_Group_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "command" */
  command: Array<Command>;
  /** fetch aggregated fields from the table: "command" */
  command_aggregate: Command_Aggregate;
  /** fetch data from the table: "command" using primary key columns */
  command_by_pk?: Maybe<Command>;
  /** fetch data from the table: "command_selector" */
  command_selector: Array<Command_Selector>;
  /** fetch aggregated fields from the table: "command_selector" */
  command_selector_aggregate: Command_Selector_Aggregate;
  /** fetch data from the table: "command_selector" using primary key columns */
  command_selector_by_pk?: Maybe<Command_Selector>;
  /** fetch data from the table: "command_type" */
  command_type: Array<Command_Type>;
  /** fetch aggregated fields from the table: "command_type" */
  command_type_aggregate: Command_Type_Aggregate;
  /** fetch data from the table: "command_type" using primary key columns */
  command_type_by_pk?: Maybe<Command_Type>;
  /** fetch data from the table: "lab" */
  lab: Array<Lab>;
  /** fetch aggregated fields from the table: "lab" */
  lab_aggregate: Lab_Aggregate;
  /** fetch data from the table: "lab" using primary key columns */
  lab_by_pk?: Maybe<Lab>;
  /** fetch data from the table: "lab_station" */
  lab_station: Array<Lab_Station>;
  /** fetch aggregated fields from the table: "lab_station" */
  lab_station_aggregate: Lab_Station_Aggregate;
  /** fetch data from the table: "lab_station" using primary key columns */
  lab_station_by_pk?: Maybe<Lab_Station>;
  /** fetch data from the table: "lab_user_role" */
  lab_user_role: Array<Lab_User_Role>;
  /** fetch aggregated fields from the table: "lab_user_role" */
  lab_user_role_aggregate: Lab_User_Role_Aggregate;
  /** fetch data from the table: "lab_user_role" using primary key columns */
  lab_user_role_by_pk?: Maybe<Lab_User_Role>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "smart_plug" */
  smart_plug: Array<Smart_Plug>;
  /** fetch aggregated fields from the table: "smart_plug" */
  smart_plug_aggregate: Smart_Plug_Aggregate;
  /** fetch data from the table: "smart_plug" using primary key columns */
  smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** fetch data from the table: "smart_plug_metrics" */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** fetch data from the table: "smart_plug_status" */
  smart_plug_status: Array<Smart_Plug_Status>;
  /** fetch aggregated fields from the table: "smart_plug_status" */
  smart_plug_status_aggregate: Smart_Plug_Status_Aggregate;
  /** fetch data from the table: "smart_plug_tag" */
  smart_plug_tag: Array<Smart_Plug_Tag>;
  /** fetch data from the table: "student_group" */
  student_group: Array<Student_Group>;
  /** fetch data from the table: "student_group" using primary key columns */
  student_group_by_pk?: Maybe<Student_Group>;
  /** fetch data from the table: "student_group_metrics" */
  student_group_metrics: Array<Student_Group_Metrics>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootCommandArgs = {
  distinct_on?: Maybe<Array<Command_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Order_By>>;
  where?: Maybe<Command_Bool_Exp>;
};


export type Subscription_RootCommand_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Order_By>>;
  where?: Maybe<Command_Bool_Exp>;
};


export type Subscription_RootCommand_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommand_SelectorArgs = {
  distinct_on?: Maybe<Array<Command_Selector_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Selector_Order_By>>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};


export type Subscription_RootCommand_Selector_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Selector_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Selector_Order_By>>;
  where?: Maybe<Command_Selector_Bool_Exp>;
};


export type Subscription_RootCommand_Selector_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCommand_TypeArgs = {
  distinct_on?: Maybe<Array<Command_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Type_Order_By>>;
  where?: Maybe<Command_Type_Bool_Exp>;
};


export type Subscription_RootCommand_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Command_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Command_Type_Order_By>>;
  where?: Maybe<Command_Type_Bool_Exp>;
};


export type Subscription_RootCommand_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLabArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};


export type Subscription_RootLab_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};


export type Subscription_RootLab_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLab_StationArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


export type Subscription_RootLab_Station_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


export type Subscription_RootLab_Station_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLab_User_RoleArgs = {
  distinct_on?: Maybe<Array<Lab_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_User_Role_Order_By>>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};


export type Subscription_RootLab_User_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_User_Role_Order_By>>;
  where?: Maybe<Lab_User_Role_Bool_Exp>;
};


export type Subscription_RootLab_User_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSmart_PlugArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};


export type Subscription_RootSmart_Plug_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};


export type Subscription_RootSmart_Plug_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSmart_Plug_MetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};


export type Subscription_RootSmart_Plug_StatusArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Status_Order_By>>;
  where?: Maybe<Smart_Plug_Status_Bool_Exp>;
};


export type Subscription_RootSmart_Plug_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Status_Order_By>>;
  where?: Maybe<Smart_Plug_Status_Bool_Exp>;
};


export type Subscription_RootSmart_Plug_TagArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Tag_Order_By>>;
  where?: Maybe<Smart_Plug_Tag_Bool_Exp>;
};


export type Subscription_RootStudent_GroupArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};


export type Subscription_RootStudent_Group_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStudent_Group_MetricsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Metrics_Order_By>>;
  where?: Maybe<Student_Group_Metrics_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * The only entity allowed to create users in this table is our backend, which gets activated by Firebase, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  /** This id is generated by firebase. */
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  /** This id is generated by firebase. */
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  /** This id is generated by firebase. */
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  /** This id is generated by firebase. */
  id: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type InsertCommandMutationVariables = Exact<{
  name: Scalars['String'];
  type: CreateCommandCommandTypeEnum;
  is_recurring: Scalars['Boolean'];
  recurrence_pattern?: Maybe<Scalars['String']>;
  scheduled_time_unix?: Maybe<Scalars['Int']>;
  selectors: Array<Scalars['String']> | Scalars['String'];
}>;


export type InsertCommandMutation = (
  { __typename?: 'mutation_root' }
  & { CreateCommand?: Maybe<(
    { __typename?: 'CreateCommandOutput' }
    & Pick<CreateCommandOutput, 'id'>
  )> }
);

export type SmartPlugPowerSubscriptionVariables = Exact<{
  time: Scalars['timestamptz'];
  id: Scalars['String'];
  limit?: Scalars['Int'];
}>;


export type SmartPlugPowerSubscription = (
  { __typename?: 'subscription_root' }
  & { smart_plug_metrics: Array<(
    { __typename?: 'smart_plug_metrics' }
    & Pick<Smart_Plug_Metrics, 'power' | 'time'>
  )> }
);

export type SmartPlugStatusSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SmartPlugStatusSubscription = (
  { __typename?: 'subscription_root' }
  & { smart_plug_status: Array<(
    { __typename?: 'smart_plug_status' }
    & Pick<Smart_Plug_Status, 'chip_id' | 'status'>
  )> }
);

export type UserLabsSubscriptionVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type UserLabsSubscription = (
  { __typename?: 'subscription_root' }
  & { lab_user_role: Array<(
    { __typename?: 'lab_user_role' }
    & Pick<Lab_User_Role, 'role_id' | 'user_id' | 'lab_id'>
    & { lab: (
      { __typename?: 'lab' }
      & Pick<Lab, 'id' | 'name' | 'description' | 'location'>
    ) }
  )> }
);


export const InsertCommandDocument = gql`
    mutation InsertCommand($name: String!, $type: CreateCommandCommandTypeEnum!, $is_recurring: Boolean!, $recurrence_pattern: String, $scheduled_time_unix: Int, $selectors: [String!]!) {
  CreateCommand(
    name: $name
    type: $type
    is_recurring: $is_recurring
    recurrence_pattern: $recurrence_pattern
    scheduled_time_unix: $scheduled_time_unix
    selectors: $selectors
  ) {
    id
  }
}
    `;
export type InsertCommandMutationFn = Apollo.MutationFunction<InsertCommandMutation, InsertCommandMutationVariables>;

/**
 * __useInsertCommandMutation__
 *
 * To run a mutation, you first call `useInsertCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommandMutation, { data, loading, error }] = useInsertCommandMutation({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      is_recurring: // value for 'is_recurring'
 *      recurrence_pattern: // value for 'recurrence_pattern'
 *      scheduled_time_unix: // value for 'scheduled_time_unix'
 *      selectors: // value for 'selectors'
 *   },
 * });
 */
export function useInsertCommandMutation(baseOptions?: Apollo.MutationHookOptions<InsertCommandMutation, InsertCommandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCommandMutation, InsertCommandMutationVariables>(InsertCommandDocument, options);
      }
export type InsertCommandMutationHookResult = ReturnType<typeof useInsertCommandMutation>;
export type InsertCommandMutationResult = Apollo.MutationResult<InsertCommandMutation>;
export type InsertCommandMutationOptions = Apollo.BaseMutationOptions<InsertCommandMutation, InsertCommandMutationVariables>;
export const SmartPlugPowerDocument = gql`
    subscription SmartPlugPower($time: timestamptz!, $id: String!, $limit: Int! = 10) {
  smart_plug_metrics(
    order_by: {time: desc}
    where: {time: {_gt: $time}, smart_plug_chip_id: {_eq: $id}}
    limit: $limit
  ) {
    power
    time
  }
}
    `;

/**
 * __useSmartPlugPowerSubscription__
 *
 * To run a query within a React component, call `useSmartPlugPowerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSmartPlugPowerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSmartPlugPowerSubscription({
 *   variables: {
 *      time: // value for 'time'
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSmartPlugPowerSubscription(baseOptions: Apollo.SubscriptionHookOptions<SmartPlugPowerSubscription, SmartPlugPowerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SmartPlugPowerSubscription, SmartPlugPowerSubscriptionVariables>(SmartPlugPowerDocument, options);
      }
export type SmartPlugPowerSubscriptionHookResult = ReturnType<typeof useSmartPlugPowerSubscription>;
export type SmartPlugPowerSubscriptionResult = Apollo.SubscriptionResult<SmartPlugPowerSubscription>;
export const SmartPlugStatusDocument = gql`
    subscription SmartPlugStatus {
  smart_plug_status {
    chip_id
    status
  }
}
    `;

/**
 * __useSmartPlugStatusSubscription__
 *
 * To run a query within a React component, call `useSmartPlugStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSmartPlugStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSmartPlugStatusSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSmartPlugStatusSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SmartPlugStatusSubscription, SmartPlugStatusSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SmartPlugStatusSubscription, SmartPlugStatusSubscriptionVariables>(SmartPlugStatusDocument, options);
      }
export type SmartPlugStatusSubscriptionHookResult = ReturnType<typeof useSmartPlugStatusSubscription>;
export type SmartPlugStatusSubscriptionResult = Apollo.SubscriptionResult<SmartPlugStatusSubscription>;
export const UserLabsDocument = gql`
    subscription UserLabs($user_id: String!) {
  lab_user_role(where: {user_id: {_eq: $user_id}}) {
    role_id
    user_id
    lab_id
    lab {
      id
      name
      description
      location
    }
  }
}
    `;

/**
 * __useUserLabsSubscription__
 *
 * To run a query within a React component, call `useUserLabsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserLabsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLabsSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserLabsSubscription(baseOptions: Apollo.SubscriptionHookOptions<UserLabsSubscription, UserLabsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserLabsSubscription, UserLabsSubscriptionVariables>(UserLabsDocument, options);
      }
export type UserLabsSubscriptionHookResult = ReturnType<typeof useUserLabsSubscription>;
export type UserLabsSubscriptionResult = Apollo.SubscriptionResult<UserLabsSubscription>;