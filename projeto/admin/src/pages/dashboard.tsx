import React from 'react';
import {Card, CardContent} from '@material-ui/core';
import {Title} from 'react-admin';
import PowerChart from "../components/power-chart";



function Dashboard() {
    // const legitData = data!.smart_plug_metrics.map(v => {
    //     const newTime = parseISO(v.time);
    //     return {
    //         ...v,
    //         time: newTime.getTime(),
    //     }
    // });
    // console.log('data is: ', legitData);
    return (
        <Card>
            <Title title="Dashboard"/>
            <CardContent>
                <PowerChart smartPlugId={"c88e35"}/>
                    {/*<LineChart*/}
                    {/*    data={legitData}*/}
                    {/*    margin={{ left: 20, bottom: 20 }}*/}
                    {/*    height={400}*/}
                    {/*    width={700}*/}
                    {/*>*/}
                    {/*    <Line type="monotone" dataKey="power" isAnimationActive={false}/>*/}
                    {/*    <ReferenceLine y={0}/>*/}
                    {/*    <CartesianGrid strokeDasharray="3 3"/>*/}
                    {/*    <XAxis*/}
                    {/*        dataKey="time"*/}
                    {/*        type="number"*/}
                    {/*        scale="time"*/}
                    {/*        tickCount={5}*/}
                    {/*        allowDataOverflow={true}*/}
                    {/*        domain={[Date.now() - 1000 * 10, Date.now()]}*/}
                    {/*        tickFormatter={(v) => lightFormat(fromUnixTime(v / 1000), 'HH:mm:ss')}*/}
                    {/*        interval="preserveStartEnd"*/}
                    {/*        label={{value: 'Time', position: 'bottom'}}*/}
                    {/*    />*/}
                    {/*    <YAxis*/}
                    {/*        label={{value: 'Power', angle: -90, position: 'left'}}*/}
                    {/*        domain={[0, 5]}*/}
                    {/*        unit={"W"}*/}
                    {/*        ticks={[0, 1, 2, 3, 4, 5]}*/}
                    {/*    />*/}
                    {/*    <Tooltip/>*/}
                    {/*    <Legend verticalAlign="top"/>*/}
                    {/*</LineChart>*/}
            </CardContent>
        </Card>
    );
}

export default Dashboard;