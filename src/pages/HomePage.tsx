import React, { useEffect } from 'react';
import { getAllUsers } from '../api';

const HomePage: React.FC = () => {
    useEffect(() => {
        getAllUsers();
    }, []);

    return <div>Home page </div>;
};
export default HomePage;
