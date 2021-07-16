import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import Header from '../../components/Header.js'

import Issue from '../../components/Issue.js'
import CreateIssue from './CreateIssue.js'
import issueService from '../../services/IssueService.js'

const IssueView = () => {
  const [issues, setIssues] = useState([])
  const [newIssue, setNewIssue] = useState('')
  const [type, setType] = useState('Bug')
  const [priority, setPriority] = useState('Low')
  const [createIssueState, setCreateIssueState] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const { userId, projectName, projectId } = useParams()

  const projectIdInt = parseInt(projectId)

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setRedirect(true)
    } else {
      issueService
        .getAll()
        .then(returnedIssues => {
          setIssues(returnedIssues)
        })
    }
  }, [])

  const handleIssueChange = e => {
    setNewIssue(e.target.value)
  }

  const handleTypeChange = e => {
    setType(e.target.value)
  }

  const handlePriorityChange = e => {
    setPriority(e.target.value)
  }

  const addIssue = e => {
    e.preventDefault()
    const issueObject = {
      user: userId,
      issue_text: newIssue,
      project: projectId,
      priority: priority,
      issue_type: type,
      date_posted: new Date(),
      date_completed: null,
      in_progress: false,
      completed: false
    }

    issueService
      .createIssue(issueObject)
      .then(returnedIssue => {
        setIssues(issues.concat(returnedIssue))
        setNewIssue('')
      })

    toggleCreateIssueState()
  }

  const removeIssue = id => {
    if (window.confirm('Are you sure you want to delete this issue?')) {
      issueService
        .deleteIssue(id)
        .then(returnedIssues => {
          setIssues(issues.filter(issue => issue.pk !== id))
        })
    }
  }

  const completeIssue = id => {
    const issue = issuesToShow.find(i => i.pk === id)
    const parsedDate = moment(issue.date_posted)
    const changedIssue = {
      ...issue,
      completed: true,
      date_posted: parsedDate,
      date_completed: new Date()
    }

    issueService
      .updateIssue(id, changedIssue)
      .then(returnedIssue => {
        setIssues(issues.map(issue => issue.pk !== id ? issue : returnedIssue))
      }
    )
  }

  const toggleInProgress = (id, newState) => {
    const issue = issuesToShow.find(i => i.pk === id)
    const parsedDate = moment(issue.date_posted)
    const changedIssue = {
      ...issue,
      date_posted: parsedDate,
      in_progress: newState
    }

    issueService
      .updateIssue(id, changedIssue)
      .then(returnedIssue => {
        setIssues(issues.map(issue => issue.pk !== id ? issue : returnedIssue))
      }
      )
  }

  const toggleCreateIssueState = () => {
    setCreateIssueState(!createIssueState)
  }

  const issuesToShow = issues.filter(issue => issue.project === projectIdInt && issue.completed === false)

  return (redirect === true ? (
    <Redirect to='/login' />
  ) : (
      <>
        <Header />
        <div className='page-content'>
          <h1 className='page-title'>{projectName}</h1>
          <button className='new-issue-btn btn btn-primary' onClick={toggleCreateIssueState}>New Issue</button>
          <Link to={{ pathname: `/${userId}/${projectName}/${projectId}/completed` }} className='completed-issues-btn btn btn-primary'>View Completed Issues</Link>
          {issuesToShow.length > 0 ? (
            <table className='table table-hover'>
              <thead>
                <tr className='table-primary well well-sm'>
                  <th className="d-none d-sm-table-cell">#</th>
                  <th className="issue-text">Issue</th>
                  <th className="d-none d-sm-table-cell">Type</th>
                  <th className="d-none d-sm-table-cell" data-sortable='true'>Priority</th>
                  <th className="d-none d-md-table-cell">Date Posted</th>
                  <th className="issue-actions">Actions</th>
                </tr>
              </thead>
        
              <tbody>
                {issuesToShow.map(issue =>
                  <Issue
                    issue={issue}
                    key={issue.pk}
                    removeIssue={removeIssue}
                    completeIssue={completeIssue}
                    toggleInProgress={toggleInProgress}
                  />
                )}
              </tbody>
            </table>
          ) : (
              <>
              <table className='table table-hover'>
                <thead>
                  <tr className='table-primary well well-sm'>
                    <th>#</th>
                    <th>Issue</th>
                    <th>Type</th>
                    <th data-sortable='true'>Priority</th>
                    <th>Date Posted</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
              </table>
              <p>No issues yet to show. Create a new issue by clicking the 'New Issue' button above!</p>
              </>
            )}
          {createIssueState ? <CreateIssue
            toggle={toggleCreateIssueState}
            newIssue={newIssue}
            type={type}
            priority={priority}
            addIssue={addIssue}
            handleIssueChange={handleIssueChange}
            handlePriorityChange={handlePriorityChange}
            handleTypeChange={handleTypeChange} /> : null}
          </div>
      </>
    )
  )
}

export default IssueView