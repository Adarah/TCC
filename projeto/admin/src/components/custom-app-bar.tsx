import React from 'react';
import {AppBar, UserMenu, useLogout} from "react-admin";
import {useTheme, makeStyles} from '@material-ui/core/styles';
import {useMediaQuery, Typography, IconButton} from "@material-ui/core";
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
    const logout = useLogout();
    console.log(props.logout);
    return (isSm ?
            <UserMenu {...props}/>
            : <IconButton onClick={logout}>
                <ExitToAppIcon/>
            </IconButton>
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