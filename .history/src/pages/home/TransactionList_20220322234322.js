import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
    const {deleteDocument} = useFirestore('transactions')
    console.log(res)
  return (
    <ul className={styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>₹{transaction.amount}</p>
                <button onClick={() => deleteDocument(transaction.id)}></button>
            </li>
        ))}

        
    </ul>
  )
}
