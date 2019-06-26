import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => (
        <nav>
        <NavLink exact to='/'>Virtual Reality Funding</NavLink>
         <NavLink exact to='/'>Home</NavLink>
         <NavLink to='/add'>How It Works</NavLink>
         <NavLink to='/add'>Login</NavLink>
            
        </nav>
    )

export default NavBar;