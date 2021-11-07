import React from 'react';
import {useQuery,} from "@apollo/client";
import {AveragePowerConsumptionQuery,} from "../../graphql/generated/types";
import AVERAGE_POWER_CONSUMPTION from "../../graphql/queries/average-power-consumption";
import {CircularProgress, Typography} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import {Bar} from 'react-chartjs-2';
import {TypeOrFieldNameRegExp} from "@apollo/client/cache/inmemory/helpers";

const AveragePowerConsumption = () => {
    const {
        loading,
        error,
        data
    } = useQuery<AveragePowerConsumptionQuery>(AVERAGE_POWER_CONSUMPTION)
    if (loading) {
        return <CircularProgress/>
    }
    if (error) {
        return <ErrorIcon/>
    }
    const power = data!.avg_power_per_day_last_week.map(v => v.power);
    const days = data!.avg_power_per_day_last_week.map(v => v.day);
    const chartData = {
        labels: days,
        datasets: [{
            label: 'Watts',
            data: power,
            backgroundColor: 'rgb(0,200,0)',
        }]
    }
    const chartConfig = {
        plugins: {
            title: {
                display: true,
                text: 'Average power consumption over the last 7 days',
            },
            legend: {
                display: false,
            },
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
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
    console.log(power)
    return (
        <>
            <Bar
                // @ts-ignore
                data={chartData}
                // @ts-ignore
                options={chartConfig}
                height={50}
            />
        </>
    );
}

export default AveragePowerConsumption;
