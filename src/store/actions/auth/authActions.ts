import LogoutActions from './actionTypes/LogoutActions';
import LoginActions from './actionTypes/LoginActions';
import keys from '../ActionTypeKeys';
import { loginUser, registrationUser } from '../../../api';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import RegistrationActions from './actionTypes/RegistrationActions';
import RegistrationPayload from './payloadTypes/RegistrationPayload';
import _ from 'lodash';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import RegistrationActionsFail from './actionTypes/RegistrationActionsFail';

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
    return async (dispatch: Dispatch<any>): Promise<Action> => {
        try {
            const registeredUser = await registrationUser(user);
            return dispatch({
                type: keys.REGISTRATION_USER,
                payload: { login: registeredUser.email, email: registeredUser.email },
            });
        } catch (error) {
            return dispatch({
                type: keys.REGISTRATION_USER_FAIL,
                payload: { error },
            });
        }
    };
};

export function signOut(): LogoutActions {
    // history.push(homePath);

    return {
        type: keys.LOGOUT_USER,
    };
}
