import { Show, TextField, ReferenceField, DateField, TabbedShowLayout, Tab, useShowController } from "react-admin";
import PowerChart from "../../components/power-chart";
import TagField from "../../components/tag-field";

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
                    <TagField source="tag" label="Tags" />
                    <ReferenceField source="lab_station_id" reference="lab_station" link="show">
                        <TextField source="name" />
                    </ReferenceField>
                    <DateField source="created_at" />
                    <DateField source="updated_at" />
                </Tab>
                <Tab label="metrics">
                    <div style={{ width: '500px' }}>
                        <PowerChart smartPlugChipId={record?.chip_id} />
                    </div>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
};