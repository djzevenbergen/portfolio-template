import React, { useState, useEffect, useContext } from 'react';
import { UserContext, DarkmodeContext } from './userContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFirestore, useFirestore } from 'react-redux-firebase';

function Header(props) {

  const { darkModeToggle } = useContext(DarkmodeContext);
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
    color: ${props.theme.light};
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    color: ${props.theme.white};
    background-color: ${props.theme.secondary};
  }
`;

  const NavName = styled.h1`
  color: ${props.theme.light};
  float: left;
  position: fixed;
  top: 0;
  margin-left: 14px;
`;



  function scrollToLink(id) {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <React.Fragment>
      <NavName>Your Friend Deej</NavName>
      <NavBar>
        <NavItem>
          <Link to='/signin'>Sign In</Link>
        </NavItem>
        <NavItem>
          <Link onClick={() => darkModeToggle()}>Toggle Darkmode</Link>
        </NavItem>
        <NavItem>
          <Link to='/#contact' onClick={() => scrollToLink("contact")}> Contact</Link>
        </NavItem>
        <NavItem>
          <Link to='/#projects' onClick={() => scrollToLink("projects")}> Projects</Link>
        </NavItem>
        <NavItem>
          <Link to='/#about' onClick={() => scrollToLink("about")}>About</Link>
        </NavItem>
        <NavItem>
          <Link to='/' onClick={() => scrollToLink("intro")}> Home</Link>
        </NavItem>
      </NavBar>
    </React.Fragment>
  );
}

export default Header;