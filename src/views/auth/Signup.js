import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      <Redirect to='/dashboard' />
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
          localStorage.setItem('token', data.key);
          <Redirect to='/dashboard' />;
        } else {
          setUsername('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className='login'>
      {loading === false && <h1 className='login-header'>Signup</h1>}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <form className='login-input' onSubmit={onSubmit}>
        <label htmlFor='username'>Username:</label> <br />
        <input
          className='login-input form-control'
          name='username'
          type='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password1'>Password:</label> <br />
        <input
          className='login-input form-control'
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          className='login-input form-control'
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        <br />
        <input className='btn btn-primary login-input' type='submit' value='Signup' />
      </form>
    </div>
  );
};

export default Signup;