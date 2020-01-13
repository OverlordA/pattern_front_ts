import AxiosInstance from './axiosInstance';
import { baseUrl } from '../config';

const getAllUsers = async () => {
    const result = await AxiosInstance.get(`${baseUrl}/users/all`);
    console.log(result, 'result ');
};

export { getAllUsers };
