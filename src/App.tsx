import React from 'react';
import './App.css';
import { HomePage } from './pages';
import { Header } from './components';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header title="Header title" />
            <HomePage />
        </div>
    );
};

export default App;
