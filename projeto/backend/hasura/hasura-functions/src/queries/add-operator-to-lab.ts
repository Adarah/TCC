import { gql } from "@apollo/client/core";

const ADD_OPERATOR_TO_LAB = gql`
  mutation AddOperatorToLab($operatorId: String!, $labId: Int!) {
    insert_lab_operator_one(
      object: { operator_id: $operatorId, lab_id: $labId }
    ) {
      id
    }
  }
`;

export default ADD_OPERATOR_TO_LAB;
