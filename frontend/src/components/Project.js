import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Project = ({ project, removeName, issues }) => {
  
  const projectIssues = issues.filter(issue => issue.project === project.pk && issue.completed === false)
  
  return (
    <tr>
      <td className='project'>
        <Link to={{ pathname: `${project.user}/${project.project_name}/${project.pk}` }}><strong>{project.project_name}</strong></Link>
      </td>
      <td className='issue-number'>
        {projectIssues.length}
      </td>
      <td>
        <button className='btn btn-danger' onClick={(() => removeName(project.pk))}>Delete</button>
      </td>
    </tr>
  )
}

export default Project