import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SignIn from './SignIn';
import AdminPage from './AdminPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import createBrowserHistory from '../history';

const theme = {
  font: 'Courier',
  primary: '#0a192f',
  secondary: '#303C55',
  light: '#ccd6f6',
  white: '#e6f1ff'
};
const history = createBrowserHistory;

function App() {

  return (
    <Router history={history}>
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
    </Router>
  );
}

export default App;