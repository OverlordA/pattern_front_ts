import React from 'react';
import TopMenuItem from './TopMenuItem/TopMenuItem';

const menu = ['Home', 'Categories', 'Politics', 'Business', 'Health', 'Design', 'Sport', 'Contact'];

const TopMenu = () => {
    return (
        <div className='top-menu-container'>
            {menu && menu.map(item => <TopMenuItem key={`menu-item-${item}`} item={item} />)}
        </div>
    );
};
export default TopMenu;
