import React from 'react'
import styles from './Signup.module.css';

export default function Signup() {
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Login</h2>
    <label>
        <span>Email:</span>
        <input type='email' 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
    </label>
    
    <label>
        <span>Password:</span>
        <input type='password' 
        
         onChange={(e) => setpassword(e.target.value)}
         value={password}
         />
    </label>

    <button className="btn">Login</button>
    
</form>
  )
}
