import LogoutActions from './auth/LogoutActions';
import InitializeAction from './init/InitializeAction';
import LoginActions from './auth/LoginActions';

type ActionTypes =
    | LogoutActions
    | LoginActions
    | InitializeAction


export default ActionTypes;
