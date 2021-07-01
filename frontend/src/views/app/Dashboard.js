import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import projectService from '../../services/ProjectService.js'
import userService from '../../services/UserService.js'
import Project from '../../components/Project.js'


const Dashboard = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [id, setId] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login')
    } else {
      userService
        .getUser()
        .then(curUser => {
          console.log(curUser)
          setUser(curUser)
          setId(curUser.pk)
          setUsername(curUser.username)
          setLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    console.log(user)
    projectService
      .getAll()
      .then(allProjects => setProjects(allProjects))
  }, [user])

  const projectsToShow = loading
    ? {}
    : projects.filter(project => project.user === user.pk)


  return (
    <div>
      {loading === false && (
        <>
          <h1>Dashboard</h1>
          <h2>Hello {user.username}!</h2>
          <ul>
            {projectsToShow.map(project =>
              <Project
                project={project}
                key={project.project_name}
                username={user.username}
              />
            )}
          </ul>
          <Link to='/create_project'>New Project</Link>          
        </>
      )}
    </div>
  )
}

export default Dashboard