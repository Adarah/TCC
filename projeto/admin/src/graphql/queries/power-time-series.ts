import { gql } from "@apollo/client";

const POWER_TIME_SERIES = gql`
    subscription SmartPlugPower($time: timestamptz!, $id: String!, $limit: Int! = 10) {
        smart_plug_metrics(order_by: {time: desc}, where: {time: {_gt: $time}, smart_plug_chip_id: {_eq: $id}}, limit: $limit) {
            power
            time
        }
    }
`;

export default POWER_TIME_SERIES;