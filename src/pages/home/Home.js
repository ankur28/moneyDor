import styles from './Home.module.css';

import React, { useEffect, useRef, useState } from 'react'
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
  const { user } = useAuthContext()
  const [total, setTotal] = useState(0)
  const { documents, error} = useCollection(
    'transactions',
    ["uid","==", user.uid],
    ["createdAt", "desc"]
    )

  console.log(documents)

  let totalAmount = useRef(total).current

  useEffect(() => {
    if(documents){
       documents.forEach((doc) =>{
       // eslint-disable-next-line react-hooks/exhaustive-deps
       totalAmount += parseInt(doc.amount)
     })
  }
      setTotal(totalAmount)
  }, [documents])
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions ={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
        <p className={styles.totalAmount}>Total(₹): {total}</p>
      </div>
      
    </div>
  )
}
