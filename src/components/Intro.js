import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function Intro(props) {

  const IntroContainer = styled.section`
    background-color: ${props.theme.primary};
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
      </IntroContainer>
    </React.Fragment>
  );
}

Intro.propTypes = {

};


export default withTheme(Intro);