import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

function Contact(props) {

  const ContactSection = styled.section`
    background-color: ${props.theme.secondary};
  `;

  const ContactContainer = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
    position: relative;
  `;


  const ContactHeading = styled.h3`
    color: ${props.theme.light};
  `;

  const ContactFormBox = styled.div`
    padding: 10px;
  `;

  const FormInput = styled.input`
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
  `;

  const FormArea = styled.textarea`
    display: block;
    resize: none;
    margin: 0 auto;
    margin-bottom: 5px;
  `;

  const Button = styled.button`
    margin: 0 auto;
    display: block;
  `;

  return (
    <React.Fragment>
      <ContactSection>
        <ContactContainer id="contact">
          <ContactHeading>Contact</ContactHeading>
          <ContactFormBox>
            <FormInput placeholder="Name" size="48" />
            <FormInput placeholder="Email" size="48" />
            <FormArea placeholder="Message" cols="50" rows="10" />
            <Button>Send Message</Button>
          </ContactFormBox>
        </ContactContainer>
      </ContactSection>
    </React.Fragment>
  );
}

Contact.propTypes = {

};


export default Contact;