import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import CompletedIssue from '../../components/CompletedIssue.js'
import issueService from '../../services/IssueService.js'

const CompletedIssueView = () => {
  const [issues, setIssues] = useState([])

  const { userId, projectName, projectId } = useParams()

  const projectIdInt = parseInt(projectId)

  useEffect(() => {
    issueService
      .getAll()
      .then(initialIssues => {
        setIssues(initialIssues)
      })
  }, [])

  const removeIssue = id => {
    if (window.confirm('Are you sure you want to delete this issue?')) {
      issueService
        .deleteIssue(id)
        .then(returnedIssues => {
          setIssues(issues.filter(issue => issue.pk !== id))
        })
    }
  }

  const issuesToShow = issues.filter(issue => issue.project === projectIdInt && issue.completed === true)

  return (
    <div className='page-content'>
      <h1 className='page-title'>{projectName} - Completed Issues</h1>
      <Link to={{ pathname: `/${userId}/${projectName}/${projectId}/` }} className='btn btn-primary'>Back to Issues</Link>
      <table className='table table-hover'>
        <tr className='well well-sm'>
          <th>Issue</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Date Posted</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {issuesToShow.map(issue =>
          <CompletedIssue
            issue={issue}
            key={issue.pk}
            removeIssue={removeIssue}
          />
        )}
      </table>
    </div>
  )
}

export default CompletedIssueView