import {Request, Response} from "express";


async function authWebhookHandler(req: Request & { user?: any }, res: Response): Promise<void> {
    console.log(req.user);
}

export default authWebhookHandler;
