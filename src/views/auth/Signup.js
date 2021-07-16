import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import Header from '../../components/Header.js'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setRedirect(true)
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2
    };

    fetch('/api/v1/issue_tracker/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key)
          window.location.replace('/')
          setRedirect(true)
        } else {
          setUsername('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (redirect === true ? (
    <Redirect to='/dashboard' />
  ) : (
      <>
        <Header />
        <div className='login'>
          {loading === false && <h1 className='login-header'>Signup</h1>}
          {errors === true && <h2>Cannot signup with provided credentials</h2>}
          <form className='login-content' onSubmit={onSubmit}>
            <div className="row login-input">
              <label className="login-input" htmlFor='username'>Username:</label> <br />
              <input
                className='login-input form-control'
                name='username'
                type='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />{' '}
              <br />
            </div>
            <div className="row login-input">
              <label className="login-input" htmlFor='password1'>Password:</label> <br />
              <input
                className='login-input form-control'
                name='password1'
                type='password'
                value={password1}
                onChange={e => setPassword1(e.target.value)}
                required
              />{' '}
              <br />
            </div>
            <div className="row login-input">
              <label className="login-input" htmlFor='password2'>Confirm password:</label> <br />
              <input
                className='login-input form-control'
                name='password2'
                type='password'
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                required
              />{' '}
              <br />
            </div>
            <div className="row login-input">
              <input className='btn btn-primary login-input' type='submit' value='Signup' />
            </div>
          </form>
        </div>
      </>
    )
  )
};

export default Signup;