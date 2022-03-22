import styles from './Home.module.css';

import React from 'react'
import TransactionForm from './TransactionForm';

export default function home() {
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction list
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}
