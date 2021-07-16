import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../../components/Header.js'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setRedirect(true)
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
          window.location.replace('/')
          setRedirect(true)
        } else {
          setUsername('')
          setPassword('')
          localStorage.clear();
          setErrors(true)
        }
      })
  }


  return (redirect === true ? (
    <Redirect to='/dashboard' />
  ) : (
      <>
        <Header />
        <div className='login container-sm'>

          {loading === false && <h1 className='login-header'>Login</h1>}
          {errors === true && <p className='login-input alert alert-danger'>Cannot log in with provided credentials</p>}
          {loading === false && (
            <form className='login-content' onSubmit={onSubmit}>
              <label className='login-input' htmlFor='username'>Username:</label> <br />
              <div className="row login-input">
                <input
                  className='login-input form-control'
                  name='username'
                  type='username'
                  value={username}
                  required
                  onChange={e => setUsername(e.target.value)}
                />{' '}
                <br />
              </div>
              <div className="row login-input">
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
              </div>
              <div className="row login-input">
                <input className='login-input btn btn-primary' type='submit' value='Login' />
              </div>
            </form>
          )}
      
        </div>
      </>
    )
  )
}

export default Login