import { gql } from "@apollo/client";

const USER_LABS_QUERY = gql`
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

export default USER_LABS_QUERY;