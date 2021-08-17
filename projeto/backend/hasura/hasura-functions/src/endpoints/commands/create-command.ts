import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import env from "../../config";
import { Command_Type_Enum, InsertCommandMutation, InsertCommandMutationVariables, Mutation_RootCreateCommandArgs } from "../../generated/graphql";
import INSERT_COMMAND_MUTATION from "../../queries/create-command";
import hasuraClient from "../../utils/hasuraClient";
import cronValidate from 'cron-validate';
import UserInputError from "../../exceptions/user-input-error";


async function createCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
    // get request input
    const { name, type, is_recurring, recurrence_pattern, scheduled_time, selectors } = req.body.input as Mutation_RootCreateCommandArgs;

    // Commands should have at least one selector
    if (selectors.length === 0) {
        throw new UserInputError('Command must have at least one selector');
    }

    // Commands should have a valid cron format
    if (recurrence_pattern && cronValidate(recurrence_pattern).isError()) {
        throw new UserInputError('Invalid cron format');
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

    // if Hasura operation errors, then return the error
    if (errors) {
        res.status(400).json(errors[0]);
        return;
    }

    await scheduleTrigger({
        commandId: data!.insert_command_one!.id,
        commandName: name,
        labId: req.body.session_variables['x-hasura-lab-id'],
        recurrencePattern: recurrence_pattern,
        scheduledTime: scheduled_time,
    });

    // success
    res.json({
        ...data!.insert_command_one
    });
}

interface ScheduleOptions {
    commandId: number,
    commandName: string,
    labId: string,
    recurrencePattern?: string | null,
    scheduledTime?: string | null,
}

async function scheduleTrigger(options: ScheduleOptions): Promise<any> {
    const { commandId, commandName, labId, recurrencePattern, scheduledTime } = options;

    const triggerOptions: Record<string, any> = {
        args: {
            name: `${labId} - ${commandName}`,
            webhook: `${env.SELF_URL}/executeCommand`,
            payload: { commandId },
            retry_conf: {
                num_retries: 10,
                retry_interval_seconds: 60,
            },
            include_in_metadata: false,
            replace: true,
        },
    };

    if (recurrencePattern && !scheduledTime) {
        triggerOptions.type = 'create_cron_trigger';
        triggerOptions.args.schedule = recurrencePattern;
    } else if (!recurrencePattern && scheduledTime) {
        triggerOptions.type = 'create_scheduled_event';
        triggerOptions.schedule_at = scheduledTime;
    } else {
        // Should not be reachable as long as the DB constraint is upheld
        throw new Error('Either recurrencePattern or scheduledTime must be set');
    }

    return fetch(`${env.HASURA_URL}/v1/metadata`, {
        method: 'POST',
        body: JSON.stringify(triggerOptions),
        headers: { 'Content-Type': 'application/json' },
    }).then(resp => resp.json());
}

export default createCommand;