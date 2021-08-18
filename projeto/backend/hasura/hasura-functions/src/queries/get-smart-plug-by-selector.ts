import { gql } from '@apollo/client/core';

const SMART_PLUG_BY_SELECTOR_QUERY = gql`
query SmartPlugBySelector($selectors: [ltree!]!) {
    smart_plug(where: {path: {_descendant_any: $selectors}}, distinct_on: chip_id) {
      model
      chip_id
    }
}
`;

export default SMART_PLUG_BY_SELECTOR_QUERY;