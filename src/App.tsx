import React from 'react';
import './App.scss';
import { Header } from './components';
import { LoginUser } from './model';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routing/routes';
import TopMenu from './components/layout/TopMenu/TopMenu';

const App: React.FC = () => {
    const user: LoginUser = { login: '', password: '' };

    return (
        <Router>
            <div className='App'>
                <Header title='Title' />
                <TopMenu />
                <Routes />
            </div>
        </Router>
    );
};

export default App;
