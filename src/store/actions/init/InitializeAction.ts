import keys from '../ActionTypeKeys';

export default interface InitializeAction {
    readonly type: keys.INITIAL_STORE;
    payload: string;
}
