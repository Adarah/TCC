import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { useNotify, useRedirect, Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput, BooleanInput, FormDataConsumer, ArrayInput, SimpleFormIterator } from "react-admin";
import { InsertCommandMutation, InsertCommandMutationVariables } from "../../graphql/generated/types";
import { DateTimeInput } from "@shinabr2/react-admin-date-inputs";
import INSERT_COMMAND_MUTATION from "../../graphql/queries/create-command";
import HelpIcon from '@material-ui/icons/Help';
import { Tooltip } from "@material-ui/core";

export const CommandCreate = (props: any) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const [createCommand, { loading, data }] = useMutation<InsertCommandMutation, InsertCommandMutationVariables>(INSERT_COMMAND_MUTATION);
    const save = useCallback(async (variables: any) => {
        if (variables.is_recurring) {
            delete variables.scheduled_time_unix;
        } else {
            delete variables.recurrence_pattern;
            const toUnixTimestamp = (d: Date) => Math.floor(d.getTime() / 1000);
            variables.scheduled_time_unix = toUnixTimestamp(variables.scheduled_time_unix);
        }

        try {
            await createCommand({ variables })
            redirect('/command');
        } catch (err: any) {
            notify(err.graphQLErrors[0].message, 'error');
        }
        return true;
    }, []);

    const onSuccess = () => {
        alert('success!');
    }

    return (
        <Create {...props} onSuccess={onSuccess}>
            <SimpleForm save={save} saving={loading}>
                <TextInput source="name" validate={required()} />
                <ReferenceInput source="type" reference="command_type">
                    <SelectInput optionText="id" validate={required()} />
                </ReferenceInput>
                <BooleanInput label="Recurring?" source="is_recurring" defaultValue={false} />
                <FormDataConsumer>
                    {({ formData }) => formData.is_recurring ?
                        <>
                            <a style={{ display: 'block' }} href="https://crontab.guru/" target="_blank">Build a cron expression</a>
                            <TextInput validate={required()} source="recurrence_pattern" />
                            <Tooltip title="Cron schedule">
                                <HelpIcon />
                            </Tooltip>
                        </>
                        :
                        <DateTimeInput validate={required()} label="Scheduled Time" source="scheduled_time_unix" options={{ disablePast: true, format: 'dd/MM/yyyy HH:mm:ss', ampm: false, clearable: true }} />
                    }
                </FormDataConsumer>
                <ArrayInput source="selectors" validate={required()}>
                    <SimpleFormIterator>
                        <TextInput source='' validate={required()} />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create >
    )
};
