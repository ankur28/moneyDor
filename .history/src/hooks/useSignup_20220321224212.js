import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
   const{ dispatch} = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)
    
        try {
            //signup user
           const res =  await projectAuth.createUserWithEmailAndPassword(email,password)
           console.log(res.user) //res.user is the user that is just created

           if(!res){
               throw new Error('Could not complete signup')
           }

           //add display name to user
           await res.user.updateProfile({ displayName})

           //display login action

           setIsPending(false)
           setError(null)
        }
        catch(err){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }  
}