import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {

    }

    return { error, isPending, signup}  
}