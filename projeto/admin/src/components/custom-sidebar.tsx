import { Sidebar } from 'react-admin';
import {Divider, useMediaQuery, useTheme} from "@material-ui/core";
import LabSelector from "./lab-selector";

const CustomSidebar = (props: any) => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        isSm ?
            <Sidebar {...props}/>
            :
            <Sidebar {...props}>
                <LabSelector/>
                <Divider/>
                {props.children}
            </Sidebar>
    );
};


export default CustomSidebar;