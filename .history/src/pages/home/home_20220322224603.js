import styles from './Home.module.css';

import React from 'react'
import TransactionForm from './TransactionForm';
import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error} = useCollection('transactions')
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transaction ={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
