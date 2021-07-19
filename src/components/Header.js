import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService'

const Header = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
      UserService
        .getUser()
        .then(curUser => {
          setUser(curUser)
          setLoading(false)
        })
    }
  }, [])

  return (
    <div className='header'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to='/dashboard' className='navbar-brand'>Django/React Issue Tracker</Link>
        <div id='navbarNav' className='collapse navbar-collapse'>
          <div className='navbar-nav'>
            {isAuth === true && loading == false ? (
              <>
                <Link to='/dashboard' className='nav-link'>Project Dashboard</Link>
                <Link to='/logout' className='nav-item nav-link'>Logout</Link>
              </>
            ) : (
              <>
                <Link to='/login' className='nav-item nav-link'>Login</Link>
                <Link to='/signup' className='nav-itme nav-link'>Signup</Link>
              </>
            )
            }
          </div>
        </div>
        {loading == false &&
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className='navbar-text'><strong>Hello, {user.username}!</strong></div>
            </li>
          </ul>
        }
      </nav>
    </div>
  )
}

export default Header;