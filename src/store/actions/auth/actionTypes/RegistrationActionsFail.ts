import keys from '../../ActionTypeKeys';

export default interface RegistrationActionsFail {
    readonly type: keys.REGISTRATION_USER_FAIL;
    payload: { error: object };
}
