export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  timestamptz: any;
};

export type AddOperatorToLabOutput = {
  __typename?: "AddOperatorToLabOutput";
  id: Scalars["Int"];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars["float8"]>;
  _gt?: Maybe<Scalars["float8"]>;
  _gte?: Maybe<Scalars["float8"]>;
  _in?: Maybe<Array<Scalars["float8"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["float8"]>;
  _lte?: Maybe<Scalars["float8"]>;
  _neq?: Maybe<Scalars["float8"]>;
  _nin?: Maybe<Array<Scalars["float8"]>>;
};

/** columns and relationships of "lab" */
export type Lab = {
  __typename?: "lab";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** An array relationship */
  lab_operators: Array<Lab_Operator>;
  /** An aggregate relationship */
  lab_operators_aggregate: Lab_Operator_Aggregate;
  /** An array relationship */
  lab_stations: Array<Lab_Station>;
  /** An aggregate relationship */
  lab_stations_aggregate: Lab_Station_Aggregate;
  location?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  /** An array relationship */
  student_groups: Array<Student_Group>;
  /** An aggregate relationship */
  student_groups_aggregate: Student_Group_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "lab" */
export type LabLab_OperatorsArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

/** columns and relationships of "lab" */
export type LabLab_Operators_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

/** columns and relationships of "lab" */
export type LabLab_StationsArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

/** columns and relationships of "lab" */
export type LabLab_Stations_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

/** columns and relationships of "lab" */
export type LabStudent_GroupsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/** columns and relationships of "lab" */
export type LabStudent_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/** aggregated selection of "lab" */
export type Lab_Aggregate = {
  __typename?: "lab_aggregate";
  aggregate?: Maybe<Lab_Aggregate_Fields>;
  nodes: Array<Lab>;
};

/** aggregate fields of "lab" */
export type Lab_Aggregate_Fields = {
  __typename?: "lab_aggregate_fields";
  avg?: Maybe<Lab_Avg_Fields>;
  count: Scalars["Int"];
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
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Lab_Avg_Fields = {
  __typename?: "lab_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "lab". All fields are combined with a logical 'AND'. */
export type Lab_Bool_Exp = {
  _and?: Maybe<Array<Lab_Bool_Exp>>;
  _not?: Maybe<Lab_Bool_Exp>;
  _or?: Maybe<Array<Lab_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab_operators?: Maybe<Lab_Operator_Bool_Exp>;
  lab_stations?: Maybe<Lab_Station_Bool_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  student_groups?: Maybe<Student_Group_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lab" */
export enum Lab_Constraint {
  /** unique or primary key constraint */
  LaboratoryPkey = "laboratory_pkey",
}

/** input type for incrementing numeric columns in table "lab" */
export type Lab_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "lab" */
export type Lab_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_operators?: Maybe<Lab_Operator_Arr_Rel_Insert_Input>;
  lab_stations?: Maybe<Lab_Station_Arr_Rel_Insert_Input>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  student_groups?: Maybe<Student_Group_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Lab_Max_Fields = {
  __typename?: "lab_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Lab_Min_Fields = {
  __typename?: "lab_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "lab" */
export type Lab_Mutation_Response = {
  __typename?: "lab_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
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

/** columns and relationships of "lab_operator" */
export type Lab_Operator = {
  __typename?: "lab_operator";
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars["Int"];
  operator_id: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "lab_operator" */
export type Lab_Operator_Aggregate = {
  __typename?: "lab_operator_aggregate";
  aggregate?: Maybe<Lab_Operator_Aggregate_Fields>;
  nodes: Array<Lab_Operator>;
};

/** aggregate fields of "lab_operator" */
export type Lab_Operator_Aggregate_Fields = {
  __typename?: "lab_operator_aggregate_fields";
  avg?: Maybe<Lab_Operator_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Lab_Operator_Max_Fields>;
  min?: Maybe<Lab_Operator_Min_Fields>;
  stddev?: Maybe<Lab_Operator_Stddev_Fields>;
  stddev_pop?: Maybe<Lab_Operator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lab_Operator_Stddev_Samp_Fields>;
  sum?: Maybe<Lab_Operator_Sum_Fields>;
  var_pop?: Maybe<Lab_Operator_Var_Pop_Fields>;
  var_samp?: Maybe<Lab_Operator_Var_Samp_Fields>;
  variance?: Maybe<Lab_Operator_Variance_Fields>;
};

/** aggregate fields of "lab_operator" */
export type Lab_Operator_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lab_Operator_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "lab_operator" */
export type Lab_Operator_Aggregate_Order_By = {
  avg?: Maybe<Lab_Operator_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lab_Operator_Max_Order_By>;
  min?: Maybe<Lab_Operator_Min_Order_By>;
  stddev?: Maybe<Lab_Operator_Stddev_Order_By>;
  stddev_pop?: Maybe<Lab_Operator_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lab_Operator_Stddev_Samp_Order_By>;
  sum?: Maybe<Lab_Operator_Sum_Order_By>;
  var_pop?: Maybe<Lab_Operator_Var_Pop_Order_By>;
  var_samp?: Maybe<Lab_Operator_Var_Samp_Order_By>;
  variance?: Maybe<Lab_Operator_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lab_operator" */
export type Lab_Operator_Arr_Rel_Insert_Input = {
  data: Array<Lab_Operator_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Lab_Operator_On_Conflict>;
};

/** aggregate avg on columns */
export type Lab_Operator_Avg_Fields = {
  __typename?: "lab_operator_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "lab_operator" */
export type Lab_Operator_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lab_operator". All fields are combined with a logical 'AND'. */
export type Lab_Operator_Bool_Exp = {
  _and?: Maybe<Array<Lab_Operator_Bool_Exp>>;
  _not?: Maybe<Lab_Operator_Bool_Exp>;
  _or?: Maybe<Array<Lab_Operator_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab?: Maybe<Lab_Bool_Exp>;
  lab_id?: Maybe<Int_Comparison_Exp>;
  operator_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "lab_operator" */
export enum Lab_Operator_Constraint {
  /** unique or primary key constraint */
  LabOperatorOperatorIdLabIdKey = "lab_operator_operator_id_lab_id_key",
  /** unique or primary key constraint */
  LabOperatorPkey = "lab_operator_pkey",
}

/** input type for incrementing numeric columns in table "lab_operator" */
export type Lab_Operator_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "lab_operator" */
export type Lab_Operator_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
  lab_id?: Maybe<Scalars["Int"]>;
  operator_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Lab_Operator_Max_Fields = {
  __typename?: "lab_operator_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  operator_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "lab_operator" */
export type Lab_Operator_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  operator_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lab_Operator_Min_Fields = {
  __typename?: "lab_operator_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  operator_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "lab_operator" */
export type Lab_Operator_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  operator_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lab_operator" */
export type Lab_Operator_Mutation_Response = {
  __typename?: "lab_operator_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Lab_Operator>;
};

/** on conflict condition type for table "lab_operator" */
export type Lab_Operator_On_Conflict = {
  constraint: Lab_Operator_Constraint;
  update_columns?: Array<Lab_Operator_Update_Column>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

/** Ordering options when selecting data from "lab_operator". */
export type Lab_Operator_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  operator_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: lab_operator */
export type Lab_Operator_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "lab_operator" */
export enum Lab_Operator_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LabId = "lab_id",
  /** column name */
  OperatorId = "operator_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "lab_operator" */
export type Lab_Operator_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  operator_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Lab_Operator_Stddev_Fields = {
  __typename?: "lab_operator_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "lab_operator" */
export type Lab_Operator_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lab_Operator_Stddev_Pop_Fields = {
  __typename?: "lab_operator_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "lab_operator" */
export type Lab_Operator_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lab_Operator_Stddev_Samp_Fields = {
  __typename?: "lab_operator_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "lab_operator" */
export type Lab_Operator_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lab_Operator_Sum_Fields = {
  __typename?: "lab_operator_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "lab_operator" */
export type Lab_Operator_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** update columns of table "lab_operator" */
export enum Lab_Operator_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  LabId = "lab_id",
  /** column name */
  OperatorId = "operator_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** aggregate var_pop on columns */
export type Lab_Operator_Var_Pop_Fields = {
  __typename?: "lab_operator_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "lab_operator" */
export type Lab_Operator_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lab_Operator_Var_Samp_Fields = {
  __typename?: "lab_operator_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "lab_operator" */
export type Lab_Operator_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lab_Operator_Variance_Fields = {
  __typename?: "lab_operator_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "lab_operator" */
export type Lab_Operator_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "lab". */
export type Lab_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_operators_aggregate?: Maybe<Lab_Operator_Aggregate_Order_By>;
  lab_stations_aggregate?: Maybe<Lab_Station_Aggregate_Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  student_groups_aggregate?: Maybe<Student_Group_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lab */
export type Lab_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "lab" */
export enum Lab_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Location = "location",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "lab" */
export type Lab_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** columns and relationships of "lab_station" */
export type Lab_Station = {
  __typename?: "lab_station";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["Int"];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars["Int"];
  name: Scalars["String"];
  /** An array relationship */
  smart_plugs: Array<Smart_Plug>;
  /** An aggregate relationship */
  smart_plugs_aggregate: Smart_Plug_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "lab_station" */
export type Lab_StationSmart_PlugsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

/** columns and relationships of "lab_station" */
export type Lab_StationSmart_Plugs_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

/** aggregated selection of "lab_station" */
export type Lab_Station_Aggregate = {
  __typename?: "lab_station_aggregate";
  aggregate?: Maybe<Lab_Station_Aggregate_Fields>;
  nodes: Array<Lab_Station>;
};

/** aggregate fields of "lab_station" */
export type Lab_Station_Aggregate_Fields = {
  __typename?: "lab_station_aggregate_fields";
  avg?: Maybe<Lab_Station_Avg_Fields>;
  count: Scalars["Int"];
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
  distinct?: Maybe<Scalars["Boolean"]>;
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
  __typename?: "lab_station_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
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
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
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
  WorkbenchPkey = "workbench_pkey",
}

/** input type for incrementing numeric columns in table "lab_station" */
export type Lab_Station_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "lab_station" */
export type Lab_Station_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
  lab_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  smart_plugs?: Maybe<Smart_Plug_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Lab_Station_Max_Fields = {
  __typename?: "lab_station_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "lab_station" */
export type Lab_Station_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lab_Station_Min_Fields = {
  __typename?: "lab_station_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "lab_station" */
export type Lab_Station_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lab_station" */
export type Lab_Station_Mutation_Response = {
  __typename?: "lab_station_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
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
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  smart_plugs_aggregate?: Maybe<Smart_Plug_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lab_station */
export type Lab_Station_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "lab_station" */
export enum Lab_Station_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  LabId = "lab_id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "lab_station" */
export type Lab_Station_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Lab_Station_Stddev_Fields = {
  __typename?: "lab_station_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "lab_station" */
export type Lab_Station_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lab_Station_Stddev_Pop_Fields = {
  __typename?: "lab_station_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "lab_station" */
export type Lab_Station_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lab_Station_Stddev_Samp_Fields = {
  __typename?: "lab_station_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "lab_station" */
export type Lab_Station_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lab_Station_Sum_Fields = {
  __typename?: "lab_station_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "lab_station" */
export type Lab_Station_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** update columns of table "lab_station" */
export enum Lab_Station_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  LabId = "lab_id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** aggregate var_pop on columns */
export type Lab_Station_Var_Pop_Fields = {
  __typename?: "lab_station_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "lab_station" */
export type Lab_Station_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lab_Station_Var_Samp_Fields = {
  __typename?: "lab_station_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "lab_station" */
export type Lab_Station_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lab_Station_Variance_Fields = {
  __typename?: "lab_station_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "lab_station" */
export type Lab_Station_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev on columns */
export type Lab_Stddev_Fields = {
  __typename?: "lab_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Lab_Stddev_Pop_Fields = {
  __typename?: "lab_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Lab_Stddev_Samp_Fields = {
  __typename?: "lab_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Lab_Sum_Fields = {
  __typename?: "lab_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "lab" */
export enum Lab_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Location = "location",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** aggregate var_pop on columns */
export type Lab_Var_Pop_Fields = {
  __typename?: "lab_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Lab_Var_Samp_Fields = {
  __typename?: "lab_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Lab_Variance_Fields = {
  __typename?: "lab_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  AddOperatorToLab?: Maybe<AddOperatorToLabOutput>;
  /** delete data from the table: "lab" */
  delete_lab?: Maybe<Lab_Mutation_Response>;
  /** delete single row from the table: "lab" */
  delete_lab_by_pk?: Maybe<Lab>;
  /** delete data from the table: "lab_operator" */
  delete_lab_operator?: Maybe<Lab_Operator_Mutation_Response>;
  /** delete single row from the table: "lab_operator" */
  delete_lab_operator_by_pk?: Maybe<Lab_Operator>;
  /** delete data from the table: "lab_station" */
  delete_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** delete single row from the table: "lab_station" */
  delete_lab_station_by_pk?: Maybe<Lab_Station>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "smart_plug" */
  delete_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** delete single row from the table: "smart_plug" */
  delete_smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** delete data from the table: "smart_plug_metrics" */
  delete_smart_plug_metrics?: Maybe<Smart_Plug_Metrics_Mutation_Response>;
  /** delete data from the table: "student_group" */
  delete_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** delete single row from the table: "student_group" */
  delete_student_group_by_pk?: Maybe<Student_Group>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "lab" */
  insert_lab?: Maybe<Lab_Mutation_Response>;
  /** insert a single row into the table: "lab" */
  insert_lab_one?: Maybe<Lab>;
  /** insert data into the table: "lab_operator" */
  insert_lab_operator?: Maybe<Lab_Operator_Mutation_Response>;
  /** insert a single row into the table: "lab_operator" */
  insert_lab_operator_one?: Maybe<Lab_Operator>;
  /** insert data into the table: "lab_station" */
  insert_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** insert a single row into the table: "lab_station" */
  insert_lab_station_one?: Maybe<Lab_Station>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "smart_plug" */
  insert_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** insert data into the table: "smart_plug_metrics" */
  insert_smart_plug_metrics?: Maybe<Smart_Plug_Metrics_Mutation_Response>;
  /** insert a single row into the table: "smart_plug_metrics" */
  insert_smart_plug_metrics_one?: Maybe<Smart_Plug_Metrics>;
  /** insert a single row into the table: "smart_plug" */
  insert_smart_plug_one?: Maybe<Smart_Plug>;
  /** insert data into the table: "student_group" */
  insert_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** insert a single row into the table: "student_group" */
  insert_student_group_one?: Maybe<Student_Group>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "lab" */
  update_lab?: Maybe<Lab_Mutation_Response>;
  /** update single row of the table: "lab" */
  update_lab_by_pk?: Maybe<Lab>;
  /** update data of the table: "lab_operator" */
  update_lab_operator?: Maybe<Lab_Operator_Mutation_Response>;
  /** update single row of the table: "lab_operator" */
  update_lab_operator_by_pk?: Maybe<Lab_Operator>;
  /** update data of the table: "lab_station" */
  update_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** update single row of the table: "lab_station" */
  update_lab_station_by_pk?: Maybe<Lab_Station>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "smart_plug" */
  update_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** update single row of the table: "smart_plug" */
  update_smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** update data of the table: "smart_plug_metrics" */
  update_smart_plug_metrics?: Maybe<Smart_Plug_Metrics_Mutation_Response>;
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
export type Mutation_RootAddOperatorToLabArgs = {
  labId: Scalars["Int"];
  operatorId: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_LabArgs = {
  where: Lab_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lab_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Lab_OperatorArgs = {
  where: Lab_Operator_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lab_Operator_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Lab_StationArgs = {
  where: Lab_Station_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Lab_Station_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  title: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Smart_PlugArgs = {
  where: Smart_Plug_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Smart_Plug_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Smart_Plug_MetricsArgs = {
  where: Smart_Plug_Metrics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_GroupArgs = {
  where: Student_Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_Group_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars["String"];
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
export type Mutation_RootInsert_Lab_OperatorArgs = {
  objects: Array<Lab_Operator_Insert_Input>;
  on_conflict?: Maybe<Lab_Operator_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Lab_Operator_OneArgs = {
  object: Lab_Operator_Insert_Input;
  on_conflict?: Maybe<Lab_Operator_On_Conflict>;
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
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Smart_PlugArgs = {
  objects: Array<Smart_Plug_Insert_Input>;
  on_conflict?: Maybe<Smart_Plug_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Smart_Plug_MetricsArgs = {
  objects: Array<Smart_Plug_Metrics_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Smart_Plug_Metrics_OneArgs = {
  object: Smart_Plug_Metrics_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Smart_Plug_OneArgs = {
  object: Smart_Plug_Insert_Input;
  on_conflict?: Maybe<Smart_Plug_On_Conflict>;
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
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_LabArgs = {
  _inc?: Maybe<Lab_Inc_Input>;
  _set?: Maybe<Lab_Set_Input>;
  where: Lab_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lab_By_PkArgs = {
  _inc?: Maybe<Lab_Inc_Input>;
  _set?: Maybe<Lab_Set_Input>;
  pk_columns: Lab_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Lab_OperatorArgs = {
  _inc?: Maybe<Lab_Operator_Inc_Input>;
  _set?: Maybe<Lab_Operator_Set_Input>;
  where: Lab_Operator_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lab_Operator_By_PkArgs = {
  _inc?: Maybe<Lab_Operator_Inc_Input>;
  _set?: Maybe<Lab_Operator_Set_Input>;
  pk_columns: Lab_Operator_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Lab_StationArgs = {
  _inc?: Maybe<Lab_Station_Inc_Input>;
  _set?: Maybe<Lab_Station_Set_Input>;
  where: Lab_Station_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Lab_Station_By_PkArgs = {
  _inc?: Maybe<Lab_Station_Inc_Input>;
  _set?: Maybe<Lab_Station_Set_Input>;
  pk_columns: Lab_Station_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_PlugArgs = {
  _inc?: Maybe<Smart_Plug_Inc_Input>;
  _set?: Maybe<Smart_Plug_Set_Input>;
  where: Smart_Plug_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_Plug_By_PkArgs = {
  _inc?: Maybe<Smart_Plug_Inc_Input>;
  _set?: Maybe<Smart_Plug_Set_Input>;
  pk_columns: Smart_Plug_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Smart_Plug_MetricsArgs = {
  _inc?: Maybe<Smart_Plug_Metrics_Inc_Input>;
  _set?: Maybe<Smart_Plug_Metrics_Set_Input>;
  where: Smart_Plug_Metrics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_GroupArgs = {
  _inc?: Maybe<Student_Group_Inc_Input>;
  _set?: Maybe<Student_Group_Set_Input>;
  where: Student_Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_Group_By_PkArgs = {
  _inc?: Maybe<Student_Group_Inc_Input>;
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
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "lab" */
  lab: Array<Lab>;
  /** fetch aggregated fields from the table: "lab" */
  lab_aggregate: Lab_Aggregate;
  /** fetch data from the table: "lab" using primary key columns */
  lab_by_pk?: Maybe<Lab>;
  /** fetch data from the table: "lab_operator" */
  lab_operator: Array<Lab_Operator>;
  /** fetch aggregated fields from the table: "lab_operator" */
  lab_operator_aggregate: Lab_Operator_Aggregate;
  /** fetch data from the table: "lab_operator" using primary key columns */
  lab_operator_by_pk?: Maybe<Lab_Operator>;
  /** fetch data from the table: "lab_station" */
  lab_station: Array<Lab_Station>;
  /** fetch aggregated fields from the table: "lab_station" */
  lab_station_aggregate: Lab_Station_Aggregate;
  /** fetch data from the table: "lab_station" using primary key columns */
  lab_station_by_pk?: Maybe<Lab_Station>;
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
  /** An array relationship */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** An aggregate relationship */
  smart_plug_metrics_aggregate: Smart_Plug_Metrics_Aggregate;
  /** fetch data from the table: "student_group" */
  student_group: Array<Student_Group>;
  /** fetch aggregated fields from the table: "student_group" */
  student_group_aggregate: Student_Group_Aggregate;
  /** fetch data from the table: "student_group" using primary key columns */
  student_group_by_pk?: Maybe<Student_Group>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

export type Query_RootLabArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};

export type Query_RootLab_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};

export type Query_RootLab_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootLab_OperatorArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

export type Query_RootLab_Operator_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

export type Query_RootLab_Operator_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootLab_StationArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

export type Query_RootLab_Station_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

export type Query_RootLab_Station_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};

export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};

export type Query_RootRole_By_PkArgs = {
  title: Scalars["String"];
};

export type Query_RootSmart_PlugArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

export type Query_RootSmart_Plug_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

export type Query_RootSmart_Plug_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootSmart_Plug_MetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

export type Query_RootSmart_Plug_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

export type Query_RootStudent_GroupArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

export type Query_RootStudent_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

export type Query_RootStudent_Group_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars["String"];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: "role";
  comment: Scalars["String"];
  title: Scalars["String"];
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};

/** columns and relationships of "role" */
export type RoleUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "role" */
export type RoleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: "role_aggregate";
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: "role_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: Maybe<Array<Role_Bool_Exp>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Role_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = "user_roles_pkey",
}

export enum Role_Enum {
  /** Anonymous viewer. Can only see non-private data from students and smart_plug metrics */
  Anonymous = "anonymous",
  /** An employee of the university that works in the lab. */
  LabOperator = "lab_operator",
  /** A student of a lab. */
  Student = "student",
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: Maybe<Role_Enum>;
  _in?: Maybe<Array<Role_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Role_Enum>;
  _nin?: Maybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  comment?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: "role_max_fields";
  comment?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: "role_min_fields";
  comment?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: "role_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Role_On_Conflict>;
};

/** on conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  comment?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  title: Scalars["String"];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  Title = "title",
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  comment?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  Title = "title",
}

/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT.
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_Plug = {
  __typename?: "smart_plug";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["Int"];
  /** An object relationship */
  lab_station: Lab_Station;
  lab_station_id: Scalars["Int"];
  name: Scalars["String"];
  /** An array relationship */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** An aggregate relationship */
  smart_plug_metrics_aggregate: Smart_Plug_Metrics_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT.
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_PlugSmart_Plug_MetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT.
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_PlugSmart_Plug_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

/** aggregated selection of "smart_plug" */
export type Smart_Plug_Aggregate = {
  __typename?: "smart_plug_aggregate";
  aggregate?: Maybe<Smart_Plug_Aggregate_Fields>;
  nodes: Array<Smart_Plug>;
};

/** aggregate fields of "smart_plug" */
export type Smart_Plug_Aggregate_Fields = {
  __typename?: "smart_plug_aggregate_fields";
  avg?: Maybe<Smart_Plug_Avg_Fields>;
  count: Scalars["Int"];
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
  distinct?: Maybe<Scalars["Boolean"]>;
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
  __typename?: "smart_plug_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
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
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab_station?: Maybe<Lab_Station_Bool_Exp>;
  lab_station_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  smart_plug_metrics?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_plug" */
export enum Smart_Plug_Constraint {
  /** unique or primary key constraint */
  SmartPlugPkey = "smart_plug_pkey",
}

/** input type for incrementing numeric columns in table "smart_plug" */
export type Smart_Plug_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  lab_station_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "smart_plug" */
export type Smart_Plug_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_station?: Maybe<Lab_Station_Obj_Rel_Insert_Input>;
  lab_station_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  smart_plug_metrics?: Maybe<Smart_Plug_Metrics_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Smart_Plug_Max_Fields = {
  __typename?: "smart_plug_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_station_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "smart_plug" */
export type Smart_Plug_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "smart_plug_metrics" */
export type Smart_Plug_Metrics = {
  __typename?: "smart_plug_metrics";
  current: Scalars["float8"];
  /** An object relationship */
  smart_plug: Smart_Plug;
  smart_plug_id: Scalars["Int"];
  time: Scalars["timestamptz"];
};

/** aggregated selection of "smart_plug_metrics" */
export type Smart_Plug_Metrics_Aggregate = {
  __typename?: "smart_plug_metrics_aggregate";
  aggregate?: Maybe<Smart_Plug_Metrics_Aggregate_Fields>;
  nodes: Array<Smart_Plug_Metrics>;
};

/** aggregate fields of "smart_plug_metrics" */
export type Smart_Plug_Metrics_Aggregate_Fields = {
  __typename?: "smart_plug_metrics_aggregate_fields";
  avg?: Maybe<Smart_Plug_Metrics_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Smart_Plug_Metrics_Max_Fields>;
  min?: Maybe<Smart_Plug_Metrics_Min_Fields>;
  stddev?: Maybe<Smart_Plug_Metrics_Stddev_Fields>;
  stddev_pop?: Maybe<Smart_Plug_Metrics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smart_Plug_Metrics_Stddev_Samp_Fields>;
  sum?: Maybe<Smart_Plug_Metrics_Sum_Fields>;
  var_pop?: Maybe<Smart_Plug_Metrics_Var_Pop_Fields>;
  var_samp?: Maybe<Smart_Plug_Metrics_Var_Samp_Fields>;
  variance?: Maybe<Smart_Plug_Metrics_Variance_Fields>;
};

/** aggregate fields of "smart_plug_metrics" */
export type Smart_Plug_Metrics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
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

/** input type for inserting array relation for remote table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Arr_Rel_Insert_Input = {
  data: Array<Smart_Plug_Metrics_Insert_Input>;
};

/** aggregate avg on columns */
export type Smart_Plug_Metrics_Avg_Fields = {
  __typename?: "smart_plug_metrics_avg_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Avg_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smart_plug_metrics". All fields are combined with a logical 'AND'. */
export type Smart_Plug_Metrics_Bool_Exp = {
  _and?: Maybe<Array<Smart_Plug_Metrics_Bool_Exp>>;
  _not?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
  _or?: Maybe<Array<Smart_Plug_Metrics_Bool_Exp>>;
  current?: Maybe<Float8_Comparison_Exp>;
  smart_plug?: Maybe<Smart_Plug_Bool_Exp>;
  smart_plug_id?: Maybe<Int_Comparison_Exp>;
  time?: Maybe<Timestamptz_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Inc_Input = {
  current?: Maybe<Scalars["float8"]>;
  smart_plug_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Insert_Input = {
  current?: Maybe<Scalars["float8"]>;
  smart_plug?: Maybe<Smart_Plug_Obj_Rel_Insert_Input>;
  smart_plug_id?: Maybe<Scalars["Int"]>;
  time?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Smart_Plug_Metrics_Max_Fields = {
  __typename?: "smart_plug_metrics_max_fields";
  current?: Maybe<Scalars["float8"]>;
  smart_plug_id?: Maybe<Scalars["Int"]>;
  time?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Max_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Plug_Metrics_Min_Fields = {
  __typename?: "smart_plug_metrics_min_fields";
  current?: Maybe<Scalars["float8"]>;
  smart_plug_id?: Maybe<Scalars["Int"]>;
  time?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Min_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** response of any mutation on the table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Mutation_Response = {
  __typename?: "smart_plug_metrics_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Smart_Plug_Metrics>;
};

/** Ordering options when selecting data from "smart_plug_metrics". */
export type Smart_Plug_Metrics_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug?: Maybe<Smart_Plug_Order_By>;
  smart_plug_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** select columns of table "smart_plug_metrics" */
export enum Smart_Plug_Metrics_Select_Column {
  /** column name */
  Current = "current",
  /** column name */
  SmartPlugId = "smart_plug_id",
  /** column name */
  Time = "time",
}

/** input type for updating data in table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Set_Input = {
  current?: Maybe<Scalars["float8"]>;
  smart_plug_id?: Maybe<Scalars["Int"]>;
  time?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Smart_Plug_Metrics_Stddev_Fields = {
  __typename?: "smart_plug_metrics_stddev_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Stddev_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Plug_Metrics_Stddev_Pop_Fields = {
  __typename?: "smart_plug_metrics_stddev_pop_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Stddev_Pop_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Plug_Metrics_Stddev_Samp_Fields = {
  __typename?: "smart_plug_metrics_stddev_samp_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Stddev_Samp_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Smart_Plug_Metrics_Sum_Fields = {
  __typename?: "smart_plug_metrics_sum_fields";
  current?: Maybe<Scalars["float8"]>;
  smart_plug_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Sum_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Smart_Plug_Metrics_Var_Pop_Fields = {
  __typename?: "smart_plug_metrics_var_pop_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Var_Pop_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Plug_Metrics_Var_Samp_Fields = {
  __typename?: "smart_plug_metrics_var_samp_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Var_Samp_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Plug_Metrics_Variance_Fields = {
  __typename?: "smart_plug_metrics_variance_fields";
  current?: Maybe<Scalars["Float"]>;
  smart_plug_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "smart_plug_metrics" */
export type Smart_Plug_Metrics_Variance_Order_By = {
  current?: Maybe<Order_By>;
  smart_plug_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Smart_Plug_Min_Fields = {
  __typename?: "smart_plug_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_station_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "smart_plug" */
export type Smart_Plug_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "smart_plug" */
export type Smart_Plug_Mutation_Response = {
  __typename?: "smart_plug_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
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
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station?: Maybe<Lab_Station_Order_By>;
  lab_station_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  smart_plug_metrics_aggregate?: Maybe<Smart_Plug_Metrics_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: smart_plug */
export type Smart_Plug_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "smart_plug" */
export enum Smart_Plug_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  LabStationId = "lab_station_id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "smart_plug" */
export type Smart_Plug_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_station_id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Smart_Plug_Stddev_Fields = {
  __typename?: "smart_plug_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smart_Plug_Stddev_Pop_Fields = {
  __typename?: "smart_plug_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smart_Plug_Stddev_Samp_Fields = {
  __typename?: "smart_plug_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Smart_Plug_Sum_Fields = {
  __typename?: "smart_plug_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  lab_station_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "smart_plug" */
export type Smart_Plug_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** update columns of table "smart_plug" */
export enum Smart_Plug_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  LabStationId = "lab_station_id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** aggregate var_pop on columns */
export type Smart_Plug_Var_Pop_Fields = {
  __typename?: "smart_plug_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "smart_plug" */
export type Smart_Plug_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smart_Plug_Var_Samp_Fields = {
  __typename?: "smart_plug_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "smart_plug" */
export type Smart_Plug_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Smart_Plug_Variance_Fields = {
  __typename?: "smart_plug_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_station_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "smart_plug" */
export type Smart_Plug_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/**
 * Students are always grouped in groups of one or more students for each lab. Each group is usually assigned a lab_station.
 *
 *
 * columns and relationships of "student_group"
 */
export type Student_Group = {
  __typename?: "student_group";
  group_name: Scalars["String"];
  id: Scalars["Int"];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars["Int"];
  student_id: Scalars["String"];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "student_group" */
export type Student_Group_Aggregate = {
  __typename?: "student_group_aggregate";
  aggregate?: Maybe<Student_Group_Aggregate_Fields>;
  nodes: Array<Student_Group>;
};

/** aggregate fields of "student_group" */
export type Student_Group_Aggregate_Fields = {
  __typename?: "student_group_aggregate_fields";
  avg?: Maybe<Student_Group_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Student_Group_Max_Fields>;
  min?: Maybe<Student_Group_Min_Fields>;
  stddev?: Maybe<Student_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Student_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Student_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Student_Group_Sum_Fields>;
  var_pop?: Maybe<Student_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Student_Group_Var_Samp_Fields>;
  variance?: Maybe<Student_Group_Variance_Fields>;
};

/** aggregate fields of "student_group" */
export type Student_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Group_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type Student_Group_Avg_Fields = {
  __typename?: "student_group_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
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
  group_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab?: Maybe<Lab_Bool_Exp>;
  lab_id?: Maybe<Int_Comparison_Exp>;
  student_id?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "student_group" */
export enum Student_Group_Constraint {
  /** unique or primary key constraint */
  StudentGroupPkey = "student_group_pkey",
}

/** input type for incrementing numeric columns in table "student_group" */
export type Student_Group_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "student_group" */
export type Student_Group_Insert_Input = {
  group_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  lab?: Maybe<Lab_Obj_Rel_Insert_Input>;
  lab_id?: Maybe<Scalars["Int"]>;
  student_id?: Maybe<Scalars["String"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Student_Group_Max_Fields = {
  __typename?: "student_group_max_fields";
  group_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  student_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "student_group" */
export type Student_Group_Max_Order_By = {
  group_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Group_Min_Fields = {
  __typename?: "student_group_min_fields";
  group_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  student_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "student_group" */
export type Student_Group_Min_Order_By = {
  group_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_group" */
export type Student_Group_Mutation_Response = {
  __typename?: "student_group_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
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
  group_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: student_group */
export type Student_Group_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "student_group" */
export enum Student_Group_Select_Column {
  /** column name */
  GroupName = "group_name",
  /** column name */
  Id = "id",
  /** column name */
  LabId = "lab_id",
  /** column name */
  StudentId = "student_id",
}

/** input type for updating data in table "student_group" */
export type Student_Group_Set_Input = {
  group_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
  student_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Student_Group_Stddev_Fields = {
  __typename?: "student_group_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "student_group" */
export type Student_Group_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Student_Group_Stddev_Pop_Fields = {
  __typename?: "student_group_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "student_group" */
export type Student_Group_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Student_Group_Stddev_Samp_Fields = {
  __typename?: "student_group_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "student_group" */
export type Student_Group_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Student_Group_Sum_Fields = {
  __typename?: "student_group_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  lab_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "student_group" */
export type Student_Group_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** update columns of table "student_group" */
export enum Student_Group_Update_Column {
  /** column name */
  GroupName = "group_name",
  /** column name */
  Id = "id",
  /** column name */
  LabId = "lab_id",
  /** column name */
  StudentId = "student_id",
}

/** aggregate var_pop on columns */
export type Student_Group_Var_Pop_Fields = {
  __typename?: "student_group_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "student_group" */
export type Student_Group_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Student_Group_Var_Samp_Fields = {
  __typename?: "student_group_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "student_group" */
export type Student_Group_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Student_Group_Variance_Fields = {
  __typename?: "student_group_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  lab_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "student_group" */
export type Student_Group_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "lab" */
  lab: Array<Lab>;
  /** fetch aggregated fields from the table: "lab" */
  lab_aggregate: Lab_Aggregate;
  /** fetch data from the table: "lab" using primary key columns */
  lab_by_pk?: Maybe<Lab>;
  /** fetch data from the table: "lab_operator" */
  lab_operator: Array<Lab_Operator>;
  /** fetch aggregated fields from the table: "lab_operator" */
  lab_operator_aggregate: Lab_Operator_Aggregate;
  /** fetch data from the table: "lab_operator" using primary key columns */
  lab_operator_by_pk?: Maybe<Lab_Operator>;
  /** fetch data from the table: "lab_station" */
  lab_station: Array<Lab_Station>;
  /** fetch aggregated fields from the table: "lab_station" */
  lab_station_aggregate: Lab_Station_Aggregate;
  /** fetch data from the table: "lab_station" using primary key columns */
  lab_station_by_pk?: Maybe<Lab_Station>;
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
  /** An array relationship */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** An aggregate relationship */
  smart_plug_metrics_aggregate: Smart_Plug_Metrics_Aggregate;
  /** fetch data from the table: "student_group" */
  student_group: Array<Student_Group>;
  /** fetch aggregated fields from the table: "student_group" */
  student_group_aggregate: Student_Group_Aggregate;
  /** fetch data from the table: "student_group" using primary key columns */
  student_group_by_pk?: Maybe<Student_Group>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

export type Subscription_RootLabArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};

export type Subscription_RootLab_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};

export type Subscription_RootLab_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootLab_OperatorArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

export type Subscription_RootLab_Operator_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

export type Subscription_RootLab_Operator_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootLab_StationArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

export type Subscription_RootLab_Station_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};

export type Subscription_RootLab_Station_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_By_PkArgs = {
  title: Scalars["String"];
};

export type Subscription_RootSmart_PlugArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

export type Subscription_RootSmart_Plug_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Order_By>>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

export type Subscription_RootSmart_Plug_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootSmart_Plug_MetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

export type Subscription_RootSmart_Plug_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
};

export type Subscription_RootStudent_GroupArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

export type Subscription_RootStudent_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

export type Subscription_RootStudent_Group_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["String"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/**
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type User = {
  __typename?: "user";
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  /** This id is generated by firebase. */
  id: Scalars["String"];
  /** An array relationship */
  lab_operators: Array<Lab_Operator>;
  /** An aggregate relationship */
  lab_operators_aggregate: Lab_Operator_Aggregate;
  name?: Maybe<Scalars["String"]>;
  role_title: Role_Enum;
  /** An array relationship */
  student_groups: Array<Student_Group>;
  /** An aggregate relationship */
  student_groups_aggregate: Student_Group_Aggregate;
  /** An object relationship */
  user_role: Role;
  usp_id?: Maybe<Scalars["String"]>;
};

/**
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type UserLab_OperatorsArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

/**
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type UserLab_Operators_AggregateArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};

/**
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type UserStudent_GroupsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/**
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type UserStudent_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  lab_operators?: Maybe<Lab_Operator_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role_title?: Maybe<Role_Enum_Comparison_Exp>;
  student_groups?: Maybe<Student_Group_Bool_Exp>;
  user_role?: Maybe<Role_Bool_Exp>;
  usp_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  LabUsersEmailKey = "lab_users_email_key",
  /** unique or primary key constraint */
  LabUsersPkey = "lab_users_pkey",
  /** unique or primary key constraint */
  LabUsersUspIdKey = "lab_users_usp_id_key",
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  /** This id is generated by firebase. */
  id?: Maybe<Scalars["String"]>;
  lab_operators?: Maybe<Lab_Operator_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  role_title?: Maybe<Role_Enum>;
  student_groups?: Maybe<Student_Group_Arr_Rel_Insert_Input>;
  user_role?: Maybe<Role_Obj_Rel_Insert_Input>;
  usp_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  /** This id is generated by firebase. */
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  usp_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  /** This id is generated by firebase. */
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  usp_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  /** This id is generated by firebase. */
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  usp_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  /** This id is generated by firebase. */
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  usp_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_operators_aggregate?: Maybe<Lab_Operator_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  role_title?: Maybe<Order_By>;
  student_groups_aggregate?: Maybe<Student_Group_Aggregate_Order_By>;
  user_role?: Maybe<Role_Order_By>;
  usp_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  /** This id is generated by firebase. */
  id: Scalars["String"];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RoleTitle = "role_title",
  /** column name */
  UspId = "usp_id",
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  /** This id is generated by firebase. */
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  role_title?: Maybe<Role_Enum>;
  usp_id?: Maybe<Scalars["String"]>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RoleTitle = "role_title",
  /** column name */
  UspId = "usp_id",
}

export type AddOperatorToLabMutationVariables = Exact<{
  operatorId: Scalars["String"];
  labId: Scalars["Int"];
}>;

export type AddOperatorToLabMutation = { __typename?: "mutation_root" } & {
  insert_lab_operator_one?: Maybe<
    { __typename?: "lab_operator" } & Pick<Lab_Operator, "id">
  >;
};

export type GetUserRoleQueryVariables = Exact<{
  userId: Scalars["String"];
}>;

export type GetUserRoleQuery = { __typename?: "query_root" } & {
  user_by_pk?: Maybe<{ __typename?: "user" } & Pick<User, "role_title">>;
};
