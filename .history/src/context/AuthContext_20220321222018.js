import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = 
export const authContextProvider = ({ children}) => {

    const [state,dispatch] = useReducer(authReducer, {
        user : null
    })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}