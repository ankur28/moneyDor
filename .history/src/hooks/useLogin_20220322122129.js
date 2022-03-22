import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogin = () => {
    const [isCancelled, setisCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const{ dispatch } = useAuthContext();

    const login  = async () => {
        setError(null)
        setIsPending(true)

        //sign user out
        try {
            await projectAuth.signInWithEmailAndPassword(email,passowrd)

            //dispatch logout action
            //no need to pass payload, as we dont need to set the user to be anything other than null
            dispatch({type:'LOGIN'}) 

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