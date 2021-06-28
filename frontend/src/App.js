import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Project from './Project.js';
import productService from './services/ProductService.js';

function App() {
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
    <div className="App">
      <Header />

      <ul>
        {projects.map(project => <Project project={project}  />)}
      </ul>
    </div>
  );
}

export default App;
