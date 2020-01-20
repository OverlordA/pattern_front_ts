import keys from '../ActionTypeKeys';

export default interface LoginActions {
    readonly type: keys.LOGIN_USER;
    payload: string;
};
