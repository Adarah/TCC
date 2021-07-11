import { gql } from "@apollo/client/core";

const GET_USER_ROLE = gql`
  query GetUserRole($userId: String!) {
    user_by_pk(id: $userId) {
      role_title
    }
  }
`;

export default GET_USER_ROLE;
