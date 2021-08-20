import { gql } from '@apollo/client';

const INSERT_COMMAND_MUTATION = gql`
mutation InsertCommand($name: String!, $type: CreateCommandCommandTypeEnum!, $is_recurring: Boolean!, $recurrence_pattern: String, $scheduled_time_unix: Int, $selectors: [String!]!) {
  CreateCommand(name: $name, type: $type, is_recurring: $is_recurring, recurrence_pattern: $recurrence_pattern, scheduled_time_unix: $scheduled_time_unix, selectors: $selectors) {
    id
  }
}
`;

export default INSERT_COMMAND_MUTATION;