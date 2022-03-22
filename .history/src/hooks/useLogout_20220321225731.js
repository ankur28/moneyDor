import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const{ dispatch } = useAuthContext();

    const async logout = () => {
        setError(null)
        setIsPending(false)

        //sign user out
        try {
            await projectAuth.signOut()
        }
        catch(err) {
            setError(err.message)
            setIsPending(false)

        }
    }

}