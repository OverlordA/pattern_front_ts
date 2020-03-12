import React, { FunctionComponent } from 'react';
import './header.scss';
import { Search } from '../../index';

type HeaderProps = {
    title: string;
};

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
    return (
        <div className='header-container'>
            <div className='title'>{title}</div>
            <Search />
        </div>
    );
};
export default Header;
