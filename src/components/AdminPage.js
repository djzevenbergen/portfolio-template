import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { render } from "@testing-library/react";
import styled from "styled-components";
import { withFirestore, useFirestore } from 'react-redux-firebase';
import { connect } from "react-redux";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
// import history from '../history';


const IntroContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function AdminPage(props) {


  const firestore = useFirestore();
  console.log(firebase.auth().currentUser.email);
  function addStuffToFirestore(event) {


    return firestore.collection('quizzes').add(
      {
        name: event.target.name.value,
        userEmail: this.props.auth.currentUser.email,
        username: event.target.username.value,
        q1: event.target.q1.value,
        q1a: event.target.q1a.value,
        q1b: event.target.q1b.value,
        q1c: event.target.q1c.value,
        q1d: event.target.q1d.value,
        q2: event.target.q2.value,
        q2a: event.target.q2a.value,
        q2b: event.target.q2b.value,
        q2c: event.target.q2c.value,
        q2d: event.target.q2d.value,
        q3: event.target.q3.value,
        q3a: event.target.q3a.value,
        q3b: event.target.q3b.value,
        q3c: event.target.q3c.value,
        q3d: event.target.q3d.value,
        q4: event.target.q4.value,
        q4a: event.target.q4a.value,
        q4b: event.target.q4b.value,
        q4c: event.target.q4c.value,
        q4d: event.target.q4d.value,
        q5: event.target.q5.value,
        q5a: event.target.q5a.value,
        q5b: event.target.q5b.value,
        q5c: event.target.q5c.value,
        q5d: event.target.q5a.value,
        timeCreated: firestore.FieldValue.serverTimestamp()
      }
    );
  }


  return (
    <React.Fragment>
      <IntroContainer>

        <form>
          <ul>
            <li>
              <label>
                Title or Name:
          <input type="text" name="name" />
              </label>
            </li>
            <li>
              <label>
                Tagline:
          <input type="text" name="tagline" />
              </label>
            </li>
            <li>
              <label>
                Short bio:
          <textarea>
                  Your old bio here

          </textarea>
              </label>
            </li>
            <li>
              <label>
                Full bio:
            <textarea>
                  Your old bio here

          </textarea>
              </label>
            </li>
            <li>
              <label>
                Pic:
            <input type="file" name="file" />
              </label>
            </li>
            <li>
              <label>
                Brief Description of projects:
            <textarea>
                  descriptions

          </textarea>
              </label>
            </li>
            <li>
              <label>
                Project 1:
            <input type="text" name="p1" />
              </label>
            </li>
            <li>
              <label>
                Project 2:
            <input type="text" name="p2" />
              </label>
            </li>
            <li>
              <label>
                Project 3:
            <input type="text" name="p3" />
              </label>
            </li>
            <li>
              <label>
                Project 4:
            <input type="text" name="p4" />
              </label>
            </li>
            <li>
              <label>
                Project 5:
            <input type="text" name="p5" />
              </label>
            </li>
            <li>
              <label>
                Project 6:
            <input type="text" name="p6" />
              </label>
            </li>
            <li>
              <label>
                email:
            <input type="text" name="email" />
              </label>
            </li>
            <li>
              <label>
                LinkedIn:
            <input type="text" name="linkedin" />
              </label>
            </li>
            <li>
              <label>
                GitHub:
            <input type="text" name="github" />
              </label>
            </li>
          </ul>
          <button type="submit">Update</button>
        </form>
      </IntroContainer>



    </React.Fragment>
  );
}

// AdminPage = connect(AdminPage);

export default withFirestore(AdminPage);