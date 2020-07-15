import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavItem = styled.li`
  float: right;
  a {
    display: block;
    color: black;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    background-color: gray;
  }
`;

const NavName = styled.h1`
  float: left;
  position: fixed;
  top: 0;
  margin-left: 14px;
`;

function Header() {
  return (
    <React.Fragment>
      <NavName>My Name</NavName>
      <NavBar>
        <NavItem>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/signin'>Sign In</Link>
        </NavItem>
      </NavBar>
    </React.Fragment>
  );
}

export default Header;