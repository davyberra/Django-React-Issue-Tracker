import React, { useEffect, useState } from 'react'


const Project = ({ project, username, removeName, issues }) => {
  
  const projectIssues = issues.filter(issue => issue.project === project.pk && issue.completed === false)
  
  return (
    <tr>
      <td className='project'>
        {project.project_name} - {project.user !== null ? `created by ${username}` : 'created by NO ONE'}
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