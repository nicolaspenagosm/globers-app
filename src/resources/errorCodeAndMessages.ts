export const ERROR_MSGS = Object.freeze({
  streamingAPI: {
    SSE_NOT_SUPPORTED: {
      code: 'SSE_NOT_SUPPORTED',
      msg: 'Your browser does not support server-sent events',
    },
    INVALID_FIRST_GET_INSTANCE: {
      code: 'INVALID_FIRST_GET_INSTANCE',
      msg: "A base URL must be provided when obtaining the streamer's singleton instance for the first time",
    },
    STREAMING_ERROR: {
      code: 'STREAMING_ERROR',
      msg: 'Connection was lost and close',
    },
  },
  authFirebaseApi: {
    EMAIL_EXISTS: {
      code: 'EMAIL_EXISTS',
      msg: 'This email exists already!',
    },
    EMAIL_NOT_FOUND: {
      code: 'EMAIL_NOT_FOUND',
      msg: 'The email does not exist',
    },
    INVALID_PASSWORD: {
      code: 'INVALID_PASSWORD',
      msg: 'The password is not correct',
    },
    INVALID_LOGIN_CREDENTIALS: {
      code: 'INVALID_LOGIN_CREDENTIALS',
      msg: 'Invalid login credentials',
    },
  },
});
