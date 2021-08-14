import {Request, Response} from "express";
import FirebaseService from "../utils/firebaseService";

async function addOrRemoveOperatorToLab(req: Request, res: Response) {
    const {event: {op, data}, table} = req.body;

    const isLabOperatorTable = table.name === 'lab_operator' && table.schema === 'public';
    const isInsert = op === 'INSERT';
    const isDelete = op === 'DELETE';
    if (isLabOperatorTable && isInsert) {
        const operatorId = data.new.operator_id;
        await FirebaseService.updateHasuraCustomClaims(operatorId, (claims) => {
            // allowedLabsClaim has the format of a postgresql array, that is, "{1, 2, 3}"
            const allowedLabsClaim: string = claims["x-hasura-allowed-lab-ids"] ?? "{}";
            // Removes braces and whitespace, then generates a js Set from the sequence
            const allowedLabs: Set<string> = new Set(
                allowedLabsClaim
                    .replace(/[{}\s]/g, '')
                    .split(',')
                    .filter((el) => el.length !== 0)
            );
            allowedLabs.add(data.new.lab_id.toString());
            const newLabsClaim = `{${Array.from(allowedLabs).join(',')}}`;
            return {'x-hasura-allowed-lab-ids': newLabsClaim};
        });
        res.json({error: false});
    } else if (isLabOperatorTable && isDelete) {
        const operatorId = data.old.operator_id;
        await FirebaseService.updateHasuraCustomClaims(operatorId, (claims) => {
            // allowedLabsClaim has the format of a postgresql array, that is, "{1, 2, 3}"
            const allowedLabsClaim: string = claims["x-hasura-allowed-lab-ids"] ?? "{}";
            // Removes braces and whitespace, then generates a js Set from the sequence
            const allowedLabs: Set<string> = new Set(
                allowedLabsClaim
                    .replace(/[{}\s]/g, '')
                    .split(',')
                    .filter((el) => el.length !== 0)
            );
            allowedLabs.delete(data.old.lab_id.toString());
            const newLabsClaim = `{${Array.from(allowedLabs).join(',')}}`;
            return {'x-hasura-allowed-lab-ids': newLabsClaim};
        });
        res.json({error: false});
    } else {
        res.json({error: false, message: 'ignored event'});
    }
}

export default addOrRemoveOperatorToLab;