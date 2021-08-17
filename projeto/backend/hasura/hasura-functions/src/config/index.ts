import { cleanEnv, port, str, url } from 'envalid'

const env = cleanEnv(process.env, {
    HASURA_URL: url({ devDefault: 'http://localhost:8080' }),
    HASURA_ADMIN_SECRET: str({ devDefault: 'myadminsecretkey' }),
    FIREBASE_SHARED_SECRET: str({ devDefault: 'shared-secret' }),
    SELF_URL: url({ devDefault: 'http://localhost:3001' }),
    PORT: port({ default: 3001 }),
});

export default env;