import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {ListItemIcon} from "@material-ui/core";
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
    'Escolha um lab',
    'Laboratio digital PCS poli 2021',
    'Lab com nome extramamente longo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'Lab 4',
    '',
];

const ITEM_HEIGHT = 48;

interface LabSelectorProps {
    color?: string
}

const LabSelector = (props: LabSelectorProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        setOpen(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{maxHeight: ITEM_HEIGHT * 9,}}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        style={{whiteSpace: 'normal'}}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default LabSelector;