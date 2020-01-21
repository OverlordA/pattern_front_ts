import { UserStoreState } from '../StoreState';
import ActionTypes from '../actions/ActionTypes';
import ActionTypeKeys from '../actions/ActionTypeKeys';
import LoginActions from '../actions/auth/actionTypes/LoginActions';

const initialState: UserStoreState = {
    name: '',
    token: '',
};

function onUserLoginSuccess(action: LoginActions) {
    return {
        token: action.payload,
        name: '',
    };
}

export default function usersReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.LOGIN_USER:
            return onUserLoginSuccess(action);
        default:
            return state;
    }
}
