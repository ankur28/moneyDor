import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const{ dispatch } = useAuthContext();

    const login  = async (email,) => {
        setError(null)
        setIsPending(true)

        //sign user out
        try {
          const res =   await projectAuth.signInWithEmailAndPassword(email,password)

            //dispatch logout action
            dispatch({type:'LOGIN', paylod: res.user}) 

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
        setIsCancelled(true)
      }
    }, [])
    

    return { login, error, isPending }

}