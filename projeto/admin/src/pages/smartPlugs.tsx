import {
    Create,
    Datagrid,
    DateField,
    Edit,
    Filter,
    List,
    ReferenceField,
    ReferenceInput, required,
    SelectInput,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput
} from 'react-admin';
import {PessimisticToolbar} from "../components/pessimistic-toolbar";

const SmartPlugFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Name" source="name"/>
    </Filter>
);

export const SmartPlugList = (props: any) => (
    <List filters={<SmartPlugFilter/>}{...props}>
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <ReferenceField source="lab_station_id" reference="lab_station" link="show">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="name"/>
        </Datagrid>
    </List>
);

export const SmartPlugCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <ReferenceInput reference="lab_station" source="lab_station_id" validate={required()}>
                <SelectInput/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const SmartPlugShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceField source="lab_station_id" reference="lab_station" link="show">
                <TextField source="name"/>
            </ReferenceField>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
        </SimpleShowLayout>
    </Show>
);

export const SmartPlugEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar/>}>
            <TextInput source="id" disabled/>
            <TextInput source="name" validate={required()}/>
            <ReferenceInput source="lab_station_id" reference="lab_station" validate={required()}>
                <SelectInput/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);