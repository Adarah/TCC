import mqtt from "async-mqtt";
import env from "./config";
import { COMMANDER_TEST_ROUTE, SMART_PLUG_POWER, STUDENT_GROUP_METRICS } from "./constants";
import router from "./router";
import writeSmartPlugMetricsToDb from "./write-smart-plug-metrics-to-db";

const client = await mqtt.connectAsync(env.MQTT_BROKER_URL, {
  username: env.MQTT_BROKER_USERNAME,
  password: env.MQTT_BROKER_PASSWORD,
  clean: false,
  clientId: 'mqtt-metrics-writer',
});

client.on("connect", () => console.log("Metrics writer successfully connected to broker"));
client.on("message", router);

const topics = [SMART_PLUG_POWER, COMMANDER_TEST_ROUTE];
await Promise.all(topics.map(t => client.subscribe(t, { qos: 1 })));

console.log("Subscribed to all topics");

// TODO: Perguntar pro vitor sobre a possibilidade de adicionar um prefixo a todas rotas para subscription ser mais facil