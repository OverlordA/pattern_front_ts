import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    timeout: 10000,
});
export default axiosInstance;
