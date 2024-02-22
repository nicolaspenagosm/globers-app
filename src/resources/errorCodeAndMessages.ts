export const ERROR_MSGS = {
  streamingAPI: {
    sseNotSupported: {
      code: 'SSE-NOT-SUPPORTED',
      msg: 'Your browser does not support server-sent events',
    },
    invalidFirstGetInstance: {
      code: 'INVALID_FIRST_GET_INSTANCE',
      msg: "A base URL must be provided when obtaining the streamer's singleton instance for the first time",
    },
    connectionError: {
      code: 'STREAMING_ERROR',
      msg: 'Connection was lost and close',
    },
  },
};
