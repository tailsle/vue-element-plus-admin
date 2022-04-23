import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from "element-plus";

const instance: AxiosInstance = axios.create({
	timeout: 5 * 1000,
	baseURL: import.meta.env.VITE_BASE_URL as string,
	withCredentials: true
});

instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	(res: AxiosResponse) => {
		return res.data;
	},
	(error: any) => {
		ElMessage.error(error.message)
		return Promise.reject(error);
	},
);

export default instance
