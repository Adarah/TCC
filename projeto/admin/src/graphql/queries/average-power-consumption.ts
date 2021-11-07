import {gql} from "@apollo/client";

const AVERAGE_POWER_CONSUMPTION = gql`
    query AveragePowerConsumption {
        avg_power_per_day_last_week {
            day
            power
        }
    }
`;

export default AVERAGE_POWER_CONSUMPTION;
