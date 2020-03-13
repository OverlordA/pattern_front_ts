import React, { FunctionComponent } from 'react';
import TopMenuItem from './TopMenuItem/TopMenuItem';
import pagesLink from './pagesLink';
import topMenuStyles from './topMenuStyles';

const TopMenu: FunctionComponent = () => {
    return (
        <div style={topMenuStyles.topMenuContainer}>
            {pagesLink && pagesLink.map(item => <TopMenuItem key={`menu-item-${item.path}`} {...item} />)}
        </div>
    );
};
export default TopMenu;
