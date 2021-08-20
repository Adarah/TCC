import { Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput } from "react-admin";

export const SmartPlugCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="model" validate={required()} />
            <TextInput source="chip_id" validate={required()} />
            <ReferenceInput reference="lab_station" source="lab_station_id" validate={required()}>
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);