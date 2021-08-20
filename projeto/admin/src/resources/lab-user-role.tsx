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
import { PessimisticToolbar } from "../components/pessimistic-toolbar";

const MemberFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" />
    </Filter>
);

export const MemberList = (props: any) => (
    <List filters={<MemberFilter />}{...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="user" link="show">
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField source="role_id" reference="role" link="show">
                <TextField source="title" />
            </ReferenceField>
        </Datagrid>
    </List>
);


export const MemberShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="user_id" />
            <ReferenceField source="user_id" reference="user" link="show">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="role_id" reference="role" link="show">
                <TextField source="title" />
            </ReferenceField>
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const MemberEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar />}>
            <TextInput source="id" disabled />
            <ReferenceInput source="user_id" reference="user" disabled>
                <TextInput source="name" />
            </ReferenceInput>
            <ReferenceInput source="role_id" reference="role">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);