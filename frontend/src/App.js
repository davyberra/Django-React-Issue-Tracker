import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Login from './views/auth/Login.js'
import Signup from './views/auth/Signup.js'
import Project from './components/Project.js';
import productService from './services/ProductService.js';

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    productService
      .getAll()
      .then(initialProjects => {
        setProjects(initialProjects)
        
      })
    }, []
  )

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
