import { Show, TextField, ReferenceField, DateField, TabbedShowLayout, Tab, useShowController } from "react-admin";
import PowerChart from "../../components/power-chart";

export const SmartPlugShow = (props: any) => {
    const { record } = useShowController(props);
    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label="summary">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="model" />
                    <TextField source="chip_id" />
                    <ReferenceField source="lab_station_id" reference="lab_station" link="show">
                        <TextField source="name" />
                    </ReferenceField>
                    <DateField source="created_at" />
                    <DateField source="updated_at" />
                </Tab>
                <Tab label="metrics">
                    <PowerChart smartPlugChipId={record?.chip_id} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
};