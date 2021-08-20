import {
    DateField, ReferenceField, Show, SimpleShowLayout,
    TextField
} from 'react-admin';

export const RoleShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
        </SimpleShowLayout>
    </Show>
);