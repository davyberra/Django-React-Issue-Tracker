import React from 'react'

const Issue = ({ issue, removeIssue }) => {
  return (
    <tr>
      <td>{issue.issue_text}</td>
      <td>{issue.issue_type}</td>
      <td>{issue.priority}</td>
      <td className='table-success'>
        Complete
      </td>
      <td>
        <button className='btn btn-danger' onClick={(() => removeIssue(issue.pk))}>Delete</button>
      </td>
    </tr>
  )
}

export default Issue