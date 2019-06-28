import React from "react";
import { NavLink } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
import styled from "styled-components";
import './Homepage.css'

const Div = styled.div`
  color: #fff;
`;

const NavBar = () => (
  <Div>
    <Menu className="menu">
      <Menu.Item>
        <NavLink exact to="/">
          Virtual Reality Funding
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/">How It Works</NavLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/">Login</NavLink>
        </Menu.Item>
        <Menu.Item name="logout" />
      </Menu.Menu>
    </Menu>
  </Div>
);

export default NavBar;
