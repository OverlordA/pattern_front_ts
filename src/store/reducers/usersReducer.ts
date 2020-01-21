import { UserStoreState } from '../StoreState';
import ActionTypes from '../actions/ActionTypes';
import ActionTypeKeys from '../actions/ActionTypeKeys';
import LoginActions from '../actions/auth/actionTypes/LoginActions';
import RegistrationActions from '../actions/auth/actionTypes/RegistrationActions';

const initialState: UserStoreState = {
    name: '',
    token: '',
    login: '',
    email: '',
};

function onUserLoginSuccess(action: LoginActions, state: UserStoreState) {
    return {
        token: action.payload,
        login: state.login,
        email: state.email,
        name: state.name,
    };
}
function onUserRegistrationSuccess(action: RegistrationActions, state: UserStoreState) {
    return {
        login: action.payload.login,
        email: action.payload.email,
        name: state.name,
        token: state.token,
    };
}

export default function usersReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.LOGIN_USER:
            return onUserLoginSuccess(action, state);
        case ActionTypeKeys.REGISTRATION_USER:
            return onUserRegistrationSuccess(action, state);
        default:
            return state;
    }
}
