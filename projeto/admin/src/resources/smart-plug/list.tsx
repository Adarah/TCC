import { Filter, TextInput, ReferenceInput, AutocompleteInput, List, Datagrid, TextField, ChipField, ReferenceField, FunctionField } from "react-admin";
import TagField, { format } from "../../components/tag-field";

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
            <TagField label="Tags" />
            <ReferenceField source="lab_station_id" reference="lab_station" link="show">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);
            // <ChipField source="path" format={format}/>