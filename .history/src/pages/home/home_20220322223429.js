import styles from './Home.module.css';

import React from 'react'
import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
  const { user } = useAuthContext()
  const { document, error} = useCollection('transactions')
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
