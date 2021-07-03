import React from 'react'

const Issue = ({ issue, removeIssue, completeIssue }) => {
  return (
    <tr>
      <td>{issue.issue_text}</td>
      <td>{issue.issue_type}</td>
      <td>{issue.priority}</td>
      <td>{issue.date_posted}</td>
      <td>
        <div className='dropdown'>
          <button
            type='button'
            className='btn btn-info dropdown-toggle'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            {issue.in_progress === true ? 'In Progress' : 'Not Started'}
          </button>
          <div className='dropdown-menu'>
            <button className='dropdown-item'>In Progress</button>
            <button className='dropdown-item'>Not Started</button>
          </div>
        </div>
      </td>
      <td>
        <button className='btn btn-success' onClick={(() => completeIssue(issue.pk))}>Mark Complete</button>
        <button className='btn btn-danger' onClick={(() => removeIssue(issue.pk))}>Delete</button>
      </td>
    </tr>
    )
}

export default Issue