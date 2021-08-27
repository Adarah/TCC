import { observer } from 'mobx-react-lite';
import buildHasuraProvider from 'ra-data-hasura';
import { useContext, useEffect, useState } from 'react';
import { Admin, Loading, Resource } from 'react-admin';
import CustomLayout from "./components/layout/custom-layout";
import poliTheme from "./components/poli-theme";
import { CurrentLabContext } from './globals/current-lab';
import { __schema as schema } from './graphql/generated/introspection.json';
import Dashboard from "./pages/dashboard/dashboard";
import CustomLoginPage from "./pages/login";
import { CommandCreate, CommandEdit, CommandList, CommandShow } from './resources/command';
import { LabCreate, LabEdit, LabShow } from "./resources/lab";
import { LabStationCreate, LabStationEdit, LabStationList, LabStationShow } from "./resources/lab-station";
import { MemberEdit, MemberList, MemberShow } from './resources/lab-user-role';
import { RoleShow } from './resources/role';
import { SmartPlugCreate, SmartPlugEdit, SmartPlugList, SmartPlugShow } from './resources/smart-plug';
import { UserEdit, UserShow } from './resources/user';
import apolloClient from "./utils/apollo-client";
import firebaseAuthProvider from "./utils/firebase-auth-provider";

const App = observer(() => {
    const [dataProvider, setDataProvider] = useState<any>(null);
    const currentLab = useContext(CurrentLabContext);

    useEffect(() => {
        const buildDataProvider = async () => {
            // console.log('auth token will be', token);
            const dataProvider = await buildHasuraProvider({ client: apolloClient, introspection: { schema } });
            setDataProvider(() => dataProvider);
        };
        buildDataProvider();
    }, []);

    if (!dataProvider) return <Loading />;

    return (

        <Admin
            dataProvider={dataProvider}
            authProvider={firebaseAuthProvider}
            loginPage={CustomLoginPage}
            dashboard={Dashboard}
            layout={CustomLayout}
            theme={poliTheme}
        >
            <Resource
                name="lab"
                create={LabCreate}
                show={LabShow}
                edit={LabEdit}
            />
            <Resource
                name="lab_station"
                list={currentLab.isInvalid ? undefined : LabStationList}
                create={LabStationCreate}
                show={LabStationShow}
                edit={LabStationEdit}
            />
            <Resource
                name="smart_plug"
                list={currentLab.isInvalid ? undefined : SmartPlugList}
                create={SmartPlugCreate}
                show={SmartPlugShow}
                edit={SmartPlugEdit}
            />

            <Resource
                name="command"
                list={currentLab.isInvalid ? undefined : CommandList}
                create={CommandCreate}
                show={CommandShow}
                edit={CommandEdit}
            />

            <Resource
                name="lab_user_role"
                list={currentLab.isInvalid ? undefined : MemberList}
                show={MemberShow}
                edit={MemberEdit}
                options={{ label: 'Members' }}
            />


            <Resource
                name="user"
                show={UserShow}
                edit={UserEdit}
            />

            <Resource
                name="role"
                show={RoleShow}
            />

            <Resource name="command_type" />
            <Resource name="command_selector" />
        </Admin>
    );
});

export default App;
