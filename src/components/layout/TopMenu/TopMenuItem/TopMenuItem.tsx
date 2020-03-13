import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface TopMenuItemProps {
    path: string;
    name: string;
}

const TopMenuItem: FunctionComponent<TopMenuItemProps> = ({ path, name }) => {
    return<Link style={{ margin: 10,}} to={path}>{name}</Link>;
};
export default TopMenuItem;
