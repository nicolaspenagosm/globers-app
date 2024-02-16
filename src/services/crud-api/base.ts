import axios from "axios";
import store from "../../store";
const crudDataClient = axios.create({
  baseURL: import.meta.env.VITE_CRUD_DB_BASE_URL,
});

crudDataClient.interceptors.request.use((config) => {
  const storedToken = store.getState().auth.tokenData?.token;
  config.params = {
    ...config.params,
    auth: storedToken || "no token",
  };
  return config;
});

export const { get, post, put, delete: remove } = crudDataClient;
