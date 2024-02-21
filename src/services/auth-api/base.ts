import axios from 'axios';

const authClient = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASE_URL,
});

authClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: import.meta.env.VITE_API_KEY,
  };
  return config;
});

export const { get, post, put, delete: remove } = authClient;
