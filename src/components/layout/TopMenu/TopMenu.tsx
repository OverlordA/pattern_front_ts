import React, { FunctionComponent } from 'react';
import TopMenuItem from './TopMenuItem/TopMenuItem';
import pagesLink from './pagesLink';

const TopMenu: FunctionComponent = () => {
    return (
        <div className='top-menu-container'>
            {pagesLink && pagesLink.map(item => <TopMenuItem key={`menu-item-${item.path}`} {...item} />)}
        </div>
    );
};
export default TopMenu;
