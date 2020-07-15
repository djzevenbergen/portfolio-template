import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
`;

const AboutHeading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size- 15px;

  &:before {
    margin-right: 10px;
    bottom: 4px;
    position: relative;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    position: relative;
    top: -5px;
    margin-left: 20px;  
  }
`;

const AboutContent = styled.div`
  width: 60%;
  align-items: flex-start;
`;

const AboutPic = styled.div`
  position: relative;
  width:40%;
`;

function About(props) {
  return (
    <React.Fragment>
      <AboutContainer id="about">
        <AboutHeading>About</AboutHeading>
        <FlexContainer>
          <AboutContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus,
            libero ac vestibulum ultrices, dolor mi rhoncus mauris, vitae dignissim diam
            arcu quis libero. Aliquam blandit purus vel libero malesuada, ut consectetur
            dui pellentesque. Mauris condimentum pellentesque congue. Morbi in turpis augue.
            Vivamus fringilla scelerisque ligula, et fermentum lectus. Maecenas eros lacus,
            volutpat vitae ultricies id, ullamcorper vitae diam. Nulla sodales tellus non
            sagittis rutrum. Duis viverra faucibus elit, in mollis libero elementum fermentum.
            Praesent fermentum, massa vulputate aliquam hendrerit, ipsum nunc venenatis orci,
            a semper lectus lectus sit amet sapien. Cras congue erat egestas malesuada scelerisque.
            Fusce id magna malesuada, scelerisque ligula at, pellentesque metus.
            Proin sed magna in urna consequat dapibus.
        </AboutContent>
          <AboutPic>
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/76/766e00574b3ca2ac2099086d4de9c3c512ee2c22_full.jpg" />
          </AboutPic>
        </FlexContainer>
      </AboutContainer>
    </React.Fragment>
  );
}

About.propTypes = {

};


export default About;