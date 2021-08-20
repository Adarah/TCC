import { Show, SimpleShowLayout, TextField } from "react-admin";

export const CommandShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);