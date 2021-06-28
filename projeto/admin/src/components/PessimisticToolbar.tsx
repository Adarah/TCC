import {makeStyles} from "@material-ui/core/styles";
import {DeleteButton, SaveButton, Toolbar} from "react-admin";
import React from "react";

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export const PessimisticToolbar = (props: any) => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton/>
        <DeleteButton mutationMode="pessimistic"/>
    </Toolbar>
);
