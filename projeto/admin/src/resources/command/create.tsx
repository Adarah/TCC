import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { useNotify, useRedirect, Create, SimpleForm, TextInput, required, ReferenceInput, SelectInput, BooleanInput, FormDataConsumer, ArrayInput, SimpleFormIterator } from "react-admin";
import { InsertCommandMutation, InsertCommandMutationVariables } from "../../graphql/generated/types";
import { DateTimeInput } from "@shinabr2/react-admin-date-inputs";
import INSERT_COMMAND_MUTATION from "../../graphql/queries/create-command";
import RRule from "rrule";

export const CommandCreate = (props: any) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const [createCommand, { loading, data }] = useMutation<InsertCommandMutation, InsertCommandMutationVariables>(INSERT_COMMAND_MUTATION);
    // Um pouco gambiarra. A funcao save eh pra ser usado pra fazer server-side validation, mas aqui eu
    // estou usando pra fazer override da funcao de submissao pq eu n sei modificar o data-provider
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
                            <p>Build an RFC5545 iCal RRule expression</p>
                            <a style={{ display: 'block' }} href="https://icalendar.org/rrule-tool.html" target="_blank">Official tooling</a>
                            <a style={{ display: 'block' }} href="https://www.textmagic.com/free-tools/rrule-generator" target="_blank">Alternative with examples</a>
                            <TextInput validate={required()} source="rrule" label="RRule" />
                            <RRuleShow ruleText={formData.rrule}/>
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


const RRuleShow = (props: {ruleText?: string}) => {
    let ret;
    try {
        ret = RRule.fromString(props.ruleText!).toText();
    } catch (e) {
        ret = 'Could not parse RRule';
    }
    return (<p>{ret}</p>);
}