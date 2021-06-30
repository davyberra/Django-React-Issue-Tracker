import React from 'react'

const Project = ({ project }) => {
  return (
    <li className='project'>
      {project.project_name}{project.user}
    </li>
  )
}

export default Project