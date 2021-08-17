import { gql } from "@apollo/client";

const UPSERT_USER_MUTATION = gql`
mutation UpsertFirebaseUser($id: String!, $name: String, $email: String!) {
  insert_user_one(object: {id: $id, name: $name, email: $email}, on_conflict: {constraint: lab_users_pkey, update_columns: [email, name]}) {
    id
  }
}
`;

export default UPSERT_USER_MUTATION;