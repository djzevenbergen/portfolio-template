
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { UserContext } from './userContext';
import { Link } from 'react-router-dom';
import { withFirestore, useFirestore } from 'react-redux-firebase';


function Intro(props) {

  const IntroContainer = styled.section`
    margin: 0 auto;
    padding: 50px 0;
    min-height: 100vh;
    flex-direction: column;
    background-color:${props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const IntroGreeting = styled.h1`
    color: ${props.theme.white};
    margin: 0 0 20px 3px;
    font-size: 15px;
    font-weight: normal;
  `;

  const IntroTitle = styled.h2`
    color: ${props.theme.light};
    font-size: 4em;
    line-height: 0.8;

    margin: 0;
    white-space: normal;
  `;

  const IntroSubtitle = styled.h3`
    color: ${props.theme.white};
    font-size: 3em;
    line-height: 0.9;
  `;

  const IntroDescription = styled.div`
    color: ${props.theme.white};
    margin-top: 25px;
    width: 55%;
  `;

  const Stars = styled.div`

  `;

  const Waves = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: ${props.theme.primary};
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 500ms;
    z-index: -1;
`;
  // &:before,
  // &:after {
  //   content: '';
  //   position: absolute;
  //   width: 300vw;
  //   height: 300vw;
  //   top: -65vw;
  //   left: 50%;
  //   transform: translate(-50%, -75%);
  // }

  // &:before {
  //   border-radius: 44%;
  //   background: ${props.theme.primary};
  //   animation: waves 8s linear infinite;
  // }

  // &:after {
  //   border-radius: 44%;
  //   background: rgba(51, 51, 51, 0.5);
  //   animation: waves 15s linear infinite;
  // }

  // @keyframes waves {
  //   0% {
  //     transform: translate(-50%, -75%) rotate(0deg);
  //   }

  //   100% {
  //     transform: translate(-50%, -75%) rotate(360deg);
  //   }
  // `;

  const themeContext = useContext(ThemeContext);
  const { value } = useContext(UserContext);
  console.log(themeContext);

  // const introItems = [
  //   <IntroGreeting>Hi, my name is</IntroGreeting>,
  //   <IntroTitle>{value.name}.</IntroTitle>,
  //   <IntroSubtitle>I make webzones.</IntroSubtitle>,
  //   <IntroDescription>I'm a Full Stack Developer in the PNW, specializing in building full stack web applications in React, JavaScript, and C#.</IntroDescription>
  // ];

  return (

    <React.Fragment>
      {console.log(value.name)}
      <IntroContainer id="intro">
        {/* <IntroGreeting>Hi, my name is</IntroGreeting> */}
        <IntroTitle>{value.name}.</IntroTitle>
        {/* <IntroSubtitle>{value.tagline}.</IntroSubtitle> */}
        {/* <IntroDescription>{value.minibio}.</IntroDescription> */}


        {/* <Waves></Waves> */}
      </IntroContainer>

    </React.Fragment>
  );
}

Intro.propTypes = {

};


export default withFirestore(withTheme(Intro));