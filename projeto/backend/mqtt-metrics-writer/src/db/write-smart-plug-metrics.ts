import pool from './pool';

async function writeSmartPlugMetrics(topic: string, message: Buffer): Promise<void> {
  // topic has the format "model/chipId/measure"
  // where measure can be metrics such as power.
  const [model, chipId, measure] = topic.split("/");
  const measurement = message.toString('utf-8');
  // const measurement = (5 * Math.random()).toString();

  const client = await pool.connect();
  try {
    await client.query(
      `
        INSERT INTO smart_plug_metrics(time, smart_plug_chip_id, power)
        VALUES ($1, $2, $3);
`, // TODO: Have the MQTT broker send the timestamp instead of using the receiver's timestamp
      [new Date(), chipId, measurement]
    );
  } catch (err) {
  }
  finally {
    client.release();
  }
}

export default writeSmartPlugMetrics;