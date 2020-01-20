import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routerConfig';

const Routes: React.FC = () => {
    return (
        <Switch>
            {routes.map(route => {
                return <Route {...route} />;
            })}
        </Switch>
    );
};
export default Routes;
