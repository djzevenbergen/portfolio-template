import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { render } from "@testing-library/react";

import history from '../history';


function AdminPage() {
  return (
    <React.Fragment>
      <h3>This is the AdminPage section</h3>
    </React.Fragment>
  );
}

export default AdminPage;