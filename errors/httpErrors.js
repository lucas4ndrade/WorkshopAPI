

class HttpError extends Error {
  constructor(message, status = 500) {
    super(message)
    this.status = status
  }
}

class BadRequestError extends HttpError {
  constructor(message, status = 400) {
    super(message, status);
  }
}