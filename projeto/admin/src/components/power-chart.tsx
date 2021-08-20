import { useSubscription } from "@apollo/client";
import { SmartPlugPowerSubscription } from "../graphql/generated/types";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import POWER_TIME_SERIES from '../graphql/queries/power-time-series';
import { CircularProgress } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

type PowerChatProps = {
    smartPlugChipId: string;
}

function PowerChart({ smartPlugChipId }: PowerChatProps) {
    // actually 10 seconds ago
    const fiveMinutesAgo = new Date(Date.now() - 1000 * 10).toISOString().slice(0, 19);
    console.log(fiveMinutesAgo);
    const { loading, error, data } = useSubscription<SmartPlugPowerSubscription>(
        POWER_TIME_SERIES,
        { variables: { time: fiveMinutesAgo, id: smartPlugChipId } },
    );
    data?.smart_plug_metrics.reverse();

    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return <ErrorIcon />;
    }
    const labels = data?.smart_plug_metrics.map(v => v.time);
    const power = data?.smart_plug_metrics.map(v => v.power);
    const chartData = {
        labels,
        datasets: [{
            label: smartPlugChipId,
            data: power,
            backgroundColor: 'rgb(0,200,0)'
        }]
    };
    const chartOptions = {
        animations: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            x: {
                // callback: (val: string, index: number) => index % 3 == 0 ? val : '',
                type: 'timeseries',
                time: {
                    unit: 'second',
                    displayFormats: {
                        second: 'HH:mm:ss',
                    },
                },
                title: {
                    display: true,
                    text: 'Time',
                },
                ticks: {
                    source: 'data',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Power (Watts)',
                },
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1,
                }
            }
        },
    };
    console.info('chart data', chartData);
    return (
        <div>
            <Line
                data={chartData}
                options={chartOptions}
                width={800}
                height={400}
            />
        </div>
    );
}

export default PowerChart;