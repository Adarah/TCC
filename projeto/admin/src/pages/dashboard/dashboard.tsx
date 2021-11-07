import {useContext, useState} from 'react';
import {Card, Accordion, AccordionSummary, AccordionDetails, Grid, Typography} from '@material-ui/core';
import {Button, Link, Title} from 'react-admin';
import {observer} from 'mobx-react-lite';
import {CurrentLabContext} from '../../globals/current-lab';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {LAB_CREATE} from '../../constants';
import Operational from './operational';
import Calendar from '../../components/calendar/calendar';
import CalendarSidebar from '../../components/calendar/calendar-sidebar';
import AveragePowerConsumption from "./average-power-consumption";

const NoLabFallback = () => (
    <>
        <NoMeetingRoomIcon style={{fontSize: 160}}/>
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
    return (
        <>
            {
                currentLab.id === undefined ?
                    <NoLabFallback/>
                    :
                    <>
                        <Title title="Dashboard"/>
                        <Grid container style={{gap: 15}}>
                            <Grid item xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{color: 'black'}}/>}
                                    >
                                        <Typography>
                                            Calendar
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid item xs={12} md={10}>
                                            <Calendar weekendVisible={weekendVisible}/>
                                        </Grid>
                                        <Grid item xs={12} md={2}>
                                        <CalendarSidebar weekendVisible={weekendVisible}
                                                         weekendVisibleOnChange={(e) => setWeekendVisible(e.target.checked)}/>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{color: 'black'}}/>}
                                    >
                                        <Typography>
                                            Device status
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Operational/>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{color: 'black'}}/>}
                                    >
                                        <Typography>
                                            Power consumption
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AveragePowerConsumption/>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </>
            }
        </>
    );
})

export default Dashboard;