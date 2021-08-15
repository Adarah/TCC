import React from 'react';
import {AppBar, UserMenu, useLogout} from "react-admin";
import {useTheme, makeStyles} from '@material-ui/core/styles';
import {useMediaQuery, Typography, IconButton, Modal, Paper, Fade} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabSelector from "./lab-selector";

const useStyles = makeStyles({
    spacer: {
        flex: 1
    },
});


const CustomUserMenu = (props: any) => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (isSm ?
            <UserMenu {...props}/>
            :
            <>
                <IconButton onClick={handleOpen}>
                    <ExitToAppIcon/>
                </IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Fade in={open}>
                        <Paper>
                            <div style={{top: "50%", padding: "8px", margin: "auto"}}>
                                <h2>Are you sure you want to quit?</h2>
                                {/*TODO: Add real logout functionality to this modal */}
                                <p>Logout</p>
                            </div>
                        </Paper>
                    </Fade>
                </Modal>
            </>
    );
}

const CustomAppBar = (props: any) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <AppBar {...props} userMenu={<CustomUserMenu/>}>
            <div style={{paddingLeft: '10px', display: isSm ? 'block' : 'none'}}>
                <LabSelector color="white"/>
            </div>
            <span className={classes.spacer}/>
            <Typography noWrap id="react-admin-title"/>
            <span className={classes.spacer}/>
        </AppBar>
    );
}


export default CustomAppBar;