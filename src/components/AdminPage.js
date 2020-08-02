import React, { useState, useContext } from "react";
import { UserContext } from "./userContext";
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
  const { value } = useContext(UserContext);

  const firestore = useFirestore();


  const [hidden, setHidden] = useState(true);

  if (firebase.auth().currentUser === null) {
    setHidden(false);
  }

  let file = {};
  const onFileChange = (event) => {

    // Update the state 
    file = event.target.files[0];
  }

  console.log("file" + file);

  function addStuffToFirestore(event) {


    event.preventDefault();

    //upload file
    console.log("file" + file)
    const fileType = event.target.image.type;
    console.log(fileType);
    const metadata = {
      contentType: fileType
    }
    var blob = new Blob([file], { type: fileType });
    const storageRef = firebase.storage().ref('src/public/profilepic');
    const uploadTask = storageRef.put(blob, metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload Progress: ' + progress);
      }, function (error) {
        console.log(error);
        switch (error.code) {
          case 'storage/unauthorized':
            console.log("User doesn't have permission to access the object");
            break;
          case 'storage/canceled':
            console.log("User canceled the upload");
            break;
          case 'storage/unknown':
            console.log("Unknown error occurred, inspect error.serverResponse");
            break;
        }
      });


    //updates



    return firestore.collection('siteinfo').add(
      {
        name: event.target.name.value,
        userEmail: firebase.auth().currentUser.email,
        tagline: event.target.tagline.value,
        fullbio: event.target.fullbio.value,
        minibio: event.target.minibio.value,
        // file: event.target.file.value,
        projectdescription: event.target.projectdescription.value,
        p1: event.target.p1.value,
        p2: event.target.p2.value,
        p3: event.target.p3.value,
        p4: event.target.p4.value,
        p5: event.target.p5.value,
        p6: event.target.p6.value,
        email: event.target.email.value,
        linkedin: event.target.linkedin.value,
        github: event.target.github.value,

        timeCreated: firestore.FieldValue.serverTimestamp()
      }
    );
  }


  return (
    <React.Fragment>
      {hidden ?
        <IntroContainer>

          <form onSubmit={addStuffToFirestore}>
            <ul>
              <li>
                <label>
                  Title or Name:
          <input type="text" name="name" id="name" defaultValue={value.name} />
                </label>
              </li>
              <li>
                <label>
                  Tagline:
          <input type="text" name="tagline" id="tagline" defaultValue={value.tagline} />
                </label>
              </li>
              <li>
                <label>
                  Short bio:
          <textarea id="minibio" defaultValue={value.minibio}>


                  </textarea>
                </label>
              </li>
              <li>
                <label>
                  Full bio:
            <textarea id="fullbio" defaultValue={value.fullbio}>


                  </textarea>
                </label>
              </li>
              <li>
                <label>
                  Pic:
            <input type="file" name="image" id="image" onChange={onFileChange} />
                </label>
              </li>
              <li>
                <label>
                  Brief Description of projects:
            <textarea id="projectdescription" defaultValue={value.projectdescription}>

                  </textarea>
                </label>
              </li>
              <li>
                <label>
                  Project 1:
            <input type="text" name="p1" id="p1" defaultValue={value.p1} />
                </label>
              </li>
              <li>
                <label>
                  Project 2:
            <input type="text" name="p2" id="p2" defaultValue={value.p2} />
                </label>
              </li>
              <li>
                <label>
                  Project 3:
            <input type="text" name="p3" id="p3" defaultValue={value.p3} />
                </label>
              </li>
              <li>
                <label>
                  Project 4:
            <input type="text" name="p4" id="p4" defaultValue={value.p4} />
                </label>
              </li>
              <li>
                <label>
                  Project 5:
            <input type="text" name="p5" id="p5" defaultValue={value.p5} />
                </label>
              </li>
              <li>
                <label>
                  Project 6:
            <input type="text" name="p6" id="p6" defaultValue={value.p6} />
                </label>
              </li>
              <li>
                <label>
                  email:
            <input type="text" name="email" id="email" defaultValue={value.userEmail} />
                </label>
              </li>
              <li>
                <label>
                  LinkedIn:
            <input type="text" name="linkedin" id="linkedin" defaultValue={value.linkedin} />
                </label>
              </li>
              <li>
                <label>
                  GitHub:
            <input type="text" name="github" id="github" defaultValue={value.github} />
                </label>
              </li>
            </ul>
            <button type="submit">Update</button>
          </form>
        </IntroContainer>
        : <Redirect to="/signin" />}


    </React.Fragment >
  );
}


export default withFirestore(AdminPage);