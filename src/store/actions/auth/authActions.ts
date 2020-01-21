import LogoutActions from './actionTypes/LogoutActions';
import LoginActions from './actionTypes/LoginActions';
import keys from '../ActionTypeKeys';
import { loginUser, registrationUser } from '../../../api';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import RegistrationActions from './actionTypes/RegistrationActions';
import RegistrationPayload from './payloadTypes/RegistrationPayload';

// export const loginRequest = async (login: string, password: string): Promise<LoginActions> => {
//     // history.push(sitesPath);
//     const token: string = await loginUser(login, password);
//     return {
//         type: keys.LOGIN_USER,
//         payload: token,
//     };
// };

export const loginRequest: ActionCreator<ThunkAction<Promise<Action>, LoginActions, void, any>> = (
    login: string,
    password: string,
) => {
    return async (dispatch: Dispatch<LoginActions>): Promise<Action> => {
        const token = await loginUser(login, password);
        return dispatch({
            type: keys.LOGIN_USER,
            payload: token,
        });
    };
};

export const registerUser: ActionCreator<ThunkAction<Promise<Action>, RegistrationActions, void, any>> = (
    user: RegistrationPayload,
) => {
    return async (dispatch: Dispatch<RegistrationActions>): Promise<Action> => {
        const result = await registrationUser(user);
        console.log(' result ', result);
        return dispatch({
            type: keys.REGISTRATION_USER,
            payload: { login: '', email: '' },
        });
    };
};

export function signOut(): LogoutActions {
    // history.push(homePath);

    return {
        type: keys.LOGOUT_USER,
    };
}
