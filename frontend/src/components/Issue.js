import React from 'react'

const Issue = ({ issue }) => {
  return (
    <>
      <td>{issue.issue_text}</td>
      <td>{issue.issue_type}</td>
      <td>{issue.user}</td>
      <td>{issue.date_posted}</td>
      <td>{issue.priority}</td>
    </>


    )
}