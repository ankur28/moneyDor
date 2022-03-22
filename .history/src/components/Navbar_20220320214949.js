import styles from './Navbar.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}>moneyDor</li>
        <li>
            <Link to='/'></Link>
        </li>

    </ul>
    </nav>
  )
}

export default Navbar