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
  numeric: any;
  timestamptz: any;
};


export type AddOperatorToLabOutput = {
  __typename?: 'AddOperatorToLabOutput';
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

/** columns and relationships of "lab" */
export type Lab = {
  __typename?: 'lab';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  lab_operators: Array<Lab_Operator>;
  /** An array relationship */
  lab_stations: Array<Lab_Station>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  student_groups: Array<Student_Group>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "lab" */
export type LabLab_OperatorsArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
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
export type LabStudent_GroupsArgs = {
  distinct_on?: Maybe<Array<Student_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "lab". All fields are combined with a logical 'AND'. */
export type Lab_Bool_Exp = {
  _and?: Maybe<Array<Lab_Bool_Exp>>;
  _not?: Maybe<Lab_Bool_Exp>;
  _or?: Maybe<Array<Lab_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lab_operators?: Maybe<Lab_Operator_Bool_Exp>;
  lab_stations?: Maybe<Lab_Station_Bool_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  student_groups?: Maybe<Student_Group_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** response of any mutation on the table "lab" */
export type Lab_Mutation_Response = {
  __typename?: 'lab_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab>;
};

/** columns and relationships of "lab_operator" */
export type Lab_Operator = {
  __typename?: 'lab_operator';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars['Int'];
  operator_id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
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

/** input type for inserting data into table "lab_operator" */
export type Lab_Operator_Insert_Input = {
  lab_id?: Maybe<Scalars['Int']>;
  operator_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "lab_operator" */
export type Lab_Operator_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  operator_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  __typename?: 'lab_operator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lab_Operator>;
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

/** select columns of table "lab_operator" */
export enum Lab_Operator_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  OperatorId = 'operator_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "lab_operator" */
export type Lab_Operator_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "lab_operator" */
export type Lab_Operator_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "lab_operator" */
export type Lab_Operator_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "lab_operator" */
export type Lab_Operator_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "lab_operator" */
export type Lab_Operator_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "lab_operator" */
export type Lab_Operator_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "lab_operator" */
export type Lab_Operator_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "lab". */
export type Lab_Order_By = {
  created_at?: Maybe<Order_By>;
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
  deleted_at?: Maybe<Scalars['timestamptz']>;
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

/** input type for incrementing numeric columns in table "lab_station" */
export type Lab_Station_Inc_Input = {
  lab_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "lab_station" */
export type Lab_Station_Insert_Input = {
  lab_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  smart_plugs?: Maybe<Smart_Plug_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "lab_station" */
export type Lab_Station_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  deleted_at?: Maybe<Scalars['timestamptz']>;
  lab_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "lab_station" */
export type Lab_Station_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "lab_station" */
export type Lab_Station_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "lab_station" */
export type Lab_Station_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "lab_station" */
export type Lab_Station_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** update columns of table "lab_station" */
export enum Lab_Station_Update_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  Name = 'name'
}

/** order by var_pop() on columns of table "lab_station" */
export type Lab_Station_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "lab_station" */
export type Lab_Station_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "lab_station" */
export type Lab_Station_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  AddOperatorToLab?: Maybe<AddOperatorToLabOutput>;
  /** delete data from the table: "student_group" */
  delete_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** delete single row from the table: "student_group" */
  delete_student_group_by_pk?: Maybe<Student_Group>;
  /** insert data into the table: "lab_operator" */
  insert_lab_operator?: Maybe<Lab_Operator_Mutation_Response>;
  /** insert a single row into the table: "lab_operator" */
  insert_lab_operator_one?: Maybe<Lab_Operator>;
  /** insert data into the table: "lab_station" */
  insert_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** insert a single row into the table: "lab_station" */
  insert_lab_station_one?: Maybe<Lab_Station>;
  /** insert data into the table: "smart_plug" */
  insert_smart_plug?: Maybe<Smart_Plug_Mutation_Response>;
  /** insert a single row into the table: "smart_plug" */
  insert_smart_plug_one?: Maybe<Smart_Plug>;
  /** insert data into the table: "student_group" */
  insert_student_group?: Maybe<Student_Group_Mutation_Response>;
  /** insert a single row into the table: "student_group" */
  insert_student_group_one?: Maybe<Student_Group>;
  /** update data of the table: "lab" */
  update_lab?: Maybe<Lab_Mutation_Response>;
  /** update single row of the table: "lab" */
  update_lab_by_pk?: Maybe<Lab>;
  /** update data of the table: "lab_station" */
  update_lab_station?: Maybe<Lab_Station_Mutation_Response>;
  /** update single row of the table: "lab_station" */
  update_lab_station_by_pk?: Maybe<Lab_Station>;
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
export type Mutation_RootAddOperatorToLabArgs = {
  labId: Scalars['Int'];
  operatorId: Scalars['String'];
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
export type Mutation_RootInsert_Lab_OperatorArgs = {
  objects: Array<Lab_Operator_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Lab_Operator_OneArgs = {
  object: Lab_Operator_Insert_Input;
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


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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
  /** fetch data from the table: "lab" */
  lab: Array<Lab>;
  /** fetch data from the table: "lab" using primary key columns */
  lab_by_pk?: Maybe<Lab>;
  /** fetch data from the table: "lab_operator" */
  lab_operator: Array<Lab_Operator>;
  /** fetch data from the table: "lab_operator" using primary key columns */
  lab_operator_by_pk?: Maybe<Lab_Operator>;
  /** fetch data from the table: "lab_station" */
  lab_station: Array<Lab_Station>;
  /** fetch data from the table: "lab_station" using primary key columns */
  lab_station_by_pk?: Maybe<Lab_Station>;
  /** fetch data from the table: "smart_plug" */
  smart_plug: Array<Smart_Plug>;
  /** fetch data from the table: "smart_plug" using primary key columns */
  smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** An array relationship */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** fetch data from the table: "smart_plug_status" */
  smart_plug_status: Array<Smart_Plug_Status>;
  /** fetch data from the table: "student_group" */
  student_group: Array<Student_Group>;
  /** fetch data from the table: "student_group" using primary key columns */
  student_group_by_pk?: Maybe<Student_Group>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootLabArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};


export type Query_RootLab_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLab_OperatorArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};


export type Query_RootLab_Operator_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLab_StationArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


export type Query_RootLab_Station_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSmart_PlugArgs = {
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


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

export enum Role_Enum {
  /** Anonymous viewer. Can only see non-private data from students and smart_plug metrics */
  Anonymous = 'anonymous',
  /** An employee of the university that works in the lab. */
  LabOperator = 'lab_operator',
  /** A student of a lab. */
  Student = 'student'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: Maybe<Role_Enum>;
  _in?: Maybe<Array<Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Role_Enum>;
  _nin?: Maybe<Array<Role_Enum>>;
};

/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT.
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_Plug = {
  __typename?: 'smart_plug';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  lab_station: Lab_Station;
  lab_station_id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** An object relationship */
  status?: Maybe<Smart_Plug_Status>;
  updated_at: Scalars['timestamptz'];
};


/**
 * A smart plug is a device used to turn lab equipments into IoT-enabled devices. It receives commands and generates metrics via MQTT.
 *
 *
 * columns and relationships of "smart_plug"
 */
export type Smart_PlugSmart_Plug_MetricsArgs = {
  distinct_on?: Maybe<Array<Smart_Plug_Metrics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Smart_Plug_Metrics_Order_By>>;
  where?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
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
  id?: Maybe<Int_Comparison_Exp>;
  lab_station?: Maybe<Lab_Station_Bool_Exp>;
  lab_station_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  smart_plug_metrics?: Maybe<Smart_Plug_Metrics_Bool_Exp>;
  status?: Maybe<Smart_Plug_Status_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "smart_plug" */
export enum Smart_Plug_Constraint {
  /** unique or primary key constraint */
  SmartPlugChipIdKey = 'smart_plug_chip_id_key',
  /** unique or primary key constraint */
  SmartPlugPkey = 'smart_plug_pkey'
}

/** input type for incrementing numeric columns in table "smart_plug" */
export type Smart_Plug_Inc_Input = {
  lab_station_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "smart_plug" */
export type Smart_Plug_Insert_Input = {
  lab_station?: Maybe<Lab_Station_Obj_Rel_Insert_Input>;
  lab_station_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "smart_plug" */
export type Smart_Plug_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "smart_plug_metrics" */
export type Smart_Plug_Metrics = {
  __typename?: 'smart_plug_metrics';
  power: Scalars['numeric'];
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
  power?: Maybe<Numeric_Comparison_Exp>;
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

/** order by min() on columns of table "smart_plug" */
export type Smart_Plug_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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

/** on conflict condition type for table "smart_plug" */
export type Smart_Plug_On_Conflict = {
  constraint: Smart_Plug_Constraint;
  update_columns?: Array<Smart_Plug_Update_Column>;
  where?: Maybe<Smart_Plug_Bool_Exp>;
};

/** Ordering options when selecting data from "smart_plug". */
export type Smart_Plug_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_station?: Maybe<Lab_Station_Order_By>;
  lab_station_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  smart_plug_metrics_aggregate?: Maybe<Smart_Plug_Metrics_Aggregate_Order_By>;
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
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LabStationId = 'lab_station_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "smart_plug" */
export type Smart_Plug_Set_Input = {
  deleted_at?: Maybe<Scalars['timestamptz']>;
  lab_station_id?: Maybe<Scalars['Int']>;
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

/** order by stddev() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "smart_plug" */
export type Smart_Plug_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "smart_plug" */
export type Smart_Plug_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** update columns of table "smart_plug" */
export enum Smart_Plug_Update_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  LabStationId = 'lab_station_id',
  /** column name */
  Name = 'name'
}

/** order by var_pop() on columns of table "smart_plug" */
export type Smart_Plug_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "smart_plug" */
export type Smart_Plug_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lab_station_id?: Maybe<Order_By>;
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
  __typename?: 'student_group';
  group_name: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  lab: Lab;
  lab_id: Scalars['Int'];
  student_id: Scalars['String'];
  /** An object relationship */
  user: User;
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
  StudentGroupPkey = 'student_group_pkey'
}

/** input type for incrementing numeric columns in table "student_group" */
export type Student_Group_Inc_Input = {
  lab_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "student_group" */
export type Student_Group_Insert_Input = {
  group_name?: Maybe<Scalars['String']>;
  lab_id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "student_group" */
export type Student_Group_Max_Order_By = {
  group_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
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
  group_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab?: Maybe<Lab_Order_By>;
  lab_id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: student_group */
export type Student_Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "student_group" */
export enum Student_Group_Select_Column {
  /** column name */
  GroupName = 'group_name',
  /** column name */
  Id = 'id',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  StudentId = 'student_id'
}

/** input type for updating data in table "student_group" */
export type Student_Group_Set_Input = {
  group_name?: Maybe<Scalars['String']>;
  lab_id?: Maybe<Scalars['Int']>;
  student_id?: Maybe<Scalars['String']>;
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
  GroupName = 'group_name',
  /** column name */
  LabId = 'lab_id',
  /** column name */
  StudentId = 'student_id'
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
  /** fetch data from the table: "lab" */
  lab: Array<Lab>;
  /** fetch data from the table: "lab" using primary key columns */
  lab_by_pk?: Maybe<Lab>;
  /** fetch data from the table: "lab_operator" */
  lab_operator: Array<Lab_Operator>;
  /** fetch data from the table: "lab_operator" using primary key columns */
  lab_operator_by_pk?: Maybe<Lab_Operator>;
  /** fetch data from the table: "lab_station" */
  lab_station: Array<Lab_Station>;
  /** fetch data from the table: "lab_station" using primary key columns */
  lab_station_by_pk?: Maybe<Lab_Station>;
  /** fetch data from the table: "smart_plug" */
  smart_plug: Array<Smart_Plug>;
  /** fetch data from the table: "smart_plug" using primary key columns */
  smart_plug_by_pk?: Maybe<Smart_Plug>;
  /** An array relationship */
  smart_plug_metrics: Array<Smart_Plug_Metrics>;
  /** fetch data from the table: "smart_plug_status" */
  smart_plug_status: Array<Smart_Plug_Status>;
  /** fetch data from the table: "student_group" */
  student_group: Array<Student_Group>;
  /** fetch data from the table: "student_group" using primary key columns */
  student_group_by_pk?: Maybe<Student_Group>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootLabArgs = {
  distinct_on?: Maybe<Array<Lab_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Order_By>>;
  where?: Maybe<Lab_Bool_Exp>;
};


export type Subscription_RootLab_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLab_OperatorArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Operator_Order_By>>;
  where?: Maybe<Lab_Operator_Bool_Exp>;
};


export type Subscription_RootLab_Operator_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLab_StationArgs = {
  distinct_on?: Maybe<Array<Lab_Station_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lab_Station_Order_By>>;
  where?: Maybe<Lab_Station_Bool_Exp>;
};


export type Subscription_RootLab_Station_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSmart_PlugArgs = {
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


export type Subscription_RootUserArgs = {
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
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type User = {
  __typename?: 'user';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  /** This id is generated by firebase. */
  id: Scalars['String'];
  /** An array relationship */
  lab_operators: Array<Lab_Operator>;
  name?: Maybe<Scalars['String']>;
  role_title: Role_Enum;
  /** An array relationship */
  student_groups: Array<Student_Group>;
  usp_id?: Maybe<Scalars['String']>;
};


/**
 * All fields are nullable so we can comply with LGPD (a brazilian version of europe's GDPR). The only entity allowed to create users in this table is firebase itself, otherwise we risk running into syncing issues between the auth provider and our own user table.
 *
 *
 * columns and relationships of "user"
 */
export type UserLab_OperatorsArgs = {
  distinct_on?: Maybe<Array<Lab_Operator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Group_Order_By>>;
  where?: Maybe<Student_Group_Bool_Exp>;
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
  usp_id?: Maybe<String_Comparison_Exp>;
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
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lab_operators_aggregate?: Maybe<Lab_Operator_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  role_title?: Maybe<Order_By>;
  student_groups_aggregate?: Maybe<Student_Group_Aggregate_Order_By>;
  usp_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  /** This id is generated by firebase. */
  id: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RoleTitle = 'role_title',
  /** column name */
  UspId = 'usp_id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role_title?: Maybe<Role_Enum>;
  usp_id?: Maybe<Scalars['String']>;
};

export type MySubscriptionSubscriptionVariables = Exact<{
  time: Scalars['timestamptz'];
}>;


export type MySubscriptionSubscription = (
  { __typename?: 'subscription_root' }
  & { smart_plug_metrics: Array<(
    { __typename?: 'smart_plug_metrics' }
    & Pick<Smart_Plug_Metrics, 'power' | 'smart_plug_chip_id' | 'time'>
  )> }
);


export const MySubscriptionDocument = gql`
    subscription MySubscription($time: timestamptz!) {
  smart_plug_metrics(order_by: {time: asc}, where: {time: {_gt: $time}}) {
    power
    smart_plug_chip_id
    time
  }
}
    `;

/**
 * __useMySubscriptionSubscription__
 *
 * To run a query within a React component, call `useMySubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMySubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySubscriptionSubscription({
 *   variables: {
 *      time: // value for 'time'
 *   },
 * });
 */
export function useMySubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<MySubscriptionSubscription, MySubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MySubscriptionSubscription, MySubscriptionSubscriptionVariables>(MySubscriptionDocument, options);
      }
export type MySubscriptionSubscriptionHookResult = ReturnType<typeof useMySubscriptionSubscription>;
export type MySubscriptionSubscriptionResult = Apollo.SubscriptionResult<MySubscriptionSubscription>;