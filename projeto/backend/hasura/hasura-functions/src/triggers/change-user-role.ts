import {Request, Response} from "express";
import FirebaseService from "../utils/firebaseService";

async function changeUserRole(req: Request, res: Response) {
    const {event: {op, data}, table} = req.body;

    const isUserTable = table.name === 'user' && table.schema === 'public';
    const isUpdate = op === 'UPDATE';
    const roleWasChanged = data.old.role_title !== data.new.role_title;

    if (isUserTable && isUpdate && roleWasChanged) {
        const uid = data.new.id;
        await FirebaseService.updateHasuraCustomClaims(uid, (claims) => {
            const role = data.new.role_title;
            return {
                'x-hasura-allowed-roles': [role],
                'x-hasura-default-role': role
            };
        });
        res.json({error: false});
    }
}

export default changeUserRole;