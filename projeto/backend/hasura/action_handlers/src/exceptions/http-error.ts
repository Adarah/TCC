abstract class HttpError extends Error {
    abstract statusCode: number;
}

export default HttpError;
