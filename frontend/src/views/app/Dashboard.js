import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import projectService from '../../services/ProjectService.js'
import Project from '../../components/Project.js'
import CreateProject from './CreateProject.js'

const Dashboard = () => {
  const [username, setUsername] = useState('')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login')
    } else {
      fetch('http://127.0.0.1:8000/api/v1/issue_tracker/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUsername(data.username)
          setLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    projectService
      .getAll()
      .then(initialProjects => {
        setProjects(initialProjects)
      })
  }, []
  )

  return (
    <div>
      {loading === false && (
        <>
          <h1>Dashboard</h1>
          <h2>Hello {username}!</h2>
          <ul>
            {projects.map(project => <Project project={project} />)}
          </ul>
          <Link to='/create_project'>New Project</Link>          
        </>
      )}
    </div>
  )
}

export default Dashboard