import {
    DateField,
    Edit, ReferenceField, required, Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput
} from 'react-admin';
import { PessimisticToolbar } from "../components/pessimistic-toolbar";

export const UserShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);

export const UserEdit = (props: any) => (
    <Edit {...props} >
        <SimpleForm toolbar={<PessimisticToolbar />} redirect="/lab_user_role">
            <TextInput source="id" disabled />
            <TextInput source="name" validate={required()} />
        </SimpleForm>
    </Edit>
);