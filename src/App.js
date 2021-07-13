import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Login from './views/auth/Login.js'
import Signup from './views/auth/Signup.js'
import Logout from './views/auth/Logout.js'
import Dashboard from './views/app/Dashboard.js'
import IssueView from './views/app/IssueView.js'
import CompletedIssueView from './views/app/CompletedIssueView';

import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const App = () => {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/:userId/:projectName/:projectId/completed' component={CompletedIssueView} exact />
          <Route path='/:userId/:projectName/:projectId' component={IssueView} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/' component={Dashboard} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
