import {useEffect, useState} from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    const unsubscribe = ref.onSnapshot((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({...doc.data(), id: doc.id}) //id is not uid , id is the id of document not of user
        })

        //update state
        setDocument(results)
        setError(null)
    }, (error) =>{
        
    })
  }, [collection])
  
}
