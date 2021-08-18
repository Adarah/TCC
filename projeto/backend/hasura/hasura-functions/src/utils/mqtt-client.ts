import mqtt from "async-mqtt";
import env from '../config';

const mqttClient = await mqtt.connectAsync(env.MQTT_BROKER_URL, {
    username: env.MQTT_BROKER_ADMIN_USERNAME,
    password: env.MQTT_BROKER_ADMIN_PASSWORD,
    clean: false,
    clientId: 'poli-lab-commander',
});
console.log("connected to mqtt client");

export default mqttClient;