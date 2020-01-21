import keys from '../../ActionTypeKeys';

export default interface RegistrationActions {
    readonly type: keys.REGISTRATION_USER;
    payload: RegistrationUser;
}
interface RegistrationUser {
    login: string;
    email: string;
}
