import InitializeAction from './InitializeAction';
import keys from '../ActionTypeKeys';

export function initStore(): InitializeAction {
    return {
        type: keys.INITIAL_STORE,
    };
}
