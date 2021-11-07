import {useSubscription} from "@apollo/client";
import {CircularProgress, Grid, makeStyles, Paper} from "@material-ui/core";
import SMART_PLUG_STATUS from "../../graphql/queries/smart-plug-status";
import ErrorIcon from '@material-ui/icons/Error';
import {SmartPlugStatusSubscription} from "../../graphql/generated/types";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

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
    const {loading, error, data} = useSubscription<SmartPlugStatusSubscription>(SMART_PLUG_STATUS);
    if (loading) {
        return (<CircularProgress/>)
    }

    if (error) {
        return (<ErrorIcon/>);
    }

    const total = data!.smart_plug_status.length;
    if (total === 0) {
        return (
            <p className={styles.text}>Nenhum dispostivo cadastrado ainda</p>
        )
    }
    // const operationalCount = data!.smart_plug_status.filter(p => p.status === 'on' || p.status === 'off').length;
    // const percentOperational = Math.round(operationalCount / total * 100);

    return (
        <div>
            {data!.smart_plug_status.map(s => (
                    <>
                        {s.status === 'on' ?
                            <CheckCircleIcon style={{color: 'green'}}/>
                            : <CancelIcon style={{color: 'red'}}/>
                        }
                        <p>{s.chip_id}</p>
                    </>
                )
            )}
        </div>
    )
}

export default Operational;