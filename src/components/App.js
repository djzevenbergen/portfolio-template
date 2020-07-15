import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SignIn from './SignIn';
import AdminPage from './AdminPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <Intro />
          <About />
          <Projects />
          <Contact />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;