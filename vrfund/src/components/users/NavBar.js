import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <ul>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/add'>Add Project</NavLink>
            </ul>
        </div>
    );
}

export default Nav;