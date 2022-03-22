import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogin = (email, password) => {
    const [isCancelled, setisCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const{ dispatch } = useAuthContext();

    const login  = async () => {
        setError(null)
        setIsPending(true)

        //sign user out
        try {
          const res =   await projectAuth.signInWithEmailAndPassword(email,password)

            //dispatch logout action
            dispatch({type:'LOGIN',payl}) 

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        }
        catch(err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
      return () => {
        setisCancelled(true)
      }
    }, [])
    

    return { login, error, isPending }

}