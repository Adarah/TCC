import { customCleanEnv, port, str, url } from 'envalid'


const env = customCleanEnv(process.env, {
    HASURA_URL: url({ devDefault: 'http://localhost:8080' }),
    HASURA_ADMIN_SECRET: str({ devDefault: 'myadminsecretkey' }),
    FIREBASE_SHARED_SECRET: str({ devDefault: 'shared-secret' }),
    SELF_PORT: port({ default: 3001 }),
    SELF_HOST: str({ devDefault: 'localhost' }),
}, (env) => {
    Object.defineProperties(env, {
        SELF_URL: { value: `http://${env.SELF_HOST}:${env.SELF_PORT}` }
    });

    return env as typeof env & Readonly<{ SELF_URL: string }>;
});

export default env;