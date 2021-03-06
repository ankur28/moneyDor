import {useReducer,useEffect,useState} from 'react'
import { projectFirestore } from '../firebase/config'

let initialState = {
    document: null,
    isPending:  false,
    error: null,
    success: null
}

export const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return {...state , isPending : true}
        case 'ADDED_DOCUMENT':
            return {...state , isPending:false, document : action.payload, success:true}
        default:
            return state;
    }
}

export  const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  //collection ref
  const ref = projectFirestore.collection(collection)

 //only dispatch if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
          }
    }

  //add document
  const addDocument = async (doc) => {
    dispatch({ type:'IS_PENDING' })

    try {
      const addedDocument =  await ref.add({doc})
      dispatchIfNotCancelled({type:'ADDED_DOCUMENT', payload:addedDocument})

    } catch (err) {
        if(!isCancelled){

        }
        
    }
  }
  //delete document
  const deleteDocument = async (id) => {
    
  }

  useEffect(() => {
     return () => {
        setIsCancelled(true)
    }
  }, [])

return { addDocument, deleteDocument, response}
  
}
