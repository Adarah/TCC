import { customCleanEnv, port, str, url } from 'envalid'


const cleanEnv = customCleanEnv(process.env, {
    SELF_HOST: str({ devDefault: 'localhost' }),
    SELF_PORT: port({ default: 3001 }),
    HASURA_URL: url({ devDefault: 'http://localhost:8080' }),
    HASURA_ADMIN_SECRET: str({ devDefault: 'myadminsecretkey' }),
    FIREBASE_SHARED_SECRET: str({ devDefault: 'shared-secret' }),
    FIREBASE_SIGNING_ALG: str({devDefault: 'none'}),
    MQTT_BROKER_URL: url({ devDefault: 'tcp://3.141.193.238:80' }),
    MQTT_BROKER_ADMIN_USERNAME: str(),
    MQTT_BROKER_ADMIN_PASSWORD: str(),
    NODE_ENV: str({ choices: ['development', 'production'] })
}, (env) => {
    Object.defineProperties(env, {
        SELF_URL: { value: `http://${env.SELF_HOST}:${env.SELF_PORT}` },
    });

    return env as typeof env & Readonly<{ SELF_URL: string }>;
});

export default cleanEnv;