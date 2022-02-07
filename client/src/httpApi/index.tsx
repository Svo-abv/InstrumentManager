import axios, { AxiosRequestConfig } from 'axios';

const $pubHost = axios.create(
    {
        baseURL: process.env.REACT_APP_SERVER_API
    }
);

const $authHost = axios.create(
    {
        baseURL: process.env.REACT_APP_SERVER_API
    }
);

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    try {
        const headers = config.headers ?? {};
        headers.Authorization = `Bearer ${localStorage.getItem('jwtHash')}`;
        return { ...config, headers };
    } catch (e) {

    }
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export { $pubHost, $authHost };