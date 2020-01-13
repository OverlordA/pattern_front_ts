import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    return (
        <div>
            Profile
            <Link to={'/'}> to home </Link>
        </div>
    );
};
export default Profile;
