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
import { gql, useQuery } from "@apollo/client";

const useStyles = makeStyles({
    button: {
        "max-height": "32px",
    },
    icon: {
        color: 'white',
    }
});

// TODO: Write query
// const GET_USER_LABS = gql`
// `;

const options: { name: string, id: number }[] = [
    { name: 'Laboratio digital PCS poli 2021', id: 1 },
    { name: 'Lab com nome extramamente longo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', id: 2 },
    { name: 'Lab 4', id: 3 },
    { name: 'Laboratio digital PCS poli 2021', id: 3 },
    { name: 'Laboratio digital PCS poli 2021', id: 4 },
    { name: 'Laboratio digital PCS poli 2021', id: 5 },
    { name: 'Laboratio digital PCS poli 2021', id: 7 },
    { name: 'Laboratio digital PCS poli 2021', id: 16 },
    { name: 'Laboratio digital PCS poli 2021', id: 21 },
    { name: 'Laboratio digital PCS poli 2021', id: 21 },
    { name: 'Laboratio digital PCS poli 2021', id: 20 },
    { name: 'Laboratio digital PCS poli 2021', id: 21 },
    { name: 'Laboratio digital PCS poli 2021', id: 22 },
    { name: 'Laboratio digital PCS poli 2021', id: 23 },
    { name: 'Laboratio digital PCS poli 2021', id: 24 },
];

const ITEM_HEIGHT = 48;

interface LabSelectorProps {
    color?: string
}


const LabSelector = observer((props: LabSelectorProps) => {
    const classes = useStyles();
    const currentLab = useContext(CurrentLabContext);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(options.findIndex(o => o.id === currentLab.id));

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(true);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (selectedIndex !== -1 && options[selectedIndex].id !== currentLab.id) {
            currentLab.id = options[selectedIndex].id;
        }

    }, [selectedIndex])

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
                >
                    <ListItemIcon>
                        <AccountTreeIcon style={{ color: props.color ?? 'inherit' }} />
                    </ListItemIcon>
                    <ListItemText
                        style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", width: "15rem", overflow: "hidden" }}
                        disableTypography
                        primary={selectedIndex === -1 ? "No Lab Selected" : options[selectedIndex].name}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Choose a lab</DialogTitle>
                <List
                    style={{ maxHeight: ITEM_HEIGHT * 9, minWidth: "50%" }}
                >
                    {options.length === 0 ?
                        <ListItem button disabled>
                            No labs available
                        </ListItem>
                        : options.map((option, index) => (
                            <ListItem
                                button
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                                style={{ whiteSpace: 'normal' }}
                            >
                                {option.name}
                            </ListItem>
                        ))}
                </List>
            </Dialog>
        </div>
    );
});

export default LabSelector;