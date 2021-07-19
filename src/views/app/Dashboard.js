import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import projectService from '../../services/ProjectService.js'
import userService from '../../services/UserService.js'
import issueService from '../../services/IssueService.js'
import Project from '../../components/Project.js'
import CreateProjectPopup from './CreateProjectPopup.js'
import Header from '../../components/Header.js'


const Dashboard = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [createProjectState, setCreateProjectState] = useState(false)
  const [issues, setIssues] = useState([])
  const [newProject, setNewProject] = useState('')
  const [redirect, setRedirect] = useState(false)

  const addProject = e => {
    e.preventDefault()
    const projectObject = {
      project_name: newProject,
      user: user.pk
    }

    projectService
      .createProject(projectObject)
      .then(returnedProject => {
        setProjects(projects.concat(returnedProject))
        setNewProject('')
      }
    )
    toggleCreateProjectState()
  }

  const handleProjectChange = e => {
    setNewProject(e.target.value)
  }

  useEffect(() => {
    issueService
      .getAll()
      .then(allIssues => {
        setIssues(allIssues)
      })
  }, [])
    
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setRedirect(true)
    } else {
      console.log(localStorage.getItem('token'))
      userService
        .getUser()
        .then(curUser => {
          setUser(curUser)
          setLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    projectService
      .getAll()
      .then(allProjects => setProjects(allProjects))
  }, [user])

  const toggleCreateProjectState = () => {
    setCreateProjectState(!createProjectState)
  }

  const removeName = id => {
    if (window.confirm("Are you sure you wish to delete this projecct?")) {
      projectService
        .deleteProject(id)
        .then(returnedProjects =>
          setProjects(projects.filter(project => project.pk !== id)))
    }
  }

  const projectsToShow = loading
    ? {}
    : projects.filter(project => project.user === user.pk)


  return (redirect === true ? (
    <Redirect to='login' />
  ) : (
      <>
        <Header />
        <div className='page-content'>
          {loading === false && (
            <>
              <h1 className='page-title'>Dashboard</h1>
              <button className='btn btn-primary' onClick={toggleCreateProjectState}>New Project</button>
              <table className='table table-hover'>
                <thead>
                  <tr className='table-primary well well-sm'>
                    <th>Project</th>
                    <th># of Issues</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsToShow.map(project =>
                    <Project
                      project={project}
                      key={project.project_name}
                      username={user.username}
                      removeName={removeName}
                      issues={issues}
                    />
                  )}
                </tbody>
              </table>
              {createProjectState ? <CreateProjectPopup
                toggle={toggleCreateProjectState}
                newProject={newProject}
                addProject={addProject}
                handleProjectChange={handleProjectChange} /> : null}
            </>
          )}
        </div>
      </>
    )
  )
}

export default Dashboard