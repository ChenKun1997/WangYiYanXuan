import React from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import './style.scss';
 
export const TabItem = withRouter(({match,path,name,location,icon}) => {
    return (
        <NavLink to={path} className='tab-item'>
            <span className={icon}></span>
            <span>{name}</span>
        </NavLink>
    )
} )


export function TabBar({children}) {
    return (
        <nav className='tab-bar'>
            {children}
        </nav>
    )
}
