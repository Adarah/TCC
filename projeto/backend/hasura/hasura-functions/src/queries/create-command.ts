import { gql } from "@apollo/client/core";

const createCommand = gql`
type Mutation {
  CreateCommand(
    name: String!
    type: CreateCommandCommandTypeEnum!
    is_recurring: Boolean!
    recurrence_pattern: String
    scheduled_time_unix: Int
    selectors: [String!]!
  ): CreateCommandOutput
}
`;

const INSERT_COMMAND_MUTATION = gql`
mutation InsertCommand($name: String!, $type: command_type_enum!, $is_recurring: Boolean!, $recurrence_pattern: String, $scheduled_time: timestamptz, $selectors: [command_selector_insert_input!]!) {
  insert_command_one(object: {name: $name, type: $type, is_recurring: $is_recurring, recurrence_pattern: $recurrence_pattern, scheduled_time: $scheduled_time, command_selectors: {data: $selectors}}) {
    id
  }
}
`;

export default INSERT_COMMAND_MUTATION;