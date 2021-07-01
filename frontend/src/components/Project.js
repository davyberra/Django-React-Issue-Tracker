import React from 'react'

const Project = ({ project, username }) => {
  return (
    <li className='project'>
      {project.project_name} - {project.user !== null ? `created by ${username}` : 'created by NO ONE'} - {project.id}
    </li>
  )
}

export default Project