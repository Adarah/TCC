import { gql } from "@apollo/client";

const SMART_PLUG_STATUS = gql`
    subscription SmartPlugStatus {
      smart_plug_status {
        chip_id
        status
      }
    }
`;

export default SMART_PLUG_STATUS;