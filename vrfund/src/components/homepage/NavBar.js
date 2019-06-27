import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

const NavBar = () => (
        <Menu>
         <Menu.Item><NavLink exact to='/'>Virtual Reality Funding</NavLink></Menu.Item>
         <Menu.Item><NavLink exact to='/'>Home</NavLink></Menu.Item>
         <Menu.Item><NavLink to='/add'>How It Works</NavLink></Menu.Item>
         <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
          />
        </Menu.Menu>
            
        </Menu>
    )

export default NavBar;