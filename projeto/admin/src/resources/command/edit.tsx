import { Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin";
import { PessimisticToolbar } from "../../components/pessimistic-toolbar";

export const CommandEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<PessimisticToolbar />}>
            <TextInput source="id" disabled />
            <TextInput source="name" validate={required()} />
            <ReferenceInput source="lab_station_id" reference="lab_station" validate={required()}>
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);