import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
    const {deleteDocument} = useFirestore
  return (
    <ul className={styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>₹{transaction.amount}</p>
            </li>
        ))}

        
    </ul>
  )
}
