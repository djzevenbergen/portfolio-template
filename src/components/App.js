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

const theme = {
  font: 'Courier',
  color: 'yellow'
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>

        <Header />
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/'>
            <Intro theme={theme} />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route path='/admin'>
            <AdminPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;