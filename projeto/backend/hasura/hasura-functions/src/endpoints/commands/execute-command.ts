import { NextFunction, Request, Response } from "express";

async function executeCommand(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.sendStatus(201);
}


export default executeCommand;