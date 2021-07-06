import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      <Redirect to='/dashboard' />
    } else {
      setLoading(false)
    }
  }, [])

  const onSubmit = e => {
    e.preventDefault()

    const user = {
      username: username,
      password: password
    }

    fetch('/api/v1/issue_tracker/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear()
          localStorage.setItem('token', data.key);
          <Redirect to='/dashboard' />
        } else {
          setUsername('')
          setPassword('')
          localStorage.clear();
          setErrors(true)
        }
      })
  }

  return (
    <div className='login'>

      {loading === false && <h1 className='login-header'>Login</h1>}
      {errors === true && <p className='login-input alert alert-danger'>Cannot log in with provided credentials</p>}
      {loading === false && (
        <form className='login-input' onSubmit={onSubmit}>
          <label className='login-input' htmlFor='username'>Username:</label> <br />
          <input
            className='login-input form-control'
            name='username'
            type='username'
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />{' '}
          <br />
          <label className='login-input' htmlFor='password'>Password:</label> <br />
          <input
            className='login-input form-control'
            name='pasword'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input className='login-input btn btn-primary' type='submit' value='Login' />
        </form>
      )}
      
    </div>
  )
}

export default Login