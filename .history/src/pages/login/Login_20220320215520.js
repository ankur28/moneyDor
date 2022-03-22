import React from 'react'
import styles from './Login.module.css';

export default function Login() {
  return (
    <form className={styles['login-form']}>
        <h2>Login</h2>
        <label>
            <span>email:</span>
        <input type='email' />
        </label>
        

        <input type='password' />
    </form>
  )
}
