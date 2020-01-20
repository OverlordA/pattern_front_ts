import { combineReducers } from 'redux';
import StoreState from '../StoreState';
import usersReducer from './usersReducer';

const rootReducer = combineReducers<StoreState>({
    users: usersReducer,
});

export default rootReducer;
