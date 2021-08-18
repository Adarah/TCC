import { Pool } from 'pg';
import env from '../config';


const pgPool = new Pool({
    user: env.PG_USER,
    password: env.PG_PASSWORD,
    database: env.PG_DATABASE,
});

export default pool;