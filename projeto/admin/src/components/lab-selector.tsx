import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Dialog, DialogTitle, ListItemIcon } from "@material-ui/core";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { observer } from 'mobx-react-lite';
import { CurrentLabContext } from "../globals/current-lab";
import { useSubscription } from "@apollo/client";
import USER_LABS_QUERY from "../graphql/queries/user-labs";
import { UserLabsSubscription, UserLabsSubscriptionVariables } from "../graphql/generated/types";
import apolloClient from "../utils/apollo-client";
import { CurrentUserContext } from "../globals/current-user";
import firebase from "firebase";

const useStyles = makeStyles({
    button: {
        "max-height": "32px",
    },
    icon: {
        color: 'white',
    }
});

const ITEM_HEIGHT = 48;

interface LabSelectorProps {
    color?: string
}


const LabSelector = observer((props: LabSelectorProps) => {
    const classes = useStyles();
    const currentLab = useContext(CurrentLabContext);
    const currentUser = useContext(CurrentUserContext);
    const [open, setOpen] = useState(false);
    console.log('current user in selector', currentUser.id);
    console.log('current lab in selector', currentLab.id);
    const { loading, error, data } = useSubscription<UserLabsSubscription, UserLabsSubscriptionVariables>(
        USER_LABS_QUERY, { variables: { user_id: currentUser.id! }, skip: currentUser.id === undefined }
    );

    useEffect(() => {
        if (data?.lab_user_role.findIndex((l) => l.lab_id === currentLab.id) === -1) {
            currentLab.unselect();
        }
    }, [data]);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(true);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        const { id, name, description, location } = data!.lab_user_role[index].lab;
        currentLab.update(id, name, description ?? null, location ?? null);
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ width: "15rem" }}>
            <List component="nav" aria-label="Lab selector">
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="Choose a lab"
                    onClick={handleClickListItem}
                    className={classes.button}
                    disabled={loading || !!error}
                >
                    <ListItemIcon>
                        <AccountTreeIcon style={{ color: props.color ?? 'inherit' }} />
                    </ListItemIcon>
                    <ListItemText
                        style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", width: "15rem", overflow: "hidden" }}
                        disableTypography
                        primary={loading ? 'Loading' : error ? 'Error' : currentLab.isInvalid ? "No Lab Selected" : currentLab.name}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            {
                data?.lab_user_role &&
                <Dialog open={!loading && !error && open} onClose={handleClose}>
                    <DialogTitle>Choose a lab</DialogTitle>
                    <List
                        style={{ maxHeight: ITEM_HEIGHT * 9, minWidth: "50%" }}
                    >
                        {data.lab_user_role.length === 0 ?
                            <ListItem button disabled>
                                No labs available
                            </ListItem>
                            : data.lab_user_role.map((option, index) => (
                                <ListItem
                                    button
                                    selected={currentLab.id === option.lab_id}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                    style={{ whiteSpace: 'normal' }}
                                >
                                    {`[${option.lab_id}]: ${option.lab.name}`}
                                </ListItem>
                            ))}
                    </List>
                </Dialog>
            }
        </div>
    );
});

export default LabSelector;