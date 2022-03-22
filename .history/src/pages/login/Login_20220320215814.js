import React, { useState } from 'react'
import styles from './Login.module.css';

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');

  return (
    <form className={styles['login-form']}>
        <h2>Login</h2>
        <label>
            <span>Email:</span>
            <input type='email' 
            onChange={(e) => setEmail()}/>
        </label>
        
        <label>
            <span>Password:</span>
            <input type='password' />   
        </label>

        <button className="btn">Login</button>
        
    </form>
  )
}
