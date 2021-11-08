import { Request, Response } from "express";
import fetch from "node-fetch";
import cronValidate from 'cron-validate';
import env from "../../config";
import {
    InsertCommandMutation,
    InsertCommandMutationVariables,
    Mutation_RootCreateCommandArgs,
    SetCommandEventIdMutation,
    SetCommandEventIdMutationVariables,
} from "../../generated/graphql";
import INSERT_COMMAND_MUTATION from "../../queries/create-command";
import hasuraClient from "../../utils/hasura-client";
import UserInputError from "../../exceptions/user-input-error";
import 'express-async-errors';
import SET_COMMAND_EVENT_ID_MUTATION from "../../queries/set-command-id";

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
            payload: { command_id: commandId },
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
        triggerOptions.args.schedule_at = scheduledTime;
    } else {
        // Should not be reachable as long as the DB constraint is upheld
        throw new Error('Either recurrencePattern or scheduledTime must be set');
    }

    return fetch(`${env.HASURA_URL}/v1/metadata`, {
        method: 'POST',
        body: JSON.stringify(triggerOptions),
        headers: { 'Content-Type': 'application/json', 'x-hasura-admin-secret': env.HASURA_ADMIN_SECRET },
    }).then(resp => resp.json());
}

async function createCommand(req: Request, res: Response): Promise<void> {
    // get request input
    const { 'x-hasura-lab-id': labId } = req.body.session_variables;
    if (!labId) {
        throw new UserInputError('x-hasura-lab-id header missing!');
    }

    const { name, type, is_recurring, recurrence_pattern, scheduled_time_unix, selectors } = req.body.input as Mutation_RootCreateCommandArgs;

    // Commands should have at least one selector
    if (selectors.length === 0) {
        throw new UserInputError('Command must have at least one selector');
    }

    // Commands should have a valid cron format
    if (recurrence_pattern && cronValidate(recurrence_pattern).isError()) {
        throw new UserInputError('Invalid cron format');
    }

    let scheduled_time;
    if (scheduled_time_unix) {
        if (scheduled_time_unix - (Date.now() / 1000) < 30) {
            throw new UserInputError('Operation must be scheduled at least 30 seconds from now');
        }
        scheduled_time = new Date(scheduled_time_unix * 1000).toISOString();
    }


    const formattedSelectors = selectors.map(s => {
        let selector = labId;
        if (s !== '*') {
            selector = `${selector}.${s}`;
        }
        return { selector };
    });
    // Hasura does not reuse existing enums, instead it creates a new one for each action
    // https://github.com/hasura/graphql-engine/issues/5001
    // If they fix this, we won't need to do this casting anymore.

    // execute the Hasura operation
    const { data: insertData } = await hasuraClient.mutate<InsertCommandMutation, InsertCommandMutationVariables>(
        {
            mutation: INSERT_COMMAND_MUTATION,
            // @ts-ignore
            variables: { name, type, is_recurring, recurrence_pattern, selectors: formattedSelectors, scheduled_time },
            context: { headers: { ...req.body.session_variables } },
        }
    );

    const {event_id} = await scheduleTrigger({
        commandId: insertData!.insert_command_one!.id,
        commandName: name,
        labId: req.body.session_variables['x-hasura-lab-id'],
        recurrencePattern: recurrence_pattern,
        scheduledTime: scheduled_time,
    });

    const {data} = await hasuraClient.mutate<SetCommandEventIdMutation, SetCommandEventIdMutationVariables>({
        mutation: SET_COMMAND_EVENT_ID_MUTATION,
        variables: {id: insertData!.insert_command_one!.id, event_id},
        context: { headers: {...req.body.session_variables}}
    });

    // success
    res.json({
        id: data?.update_command_by_pk?.id
    });
}

export default createCommand;