import {useEffect, useState} from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = ({collection, _query}) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

  //  only use wuery if we want to as sometime maybe we need the full collection without query
    if(_query){
        ref = ref.where(..._query)
    }

    const unsubscribe = ref.onSnapshot((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({...doc.data(), id: doc.id}) //id is not uid , id is the id of document not of user
        })

        //update state
        setDocuments(results)
        setError(null)
    }, (error) =>{
        console.log(error)
        setError('could not fetch the data')
    })

    //unsubscribe on unmount 
    return () => unsubscribe()

  }, [collection,query])
  
  return { documents, error }
}
