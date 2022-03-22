import styles from './Navbar.module.css';
import React from 'react'
import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'

function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}> <Link to='/'>moneyDor</Link></li>
        <li>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </li>

        <li>{useLogout.}
          <button className='btn' onClick={ logout }>
            Logout
          </button>
        </li>

    </ul>
    </nav>
  )
}

export default Navbar