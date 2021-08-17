import {Request, Response} from "express";
import FirebaseService from "../../utils/firebaseService";

async function deleteUser(req: Request, res: Response) {
    const {event: {op, data}, table} = req.body;

    const isUserTable = table.name === 'user' && table.schema === 'public';
    const isDelete = op === 'DELETE';
    if (isUserTable && isDelete) {
        const uid = data.old.id;
        await FirebaseService.deleteUser(uid);
        res.json({error: false});
    }
}

export default deleteUser;