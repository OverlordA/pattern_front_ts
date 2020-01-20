import LogoutActions from './LogoutActions';
import LoginActions from './LoginActions';
import keys from '../ActionTypeKeys';
import { loginUser } from '../../../api';

export const loginRequest = async (login: string, password: string): Promise<LoginActions> => {
    // history.push(sitesPath);
    const token: string = await loginUser(login, password);
    return {
        type: keys.LOGIN_USER,
        payload: token,
    };
};

export function signOut(): LogoutActions {
    // history.push(homePath);

    return {
        type: keys.LOGOUT_USER,
    };
}
