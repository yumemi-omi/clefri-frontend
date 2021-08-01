import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: string;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
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
export type StringComparisonExp = {
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

/** columns and relationships of "box" */
export type Box = {
  __typename?: 'box';
  box_id: Scalars['uuid'];
  box_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  /** An array relationship */
  foodstuffs: Array<Foodstuff>;
  /** An aggregate relationship */
  foodstuffs_aggregate: FoodstuffAggregate;
  /** An object relationship */
  space: Space;
  space_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
};


/** columns and relationships of "box" */
export type BoxFoodstuffsArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


/** columns and relationships of "box" */
export type BoxFoodstuffsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};

/** aggregated selection of "box" */
export type BoxAggregate = {
  __typename?: 'box_aggregate';
  aggregate?: Maybe<BoxAggregateFields>;
  nodes: Array<Box>;
};

/** aggregate fields of "box" */
export type BoxAggregateFields = {
  __typename?: 'box_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<BoxMaxFields>;
  min?: Maybe<BoxMinFields>;
};


/** aggregate fields of "box" */
export type BoxAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BoxSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "box" */
export type BoxAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<BoxMaxOrderBy>;
  min?: Maybe<BoxMinOrderBy>;
};

/** input type for inserting array relation for remote table "box" */
export type BoxArrRelInsertInput = {
  data: Array<BoxInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<BoxOnConflict>;
};

/** Boolean expression to filter rows from the table "box". All fields are combined with a logical 'AND'. */
export type BoxBoolExp = {
  _and?: Maybe<Array<BoxBoolExp>>;
  _not?: Maybe<BoxBoolExp>;
  _or?: Maybe<Array<BoxBoolExp>>;
  box_id?: Maybe<UuidComparisonExp>;
  box_name?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  created_by?: Maybe<StringComparisonExp>;
  foodstuffs?: Maybe<FoodstuffBoolExp>;
  space?: Maybe<SpaceBoolExp>;
  space_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UserBoolExp>;
};

/** unique or primary key constraints on table "box" */
export enum BoxConstraint {
  /** unique or primary key constraint */
  BoxesPkey = 'boxes_pkey'
}

/** input type for inserting data into table "box" */
export type BoxInsertInput = {
  box_id?: Maybe<Scalars['uuid']>;
  box_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  foodstuffs?: Maybe<FoodstuffArrRelInsertInput>;
  space?: Maybe<SpaceObjRelInsertInput>;
  space_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type BoxMaxFields = {
  __typename?: 'box_max_fields';
  box_id?: Maybe<Scalars['uuid']>;
  box_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "box" */
export type BoxMaxOrderBy = {
  box_id?: Maybe<OrderBy>;
  box_name?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type BoxMinFields = {
  __typename?: 'box_min_fields';
  box_id?: Maybe<Scalars['uuid']>;
  box_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "box" */
export type BoxMinOrderBy = {
  box_id?: Maybe<OrderBy>;
  box_name?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "box" */
export type BoxMutationResponse = {
  __typename?: 'box_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Box>;
};

/** input type for inserting object relation for remote table "box" */
export type BoxObjRelInsertInput = {
  data: BoxInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<BoxOnConflict>;
};

/** on conflict condition type for table "box" */
export type BoxOnConflict = {
  constraint: BoxConstraint;
  update_columns?: Array<BoxUpdateColumn>;
  where?: Maybe<BoxBoolExp>;
};

/** Ordering options when selecting data from "box". */
export type BoxOrderBy = {
  box_id?: Maybe<OrderBy>;
  box_name?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  foodstuffs_aggregate?: Maybe<FoodstuffAggregateOrderBy>;
  space?: Maybe<SpaceOrderBy>;
  space_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
};

/** primary key columns input for table: box */
export type BoxPkColumnsInput = {
  box_id: Scalars['uuid'];
};

/** select columns of table "box" */
export enum BoxSelectColumn {
  /** column name */
  BoxId = 'box_id',
  /** column name */
  BoxName = 'box_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "box" */
export type BoxSetInput = {
  box_id?: Maybe<Scalars['uuid']>;
  box_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "box" */
export enum BoxUpdateColumn {
  /** column name */
  BoxId = 'box_id',
  /** column name */
  BoxName = 'box_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "foodstuff" */
export type Foodstuff = {
  __typename?: 'foodstuff';
  /** An object relationship */
  box: Box;
  box_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  foodstuff_id: Scalars['uuid'];
  foodstuff_name?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "foodstuff" */
export type FoodstuffAggregate = {
  __typename?: 'foodstuff_aggregate';
  aggregate?: Maybe<FoodstuffAggregateFields>;
  nodes: Array<Foodstuff>;
};

/** aggregate fields of "foodstuff" */
export type FoodstuffAggregateFields = {
  __typename?: 'foodstuff_aggregate_fields';
  avg?: Maybe<FoodstuffAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FoodstuffMaxFields>;
  min?: Maybe<FoodstuffMinFields>;
  stddev?: Maybe<FoodstuffStddevFields>;
  stddev_pop?: Maybe<FoodstuffStddevPopFields>;
  stddev_samp?: Maybe<FoodstuffStddevSampFields>;
  sum?: Maybe<FoodstuffSumFields>;
  var_pop?: Maybe<FoodstuffVarPopFields>;
  var_samp?: Maybe<FoodstuffVarSampFields>;
  variance?: Maybe<FoodstuffVarianceFields>;
};


/** aggregate fields of "foodstuff" */
export type FoodstuffAggregateFieldsCountArgs = {
  columns?: Maybe<Array<FoodstuffSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "foodstuff" */
export type FoodstuffAggregateOrderBy = {
  avg?: Maybe<FoodstuffAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<FoodstuffMaxOrderBy>;
  min?: Maybe<FoodstuffMinOrderBy>;
  stddev?: Maybe<FoodstuffStddevOrderBy>;
  stddev_pop?: Maybe<FoodstuffStddevPopOrderBy>;
  stddev_samp?: Maybe<FoodstuffStddevSampOrderBy>;
  sum?: Maybe<FoodstuffSumOrderBy>;
  var_pop?: Maybe<FoodstuffVarPopOrderBy>;
  var_samp?: Maybe<FoodstuffVarSampOrderBy>;
  variance?: Maybe<FoodstuffVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "foodstuff" */
export type FoodstuffArrRelInsertInput = {
  data: Array<FoodstuffInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<FoodstuffOnConflict>;
};

/** aggregate avg on columns */
export type FoodstuffAvgFields = {
  __typename?: 'foodstuff_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "foodstuff" */
export type FoodstuffAvgOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "foodstuff". All fields are combined with a logical 'AND'. */
export type FoodstuffBoolExp = {
  _and?: Maybe<Array<FoodstuffBoolExp>>;
  _not?: Maybe<FoodstuffBoolExp>;
  _or?: Maybe<Array<FoodstuffBoolExp>>;
  box?: Maybe<BoxBoolExp>;
  box_id?: Maybe<UuidComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  created_by?: Maybe<StringComparisonExp>;
  foodstuff_id?: Maybe<UuidComparisonExp>;
  foodstuff_name?: Maybe<StringComparisonExp>;
  quantity?: Maybe<IntComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UserBoolExp>;
};

/** unique or primary key constraints on table "foodstuff" */
export enum FoodstuffConstraint {
  /** unique or primary key constraint */
  FoodstuffsPkey = 'foodstuffs_pkey'
}

/** input type for incrementing numeric columns in table "foodstuff" */
export type FoodstuffIncInput = {
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "foodstuff" */
export type FoodstuffInsertInput = {
  box?: Maybe<BoxObjRelInsertInput>;
  box_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  foodstuff_id?: Maybe<Scalars['uuid']>;
  foodstuff_name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type FoodstuffMaxFields = {
  __typename?: 'foodstuff_max_fields';
  box_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  foodstuff_id?: Maybe<Scalars['uuid']>;
  foodstuff_name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "foodstuff" */
export type FoodstuffMaxOrderBy = {
  box_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  foodstuff_id?: Maybe<OrderBy>;
  foodstuff_name?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type FoodstuffMinFields = {
  __typename?: 'foodstuff_min_fields';
  box_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  foodstuff_id?: Maybe<Scalars['uuid']>;
  foodstuff_name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "foodstuff" */
export type FoodstuffMinOrderBy = {
  box_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  foodstuff_id?: Maybe<OrderBy>;
  foodstuff_name?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "foodstuff" */
export type FoodstuffMutationResponse = {
  __typename?: 'foodstuff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Foodstuff>;
};

/** on conflict condition type for table "foodstuff" */
export type FoodstuffOnConflict = {
  constraint: FoodstuffConstraint;
  update_columns?: Array<FoodstuffUpdateColumn>;
  where?: Maybe<FoodstuffBoolExp>;
};

/** Ordering options when selecting data from "foodstuff". */
export type FoodstuffOrderBy = {
  box?: Maybe<BoxOrderBy>;
  box_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  foodstuff_id?: Maybe<OrderBy>;
  foodstuff_name?: Maybe<OrderBy>;
  quantity?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
};

/** primary key columns input for table: foodstuff */
export type FoodstuffPkColumnsInput = {
  foodstuff_id: Scalars['uuid'];
};

/** select columns of table "foodstuff" */
export enum FoodstuffSelectColumn {
  /** column name */
  BoxId = 'box_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FoodstuffId = 'foodstuff_id',
  /** column name */
  FoodstuffName = 'foodstuff_name',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "foodstuff" */
export type FoodstuffSetInput = {
  box_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  foodstuff_id?: Maybe<Scalars['uuid']>;
  foodstuff_name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type FoodstuffStddevFields = {
  __typename?: 'foodstuff_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "foodstuff" */
export type FoodstuffStddevOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type FoodstuffStddevPopFields = {
  __typename?: 'foodstuff_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "foodstuff" */
export type FoodstuffStddevPopOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type FoodstuffStddevSampFields = {
  __typename?: 'foodstuff_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "foodstuff" */
export type FoodstuffStddevSampOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type FoodstuffSumFields = {
  __typename?: 'foodstuff_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "foodstuff" */
export type FoodstuffSumOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** update columns of table "foodstuff" */
export enum FoodstuffUpdateColumn {
  /** column name */
  BoxId = 'box_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  FoodstuffId = 'foodstuff_id',
  /** column name */
  FoodstuffName = 'foodstuff_name',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type FoodstuffVarPopFields = {
  __typename?: 'foodstuff_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "foodstuff" */
export type FoodstuffVarPopOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type FoodstuffVarSampFields = {
  __typename?: 'foodstuff_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "foodstuff" */
export type FoodstuffVarSampOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type FoodstuffVarianceFields = {
  __typename?: 'foodstuff_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "foodstuff" */
export type FoodstuffVarianceOrderBy = {
  quantity?: Maybe<OrderBy>;
};

/** columns and relationships of "mst_category" */
export type MstCategory = {
  __typename?: 'mst_category';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mst_category_id: Scalars['uuid'];
  mst_category_name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "mst_category" */
export type MstCategoryAggregate = {
  __typename?: 'mst_category_aggregate';
  aggregate?: Maybe<MstCategoryAggregateFields>;
  nodes: Array<MstCategory>;
};

/** aggregate fields of "mst_category" */
export type MstCategoryAggregateFields = {
  __typename?: 'mst_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MstCategoryMaxFields>;
  min?: Maybe<MstCategoryMinFields>;
};


/** aggregate fields of "mst_category" */
export type MstCategoryAggregateFieldsCountArgs = {
  columns?: Maybe<Array<MstCategorySelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "mst_category". All fields are combined with a logical 'AND'. */
export type MstCategoryBoolExp = {
  _and?: Maybe<Array<MstCategoryBoolExp>>;
  _not?: Maybe<MstCategoryBoolExp>;
  _or?: Maybe<Array<MstCategoryBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  mst_category_id?: Maybe<UuidComparisonExp>;
  mst_category_name?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "mst_category" */
export enum MstCategoryConstraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey',
  /** unique or primary key constraint */
  MstCategoryIdKey = 'mst_category_id_key'
}

/** input type for inserting data into table "mst_category" */
export type MstCategoryInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_category_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type MstCategoryMaxFields = {
  __typename?: 'mst_category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_category_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MstCategoryMinFields = {
  __typename?: 'mst_category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_category_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "mst_category" */
export type MstCategoryMutationResponse = {
  __typename?: 'mst_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MstCategory>;
};

/** on conflict condition type for table "mst_category" */
export type MstCategoryOnConflict = {
  constraint: MstCategoryConstraint;
  update_columns?: Array<MstCategoryUpdateColumn>;
  where?: Maybe<MstCategoryBoolExp>;
};

/** Ordering options when selecting data from "mst_category". */
export type MstCategoryOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mst_category_id?: Maybe<OrderBy>;
  mst_category_name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: mst_category */
export type MstCategoryPkColumnsInput = {
  mst_category_id: Scalars['uuid'];
};

/** select columns of table "mst_category" */
export enum MstCategorySelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MstCategoryId = 'mst_category_id',
  /** column name */
  MstCategoryName = 'mst_category_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mst_category" */
export type MstCategorySetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_category_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "mst_category" */
export enum MstCategoryUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MstCategoryId = 'mst_category_id',
  /** column name */
  MstCategoryName = 'mst_category_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "mst_foodstuff" */
export type MstFoodstuff = {
  __typename?: 'mst_foodstuff';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mst_category_id: Scalars['uuid'];
  mst_foodstuff_id: Scalars['uuid'];
  mst_foodstuff_name: Scalars['String'];
  mst_picture_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "mst_foodstuff" */
export type MstFoodstuffAggregate = {
  __typename?: 'mst_foodstuff_aggregate';
  aggregate?: Maybe<MstFoodstuffAggregateFields>;
  nodes: Array<MstFoodstuff>;
};

/** aggregate fields of "mst_foodstuff" */
export type MstFoodstuffAggregateFields = {
  __typename?: 'mst_foodstuff_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MstFoodstuffMaxFields>;
  min?: Maybe<MstFoodstuffMinFields>;
};


/** aggregate fields of "mst_foodstuff" */
export type MstFoodstuffAggregateFieldsCountArgs = {
  columns?: Maybe<Array<MstFoodstuffSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "mst_foodstuff". All fields are combined with a logical 'AND'. */
export type MstFoodstuffBoolExp = {
  _and?: Maybe<Array<MstFoodstuffBoolExp>>;
  _not?: Maybe<MstFoodstuffBoolExp>;
  _or?: Maybe<Array<MstFoodstuffBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  mst_category_id?: Maybe<UuidComparisonExp>;
  mst_foodstuff_id?: Maybe<UuidComparisonExp>;
  mst_foodstuff_name?: Maybe<StringComparisonExp>;
  mst_picture_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "mst_foodstuff" */
export enum MstFoodstuffConstraint {
  /** unique or primary key constraint */
  MstFoodstuffIdKey = 'mst_foodstuff_id_key',
  /** unique or primary key constraint */
  MstFoodstuffsPkey = 'mst_foodstuffs_pkey'
}

/** input type for inserting data into table "mst_foodstuff" */
export type MstFoodstuffInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_name?: Maybe<Scalars['String']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type MstFoodstuffMaxFields = {
  __typename?: 'mst_foodstuff_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_name?: Maybe<Scalars['String']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MstFoodstuffMinFields = {
  __typename?: 'mst_foodstuff_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_name?: Maybe<Scalars['String']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "mst_foodstuff" */
export type MstFoodstuffMutationResponse = {
  __typename?: 'mst_foodstuff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MstFoodstuff>;
};

/** on conflict condition type for table "mst_foodstuff" */
export type MstFoodstuffOnConflict = {
  constraint: MstFoodstuffConstraint;
  update_columns?: Array<MstFoodstuffUpdateColumn>;
  where?: Maybe<MstFoodstuffBoolExp>;
};

/** Ordering options when selecting data from "mst_foodstuff". */
export type MstFoodstuffOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mst_category_id?: Maybe<OrderBy>;
  mst_foodstuff_id?: Maybe<OrderBy>;
  mst_foodstuff_name?: Maybe<OrderBy>;
  mst_picture_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: mst_foodstuff */
export type MstFoodstuffPkColumnsInput = {
  mst_foodstuff_id: Scalars['uuid'];
};

/** select columns of table "mst_foodstuff" */
export enum MstFoodstuffSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MstCategoryId = 'mst_category_id',
  /** column name */
  MstFoodstuffId = 'mst_foodstuff_id',
  /** column name */
  MstFoodstuffName = 'mst_foodstuff_name',
  /** column name */
  MstPictureId = 'mst_picture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mst_foodstuff" */
export type MstFoodstuffSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_category_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_id?: Maybe<Scalars['uuid']>;
  mst_foodstuff_name?: Maybe<Scalars['String']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "mst_foodstuff" */
export enum MstFoodstuffUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MstCategoryId = 'mst_category_id',
  /** column name */
  MstFoodstuffId = 'mst_foodstuff_id',
  /** column name */
  MstFoodstuffName = 'mst_foodstuff_name',
  /** column name */
  MstPictureId = 'mst_picture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "mst_picture" */
export type MstPicture = {
  __typename?: 'mst_picture';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  mst_picture_id: Scalars['uuid'];
  mst_picture_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "mst_picture" */
export type MstPictureAggregate = {
  __typename?: 'mst_picture_aggregate';
  aggregate?: Maybe<MstPictureAggregateFields>;
  nodes: Array<MstPicture>;
};

/** aggregate fields of "mst_picture" */
export type MstPictureAggregateFields = {
  __typename?: 'mst_picture_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MstPictureMaxFields>;
  min?: Maybe<MstPictureMinFields>;
};


/** aggregate fields of "mst_picture" */
export type MstPictureAggregateFieldsCountArgs = {
  columns?: Maybe<Array<MstPictureSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "mst_picture". All fields are combined with a logical 'AND'. */
export type MstPictureBoolExp = {
  _and?: Maybe<Array<MstPictureBoolExp>>;
  _not?: Maybe<MstPictureBoolExp>;
  _or?: Maybe<Array<MstPictureBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  mst_picture_id?: Maybe<UuidComparisonExp>;
  mst_picture_url?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "mst_picture" */
export enum MstPictureConstraint {
  /** unique or primary key constraint */
  MstPictureIdKey = 'mst_picture_id_key',
  /** unique or primary key constraint */
  PicturesPkey = 'pictures_pkey'
}

/** input type for inserting data into table "mst_picture" */
export type MstPictureInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  mst_picture_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type MstPictureMaxFields = {
  __typename?: 'mst_picture_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  mst_picture_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type MstPictureMinFields = {
  __typename?: 'mst_picture_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  mst_picture_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "mst_picture" */
export type MstPictureMutationResponse = {
  __typename?: 'mst_picture_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MstPicture>;
};

/** on conflict condition type for table "mst_picture" */
export type MstPictureOnConflict = {
  constraint: MstPictureConstraint;
  update_columns?: Array<MstPictureUpdateColumn>;
  where?: Maybe<MstPictureBoolExp>;
};

/** Ordering options when selecting data from "mst_picture". */
export type MstPictureOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mst_picture_id?: Maybe<OrderBy>;
  mst_picture_url?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: mst_picture */
export type MstPicturePkColumnsInput = {
  mst_picture_id: Scalars['uuid'];
};

/** select columns of table "mst_picture" */
export enum MstPictureSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MstPictureId = 'mst_picture_id',
  /** column name */
  MstPictureUrl = 'mst_picture_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mst_picture" */
export type MstPictureSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mst_picture_id?: Maybe<Scalars['uuid']>;
  mst_picture_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "mst_picture" */
export enum MstPictureUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MstPictureId = 'mst_picture_id',
  /** column name */
  MstPictureUrl = 'mst_picture_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "box" */
  delete_box?: Maybe<BoxMutationResponse>;
  /** delete single row from the table: "box" */
  delete_box_by_pk?: Maybe<Box>;
  /** delete data from the table: "foodstuff" */
  delete_foodstuff?: Maybe<FoodstuffMutationResponse>;
  /** delete single row from the table: "foodstuff" */
  delete_foodstuff_by_pk?: Maybe<Foodstuff>;
  /** delete data from the table: "mst_category" */
  delete_mst_category?: Maybe<MstCategoryMutationResponse>;
  /** delete single row from the table: "mst_category" */
  delete_mst_category_by_pk?: Maybe<MstCategory>;
  /** delete data from the table: "mst_foodstuff" */
  delete_mst_foodstuff?: Maybe<MstFoodstuffMutationResponse>;
  /** delete single row from the table: "mst_foodstuff" */
  delete_mst_foodstuff_by_pk?: Maybe<MstFoodstuff>;
  /** delete data from the table: "mst_picture" */
  delete_mst_picture?: Maybe<MstPictureMutationResponse>;
  /** delete single row from the table: "mst_picture" */
  delete_mst_picture_by_pk?: Maybe<MstPicture>;
  /** delete data from the table: "space" */
  delete_space?: Maybe<SpaceMutationResponse>;
  /** delete single row from the table: "space" */
  delete_space_by_pk?: Maybe<Space>;
  /** delete data from the table: "space_owner" */
  delete_space_owner?: Maybe<SpaceOwnerMutationResponse>;
  /** delete single row from the table: "space_owner" */
  delete_space_owner_by_pk?: Maybe<SpaceOwner>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_status" */
  delete_user_status?: Maybe<UserStatusMutationResponse>;
  /** delete single row from the table: "user_status" */
  delete_user_status_by_pk?: Maybe<UserStatus>;
  /** insert data into the table: "box" */
  insert_box?: Maybe<BoxMutationResponse>;
  /** insert a single row into the table: "box" */
  insert_box_one?: Maybe<Box>;
  /** insert data into the table: "foodstuff" */
  insert_foodstuff?: Maybe<FoodstuffMutationResponse>;
  /** insert a single row into the table: "foodstuff" */
  insert_foodstuff_one?: Maybe<Foodstuff>;
  /** insert data into the table: "mst_category" */
  insert_mst_category?: Maybe<MstCategoryMutationResponse>;
  /** insert a single row into the table: "mst_category" */
  insert_mst_category_one?: Maybe<MstCategory>;
  /** insert data into the table: "mst_foodstuff" */
  insert_mst_foodstuff?: Maybe<MstFoodstuffMutationResponse>;
  /** insert a single row into the table: "mst_foodstuff" */
  insert_mst_foodstuff_one?: Maybe<MstFoodstuff>;
  /** insert data into the table: "mst_picture" */
  insert_mst_picture?: Maybe<MstPictureMutationResponse>;
  /** insert a single row into the table: "mst_picture" */
  insert_mst_picture_one?: Maybe<MstPicture>;
  /** insert data into the table: "space" */
  insert_space?: Maybe<SpaceMutationResponse>;
  /** insert a single row into the table: "space" */
  insert_space_one?: Maybe<Space>;
  /** insert data into the table: "space_owner" */
  insert_space_owner?: Maybe<SpaceOwnerMutationResponse>;
  /** insert a single row into the table: "space_owner" */
  insert_space_owner_one?: Maybe<SpaceOwner>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_status" */
  insert_user_status?: Maybe<UserStatusMutationResponse>;
  /** insert a single row into the table: "user_status" */
  insert_user_status_one?: Maybe<UserStatus>;
  /** update data of the table: "box" */
  update_box?: Maybe<BoxMutationResponse>;
  /** update single row of the table: "box" */
  update_box_by_pk?: Maybe<Box>;
  /** update data of the table: "foodstuff" */
  update_foodstuff?: Maybe<FoodstuffMutationResponse>;
  /** update single row of the table: "foodstuff" */
  update_foodstuff_by_pk?: Maybe<Foodstuff>;
  /** update data of the table: "mst_category" */
  update_mst_category?: Maybe<MstCategoryMutationResponse>;
  /** update single row of the table: "mst_category" */
  update_mst_category_by_pk?: Maybe<MstCategory>;
  /** update data of the table: "mst_foodstuff" */
  update_mst_foodstuff?: Maybe<MstFoodstuffMutationResponse>;
  /** update single row of the table: "mst_foodstuff" */
  update_mst_foodstuff_by_pk?: Maybe<MstFoodstuff>;
  /** update data of the table: "mst_picture" */
  update_mst_picture?: Maybe<MstPictureMutationResponse>;
  /** update single row of the table: "mst_picture" */
  update_mst_picture_by_pk?: Maybe<MstPicture>;
  /** update data of the table: "space" */
  update_space?: Maybe<SpaceMutationResponse>;
  /** update single row of the table: "space" */
  update_space_by_pk?: Maybe<Space>;
  /** update data of the table: "space_owner" */
  update_space_owner?: Maybe<SpaceOwnerMutationResponse>;
  /** update single row of the table: "space_owner" */
  update_space_owner_by_pk?: Maybe<SpaceOwner>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_status" */
  update_user_status?: Maybe<UserStatusMutationResponse>;
  /** update single row of the table: "user_status" */
  update_user_status_by_pk?: Maybe<UserStatus>;
};


/** mutation root */
export type MutationRootDeleteBoxArgs = {
  where: BoxBoolExp;
};


/** mutation root */
export type MutationRootDeleteBoxByPkArgs = {
  box_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFoodstuffArgs = {
  where: FoodstuffBoolExp;
};


/** mutation root */
export type MutationRootDeleteFoodstuffByPkArgs = {
  foodstuff_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteMstCategoryArgs = {
  where: MstCategoryBoolExp;
};


/** mutation root */
export type MutationRootDeleteMstCategoryByPkArgs = {
  mst_category_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteMstFoodstuffArgs = {
  where: MstFoodstuffBoolExp;
};


/** mutation root */
export type MutationRootDeleteMstFoodstuffByPkArgs = {
  mst_foodstuff_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteMstPictureArgs = {
  where: MstPictureBoolExp;
};


/** mutation root */
export type MutationRootDeleteMstPictureByPkArgs = {
  mst_picture_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteSpaceArgs = {
  where: SpaceBoolExp;
};


/** mutation root */
export type MutationRootDeleteSpaceByPkArgs = {
  space_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteSpaceOwnerArgs = {
  where: SpaceOwnerBoolExp;
};


/** mutation root */
export type MutationRootDeleteSpaceOwnerByPkArgs = {
  space_owner_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteUserStatusArgs = {
  where: UserStatusBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserStatusByPkArgs = {
  user_status_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertBoxArgs = {
  objects: Array<BoxInsertInput>;
  on_conflict?: Maybe<BoxOnConflict>;
};


/** mutation root */
export type MutationRootInsertBoxOneArgs = {
  object: BoxInsertInput;
  on_conflict?: Maybe<BoxOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodstuffArgs = {
  objects: Array<FoodstuffInsertInput>;
  on_conflict?: Maybe<FoodstuffOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodstuffOneArgs = {
  object: FoodstuffInsertInput;
  on_conflict?: Maybe<FoodstuffOnConflict>;
};


/** mutation root */
export type MutationRootInsertMstCategoryArgs = {
  objects: Array<MstCategoryInsertInput>;
  on_conflict?: Maybe<MstCategoryOnConflict>;
};


/** mutation root */
export type MutationRootInsertMstCategoryOneArgs = {
  object: MstCategoryInsertInput;
  on_conflict?: Maybe<MstCategoryOnConflict>;
};


/** mutation root */
export type MutationRootInsertMstFoodstuffArgs = {
  objects: Array<MstFoodstuffInsertInput>;
  on_conflict?: Maybe<MstFoodstuffOnConflict>;
};


/** mutation root */
export type MutationRootInsertMstFoodstuffOneArgs = {
  object: MstFoodstuffInsertInput;
  on_conflict?: Maybe<MstFoodstuffOnConflict>;
};


/** mutation root */
export type MutationRootInsertMstPictureArgs = {
  objects: Array<MstPictureInsertInput>;
  on_conflict?: Maybe<MstPictureOnConflict>;
};


/** mutation root */
export type MutationRootInsertMstPictureOneArgs = {
  object: MstPictureInsertInput;
  on_conflict?: Maybe<MstPictureOnConflict>;
};


/** mutation root */
export type MutationRootInsertSpaceArgs = {
  objects: Array<SpaceInsertInput>;
  on_conflict?: Maybe<SpaceOnConflict>;
};


/** mutation root */
export type MutationRootInsertSpaceOneArgs = {
  object: SpaceInsertInput;
  on_conflict?: Maybe<SpaceOnConflict>;
};


/** mutation root */
export type MutationRootInsertSpaceOwnerArgs = {
  objects: Array<SpaceOwnerInsertInput>;
  on_conflict?: Maybe<SpaceOwnerOnConflict>;
};


/** mutation root */
export type MutationRootInsertSpaceOwnerOneArgs = {
  object: SpaceOwnerInsertInput;
  on_conflict?: Maybe<SpaceOwnerOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserStatusArgs = {
  objects: Array<UserStatusInsertInput>;
  on_conflict?: Maybe<UserStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserStatusOneArgs = {
  object: UserStatusInsertInput;
  on_conflict?: Maybe<UserStatusOnConflict>;
};


/** mutation root */
export type MutationRootUpdateBoxArgs = {
  _set?: Maybe<BoxSetInput>;
  where: BoxBoolExp;
};


/** mutation root */
export type MutationRootUpdateBoxByPkArgs = {
  _set?: Maybe<BoxSetInput>;
  pk_columns: BoxPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFoodstuffArgs = {
  _inc?: Maybe<FoodstuffIncInput>;
  _set?: Maybe<FoodstuffSetInput>;
  where: FoodstuffBoolExp;
};


/** mutation root */
export type MutationRootUpdateFoodstuffByPkArgs = {
  _inc?: Maybe<FoodstuffIncInput>;
  _set?: Maybe<FoodstuffSetInput>;
  pk_columns: FoodstuffPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateMstCategoryArgs = {
  _set?: Maybe<MstCategorySetInput>;
  where: MstCategoryBoolExp;
};


/** mutation root */
export type MutationRootUpdateMstCategoryByPkArgs = {
  _set?: Maybe<MstCategorySetInput>;
  pk_columns: MstCategoryPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateMstFoodstuffArgs = {
  _set?: Maybe<MstFoodstuffSetInput>;
  where: MstFoodstuffBoolExp;
};


/** mutation root */
export type MutationRootUpdateMstFoodstuffByPkArgs = {
  _set?: Maybe<MstFoodstuffSetInput>;
  pk_columns: MstFoodstuffPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateMstPictureArgs = {
  _set?: Maybe<MstPictureSetInput>;
  where: MstPictureBoolExp;
};


/** mutation root */
export type MutationRootUpdateMstPictureByPkArgs = {
  _set?: Maybe<MstPictureSetInput>;
  pk_columns: MstPicturePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateSpaceArgs = {
  _set?: Maybe<SpaceSetInput>;
  where: SpaceBoolExp;
};


/** mutation root */
export type MutationRootUpdateSpaceByPkArgs = {
  _set?: Maybe<SpaceSetInput>;
  pk_columns: SpacePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateSpaceOwnerArgs = {
  _set?: Maybe<SpaceOwnerSetInput>;
  where: SpaceOwnerBoolExp;
};


/** mutation root */
export type MutationRootUpdateSpaceOwnerByPkArgs = {
  _set?: Maybe<SpaceOwnerSetInput>;
  pk_columns: SpaceOwnerPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _set?: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserStatusArgs = {
  _set?: Maybe<UserStatusSetInput>;
  where: UserStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserStatusByPkArgs = {
  _set?: Maybe<UserStatusSetInput>;
  pk_columns: UserStatusPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
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

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "box" */
  box: Array<Box>;
  /** fetch aggregated fields from the table: "box" */
  box_aggregate: BoxAggregate;
  /** fetch data from the table: "box" using primary key columns */
  box_by_pk?: Maybe<Box>;
  /** fetch data from the table: "foodstuff" */
  foodstuff: Array<Foodstuff>;
  /** fetch aggregated fields from the table: "foodstuff" */
  foodstuff_aggregate: FoodstuffAggregate;
  /** fetch data from the table: "foodstuff" using primary key columns */
  foodstuff_by_pk?: Maybe<Foodstuff>;
  /** fetch data from the table: "mst_category" */
  mst_category: Array<MstCategory>;
  /** fetch aggregated fields from the table: "mst_category" */
  mst_category_aggregate: MstCategoryAggregate;
  /** fetch data from the table: "mst_category" using primary key columns */
  mst_category_by_pk?: Maybe<MstCategory>;
  /** fetch data from the table: "mst_foodstuff" */
  mst_foodstuff: Array<MstFoodstuff>;
  /** fetch aggregated fields from the table: "mst_foodstuff" */
  mst_foodstuff_aggregate: MstFoodstuffAggregate;
  /** fetch data from the table: "mst_foodstuff" using primary key columns */
  mst_foodstuff_by_pk?: Maybe<MstFoodstuff>;
  /** fetch data from the table: "mst_picture" */
  mst_picture: Array<MstPicture>;
  /** fetch aggregated fields from the table: "mst_picture" */
  mst_picture_aggregate: MstPictureAggregate;
  /** fetch data from the table: "mst_picture" using primary key columns */
  mst_picture_by_pk?: Maybe<MstPicture>;
  /** fetch data from the table: "space" */
  space: Array<Space>;
  /** fetch aggregated fields from the table: "space" */
  space_aggregate: SpaceAggregate;
  /** fetch data from the table: "space" using primary key columns */
  space_by_pk?: Maybe<Space>;
  /** fetch data from the table: "space_owner" */
  space_owner: Array<SpaceOwner>;
  /** fetch aggregated fields from the table: "space_owner" */
  space_owner_aggregate: SpaceOwnerAggregate;
  /** fetch data from the table: "space_owner" using primary key columns */
  space_owner_by_pk?: Maybe<SpaceOwner>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_status" */
  user_status: Array<UserStatus>;
  /** fetch aggregated fields from the table: "user_status" */
  user_status_aggregate: UserStatusAggregate;
  /** fetch data from the table: "user_status" using primary key columns */
  user_status_by_pk?: Maybe<UserStatus>;
};


export type QueryRootBoxArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


export type QueryRootBoxAggregateArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


export type QueryRootBoxByPkArgs = {
  box_id: Scalars['uuid'];
};


export type QueryRootFoodstuffArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


export type QueryRootFoodstuffAggregateArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


export type QueryRootFoodstuffByPkArgs = {
  foodstuff_id: Scalars['uuid'];
};


export type QueryRootMstCategoryArgs = {
  distinct_on?: Maybe<Array<MstCategorySelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstCategoryOrderBy>>;
  where?: Maybe<MstCategoryBoolExp>;
};


export type QueryRootMstCategoryAggregateArgs = {
  distinct_on?: Maybe<Array<MstCategorySelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstCategoryOrderBy>>;
  where?: Maybe<MstCategoryBoolExp>;
};


export type QueryRootMstCategoryByPkArgs = {
  mst_category_id: Scalars['uuid'];
};


export type QueryRootMstFoodstuffArgs = {
  distinct_on?: Maybe<Array<MstFoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstFoodstuffOrderBy>>;
  where?: Maybe<MstFoodstuffBoolExp>;
};


export type QueryRootMstFoodstuffAggregateArgs = {
  distinct_on?: Maybe<Array<MstFoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstFoodstuffOrderBy>>;
  where?: Maybe<MstFoodstuffBoolExp>;
};


export type QueryRootMstFoodstuffByPkArgs = {
  mst_foodstuff_id: Scalars['uuid'];
};


export type QueryRootMstPictureArgs = {
  distinct_on?: Maybe<Array<MstPictureSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstPictureOrderBy>>;
  where?: Maybe<MstPictureBoolExp>;
};


export type QueryRootMstPictureAggregateArgs = {
  distinct_on?: Maybe<Array<MstPictureSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstPictureOrderBy>>;
  where?: Maybe<MstPictureBoolExp>;
};


export type QueryRootMstPictureByPkArgs = {
  mst_picture_id: Scalars['uuid'];
};


export type QueryRootSpaceArgs = {
  distinct_on?: Maybe<Array<SpaceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOrderBy>>;
  where?: Maybe<SpaceBoolExp>;
};


export type QueryRootSpaceAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOrderBy>>;
  where?: Maybe<SpaceBoolExp>;
};


export type QueryRootSpaceByPkArgs = {
  space_id: Scalars['uuid'];
};


export type QueryRootSpaceOwnerArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


export type QueryRootSpaceOwnerAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


export type QueryRootSpaceOwnerByPkArgs = {
  space_owner_id: Scalars['uuid'];
};


export type QueryRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type QueryRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type QueryRootUserByPkArgs = {
  user_id: Scalars['String'];
};


export type QueryRootUserStatusArgs = {
  distinct_on?: Maybe<Array<UserStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserStatusOrderBy>>;
  where?: Maybe<UserStatusBoolExp>;
};


export type QueryRootUserStatusAggregateArgs = {
  distinct_on?: Maybe<Array<UserStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserStatusOrderBy>>;
  where?: Maybe<UserStatusBoolExp>;
};


export type QueryRootUserStatusByPkArgs = {
  user_status_id: Scalars['uuid'];
};

/** columns and relationships of "space" */
export type Space = {
  __typename?: 'space';
  /** An array relationship */
  boxes: Array<Box>;
  /** An aggregate relationship */
  boxes_aggregate: BoxAggregate;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['String'];
  space_id: Scalars['uuid'];
  space_name: Scalars['String'];
  /** An array relationship */
  space_owners: Array<SpaceOwner>;
  /** An aggregate relationship */
  space_owners_aggregate: SpaceOwnerAggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
};


/** columns and relationships of "space" */
export type SpaceBoxesArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


/** columns and relationships of "space" */
export type SpaceBoxesAggregateArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


/** columns and relationships of "space" */
export type SpaceSpaceOwnersArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


/** columns and relationships of "space" */
export type SpaceSpaceOwnersAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};

/** aggregated selection of "space" */
export type SpaceAggregate = {
  __typename?: 'space_aggregate';
  aggregate?: Maybe<SpaceAggregateFields>;
  nodes: Array<Space>;
};

/** aggregate fields of "space" */
export type SpaceAggregateFields = {
  __typename?: 'space_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SpaceMaxFields>;
  min?: Maybe<SpaceMinFields>;
};


/** aggregate fields of "space" */
export type SpaceAggregateFieldsCountArgs = {
  columns?: Maybe<Array<SpaceSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "space" */
export type SpaceAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<SpaceMaxOrderBy>;
  min?: Maybe<SpaceMinOrderBy>;
};

/** input type for inserting array relation for remote table "space" */
export type SpaceArrRelInsertInput = {
  data: Array<SpaceInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<SpaceOnConflict>;
};

/** Boolean expression to filter rows from the table "space". All fields are combined with a logical 'AND'. */
export type SpaceBoolExp = {
  _and?: Maybe<Array<SpaceBoolExp>>;
  _not?: Maybe<SpaceBoolExp>;
  _or?: Maybe<Array<SpaceBoolExp>>;
  boxes?: Maybe<BoxBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  created_by?: Maybe<StringComparisonExp>;
  space_id?: Maybe<UuidComparisonExp>;
  space_name?: Maybe<StringComparisonExp>;
  space_owners?: Maybe<SpaceOwnerBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UserBoolExp>;
};

/** unique or primary key constraints on table "space" */
export enum SpaceConstraint {
  /** unique or primary key constraint */
  SpaceCreatedByKey = 'space_created_by_key',
  /** unique or primary key constraint */
  SpacesPkey = 'spaces_pkey'
}

/** input type for inserting data into table "space" */
export type SpaceInsertInput = {
  boxes?: Maybe<BoxArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_name?: Maybe<Scalars['String']>;
  space_owners?: Maybe<SpaceOwnerArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type SpaceMaxFields = {
  __typename?: 'space_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "space" */
export type SpaceMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  space_name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type SpaceMinFields = {
  __typename?: 'space_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "space" */
export type SpaceMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  space_name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "space" */
export type SpaceMutationResponse = {
  __typename?: 'space_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Space>;
};

/** input type for inserting object relation for remote table "space" */
export type SpaceObjRelInsertInput = {
  data: SpaceInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<SpaceOnConflict>;
};

/** on conflict condition type for table "space" */
export type SpaceOnConflict = {
  constraint: SpaceConstraint;
  update_columns?: Array<SpaceUpdateColumn>;
  where?: Maybe<SpaceBoolExp>;
};

/** Ordering options when selecting data from "space". */
export type SpaceOrderBy = {
  boxes_aggregate?: Maybe<BoxAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  created_by?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  space_name?: Maybe<OrderBy>;
  space_owners_aggregate?: Maybe<SpaceOwnerAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
};

/** columns and relationships of "space_owner" */
export type SpaceOwner = {
  __typename?: 'space_owner';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  space: Space;
  space_id: Scalars['uuid'];
  space_owner_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** aggregated selection of "space_owner" */
export type SpaceOwnerAggregate = {
  __typename?: 'space_owner_aggregate';
  aggregate?: Maybe<SpaceOwnerAggregateFields>;
  nodes: Array<SpaceOwner>;
};

/** aggregate fields of "space_owner" */
export type SpaceOwnerAggregateFields = {
  __typename?: 'space_owner_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SpaceOwnerMaxFields>;
  min?: Maybe<SpaceOwnerMinFields>;
};


/** aggregate fields of "space_owner" */
export type SpaceOwnerAggregateFieldsCountArgs = {
  columns?: Maybe<Array<SpaceOwnerSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "space_owner" */
export type SpaceOwnerAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<SpaceOwnerMaxOrderBy>;
  min?: Maybe<SpaceOwnerMinOrderBy>;
};

/** input type for inserting array relation for remote table "space_owner" */
export type SpaceOwnerArrRelInsertInput = {
  data: Array<SpaceOwnerInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<SpaceOwnerOnConflict>;
};

/** Boolean expression to filter rows from the table "space_owner". All fields are combined with a logical 'AND'. */
export type SpaceOwnerBoolExp = {
  _and?: Maybe<Array<SpaceOwnerBoolExp>>;
  _not?: Maybe<SpaceOwnerBoolExp>;
  _or?: Maybe<Array<SpaceOwnerBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  space?: Maybe<SpaceBoolExp>;
  space_id?: Maybe<UuidComparisonExp>;
  space_owner_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UserBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "space_owner" */
export enum SpaceOwnerConstraint {
  /** unique or primary key constraint */
  SpaceOwnerIdKey = 'space_owner_id_key',
  /** unique or primary key constraint */
  SpaceOwnersPkey = 'space_owners_pkey'
}

/** input type for inserting data into table "space_owner" */
export type SpaceOwnerInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  space?: Maybe<SpaceObjRelInsertInput>;
  space_id?: Maybe<Scalars['uuid']>;
  space_owner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UserObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SpaceOwnerMaxFields = {
  __typename?: 'space_owner_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_owner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "space_owner" */
export type SpaceOwnerMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  space_owner_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type SpaceOwnerMinFields = {
  __typename?: 'space_owner_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_owner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "space_owner" */
export type SpaceOwnerMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  space_id?: Maybe<OrderBy>;
  space_owner_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "space_owner" */
export type SpaceOwnerMutationResponse = {
  __typename?: 'space_owner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SpaceOwner>;
};

/** on conflict condition type for table "space_owner" */
export type SpaceOwnerOnConflict = {
  constraint: SpaceOwnerConstraint;
  update_columns?: Array<SpaceOwnerUpdateColumn>;
  where?: Maybe<SpaceOwnerBoolExp>;
};

/** Ordering options when selecting data from "space_owner". */
export type SpaceOwnerOrderBy = {
  created_at?: Maybe<OrderBy>;
  space?: Maybe<SpaceOrderBy>;
  space_id?: Maybe<OrderBy>;
  space_owner_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: space_owner */
export type SpaceOwnerPkColumnsInput = {
  space_owner_id: Scalars['uuid'];
};

/** select columns of table "space_owner" */
export enum SpaceOwnerSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  SpaceOwnerId = 'space_owner_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "space_owner" */
export type SpaceOwnerSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_owner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "space_owner" */
export enum SpaceOwnerUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  SpaceOwnerId = 'space_owner_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** primary key columns input for table: space */
export type SpacePkColumnsInput = {
  space_id: Scalars['uuid'];
};

/** select columns of table "space" */
export enum SpaceSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  SpaceName = 'space_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "space" */
export type SpaceSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['uuid']>;
  space_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "space" */
export enum SpaceUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  SpaceName = 'space_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "box" */
  box: Array<Box>;
  /** fetch aggregated fields from the table: "box" */
  box_aggregate: BoxAggregate;
  /** fetch data from the table: "box" using primary key columns */
  box_by_pk?: Maybe<Box>;
  /** fetch data from the table: "foodstuff" */
  foodstuff: Array<Foodstuff>;
  /** fetch aggregated fields from the table: "foodstuff" */
  foodstuff_aggregate: FoodstuffAggregate;
  /** fetch data from the table: "foodstuff" using primary key columns */
  foodstuff_by_pk?: Maybe<Foodstuff>;
  /** fetch data from the table: "mst_category" */
  mst_category: Array<MstCategory>;
  /** fetch aggregated fields from the table: "mst_category" */
  mst_category_aggregate: MstCategoryAggregate;
  /** fetch data from the table: "mst_category" using primary key columns */
  mst_category_by_pk?: Maybe<MstCategory>;
  /** fetch data from the table: "mst_foodstuff" */
  mst_foodstuff: Array<MstFoodstuff>;
  /** fetch aggregated fields from the table: "mst_foodstuff" */
  mst_foodstuff_aggregate: MstFoodstuffAggregate;
  /** fetch data from the table: "mst_foodstuff" using primary key columns */
  mst_foodstuff_by_pk?: Maybe<MstFoodstuff>;
  /** fetch data from the table: "mst_picture" */
  mst_picture: Array<MstPicture>;
  /** fetch aggregated fields from the table: "mst_picture" */
  mst_picture_aggregate: MstPictureAggregate;
  /** fetch data from the table: "mst_picture" using primary key columns */
  mst_picture_by_pk?: Maybe<MstPicture>;
  /** fetch data from the table: "space" */
  space: Array<Space>;
  /** fetch aggregated fields from the table: "space" */
  space_aggregate: SpaceAggregate;
  /** fetch data from the table: "space" using primary key columns */
  space_by_pk?: Maybe<Space>;
  /** fetch data from the table: "space_owner" */
  space_owner: Array<SpaceOwner>;
  /** fetch aggregated fields from the table: "space_owner" */
  space_owner_aggregate: SpaceOwnerAggregate;
  /** fetch data from the table: "space_owner" using primary key columns */
  space_owner_by_pk?: Maybe<SpaceOwner>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_status" */
  user_status: Array<UserStatus>;
  /** fetch aggregated fields from the table: "user_status" */
  user_status_aggregate: UserStatusAggregate;
  /** fetch data from the table: "user_status" using primary key columns */
  user_status_by_pk?: Maybe<UserStatus>;
};


export type SubscriptionRootBoxArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


export type SubscriptionRootBoxAggregateArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


export type SubscriptionRootBoxByPkArgs = {
  box_id: Scalars['uuid'];
};


export type SubscriptionRootFoodstuffArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


export type SubscriptionRootFoodstuffAggregateArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


export type SubscriptionRootFoodstuffByPkArgs = {
  foodstuff_id: Scalars['uuid'];
};


export type SubscriptionRootMstCategoryArgs = {
  distinct_on?: Maybe<Array<MstCategorySelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstCategoryOrderBy>>;
  where?: Maybe<MstCategoryBoolExp>;
};


export type SubscriptionRootMstCategoryAggregateArgs = {
  distinct_on?: Maybe<Array<MstCategorySelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstCategoryOrderBy>>;
  where?: Maybe<MstCategoryBoolExp>;
};


export type SubscriptionRootMstCategoryByPkArgs = {
  mst_category_id: Scalars['uuid'];
};


export type SubscriptionRootMstFoodstuffArgs = {
  distinct_on?: Maybe<Array<MstFoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstFoodstuffOrderBy>>;
  where?: Maybe<MstFoodstuffBoolExp>;
};


export type SubscriptionRootMstFoodstuffAggregateArgs = {
  distinct_on?: Maybe<Array<MstFoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstFoodstuffOrderBy>>;
  where?: Maybe<MstFoodstuffBoolExp>;
};


export type SubscriptionRootMstFoodstuffByPkArgs = {
  mst_foodstuff_id: Scalars['uuid'];
};


export type SubscriptionRootMstPictureArgs = {
  distinct_on?: Maybe<Array<MstPictureSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstPictureOrderBy>>;
  where?: Maybe<MstPictureBoolExp>;
};


export type SubscriptionRootMstPictureAggregateArgs = {
  distinct_on?: Maybe<Array<MstPictureSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<MstPictureOrderBy>>;
  where?: Maybe<MstPictureBoolExp>;
};


export type SubscriptionRootMstPictureByPkArgs = {
  mst_picture_id: Scalars['uuid'];
};


export type SubscriptionRootSpaceArgs = {
  distinct_on?: Maybe<Array<SpaceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOrderBy>>;
  where?: Maybe<SpaceBoolExp>;
};


export type SubscriptionRootSpaceAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOrderBy>>;
  where?: Maybe<SpaceBoolExp>;
};


export type SubscriptionRootSpaceByPkArgs = {
  space_id: Scalars['uuid'];
};


export type SubscriptionRootSpaceOwnerArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


export type SubscriptionRootSpaceOwnerAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


export type SubscriptionRootSpaceOwnerByPkArgs = {
  space_owner_id: Scalars['uuid'];
};


export type SubscriptionRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};


export type SubscriptionRootUserByPkArgs = {
  user_id: Scalars['String'];
};


export type SubscriptionRootUserStatusArgs = {
  distinct_on?: Maybe<Array<UserStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserStatusOrderBy>>;
  where?: Maybe<UserStatusBoolExp>;
};


export type SubscriptionRootUserStatusAggregateArgs = {
  distinct_on?: Maybe<Array<UserStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserStatusOrderBy>>;
  where?: Maybe<UserStatusBoolExp>;
};


export type SubscriptionRootUserStatusByPkArgs = {
  user_status_id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
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

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  boxes: Array<Box>;
  /** An aggregate relationship */
  boxes_aggregate: BoxAggregate;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  foodstuffs: Array<Foodstuff>;
  /** An aggregate relationship */
  foodstuffs_aggregate: FoodstuffAggregate;
  id: Scalars['uuid'];
  mail?: Maybe<Scalars['String']>;
  /** An array relationship */
  space_owners: Array<SpaceOwner>;
  /** An aggregate relationship */
  space_owners_aggregate: SpaceOwnerAggregate;
  /** An array relationship */
  spaces: Array<Space>;
  /** An aggregate relationship */
  spaces_aggregate: SpaceAggregate;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  user_name: Scalars['String'];
  /** An object relationship */
  user_status: UserStatus;
};


/** columns and relationships of "user" */
export type UserBoxesArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


/** columns and relationships of "user" */
export type UserBoxesAggregateArgs = {
  distinct_on?: Maybe<Array<BoxSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BoxOrderBy>>;
  where?: Maybe<BoxBoolExp>;
};


/** columns and relationships of "user" */
export type UserFoodstuffsArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


/** columns and relationships of "user" */
export type UserFoodstuffsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodstuffSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodstuffOrderBy>>;
  where?: Maybe<FoodstuffBoolExp>;
};


/** columns and relationships of "user" */
export type UserSpaceOwnersArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


/** columns and relationships of "user" */
export type UserSpaceOwnersAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceOwnerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOwnerOrderBy>>;
  where?: Maybe<SpaceOwnerBoolExp>;
};


/** columns and relationships of "user" */
export type UserSpacesArgs = {
  distinct_on?: Maybe<Array<SpaceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOrderBy>>;
  where?: Maybe<SpaceBoolExp>;
};


/** columns and relationships of "user" */
export type UserSpacesAggregateArgs = {
  distinct_on?: Maybe<Array<SpaceSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SpaceOrderBy>>;
  where?: Maybe<SpaceBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: Maybe<Array<UserBoolExp>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<UserBoolExp>>;
  boxes?: Maybe<BoxBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  display_name?: Maybe<StringComparisonExp>;
  foodstuffs?: Maybe<FoodstuffBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  mail?: Maybe<StringComparisonExp>;
  space_owners?: Maybe<SpaceOwnerBoolExp>;
  spaces?: Maybe<SpaceBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user_id?: Maybe<StringComparisonExp>;
  user_name?: Maybe<StringComparisonExp>;
  user_status?: Maybe<UserStatusBoolExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  boxes?: Maybe<BoxArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  foodstuffs?: Maybe<FoodstuffArrRelInsertInput>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  space_owners?: Maybe<SpaceOwnerArrRelInsertInput>;
  spaces?: Maybe<SpaceArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  user_status?: Maybe<UserStatusObjRelInsertInput>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<UserOnConflict>;
};

/** on conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  boxes_aggregate?: Maybe<BoxAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  display_name?: Maybe<OrderBy>;
  foodstuffs_aggregate?: Maybe<FoodstuffAggregateOrderBy>;
  id?: Maybe<OrderBy>;
  mail?: Maybe<OrderBy>;
  space_owners_aggregate?: Maybe<SpaceOwnerAggregateOrderBy>;
  spaces_aggregate?: Maybe<SpaceAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
  user_name?: Maybe<OrderBy>;
  user_status?: Maybe<UserStatusOrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  user_id: Scalars['String'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserName = 'user_name'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "user_status" */
export type UserStatus = {
  __typename?: 'user_status';
  active: Scalars['Boolean'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
  user_status_id: Scalars['uuid'];
};

/** aggregated selection of "user_status" */
export type UserStatusAggregate = {
  __typename?: 'user_status_aggregate';
  aggregate?: Maybe<UserStatusAggregateFields>;
  nodes: Array<UserStatus>;
};

/** aggregate fields of "user_status" */
export type UserStatusAggregateFields = {
  __typename?: 'user_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserStatusMaxFields>;
  min?: Maybe<UserStatusMinFields>;
};


/** aggregate fields of "user_status" */
export type UserStatusAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserStatusSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_status". All fields are combined with a logical 'AND'. */
export type UserStatusBoolExp = {
  _and?: Maybe<Array<UserStatusBoolExp>>;
  _not?: Maybe<UserStatusBoolExp>;
  _or?: Maybe<Array<UserStatusBoolExp>>;
  active?: Maybe<BooleanComparisonExp>;
  user?: Maybe<UserBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
  user_status_id?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_status" */
export enum UserStatusConstraint {
  /** unique or primary key constraint */
  UserStatusPkey = 'user_status_pkey',
  /** unique or primary key constraint */
  UserStatusStatusIdKey = 'user_status_status_id_key',
  /** unique or primary key constraint */
  UserStatusUserIdKey = 'user_status_user_id_key'
}

/** input type for inserting data into table "user_status" */
export type UserStatusInsertInput = {
  active?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
  user_status_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserStatusMaxFields = {
  __typename?: 'user_status_max_fields';
  user_id?: Maybe<Scalars['String']>;
  user_status_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserStatusMinFields = {
  __typename?: 'user_status_min_fields';
  user_id?: Maybe<Scalars['String']>;
  user_status_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_status" */
export type UserStatusMutationResponse = {
  __typename?: 'user_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserStatus>;
};

/** input type for inserting object relation for remote table "user_status" */
export type UserStatusObjRelInsertInput = {
  data: UserStatusInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<UserStatusOnConflict>;
};

/** on conflict condition type for table "user_status" */
export type UserStatusOnConflict = {
  constraint: UserStatusConstraint;
  update_columns?: Array<UserStatusUpdateColumn>;
  where?: Maybe<UserStatusBoolExp>;
};

/** Ordering options when selecting data from "user_status". */
export type UserStatusOrderBy = {
  active?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  user_id?: Maybe<OrderBy>;
  user_status_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: user_status */
export type UserStatusPkColumnsInput = {
  user_status_id: Scalars['uuid'];
};

/** select columns of table "user_status" */
export enum UserStatusSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserStatusId = 'user_status_id'
}

/** input type for updating data in table "user_status" */
export type UserStatusSetInput = {
  active?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['String']>;
  user_status_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_status" */
export enum UserStatusUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserStatusId = 'user_status_id'
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Mail = 'mail',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserName = 'user_name'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type FetchUserQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type FetchUserQuery = (
  { __typename?: 'query_root' }
  & { user_by_pk?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'user_id' | 'user_name' | 'display_name' | 'mail'>
    & { user_status: (
      { __typename?: 'user_status' }
      & Pick<UserStatus, 'user_status_id' | 'active'>
    ) }
  )> }
);

export type FetchSpaceQueryVariables = Exact<{
  _eq?: Maybe<Scalars['String']>;
}>;


export type FetchSpaceQuery = (
  { __typename?: 'query_root' }
  & { space: Array<(
    { __typename?: 'space' }
    & Pick<Space, 'space_id'>
  )> }
);

export type FetchSpaceOwnersQueryVariables = Exact<{
  _eq?: Maybe<Scalars['uuid']>;
}>;


export type FetchSpaceOwnersQuery = (
  { __typename?: 'query_root' }
  & { space_owner: Array<(
    { __typename?: 'space_owner' }
    & Pick<SpaceOwner, 'space_id'>
    & { user: (
      { __typename?: 'user' }
      & Pick<User, 'display_name' | 'id'>
    ) }
  )> }
);

export type FetchBoxesQueryVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type FetchBoxesQuery = (
  { __typename?: 'query_root' }
  & { box: Array<(
    { __typename?: 'box' }
    & Pick<Box, 'box_id' | 'box_name'>
    & { foodstuffs: Array<(
      { __typename?: 'foodstuff' }
      & Pick<Foodstuff, 'foodstuff_id' | 'foodstuff_name' | 'quantity'>
    )> }
  )> }
);

export type CreateFisrtDataMutationVariables = Exact<{
  user_id?: Maybe<Scalars['String']>;
  space_name?: Maybe<Scalars['String']>;
  data?: Maybe<Array<BoxInsertInput> | BoxInsertInput>;
}>;


export type CreateFisrtDataMutation = (
  { __typename?: 'mutation_root' }
  & { insert_space?: Maybe<(
    { __typename?: 'space_mutation_response' }
    & Pick<SpaceMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'space' }
      & Pick<Space, 'space_name'>
      & { space_owners: Array<(
        { __typename?: 'space_owner' }
        & { user: (
          { __typename?: 'user' }
          & Pick<User, 'user_name'>
        ) }
      )>, boxes: Array<(
        { __typename?: 'box' }
        & Pick<Box, 'box_name'>
      )> }
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  user_id: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_user?: Maybe<(
    { __typename?: 'user_mutation_response' }
    & Pick<UserMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'user' }
      & Pick<User, 'user_id' | 'user_name' | 'display_name' | 'mail'>
    )> }
  )> }
);

export type UpdateUserStatusMutationVariables = Exact<{
  user_status_id: Scalars['uuid'];
}>;


export type UpdateUserStatusMutation = (
  { __typename?: 'mutation_root' }
  & { update_user_status_by_pk?: Maybe<(
    { __typename?: 'user_status' }
    & Pick<UserStatus, 'active'>
  )> }
);

export type AddFoodstuffMutationVariables = Exact<{
  foodstuff_name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  box_id: Scalars['uuid'];
}>;


export type AddFoodstuffMutation = (
  { __typename?: 'mutation_root' }
  & { insert_foodstuff?: Maybe<(
    { __typename?: 'foodstuff_mutation_response' }
    & { returning: Array<(
      { __typename?: 'foodstuff' }
      & Pick<Foodstuff, 'foodstuff_id' | 'foodstuff_name' | 'quantity' | 'created_by' | 'box_id'>
    )> }
  )> }
);

export type UpdateFoodstuffQuantityMutationVariables = Exact<{
  foodstuff_id: Scalars['uuid'];
  quantity: Scalars['Int'];
}>;


export type UpdateFoodstuffQuantityMutation = (
  { __typename?: 'mutation_root' }
  & { update_foodstuff_by_pk?: Maybe<(
    { __typename?: 'foodstuff' }
    & Pick<Foodstuff, 'foodstuff_id' | 'box_id'>
  )> }
);

export type UpdateFoodstuffMutationVariables = Exact<{
  foodstuff_id: Scalars['uuid'];
  quantity?: Maybe<Scalars['Int']>;
  foodstuff_name?: Maybe<Scalars['String']>;
  box_id?: Maybe<Scalars['uuid']>;
}>;


export type UpdateFoodstuffMutation = (
  { __typename?: 'mutation_root' }
  & { update_foodstuff_by_pk?: Maybe<(
    { __typename?: 'foodstuff' }
    & Pick<Foodstuff, 'foodstuff_id' | 'box_id'>
  )> }
);


export const FetchUserDocument = gql`
    query FetchUser($user_id: String!) {
  user_by_pk(user_id: $user_id) {
    user_id
    user_name
    display_name
    mail
    user_status {
      user_status_id
      active
    }
  }
}
    `;

export function useFetchUserQuery(options: Omit<Urql.UseQueryArgs<FetchUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FetchUserQuery>({ query: FetchUserDocument, ...options });
};
export const FetchSpaceDocument = gql`
    query FetchSpace($_eq: String) {
  space(where: {created_by: {_eq: $_eq}}) {
    space_id
  }
}
    `;

export function useFetchSpaceQuery(options: Omit<Urql.UseQueryArgs<FetchSpaceQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FetchSpaceQuery>({ query: FetchSpaceDocument, ...options });
};
export const FetchSpaceOwnersDocument = gql`
    query FetchSpaceOwners($_eq: uuid) {
  space_owner(where: {space_id: {_eq: $_eq}}) {
    space_id
    user {
      display_name
      id
    }
  }
}
    `;

export function useFetchSpaceOwnersQuery(options: Omit<Urql.UseQueryArgs<FetchSpaceOwnersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FetchSpaceOwnersQuery>({ query: FetchSpaceOwnersDocument, ...options });
};
export const FetchBoxesDocument = gql`
    query FetchBoxes($_eq: String!) {
  box(where: {created_by: {_eq: $_eq}}) {
    box_id
    box_name
    foodstuffs {
      foodstuff_id
      foodstuff_name
      quantity
    }
  }
}
    `;

export function useFetchBoxesQuery(options: Omit<Urql.UseQueryArgs<FetchBoxesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FetchBoxesQuery>({ query: FetchBoxesDocument, ...options });
};
export const CreateFisrtDataDocument = gql`
    mutation CreateFisrtData($user_id: String = "test", $space_name: String = "テストスペース", $data: [box_insert_input!] = [{created_by: "test"}, {created_by: "test"}]) {
  insert_space(
    objects: {created_by: $user_id, space_name: $space_name, space_owners: {data: {user_id: $user_id}}, boxes: {data: $data}}
  ) {
    affected_rows
    returning {
      space_name
      space_owners {
        user {
          user_name
        }
      }
      boxes {
        box_name
      }
    }
  }
}
    `;

export function useCreateFisrtDataMutation() {
  return Urql.useMutation<CreateFisrtDataMutation, CreateFisrtDataMutationVariables>(CreateFisrtDataDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($user_id: String!, $display_name: String = "", $mail: String = "") {
  update_user(
    where: {user_id: {_eq: $user_id}}
    _set: {mail: $mail, display_name: $display_name}
  ) {
    affected_rows
    returning {
      user_id
      user_name
      display_name
      mail
    }
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const UpdateUserStatusDocument = gql`
    mutation UpdateUserStatus($user_status_id: uuid!) {
  update_user_status_by_pk(
    pk_columns: {user_status_id: $user_status_id}
    _set: {active: false}
  ) {
    active
  }
}
    `;

export function useUpdateUserStatusMutation() {
  return Urql.useMutation<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>(UpdateUserStatusDocument);
};
export const AddFoodstuffDocument = gql`
    mutation AddFoodstuff($foodstuff_name: String, $quantity: Int = 0, $box_id: uuid!) {
  insert_foodstuff(
    objects: {foodstuff_name: $foodstuff_name, quantity: $quantity, box_id: $box_id}
  ) {
    returning {
      foodstuff_id
      foodstuff_name
      quantity
      created_by
      box_id
    }
  }
}
    `;

export function useAddFoodstuffMutation() {
  return Urql.useMutation<AddFoodstuffMutation, AddFoodstuffMutationVariables>(AddFoodstuffDocument);
};
export const UpdateFoodstuffQuantityDocument = gql`
    mutation UpdateFoodstuffQuantity($foodstuff_id: uuid!, $quantity: Int!) {
  update_foodstuff_by_pk(
    pk_columns: {foodstuff_id: $foodstuff_id}
    _inc: {quantity: $quantity}
  ) {
    foodstuff_id
    box_id
  }
}
    `;

export function useUpdateFoodstuffQuantityMutation() {
  return Urql.useMutation<UpdateFoodstuffQuantityMutation, UpdateFoodstuffQuantityMutationVariables>(UpdateFoodstuffQuantityDocument);
};
export const UpdateFoodstuffDocument = gql`
    mutation UpdateFoodstuff($foodstuff_id: uuid!, $quantity: Int, $foodstuff_name: String, $box_id: uuid) {
  update_foodstuff_by_pk(
    pk_columns: {foodstuff_id: $foodstuff_id}
    _set: {foodstuff_name: $foodstuff_name, box_id: $box_id, quantity: $quantity}
  ) {
    foodstuff_id
    box_id
  }
}
    `;

export function useUpdateFoodstuffMutation() {
  return Urql.useMutation<UpdateFoodstuffMutation, UpdateFoodstuffMutationVariables>(UpdateFoodstuffDocument);
};