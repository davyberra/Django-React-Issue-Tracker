import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard')
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

    axios.post('http://127.0.0.1:8000/api/v1/issue_tracker/auth/login', user)
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear()
          localStorage.setItem('token', data.key)
          window.location.replace('http://localhost:3000/dashboard')
        } else {
          setUsername('')
          setPassword('')
          localStorage.clear();
          setErrors(true)
        }
      })
  }

  return (
    <div>
      {loading === false && <h1>Login</h1>}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
        <form onSubmit={onSubmit}>
          <label htmlFor='username'>Username:</label> <br />
          <input
            name='username'
            type='username'
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='pasword'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input type='submit' value='Login' />
        </form>
      )}
    </div>
  )
}

export default Login