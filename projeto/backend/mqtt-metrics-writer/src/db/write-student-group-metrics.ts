import pool from './pool';

async function writeStudentGroupMetrics(topic: string, message: Buffer): Promise<void> {
    // topic has the format "broker_login/topic"
    const [brokerLogin, _topic] = topic.split("/");
    const content = message.toString('utf-8');


    const client = await pool.connect();
    try {
        await client.query(
            `
                INSERT INTO student_group_metrics(time, broker_login, topic, content)
                VALUES ($1, $2, $3, $4);
            `, // TODO: Have the MQTT broker send the timestamp instead of using the receiver's timestamp
            [new Date(), brokerLogin, _topic, content]
        );
    } catch(err) {
    } finally {
        client.release();
    }
    console.log(Date.now(), brokerLogin, _topic, content);
}

export default writeStudentGroupMetrics;