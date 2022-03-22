import styles from './Navbar.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}> <Link to='/login'>moneyDor</Link></li>
        <li>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </li>

    </ul>
    </nav>
  )
}

export default Navbar