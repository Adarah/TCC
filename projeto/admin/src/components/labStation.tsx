import {
    Create,
    Datagrid,
    Edit,
    Filter,
    List,
    ReferenceField,
    ReferenceInput,
    required,
    SelectInput,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput
} from 'react-admin';
import {PessimisticToolbar} from "./PessimisticToolbar";

const LabStationFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Lab" source="lab.name"/>
        <TextInput label="Name" source="name"/>
    </Filter>
);

export const LabStationList = (props: any) => (
    <List filters={<LabStationFilter/>} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="lab_id" reference="lab"><TextField source="id" /></ReferenceField>
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const LabStationCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <ReferenceInput reference="lab" source="lab_id">
                <SelectInput>
                </SelectInput>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const LabStationShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="lab_id" reference="lab"><TextField source="id" /></ReferenceField>
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export const LabStationEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar/>}>
            <TextInput source="id" disabled />
            <ReferenceInput source="lab_id" reference="lab"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);
