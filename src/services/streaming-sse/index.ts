import { IHTTPParams } from '../../types/shared';
import { IOnUpdateFn } from './StreamingSSE/StreamingSSE';
import { sseStreamingClient } from './base';

export const streamingAPI = {
  closeConnections: () => sseStreamingClient.close(),
  streamChatUpdates: (
    params: IHTTPParams,
    userId: string,
    onUpdateCallback: IOnUpdateFn,
  ) =>
    sseStreamingClient.startListening(
      onUpdateCallback,
      `/users/${userId}/chats.json`,
      params,
    ),
};
