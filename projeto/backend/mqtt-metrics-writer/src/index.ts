import mqtt from "async-mqtt";
import writeSmartPlugMetricsToDb from "./write-smart-plug-metrics-to-db";

const brokerUrl = process.env.MQTT_BROKER_URL ?? "tcp://3.141.193.238:80";
async function main() {
  const client = await mqtt.connectAsync(brokerUrl, {
    username: "aluno0",
    password: "testealuno",
    clean: false,
    clientId: 'mqtt-metrics-writer',
  });
  console.log("connected");
  client.on("message", writeSmartPlugMetricsToDb);
  await client.subscribe("+/+/power", {
    qos: 1, // At least once delivery
  });
  console.log("subbed");
}

main();
