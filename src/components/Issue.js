import React from 'react'

const Issue = ({ issue, removeIssue, completeIssue, toggleInProgress }) => {
  return (
    <tr>
      <td className="d-none d-sm-table-cell"><strong>{issue.pk}</strong></td>
      <td className="issue-text">{issue.issue_text}</td>
      <td className="d-none d-sm-table-cell">{issue.issue_type}</td>
      <td className="d-none d-sm-table-cell">{issue.priority}</td>
      <td className="d-none d-md-table-cell">{issue.date_posted}</td>
      <td className="issue-actions">
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
          <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1" >
            <li><button className='dropdown-item' onClick={(() => toggleInProgress(issue.pk, true))}>In Progress</button></li>
            <li><button className='dropdown-item' onClick={(() => toggleInProgress(issue.pk, false))}>Not Started</button></li>
          </ul>
        </div>
        <button className='btn btn-success' onClick={(() => completeIssue(issue.pk))}>Completed</button>
        <button className='btn btn-danger' onClick={(() => removeIssue(issue.pk))}>Delete</button>
      </td>
    </tr>
    )
}

export default Issue