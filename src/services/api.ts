import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";

import {ACCESS_TOKEN, REFRESH_TOKEN} from "@/constants.ts";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error: AxiosError)=>{
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response)=>{
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (originalRequest?.response?.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true;
            try {
                const CurrentAccessToken = localStorage.getItem(ACCESS_TOKEN);
                const resp = await api.post('api/auth/token/refresh',{CurrentAccessToken})
                if (resp.status !== 200){
                    localStorage.removeItem(ACCESS_TOKEN);
                    localStorage.removeItem(REFRESH_TOKEN);
                    return Promise.reject(error)
                }
                const NewAccessToken = resp?.data?.access
                localStorage.setItem(ACCESS_TOKEN, NewAccessToken)
                return api(originalRequest)
            }
            catch (error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error)
    }
)

export default api;
