import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_POKEMON_API

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default apiClient;
