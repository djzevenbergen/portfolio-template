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
import { UserContext, DarkmodeContext, MediaContext } from './userContext';

const LightTheme = {
  font: 'Courier',
  primary: '#FDF5E6',
  secondary: '#FDF5E6',
  light: '#000000',
  white: '#000000'
};

const DarkTheme = {
  font: 'Courier',
  primary: '#000000',
  secondary: '#000000',
  light: '#FDF5E6',
  white: '#FDF5E6'

}

const history = createBrowserHistory;

function App() {
  const [value, setValue] = useState(null);
  const [theme, setTheme] = useState(LightTheme);
  const [media, setMedia] = useState(null);

  const darkModeToggle = () => {
    if (theme == LightTheme) {
      console.log("is the toggle true")
      setTheme(DarkTheme);
    } else {
      console.log("is the toggle false")
      setTheme(LightTheme);
    }
  }

  const mediaChange = () => {

  }

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
        <DarkmodeContext.Provider value={{ darkModeToggle }}>
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
        </DarkmodeContext.Provider>
        : <p>Loading</p>}
    </Router>
  );
}

export default App;