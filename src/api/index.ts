import AxiosInstance from './axiosInstance';
import { baseUrl } from '../config';

const getAllUsers = async () => {
    const result = await AxiosInstance.get(`${baseUrl}/users/all`);
    return result.data;
};
const registrationUser = async (username: string, email: string, password: string) => {
    const result = await AxiosInstance.post(`${baseUrl}/auth/registration`, { username, password, email });
    return result.data;
};
const loginUser = async (username: string, password: string): Promise<string> => {
    const result = await AxiosInstance.post(`${baseUrl}/auth/login`, { username, password });
    return result.data.token;
};

export { getAllUsers, registrationUser, loginUser };
