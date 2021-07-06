import React, { useEffect, useState } from 'react'
import projectService from '../../services/ProjectService.js'
import userService from '../../services/UserService.js'

const CreateProject = () => {
  const [newProject, setNewProject] = useState('')
  const [id, setId] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('/login')
    } else {
      userService
        .getUser()
        .then(data => {
          console.log(data)
          setId(data.pk)
        })
    }
  }, [])

  const addProject = e => {
    e.preventDefault()
    const projectObject = {
      project_name: newProject,
      user: id
    }

    projectService
      .createProject(projectObject)
      .then(data => console.log(data))

    window.location.replace('/dashboard')
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