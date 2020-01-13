import React from 'react';
import './App.scss';
import { HomePage, Login, Profile, About } from './pages';
import { Header } from './components';
import { LoginUser } from './model';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
    const user: LoginUser = { login: '', password: '' };

    return (
        <Router>
            <div className='App'>
                <Header title='' />
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/about' component={About} />
            </div>
        </Router>
    );
};

export default App;
