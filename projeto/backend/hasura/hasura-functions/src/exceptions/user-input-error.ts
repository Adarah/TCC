import HttpError from "./http-error";

export default class UserInputError extends HttpError {
    statusCode = 400;
    constructor(message: string) {
        super(message);
    }
}