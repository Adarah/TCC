import { Filter, TextInput, ReferenceInput, AutocompleteInput, List, Datagrid, TextField, ChipField, ReferenceField } from "react-admin";

const SmartPlugFilter = (props: any) => (
    <Filter {...props}>
        <TextInput source="name" alwaysOn />
        <TextInput source="model" />
        <TextInput source="chip_id" />
        <ReferenceInput source="lab_station_id" reference="lab_station">
            <AutocompleteInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const SmartPlugList = (props: any) => (
    <List filters={<SmartPlugFilter />}{...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="model" />
            <TextField source="chip_id" />
            <ChipField source="path" />
            <ReferenceField source="lab_station_id" reference="lab_station" link="show">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);