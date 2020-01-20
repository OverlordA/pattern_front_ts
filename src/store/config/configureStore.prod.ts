import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import StoreState from '../StoreState';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore<StoreState, any, any, any>(rootReducer, applyMiddleware(thunk));
}
