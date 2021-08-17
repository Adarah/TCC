import { UserInputError as UserInpErr } from "apollo-server-errors";

export default class UserInputError extends UserInpErr {
    constructor(message: string) {
        super(message, { statusCode: 400 });
    }
}