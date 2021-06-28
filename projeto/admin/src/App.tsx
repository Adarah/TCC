import React, {useEffect, useState} from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import {Admin, Resource, ListGuesser, Loading} from 'react-admin';

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
                name="smart_plugs"
                list={ListGuesser}
            />
        </Admin>
    );
};

export default App;
