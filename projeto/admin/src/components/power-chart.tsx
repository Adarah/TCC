import React, {useState} from 'react';
import {gql, useSubscription} from "@apollo/client";
import {MySubscriptionSubscription} from "../generated/graphql";
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

const POWER_TIME_SERIES = gql`
    subscription MySubscription($time: timestamptz!, $id: String!) {
        smart_plug_metrics(order_by: {time: asc}, where: {time: {_gt: $time}, smart_plug_chip_id: {_eq: $id}}) {
            power
            smart_plug_chip_id
            time
        }
    }
`;

type PowerChatProps = {
    smartPlugId: string;
}


function PowerChart({smartPlugId}: PowerChatProps) {
    // actually 10 seconds ago
    const fiveMinutesAgo = new Date(Date.now() - 1000 * 10).toISOString().slice(0, 19);
    const {data, loading} = useSubscription<MySubscriptionSubscription>(
        POWER_TIME_SERIES,
        {variables: {time: fiveMinutesAgo, id: smartPlugId}},
    );

    if (loading) {
        return <div>Loading...</div>
    }
    const labels = data?.smart_plug_metrics.map(v => v.time);
    const power = data?.smart_plug_metrics.map(v => v.power);
    const chartData = {
        labels,
        datasets: [{
            label: smartPlugId,
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
                type="line"
                options={chartOptions}
                width={800}
                height={400}
            />
        </div>
    );
}

export default PowerChart;