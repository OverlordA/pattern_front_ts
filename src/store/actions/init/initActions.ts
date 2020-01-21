import InitializeAction from './InitializeAction';
import keys from '../ActionTypeKeys';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { loginUser } from '../../../api';

export const initStore: ActionCreator<ThunkAction<Promise<Action>, InitializeAction, void, any>> = (text: string) => {
    return async (dispatch: Dispatch<InitializeAction>): Promise<Action> => {
        const result = await loginUser('anton@gmail.com', '123321');
        console.log(' result ', result);
        return dispatch({
            type: keys.INITIAL_STORE,
            payload: text,
        });
    };
};
