import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
            ABOUT page
            <Link to={'/'}> to Home </Link>
        </div>
    );
};
export default About;
