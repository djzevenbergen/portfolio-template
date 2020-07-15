import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';


const IntroName = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const IntroContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  min-height: 100vh;
`;

function Intro(props) {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <React.Fragment>
      <IntroContainer>
        <IntroName theme={themeContext}>
          This is the intro
      </IntroName>
      </IntroContainer>
    </React.Fragment>
  );
}

Intro.propTypes = {

};


export default withTheme(Intro);