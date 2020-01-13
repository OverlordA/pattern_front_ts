import axios, { AxiosInstance } from 'axios';

const AxiosInstance: AxiosInstance = axios.create({
    timeout: 10000,
});
export default AxiosInstance;
