import { NextFunction, Request, Response } from "express";
import { Command_Type_Enum, GetCommandAndSelectorsQuery, GetCommandAndSelectorsQueryVariables, SmartPlugBySelectorQuery, SmartPlugBySelectorQueryVariables } from "../../generated/graphql";
import COMMAND_AND_SELECTORS_QUERY from "../../queries/get-command-and-selectors";
import SMART_PLUG_BY_SELECTOR_QUERY from "../../queries/get-smart-plug-by-selector";
import GET_SMART_PLUG_BY_SELECTOR from "../../queries/get-smart-plug-by-selector";
import hasuraClient from "../../utils/hasura-client";
import mqttClient from '../../utils/mqtt-client';

interface ExecuteCommandInput {
    command_id: number;
}

async function executeCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { command_id } = req.body.payload as ExecuteCommandInput;

    const { data: commandData, errors: commandErrors } = await hasuraClient.query<GetCommandAndSelectorsQuery, GetCommandAndSelectorsQueryVariables>({
        query: COMMAND_AND_SELECTORS_QUERY,
        variables: { command_id },
    });

    if (commandErrors) {
        res.send(400).json(commandErrors[0]);
        return;
    }

    const selectors = commandData.command_by_pk?.command_selectors.map(s => s.selector);
    const { data: smartPlugData, errors: smartPlugErrors } = await hasuraClient.query<SmartPlugBySelectorQuery, SmartPlugBySelectorQueryVariables>({
        query: SMART_PLUG_BY_SELECTOR_QUERY,
        variables: { selectors },
    });

    if (smartPlugErrors) {
        res.send(400).json(smartPlugErrors[0]);
        return;
    }

    const messagePayload = commandTypeToPayload(commandData.command_by_pk!.type);
    const publishedCommands = smartPlugData.smart_plug.map(p => mqttClient.publish(
        `${p.model}/${p.chip_id}/sub`,
        messagePayload,
        { qos: 1 }
    ));
    await Promise.all(publishedCommands);

    res.sendStatus(200);
}

function commandTypeToPayload(commandType: Command_Type_Enum): string {
    switch (commandType) {
        case Command_Type_Enum.Sleep: {
            return '&Rele1=0';
        }
        case Command_Type_Enum.WakeUp: {
            return '&Rele1=1'
        }
        default: {
            throw new Error(`Unknown command type: ${commandType}`);
        }
    }
}


export default executeCommand;