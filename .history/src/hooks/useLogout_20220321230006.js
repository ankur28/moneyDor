import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const{ dispatch } = useAuthContext();

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //sign user out
        try {
            await projectAuth.signOut()

            //dispatch logout action
            //no need to pass payload, as we dont need to set the user to be anything other than null
            dispatch({type:'LOGOUT'}) 
            setIsPending(false)
            setError(null)
        }
        catch(err) {
            setError(err.message)
            setIsPending(false)

        }
    }

}