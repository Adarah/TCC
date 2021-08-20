
import { Filter, TextInput, BooleanInput, List, Datagrid, TextField, DateField, ReferenceManyField, ChipField, SingleFieldList } from "react-admin";



const CommandFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" />
        <BooleanInput label="Is Recurring" source='is_recurring' />
    </Filter>
);

export const CommandList = (props: any) => (
    <List filters={<CommandFilter />}{...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <TextField source="type" />
            <TextField source="is_recurring" />
            <TextField source="recurrence_pattern" />
            <DateField source="scheduled_time" locales="pt-BR" showTime={true} />
            <ReferenceManyField label="Selectors" reference="command_selector" target="command_id">
                <SingleFieldList>
                    <ChipField source="selector" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
);