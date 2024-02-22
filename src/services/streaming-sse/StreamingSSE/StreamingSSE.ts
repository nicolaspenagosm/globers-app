import { ERROR_MSGS } from '../../../resources/errorCodeAndMessages';
import { IHTTPParams } from '../../../types/shared';
import { parseHTTPParams } from '../../../utils/http';

export type IOnUpdateFn = (event: MessageEvent) => void;
export type IOnCloseStreaming = () => void;

const SERVER_EVENTS = {
  put: 'put',
  patch: 'patch',
  keepAlive: 'keep-alive',
  cancel: 'cancel',
  authRevoked: 'auth_revoked',
  error: 'error',
};

export class StreamingSSE {
  private baseUrl: string | undefined;
  private source!: EventSource | null;
  private static instance: StreamingSSE | null;

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public startListening(
    onUpdateCallback: IOnUpdateFn,
    endpoint: string,
    params: IHTTPParams,
  ) {
    if (typeof EventSource === 'undefined')
      throw new Error(ERROR_MSGS.streamingAPI.sseNotSupported.msg);

    if (this.source) this.close();

    this.source = new EventSource(
      `${this.baseUrl}/${endpoint}${parseHTTPParams(params)}`,
    );

    this.source.onmessage = function (event) {
      console.log('ON MESSAGE');
      console.log(event.data);
    };

    this.source.addEventListener(
      SERVER_EVENTS.error,
      () => {
        this.close();
        console.error(
          `${ERROR_MSGS.streamingAPI.connectionError.code}:${ERROR_MSGS.streamingAPI.connectionError.msg}`,
        );
      },
      false,
    );

    this.source.addEventListener(
      SERVER_EVENTS.patch,
      (e) => {
        console.log('Listener patch');
        onUpdateCallback(e);
      },
      false,
    );

    this.source.addEventListener(
      SERVER_EVENTS.put,
      function (e) {
        console.log('Listener Put');
        console.log('Put UP - ' + e.data);
      },
      false,
    );
  }

  public close() {
    if (this.source) {
      this.source.close();
      this.source = null;
    }
  }

  public static getInstance(baseUrl?: string): StreamingSSE {
    if (!this.instance) {
      if (!baseUrl)
        throw new Error(ERROR_MSGS.streamingAPI.invalidFirstGetInstance.msg);
      this.instance = new StreamingSSE(baseUrl);
    }
    return this.instance;
  }
}
