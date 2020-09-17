import React, { useState, useEffect, useContext, Component } from 'react';
import { UserContext, DarkmodeContext } from './userContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFirestore, useFirestore } from 'react-redux-firebase';
import ToggleSwitch from "./Switch";
import { Jumbotron, Navbar, Nav } from 'react-bootstrap';
// import Switch from "./Switch.js";


function Header(props) {

  const navImg = {
    width: "110px",
  };

  const navColor = {
    backgroundColor: "rgb(0, 50, 0)",
  }
  function gitHubRepo() {
    window.location = 'https://github.com/djzevenbergen/collab-a-lab';
  }

  const { darkModeToggle } = useContext(DarkmodeContext);
  const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
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

  const [checked, setCheck] = useState(false);

  const handleChange = (checked) => {
    setCheck(checked);
  }


  function scrollToLink(id) {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  const nav = [<NavBar >
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

  </NavBar>]

  return (
    <React.Fragment>
      <NavName>Your Friend Deej</NavName>
      <div class="collapse">
        {nav[0]}
      </div>





    </React.Fragment>
  );
}

export default Header;