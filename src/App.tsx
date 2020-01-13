import React from 'react';
import './App.css';
import { HomePage } from './pages';
import { Header } from './components';
import { LoginUser } from './model';

const App: React.FC = () => {
    const user: LoginUser = { login: '', password: '' };

    return (
        <div className='App'>
            <Header title='Header title' />
            <HomePage />
        </div>
    );
};

export default App;
