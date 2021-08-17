import {NextFunction, Request, Response} from "express";
import HttpError from "../exceptions/http-error";

function errorHandler (err: Error, req: Request, res: Response, next: NextFunction): void {
    console.error(err.stack);
    if (res.headersSent) {
        next(err);
        return;
    }

    if (err instanceof HttpError) {
        res.status(err.statusCode).json({message: err.message});
    } else {
        res.status(500).json({message: err.message});
    }
}

export default errorHandler;