import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import emailjs from "emailjs-com";

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

  const Text = styled.div`
  color: ${props.theme.white};
  `

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

  const sendEmail = (event) => {
    event.preventDefault();
    // generate the contact number value
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('contact_service', 'contact_form', this);
  }

  return (
    <React.Fragment>
      <ContactSection>
        <ContactContainer id="contact">
          <ContactHeading>Contact</ContactHeading>
          {/* <ContactFormBox id="contact-form">
            <input type="hidden" name="contact_number" onSubmit={() => sendEmail} />

            <FormInput placeholder="Name" size="48" type="text" name="user_name" />
            <FormInput placeholder="Email" size="48" type="email" name="user_email" />
            <FormArea placeholder="Message" cols="50" rows="10" name="message" />
            <Button type="submit" value="Send">Send Message</Button>
          </ContactFormBox> */}
          <Text>djzevenbergen@gmail.com</Text>

        </ContactContainer>
      </ContactSection>
    </React.Fragment>
  );
}

Contact.propTypes = {

};


export default Contact;