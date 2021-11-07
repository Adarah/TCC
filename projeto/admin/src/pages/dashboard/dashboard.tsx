    import { useContext, useState } from 'react';
import { Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { Button, Link, Title } from 'react-admin';
import PowerChart from "../../components/power-chart";
import { observer } from 'mobx-react-lite';
import { CurrentLabContext } from '../../globals/current-lab';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';
import { LAB_CREATE } from '../../constants';
import Operational from './operational';
import Calendar from '../../components/calendar/calendar';
import CalendarSidebar from '../../components/calendar/calendar-sidebar';

const NoLabFallback = () => (
    <>
        <NoMeetingRoomIcon style={{ fontSize: 160 }} />
        <Typography>No Lab selected</Typography>
        <Typography>Select one on the top left or </Typography>
        <Button
            component={Link}
            to={{
                pathname: LAB_CREATE,
            }}
        >
            <Typography>
                Click here to create a new one
            </Typography>
        </Button>
    </>
);



const Dashboard = observer(() => {
    const currentLab = useContext(CurrentLabContext);
    const [weekendVisible, setWeekendVisible] = useState(true);
    console.log("in dashboard", currentLab.id);
    return (
        <Card>
            {
                currentLab.id === undefined ?
                    <NoLabFallback />
                    :
                    <>
                        <Title title="Dashboard" />
                        <Grid container>
                            <Grid item xs={12} md={10}>
                                <Calendar weekendVisible={weekendVisible} />
                            </Grid>
                            <Grid item md={2}>
                                <CalendarSidebar weekendVisible={weekendVisible} weekendVisibleOnChange={(e) => setWeekendVisible(e.target.checked)} />
                            </Grid>
                            <Grid item xs={12}>
                                <Operational />
                            </Grid>
                        </Grid>
                    </>
            }
        </Card>
    );
})

export default Dashboard;