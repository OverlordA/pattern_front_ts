import { combineReducers } from 'redux';
import StoreState from '../StoreState';
import usersReducer from './usersReducer';
import initialReducer from './initReducer';

const rootReducer = combineReducers<StoreState>({
    users: usersReducer,
    init: initialReducer,
});

export default rootReducer;
