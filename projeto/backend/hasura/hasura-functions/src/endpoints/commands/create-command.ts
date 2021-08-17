import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import env from "../../config";
import { Command_Type_Enum, InsertCommandMutation, InsertCommandMutationVariables, Mutation_RootCreateCommandArgs } from "../../generated/graphql";
import INSERT_COMMAND_MUTATION from "../../queries/create-command";
import hasuraClient from "../../utils/hasuraClient";
import cronValidate from 'cron-validate';
import { GraphQLError } from "graphql";


async function createCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
    // get request input
    const { name, type, is_recurring, recurrence_pattern, selectors } = req.body.input as Mutation_RootCreateCommandArgs;
    if (recurrence_pattern) {
        const pattern = cronValidate(recurrence_pattern);
        if (pattern.isError()) {
            const err = new GraphQLError(pattern.getError()[0]);
            res.status(400).json(err);
            return;
        }
    }

    const formattedSelectors = selectors.map(s => ({ selector: s }));
    // Hasura does not reuse existing enums, instead it creates a new one for each action
    // https://github.com/hasura/graphql-engine/issues/5001
    // If they fix this, we won't need to do this casting anymore.
    const convertedType = type as string as Command_Type_Enum;


    // execute the Hasura operation
    let { data, errors } = await hasuraClient.mutate<InsertCommandMutation, InsertCommandMutationVariables>(
        {
            mutation: INSERT_COMMAND_MUTATION,
            variables: { name, type: convertedType, is_recurring, recurrence_pattern, selectors: formattedSelectors },
            context: { ...req.body.session_variables },
        }
    );

    // if Hasura operation errors, then throw error
    if (errors) {
        res.status(400).json(errors[0]);
        return;
    }

    if (is_recurring) {
        // if is_recurring, then recurrence_pattern is guaranteed to be set due to a DB constraint
        const res = await scheduleRecurringOperation(recurrence_pattern!, data!.insert_command_one!.id, name, req.body.session_variables['x-hasura-lab-id']);
        console.info('schedule response', res);
    }

    // success
    res.json({
        ...data!.insert_command_one
    });
}

async function scheduleRecurringOperation(schedule: string, commandId: number, commandName: string, labId: string): Promise<any> {
    return fetch(`${env.HASURA_URL}/v1/metadata`, {
        method: 'POST',
        body: JSON.stringify({
            type: 'create_cron_trigger',
            args: {
                name: `${labId} - ${commandName}`,
                webhook: `${env.SELF_URL}/executeCommand`,
                schedule,
                payload: { commandId },
                retry_conf: {
                    num_retries: 10,
                    retry_interval_seconds: 60,
                },
                include_in_metadata: false,
                replace: true,
            },
        }),
        headers: { 'Content-Type': 'application/json' },
    }).then(resp => resp.json());
}

export default createCommand;