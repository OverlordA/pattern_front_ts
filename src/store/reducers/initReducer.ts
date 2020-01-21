import { InitialStoreState } from '../StoreState';
import ActionTypes from '../actions/ActionTypes';
import ActionTypeKeys from '../actions/ActionTypeKeys';
import InitializeAction from '../actions/init/InitializeAction';

const initialState: InitialStoreState = {
    thunkTest: '',
};

function onInitSuccess(action: InitializeAction) {
    return {
        thunkTest: action.payload,
    };
}

export default function initialReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.INITIAL_STORE:
            return onInitSuccess(action);
        default:
            return state;
    }
}
