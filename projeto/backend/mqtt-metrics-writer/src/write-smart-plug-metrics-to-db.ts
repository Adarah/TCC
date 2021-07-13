import pg from 'pg';

const { Pool } = pg;

const pgPool = new Pool({
  user: process.env.PG_USER ?? "postgres",
  password: process.env.PG_PASSWORD ?? "postgrespassword",
  database: process.env.PG_DATABASE ?? "poli_lab",
});

async function writeSmartPlugMetricsToDb(topic: string, message: Buffer) {
  // topic has the format "model/chipId/measure"
  // where measure can be metrics such as power.
  const [model, chipId, measure] = topic.split("/");
  // const measurement = message.toString('utf-8');
  const measurement = (5 * Math.random()).toString();

  const client = await pgPool.connect();
  try {
    await client.query(
      `
        INSERT INTO smart_plug_metrics(time, smart_plug_chip_id, power)
        VALUES ($1, $2, $3);
`, // TODO: Have the MQTT broker send the timestamp instead of using the receiver's timestamp
      [new Date(), chipId, measurement]
    );
  } finally {
    client.release();
  }
  console.log(Date.now(), model, chipId, measure);
  console.log(topic, message);
}

export default writeSmartPlugMetricsToDb;