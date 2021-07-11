import HttpError from "./http-error";

class HttpForbidden extends HttpError {
    statusCode: number = 403;
}

export default HttpForbidden;