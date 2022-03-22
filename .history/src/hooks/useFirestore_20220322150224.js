import {useReducer,useEffect,useState} from 'react'
import { projectFirestore } from '../firebase/config'

l

export  const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
}
