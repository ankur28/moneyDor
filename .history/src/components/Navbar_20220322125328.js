import styles from './Navbar.module.css';
import React from 'react'
import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  
  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}></li>

      {!user && ()}
        <>
        <li>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </li>
        </>

        <li>
          <button className='btn' onClick={ logout }>
            Logout
          </button>
        </li>

    </ul>
    </nav>
  )
}

export default Navbar