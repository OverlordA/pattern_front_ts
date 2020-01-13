import React, { useEffect, useState } from 'react';
import { getAllUsers, registrationUser } from '../api';

const HomePage: React.FC = () => {
    const [usersResponse, setUsersResponse] = useState();
    const [registerResponse, setRegisterResponse] = useState();

    const getUsers = async () => {
        const users = await getAllUsers();
        console.log(users);
        setUsersResponse(JSON.stringify(users));
    };
    const createUser = async () => {
        const result = await registrationUser('test', 'tes@gmail.com', '123');
        console.log(result);
        setRegisterResponse(JSON.stringify(result));
    };

    return (
        <div className={'home-container'}>
            <div className={'button-container'}>
                <button onClick={getUsers}> Get, all users </button>
                <button onClick={createUser}> Post create user </button>
                <button onClick={getUsers}>Get users </button>
            </div>
            <div className={'response-container'}>
                <div className={'response'} >{usersResponse}</div>
                <div className={'response'} >{registerResponse}</div>
            </div>
        </div>
    );
};

export default HomePage;
