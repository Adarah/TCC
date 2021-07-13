import React from 'react';
import {Card, CardContent} from '@material-ui/core';
import {Title} from 'react-admin';
import {gql, useSubscription} from "@apollo/client";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";
import {MySubscriptionSubscription} from "../generated/graphql";


const POWER_TIME_SERIES = gql`
    subscription MySubscription($time: timestamptz!) {
        smart_plug_metrics(order_by: {time: asc}, where: {time: {_gt: $time}}) {
            power
            smart_plug_chip_id
            time
        }
    }
`;

function Dashboard() {
    const fiveMinutesAgo = new Date(Date.now() - 1000 * 10).toISOString().slice(0, 19);
    const {data, loading} = useSubscription<MySubscriptionSubscription>(
        POWER_TIME_SERIES,
        {variables: {time: fiveMinutesAgo}},
    );
    console.log(data);
    if (loading) {
        return <div>Loading...</div>
    }
    console.log('data: ', data);
    return (
        <Card>
            <Title title="Hello, world"/>
            <CardContent>
                <LineChart width={800} height={400} data={data?.smart_plug_metrics}>
                    <Line type="monotone" dataKey="power" isAnimationActive={false}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis
                        dataKey="time"
                        type="number"
                        // tickFormatter={time => time.slice(11, 19)}
                        interval="preserveStartEnd"
                    />
                    <YAxis/>
                    <Tooltip/>
                </LineChart>
            </CardContent>
        </Card>
    );
}

export default Dashboard;