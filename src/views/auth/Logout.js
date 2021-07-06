import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login')
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogout = e => {
    e.preventDefault()

    fetch('http://127.0.0.1:8000/api/v1/issue_tracker/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        localStorage.clear()
        window.location.replace('http://localhost:3000/login')
      })
  }

  return (
    <div className='logout-content'>
      {loading === false && (
        <>
          <h1>Are you sure you want to logout?</h1>
          <input className='btn btn-danger' type='button' value='Logout' onClick={handleLogout} />
          <Link className='btn btn-secondary' to='/dashboard'>Cancel</Link>
        </>
      )}
    </div>
  )
}

export default Logout