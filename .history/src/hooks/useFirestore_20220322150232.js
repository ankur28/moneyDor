import {useReducer,useEffect,useState} from 'react'
import { projectFirestore } from '../firebase/config'

let initialState = {
    document
}

export  const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
}
