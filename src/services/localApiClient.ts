import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: "/api/",
    headers: {
        'Accept': 'application/json',
    },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (window.location.port === '6006') {
        // If it is in the context of Storybook (localhost:6006),
        // use localhost:3000 as the base URL
        config.baseURL = 'http://localhost:3000/api/';
    }
    // TODO: plug actual authentication
    return config;
}, (error: AxiosError) => Promise.reject(error));

// Handle global response errors, if needed
apiClient.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {
    // TODO: Handle global error. E.g. logging out user on 401
    return Promise.reject(error);
});

export default apiClient;
