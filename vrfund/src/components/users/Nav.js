import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const Div = styled.div`
  color: #fff;
`;

const Nav = () => (
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
        <NavLink to="/projects/add">Create Project</NavLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <NavLink to="/login">Logout</NavLink>
        </Menu.Item>
        <Menu.Item name="" />
      </Menu.Menu>
    </Menu>
  </Div>
);

export default Nav;
