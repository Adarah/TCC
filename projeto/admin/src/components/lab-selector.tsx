import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Dialog, DialogTitle, ListItemIcon} from "@material-ui/core";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
    button: {
        "max-height": "32px",
    },
    icon: {
        color: 'white',
    }
});

const options = [
    'Laboratio digital PCS poli 2021',
    'Lab com nome extramamente longo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'Lab 4',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
    'Laboratio digital PCS poli 2021',
];

const ITEM_HEIGHT = 48;

interface LabSelectorProps {
    color?: string
}

const LabSelector = (props: LabSelectorProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

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

    return (
        <div style={{width: "15rem"}}>
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
                        <AccountTreeIcon style={{color: props.color ?? 'inherit'}}/>
                    </ListItemIcon>
                    <ListItemText
                        style={{whiteSpace: "nowrap", textOverflow: "ellipsis", width: "15rem", overflow: "hidden"}}
                        disableTypography
                        primary={options[selectedIndex]}
                    />
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Choose a lab</DialogTitle>
                <List
                    style={{maxHeight: ITEM_HEIGHT * 9,}}
                >
                    {options.map((option, index) => (
                        <ListItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            style={{whiteSpace: 'normal'}}
                        >
                            {option}
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </div>
    );
}

export default LabSelector;