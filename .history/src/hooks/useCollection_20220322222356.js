import {useEffect, useState} from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection)
    
  }, [collection])
  
}
