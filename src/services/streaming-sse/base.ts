import { StreamingSSE } from "./StreamingSSE/StreamingSSE";

export const sseStreamingClient = StreamingSSE.getInstance(
  import.meta.env.VITE_CRUD_DB_BASE_URL
);