import { About, Home, Login, Profile, Registration } from '../pages';
import { about, login, profile, registr, root } from './paths';

const routes = [
    {
        exact: true,
        path: root,
        component: Home,
        key: 'root',
    },
    {
        exact: true,
        path: login,
        component: Login,
        key: 'login',
    },
    {
        exact: true,
        path: registr,
        component: Registration,
        key: 'registration',
    },
    {
        exact: true,
        path: profile,
        component: Profile,
        key: 'profile',
    },
    {
        exact: true,
        path: about,
        component: About,
        key: 'about',
    },
];

export default routes;
