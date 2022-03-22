import {useEffect, useRef, useState} from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection, _query,_orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

    //if we dont use a ref -> infinite loop in useEffect
    //_query is an array and is different on each call
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

  //  only use wuery if we want to as sometime maybe we need the full collection without query
    if(query){
        ref = ref.where(...query)
    }
    if(orderBy){
        ref = ref.orderBy(...query)
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

  }, [collection,query,orderBy])
  
  return { documents, error }
}
