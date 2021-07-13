import React, {useEffect, useState} from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import {Admin, Resource, Loading, EditGuesser, ShowGuesser, ListGuesser} from 'react-admin';
import {LabCreate, LabEdit, LabList, LabShow} from "./pages/lab";
import {LabStationCreate, LabStationEdit, LabStationList, LabStationShow,} from "./pages/labStation";
import {SmartPlugCreate, SmartPlugEdit, SmartPlugList, SmartPlugShow} from "./pages/smartPlugs";
import Dashboard from "./pages/dashboard";
import CustomLoginPage from "./pages/login";
import firebaseAuthProvider from "./utils/firebase-auth-provider";
import {__schema as schema} from './generated/introspection.json';
import apolloClient from "./utils/apollo-client";


const App = () => {
    const [dataProvider, setDataProvider] = useState<any>(null);
    // const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const buildDataProvider = async () => {
            // console.log('auth token will be', token);
            const dataProvider = await buildHasuraProvider({client: apolloClient, introspection: {schema}});
            setDataProvider(() => dataProvider);
        };
        buildDataProvider();
    }, []);

    if (!dataProvider) return <Loading/>;

    return (

            <Admin
                dataProvider={dataProvider}
                authProvider={firebaseAuthProvider}
                loginPage={CustomLoginPage}
                dashboard={Dashboard}
            >
                <Resource
                    name="lab"
                    list={LabList}
                    create={LabCreate}
                    show={LabShow}
                    edit={LabEdit}
                />
                <Resource
                    name="lab_station"
                    list={LabStationList}
                    create={LabStationCreate}
                    show={LabStationShow}
                    edit={LabStationEdit}
                />
                <Resource
                    name="smart_plug"
                    list={SmartPlugList}
                    create={SmartPlugCreate}
                    show={SmartPlugShow}
                    edit={SmartPlugEdit}
                />
            </Admin>
    );
};

export default App;
