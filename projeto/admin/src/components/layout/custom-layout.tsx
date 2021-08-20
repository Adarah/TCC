import {Layout} from 'react-admin';
import CustomAppBar from "./custom-app-bar";
import CustomSidebar from "./custom-sidebar";

const CustomLayout = (props: any) => {
    return (
        <Layout
            {...props}
            appBar={CustomAppBar}
            sidebar={CustomSidebar}
        />
    );
}

export default CustomLayout;