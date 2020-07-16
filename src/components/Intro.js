import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function Intro(props) {

  const IntroContainer = styled.section`
    margin: 0 auto;
    padding: 50px 0;
    min-height: 100vh;
    flex-direction: column;
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
    font-size: 80px;
    line-height: 0.5;
    margin: 0;
  `;

  const IntroSubtitle = styled.h3`
    color: ${props.theme.white};
    font-size: 70px;
    line-height: 0.5;
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
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 300vw;
    height: 300vw;
    top: -65vw;
    left: 50%;
    transform: translate(-50%, -75%);
  }
  
  &:before {
    border-radius: 44%;
    background: ${props.theme.primary};
    animation: waves 8s linear infinite;
  }
  
  &:after {
    border-radius: 44%;
    background: rgba(51, 51, 51, 0.5);
    animation: waves 15s linear infinite;
  }
  
  @keyframes waves {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  `;

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  const introItems = [
    <IntroGreeting>Hi, my name is</IntroGreeting>,
    <IntroTitle>Dev Eloper.</IntroTitle>,
    <IntroSubtitle>I make webzones.</IntroSubtitle>,
    <IntroDescription>I'm a Full Stack Developer in the PNW, specializing in building full stack web applications in React, JavaScript, and C#.</IntroDescription>
  ];

  return (
    <React.Fragment>
      <IntroContainer id="intro">
        {introItems.map((item, i) => {
          return <div key={item + i}>{item}</div>
        })}
        <Waves></Waves>
      </IntroContainer>
    </React.Fragment>
  );
}

Intro.propTypes = {

};


export default withTheme(Intro);