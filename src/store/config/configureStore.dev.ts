import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import StoreState from '../StoreState';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    return createStore<StoreState, any, any, any>(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware, reduxImmutableStateInvariant())),
    );
}
