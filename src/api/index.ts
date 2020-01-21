import AxiosInstance from './axiosInstance';
import { baseUrl } from '../config';
import _ from 'lodash';

const getAllUsers = async () => {
    const result = await AxiosInstance.get(`${baseUrl}/users/all`);
    return result.data;
};
const registrationUser = async (user: { login: string; password: string; email: string }): Promise<{ email: string }>=> {
    // username: string, email: string, password: string
    const result = await AxiosInstance.post(`${baseUrl}/auth/registration`, {
        username: user.login,
        password: user.password,
        email: user.email,
    });
    const first: any = _.head(result.data.users);
    return first;
};
const loginUser = async (username: string, password: string): Promise<string> => {
    const result = await AxiosInstance.post(`${baseUrl}/auth/login`, { username, password });
    return result.data.token;
};

export { getAllUsers, registrationUser, loginUser };
