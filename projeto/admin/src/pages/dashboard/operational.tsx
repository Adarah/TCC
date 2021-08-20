import { useSubscription } from "@apollo/client";
import { CircularProgress, Grid, makeStyles, Paper } from "@material-ui/core";
import SMART_PLUG_STATUS from "../../graphql/queries/smart-plug-status";
import ErrorIcon from '@material-ui/icons/Error';
import { SmartPlugStatusSubscription } from "../../graphql/generated/types";

const useStyles = makeStyles({
    text: {
        fontSize: 'xxx-large',
    },
    good: {
        color: 'green',
    },
    bad: {
        color: 'red',
    }
});
const Operational = () => {
    const styles = useStyles();
    const { loading, error, data } = useSubscription<SmartPlugStatusSubscription>(SMART_PLUG_STATUS);
    if (loading) {
        return (<CircularProgress />)
    }

    if (error) {
        return (<ErrorIcon />);
    }

    const operationalCount = data!.smart_plug_status.filter(p => p.status === 'on' || p.status === 'off').length;
    const total = data!.smart_plug_status.length;
    const percentOperational = Math.round(operationalCount / total * 100);

    return (
        <p className={`${styles.text} ${percentOperational >= 80 ? styles.good : styles.bad}`}>{percentOperational}% operational</p>
    );
}

export default Operational;