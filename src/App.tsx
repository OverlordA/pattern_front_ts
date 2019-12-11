import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Header } from './components/Header';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header title="Header title" />
            <HomePage />
        </div>
    );
};

export default App;
