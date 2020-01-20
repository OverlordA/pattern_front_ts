import LogoutActions from './LogoutActions';
import LoginActions from './LoginActions';
import keys from '../ActionTypeKeys';

export function signIn(token: string): LoginActions {
    // history.push(sitesPath);

    return {
        type: keys.LOGIN_USER,
        payload: token,
    };
}

export function signOut(): LogoutActions {
    // history.push(homePath);

    return {
        type: keys.LOGOUT_USER,
    };
}
