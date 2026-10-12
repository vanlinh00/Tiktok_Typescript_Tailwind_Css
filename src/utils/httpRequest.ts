import axios, { AxiosRequestConfig } from 'axios';

const httpRequest = axios.create({
    baseURL: (typeof process !== 'undefined' && process.env?.REACT_APP_BASE_URL) || 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async <T = any>(path: string, options: AxiosRequestConfig = {}): Promise<T> => {
    const response = await httpRequest.get<T>(path, options);
    return response.data;
};

export default httpRequest;
