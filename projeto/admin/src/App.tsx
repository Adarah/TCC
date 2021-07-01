import React, {useEffect, useState} from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import {Admin, Resource, Loading, EditGuesser, ShowGuesser, ListGuesser} from 'react-admin';
import {LabCreate, LabEdit, LabList, LabShow } from "./components/lab";
import {LabStationCreate, LabStationEdit, LabStationList, LabStationShow,} from "./components/labStation";
import {SmartPlugCreate, SmartPlugEdit, SmartPlugList, SmartPlugShow} from "./components/smartPlugs";

const hasuraUrl = 'http://localhost:8080/v1/graphql';

const App = () => {
    const [dataProvider, setDataProvider] = useState<any>(null);

    useEffect(() => {
        const buildDataProvider = async () => {
            const dataProvider = await buildHasuraProvider({
                clientOptions: {uri: hasuraUrl}
            });
            setDataProvider(() => dataProvider);
        };
        buildDataProvider();
    }, []);

    if (!dataProvider) return <Loading/>;

    return (
        <Admin dataProvider={dataProvider}>
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
