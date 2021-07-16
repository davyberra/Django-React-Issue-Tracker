import React from 'react'

const Issue = ({ issue, removeIssue }) => {
  return (
    <tr>
      <td>{issue.issue_text}</td>
      <td className="d-none d-sm-table-cell">{issue.issue_type}</td>
      <td className="d-none d-sm-table-cell">{issue.priority}</td>
      <td className="d-none d-md-table-cell">{issue.date_posted}</td>
      <td className="d-none d-md-table-cell">{issue.date_completed}</td>
      <td className='d-none d-sm-table-cell table-success'>
        Complete
      </td>
      <td>
        <button className='btn btn-danger' onClick={(() => removeIssue(issue.pk))}>Delete</button>
      </td>
    </tr>
  )
}

export default Issue