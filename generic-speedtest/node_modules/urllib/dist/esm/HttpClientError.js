export class HttpClientRequestError extends Error {
    status;
    headers;
    socket;
    res;
}
export class HttpClientRequestTimeoutError extends HttpClientRequestError {
    constructor(timeout, options) {
        const message = `Request timeout for ${timeout} ms`;
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
export class HttpClientConnectTimeoutError extends HttpClientRequestError {
    code;
    constructor(message, code, options) {
        super(message, options);
        this.name = this.constructor.name;
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cENsaWVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0h0dHBDbGllbnRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsS0FBSztJQUMvQyxNQUFNLENBQVU7SUFDaEIsT0FBTyxDQUF1QjtJQUM5QixNQUFNLENBQWM7SUFDcEIsR0FBRyxDQUF1QjtDQUMzQjtBQUVELE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxzQkFBc0I7SUFDdkUsWUFBWSxPQUFlLEVBQUUsT0FBcUI7UUFDaEQsTUFBTSxPQUFPLEdBQUcsdUJBQXVCLE9BQU8sS0FBSyxDQUFDO1FBQ3BELEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsc0JBQXNCO0lBQ3ZFLElBQUksQ0FBUztJQUViLFlBQVksT0FBZSxFQUFFLElBQVksRUFBRSxPQUFxQjtRQUM5RCxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGIn0=