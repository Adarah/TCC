import {Request, Response} from "express";

async function authWebhookHandler(req: Request & { user?: any }, res: Response): Promise<void> {
    const claims = req.user['https://hasura.io/jwt/claims'];
    const labId = parseInt(String(req.headers['x-poli-lab-id']), 10);
    if (Number.isNaN(labId) || !claims) {
        res.sendStatus(401);
        return;
    }

    res.json(claims);
}

export default authWebhookHandler;
