import React, { useState, useEffect } from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SignIn from './SignIn';
import AdminPage from './AdminPage';
import { withFirestore, useFirestore } from 'react-redux-firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import createBrowserHistory from '../history';
import { UserContext } from './userContext';

const theme = {
  font: 'Courier',
  primary: '#0a192f',
  secondary: '#303C55',
  light: '#ccd6f6',
  white: '#e6f1ff'
};
const history = createBrowserHistory;

function App() {
  const [value, setValue] = useState(null);

  const [isLoaded, setLoading] = useState(false);
  const firestore = useFirestore();


  useEffect(() => {
    getProfile();
  }, [])


  const getProfile = () => {

    let data = [];
    let count = 0;
    firestore.collection("siteinfo").orderBy("timeCreated", "desc").limit(1).get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          data.push(doc.data());
          console.log(doc.data());
          console.log(doc.id);
          console.log(data);
          count++;
          setValue(doc.data());
          setLoading(true);
        });

      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

  }


  return (
    <Router history={history}>
      {isLoaded ?

        <UserContext.Provider value={{ value }}>
          {console.log(value)}
          <ThemeProvider theme={theme}>
            <Header theme={theme} />
            <Switch>
              <Route path='/signin'>
                <SignIn />
              </Route>
              <Route path='/adminpage'>
                <AdminPage />
              </Route>
              <Route exact path='/'>
                <Intro theme={theme} />
                <About theme={theme} />
                <Projects theme={theme} />
                <Contact theme={theme} />
              </Route>
            </Switch>
          </ThemeProvider>

        </UserContext.Provider>
        : <p>Loading</p>}
    </Router>
  );
}

export default App;