import { cleanEnv, str, url } from "envalid";

const env = cleanEnv(process.env, {
    MQTT_BROKER_URL: url(),
    MQTT_BROKER_USERNAME: str(),
    MQTT_BROKER_PASSWORD: str(),
    PG_USER: str({ devDefault: 'postgres' }),
    PG_PASSWORD: str({ devDefault: 'postgrespassword' }),
    PG_DATABASE: str({ devDefault: 'poli_lab' }),
});

export default env;