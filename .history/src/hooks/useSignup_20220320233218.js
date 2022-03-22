import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)
    
        try {
            //signup user
            
        }
        catch(err){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }  
}