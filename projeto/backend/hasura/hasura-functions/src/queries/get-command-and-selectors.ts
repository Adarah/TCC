import { gql } from '@apollo/client/core';

const COMMAND_AND_SELECTORS_QUERY = gql`
query GetCommandAndSelectors ($command_id: Int!) {
    command_by_pk(id: $command_id) {
      type
      command_selectors {
        selector
      }
    }
  }
`;

export default COMMAND_AND_SELECTORS_QUERY;