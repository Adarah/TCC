import { Request, Response } from "express";

async function authWebhookHandler(req: Request & { user?: any }, res: Response): Promise<void> {
    const claims = req.user['https://hasura.io/jwt/claims'];
    if (!claims) {
        res.sendStatus(401);
        return;
    }
    claims['x-hasura-role'] = claims['x-hasura-default-role'];
    claims['x-hasura-lab-id'] = req.headers['x-poli-lab-id'];
    delete claims['x-hasura-allowed-roles'];
    console.log(claims);

    res.json(claims);
}

export default authWebhookHandler;
