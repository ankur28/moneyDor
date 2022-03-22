import styles from './Navbar.module.css';
import React from 'react'

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <ul>
        <li className={styles.title}>moneyDor</li>
        

    </ul>
    </nav>
  )
}

export default Navbar