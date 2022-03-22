import styles from './Home.module.css';

import React from 'react'
import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Home() {
  const { user } = useAuthContext()
  const { document, error} = useC
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction list
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
