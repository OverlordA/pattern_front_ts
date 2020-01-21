import LogoutActions from './auth/actionTypes/LogoutActions';
import InitializeAction from './init/InitializeAction';
import LoginActions from './auth/actionTypes/LoginActions';
import RegistrationActions from './auth/actionTypes/RegistrationActions';

type ActionTypes =
    | LogoutActions
    | LoginActions
    | InitializeAction
    | RegistrationActions


export default ActionTypes;
