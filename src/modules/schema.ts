import { gql } from 'urql';

// auth0のactionで作成してるので不要
export const CrateFisrtData = gql`
  mutation CrateFisrtData(
    $user_id: String = "test"
    $space_name: String = "テストスペース"
    $data: [box_insert_input!] = [
      { created_by: "test" }
      { created_by: "test" }
    ]
  ) {
    insert_space(
      objects: {
        created_by: $user_id
        space_name: $space_name
        space_owners: { data: { user_id: $user_id } }
        boxes: { data: $data }
      }
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

/**
 * ユーザー取得
 */
export const FetchUser = gql`
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

/**
 * プロフィール編集
 */
export const UpdateUser = gql`
  mutation UpdateUser(
    $user_id: String!
    $display_name: String = ""
    $mail: String = ""
  ) {
    update_user(
      where: { user_id: { _eq: $user_id } }
      _set: { mail: $mail, display_name: $display_name }
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

/**
 * 退会
 */
export const UpdateUserStatus = gql`
  mutation UpdateUserStatus($user_status_id: uuid!) {
    update_user_status_by_pk(
      pk_columns: { user_status_id: $user_status_id }
      _set: { active: false }
    ) {
      active
    }
  }
`;

/**
 * 食材新規作成
 */
export const AddFoodstuff = gql`
  mutation AddFoodstuff(
    $foodstuff_name: String
    $quantity: Int = 0
    $box_id: uuid!
  ) {
    insert_foodstuff(
      objects: {
        foodstuff_name: $foodstuff_name
        quantity: $quantity
        box_id: $box_id
      }
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

/**
 * 食材ボックス取得
 */
export const FetchBoxes = gql`
  query FetchBoxes($_eq: String!) {
    box(where: { created_by: { _eq: $_eq } }) {
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

/**
 * 食材個数更新
 */
export const UpdateFoodstuffQuantity = gql`
  mutation UpdateFoodstuffQuantity($foodstuff_id: uuid!, $quantity: Int!) {
    update_foodstuff_by_pk(
      pk_columns: { foodstuff_id: $foodstuff_id }
      _inc: { quantity: $quantity }
    ) {
      foodstuff_id
      box_id
    }
  }
`;

/**
 * 食材情報更新
 */
export const UpdateFoodstuff = gql`
  mutation UpdateFoodstuff(
    $foodstuff_id: uuid!
    $quantity: Int
    $foodstuff_name: String
    $box_id: uuid
  ) {
    update_foodstuff_by_pk(
      pk_columns: { foodstuff_id: $foodstuff_id }
      _set: {
        foodstuff_name: $foodstuff_name
        box_id: $box_id
        quantity: $quantity
      }
    ) {
      foodstuff_id
      box_id
    }
  }
`;
