import {gql} from "@apollo/client/core";

const SET_COMMAND_EVENT_ID_MUTATION = gql`
    mutation SetCommandEventId($id: Int!, $event_id: String!) {
          update_command_by_pk(pk_columns: {id: $id}, _set: {event_id: $event_id}) {
              id
          }
    }
`;

export default SET_COMMAND_EVENT_ID_MUTATION;