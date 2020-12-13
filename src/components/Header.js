import React, { useState, useEffect, useContext, Component } from 'react';
import { UserContext, DarkmodeContext } from './userContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFirestore, useFirestore } from 'react-redux-firebase';
import ToggleSwitch from "./Switch";
import { Jumbotron, Navbar, Nav } from 'react-bootstrap';
// import Switch from "./Switch.js";

import "bootstrap/dist/css/bootstrap.min.css";


function Header(props) {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


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
    background-color: ${props.theme.secondary};
    top: 0;
    width: 100%;
    z-index: 1000;
  `;



  const navStyles = {
    float: "right",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    position: "auto",
    top: "0",
    width: "100%"
  }


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
  const [menuVisible, setVisibility] = useState(false);

  const handleChange = (checked) => {
    setCheck(checked);
  }

  const handlSet = () => {

  }

  // useEffect(() => {

  // }, menuVisible)


  function scrollToLink(id) {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  const nav = [<NavBar >
    <NavName>Your Friend Deej</NavName>
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


      {/* <div class="expand">
        <a href="#menu" onClick={() => setVisibility(!menuVisible)}>
          <img src="././public/logo192.png" alt="menu image" />

        </a>

      </div> */}

      {isDesktop ? (
        // <div class="collapse">
        <div> { nav[0]} </div>
        // </div>
      ) :
        // <Navbar style={navStyles} variant='dark' expand='lg'>
        //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //   <Navbar.Collapse id="basic-navbar-nav">

        //     <Nav className="mr-auto">

        //       <Nav.Link >  <Link onClick={() => darkModeToggle()}>Toggle Darkmode</Link></Nav.Link>
        //       <Nav.Link > <Link to='/#contact' onClick={() => scrollToLink("contact")}> Contact</Link></Nav.Link>
        //       <Nav.Link > <Link to='/#projects' onClick={() => scrollToLink("projects")}> Projects</Link></Nav.Link>
        //       <Nav.Link > <Link to='/#about' onClick={() => scrollToLink("about")}>About</Link></Nav.Link>
        //       <Nav.Link > <Link to='/' onClick={() => scrollToLink("intro")}> Home</Link></Nav.Link>
        //       {/* <Nav.Link> <Link className='navLink6' id="home" onClick={gitHubRepo}><img className="ghIcon" src="https://i.ibb.co/MhpKckw/gh-icon-white.png" alt="gh-icon" />  GitHub for this Project</Link></Nav.Link> */}
        //       {/* <Nav.Link> <Link id="home" className='navLink' to="/">GitHub for this Project</Link></Nav.Link> */}
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
        <NavBar><NavItem></NavItem><NavName>Your Friend Deej</NavName></NavBar>
      }



    </React.Fragment>
  );
}

export default Header;