import { NextFunction, Request, Response } from "express";
import { GetCommandAndSelectorsQuery, GetCommandAndSelectorsQueryVariables } from "../../generated/graphql";
import COMMAND_AND_SELECTORS_QUERY from "../../queries/get-command-and-selectors";
import hasuraClient from "../../utils/hasuraClient";

interface ExecuteCommandInput {
    command_id: number;
}

async function executeCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log(req.body);
    const { command_id } = req.body as ExecuteCommandInput;

    const { data, errors } = await hasuraClient.query<GetCommandAndSelectorsQuery, GetCommandAndSelectorsQueryVariables>({
        query: COMMAND_AND_SELECTORS_QUERY,
        variables: { command_id },
    });

    if (errors) {
        res.send(400).json(errors[0]);
        return;
    }

    const selectors = data.command_by_pk?.command_selectors.map(s => s.selector);
    
    await hasuraClient.query

    res.sendStatus(201);
}


export default executeCommand;