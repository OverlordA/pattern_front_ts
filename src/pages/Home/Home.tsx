import React, { useEffect, useState } from 'react';
import { getAllUsers, registrationUser } from '../../api';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [usersResponse, setUsersResponse] = useState();

    const getUsers = async () => {
        const users = await getAllUsers();
        console.log(users);
        setUsersResponse(JSON.stringify(users));
    };
    const createUser = async () => {};

    return (
        <div className={'home-container'}>
            {/*<Link to={'/profile'}> to profile</Link>*/}
            {/*<Link to={'/about'}> to about</Link>*/}
        </div>
    );
};

export default Home;
