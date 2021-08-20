import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
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
    TextInput,
    useNotify,
    useRedirect,
    useRefresh
} from 'react-admin';
import { PessimisticToolbar } from "../components/pessimistic-toolbar";
import { CurrentLabContext } from '../globals/current-lab';

const LabFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" />
        <TextInput label="Location" source="location" />
    </Filter>
);

export const LabList = (props: any) => (
    <List filters={<LabFilter />} {...props}>

        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="location" />
        </Datagrid>
    </List>
);

export const LabCreate = observer((props: any) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const currentLab = useContext(CurrentLabContext);

    const onSuccess = (response: any) => {
        console.log(response);
        notify('Changes saved');
        redirect('/');
        refresh();
        const { id, name, description, location } = response.data;
        currentLab.update(id, name, description, location);
    };

    return (
        <Create {...props} onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="description" />
                <TextInput source="location" />
            </SimpleForm>
        </Create>
    )
});

export const LabShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="location" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </SimpleShowLayout>
    </Show>
);
export const LabEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar />} redirect="/" >
            <TextInput source="id" disabled />
            <TextInput source="name" validate={required()} />
            <TextInput source="description" />
            <TextInput source="location" />
        </SimpleForm>
    </Edit>
);
