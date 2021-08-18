import writeSmartPlugMetrics from "./db/write-smart-plug-metrics";
import writeStudentGroupMetrics from "./db/write-student-group-metrics";

async function router(topic: string, message: Buffer): Promise<void> {
    const m = message.toString('utf-8');
    if (isSmartPlugMetrics(topic)) {
        await writeSmartPlugMetrics(topic, message);
    } else (isStudentGroupMetrics(topic)) {
        await writeStudentGroupMetrics(topic, message);
    } else {
        console.info(`Unknown message format: 
        Topic: ${topic}
        Message: ${message.toString('utf-8')}`);
    }
    console.log(`[${topic}]: ${m}`);
}

function isSmartPlugMetrics(topic: string): boolean {
    return true;
}

function isStudentGroupMetrics(topic: string): boolean {
    return true;
}

export default router;