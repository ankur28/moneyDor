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
            return {}
        default:
            return state;
    }
}

export  const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  //collection ref
  const ref = projectFirestore.collection(collection)

  //add document
  const addDocument = (doc) => {
    dispatch({ type:'IS_PENDING' })
  }
  //delete document
  const deleteDocument = (id) => {
    
  }

  useEffect(() => {
     return () => {
        setIsCancelled(true)
    }
  }, [])

return { addDocument, deleteDocument, response}
  
}
