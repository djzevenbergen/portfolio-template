import React, { useContext } from "react";
import { UserContext } from './userContext';
import PropTypes from "prop-types";
import styled from 'styled-components';

function About(props) {
  const { value } = useContext(UserContext);
  const AboutSection = styled.section`
    background-color: ${props.theme.secondary};
  `;

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
    color: ${props.theme.light};
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
    color: ${props.theme.white};
    width: 60%;
    align-items: flex-start;
  `;

  const AboutPic = styled.div`
    position: relative;
    float: left;
    width:40%;
  `;

  const PictureBorder = styled.img`

    padding: 1px;
    border: 1px solid ${props.theme.light};

  `;

  return (
    <React.Fragment>
      <AboutSection>
        <AboutContainer id="about">
          <AboutHeading>About</AboutHeading>
          <FlexContainer>
            <AboutPic>

              <PictureBorder id="prof-pic" src="https://firebasestorage.googleapis.com/v0/b/portfolio-template-e927a.appspot.com/o/src%2Fpublic%2Fprofilepic?alt=media&token=25e9a5d5-d7d2-415d-be69-d62342aaafb8" />

            </AboutPic>
            <AboutContent>
              {value.fullbio}
            </AboutContent>

          </FlexContainer>
        </AboutContainer>
      </AboutSection>
    </React.Fragment>
  );
}

About.propTypes = {

};


export default About;