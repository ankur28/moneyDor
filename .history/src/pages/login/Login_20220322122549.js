import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { login, error, isPending } = useLogin()
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
}

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
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
            
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             />
        </label>
       
        <button className="btn" onClick={ login }>Login</button>
        {isPending && <button className="btn" disabled>loading</button>}
        { error && <p>{error}</p>}
    </form>
  )
}
