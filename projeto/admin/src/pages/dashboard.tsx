import { useContext } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Button, Link, Title } from 'react-admin';
import PowerChart from "../components/power-chart";
import { observer } from 'mobx-react-lite';
import { CurrentLabContext } from '../globals/current-lab';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';
import { LAB_CREATE } from '../constants';


const Dashboard = observer(() => {
    const currentLab = useContext(CurrentLabContext);
    console.log("in dashboard", currentLab.id);
    return (
        <Card>
            {
                currentLab.id === null ?
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
                    :
                    <>
                        <Title title="Dashboard" />
                        <CardContent>
                            <PowerChart smartPlugId={"c88e35"} />
                        </CardContent>
                    </>
            }
        </Card>
    );
})

export default Dashboard;