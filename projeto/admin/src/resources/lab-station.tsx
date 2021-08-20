import {
    ArrayInput,
    Create,
    Datagrid,
    DateField,
    Edit,
    Filter,
    List,
    ReferenceArrayInput,
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
import {PessimisticToolbar} from "../components/pessimistic-toolbar";

const LabStationFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Lab" source="lab.name"/>
        <TextInput label="Name" source="name"/>
    </Filter>
);

export const LabStationList = (props: any) => (
    <List filters={<LabStationFilter/>} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceField source="lab_id" reference="lab" link="show">
                <TextField source="name"/>
            </ReferenceField>
        </Datagrid>
    </List>
);

export const LabStationCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <ReferenceArrayInput source="smart_plug_id" reference="smart_plug">
                <TextField source="name"/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export const LabStationShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceField source="lab_id" reference="lab" link="show">
                <TextField source="name"/>
            </ReferenceField>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
        </SimpleShowLayout>
    </Show>
);

export const LabStationEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar/>}>
            <TextInput source="id" disabled/>
            <TextInput source="name" validate={required()}/>
        </SimpleForm>
    </Edit>
);
