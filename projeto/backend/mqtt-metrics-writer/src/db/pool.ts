import pg from 'pg';
import env from '../config';


const pgPool = new pg.Pool({
    user: env.PG_USER,
    password: env.PG_PASSWORD,
    database: env.PG_DATABASE,
});

export default pgPool;