"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientConnectTimeoutError = exports.HttpClientRequestTimeoutError = exports.HttpClientRequestError = void 0;
class HttpClientRequestError extends Error {
    status;
    headers;
    socket;
    res;
}
exports.HttpClientRequestError = HttpClientRequestError;
class HttpClientRequestTimeoutError extends HttpClientRequestError {
    constructor(timeout, options) {
        const message = `Request timeout for ${timeout} ms`;
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HttpClientRequestTimeoutError = HttpClientRequestTimeoutError;
class HttpClientConnectTimeoutError extends HttpClientRequestError {
    code;
    constructor(message, code, options) {
        super(message, options);
        this.name = this.constructor.name;
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HttpClientConnectTimeoutError = HttpClientConnectTimeoutError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cENsaWVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0h0dHBDbGllbnRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQSxNQUFhLHNCQUF1QixTQUFRLEtBQUs7SUFDL0MsTUFBTSxDQUFVO0lBQ2hCLE9BQU8sQ0FBdUI7SUFDOUIsTUFBTSxDQUFjO0lBQ3BCLEdBQUcsQ0FBdUI7Q0FDM0I7QUFMRCx3REFLQztBQUVELE1BQWEsNkJBQThCLFNBQVEsc0JBQXNCO0lBQ3ZFLFlBQVksT0FBZSxFQUFFLE9BQXFCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLHVCQUF1QixPQUFPLEtBQUssQ0FBQztRQUNwRCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGO0FBUEQsc0VBT0M7QUFFRCxNQUFhLDZCQUE4QixTQUFRLHNCQUFzQjtJQUN2RSxJQUFJLENBQVM7SUFFYixZQUFZLE9BQWUsRUFBRSxJQUFZLEVBQUUsT0FBcUI7UUFDOUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQVRELHNFQVNDIn0=