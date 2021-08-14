import {
    Create,
    Datagrid,
    DateField,
    Edit,
    Filter,
    List,
    required,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput
} from 'react-admin';
import {PessimisticToolbar} from "../components/pessimistic-toolbar";

const LabFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Name" source="name"/>
        <TextInput label="Location" source="location"/>
    </Filter>
);

export const LabList = (props: any) => (
    <List filters={<LabFilter/>} {...props}>

        <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="description"/>
            <TextField source="location"/>
        </Datagrid>
    </List>
);

export const LabCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <TextInput source="description"/>
            <TextInput source="location"/>
        </SimpleForm>
    </Create>
);

export const LabShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="description"/>
            <TextField source="location"/>
            <DateField source="created_at"/>
            <DateField source="updated_at"/>
        </SimpleShowLayout>
    </Show>
);
export const LabEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar/>}>
            <TextInput source="id" disabled/>
            <TextInput source="name" validate={required()}/>
            <TextInput source="description"/>
            <TextInput source="location"/>
        </SimpleForm>
    </Edit>
);
