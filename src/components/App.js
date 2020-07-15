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
  color: 'yellow'
};
const history = createBrowserHistory;

function App() {

  function linkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }


  return (
    <Router history={history} onUpdate={linkScroll}>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/adminpage'>
            <AdminPage />
          </Route>
          <Route exact path='/'>
            <Intro theme={theme} />
            <About />
            <Projects />
            <Contact />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;