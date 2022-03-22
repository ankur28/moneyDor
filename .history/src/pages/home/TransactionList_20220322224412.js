import React from 'react'
import styles from './Home.module.css'
export default function TransactionList({ transactions}) {
  return (
    <ul className={styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className={styles.name}></li></p>
            </li>
        ))}

        
    </ul>
  )
}
