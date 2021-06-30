import React, { uesEffect, useEffect, useState } from 'react'
import axios from 'axios'
import projectService from '../../services/ProjectService.js'
import userService from '../../services/UserService.js'

const CreateProject = () => {
  const [newProject, setNewProject] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login')
    } else {
      userService
        .getUsername()
        .then(data => setUsername(data.username))
    }
  }, [])

  const addProject = e => {
    e.preventDefault()
    const projectObject = {
      project_name: newProject,
      user: username
    }

    projectService
      .createProject(projectObject)
      .then(data => console.log(data))
  }

  const handleProjectChange = e => {
    setNewProject(e.target.value)
  }


  return (
    <form onSubmit={addProject}>
      <input value={newProject} onChange={handleProjectChange} />
      <input type='submit' name='submit' value='Save Project' />
    </form>
  )
}

export default CreateProject