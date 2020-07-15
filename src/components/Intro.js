import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IntroName = styled.h1`
  font-size: 24px;
  text-align: center;
  color: green;
`;

function Intro(props) {
  return (
    <React.Fragment>
      <IntroName>

        This is the intro
      </IntroName>
    </React.Fragment>
  );
}

Intro.propTypes = {

};


export default Intro;