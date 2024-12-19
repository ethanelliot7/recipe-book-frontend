import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";

import {ACCESS_TOKEN}  from "../constants.ts";

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

export default api;
