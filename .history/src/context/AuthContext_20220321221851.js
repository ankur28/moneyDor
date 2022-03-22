import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authContextProvider = ({ children}) => {

    cont [state,dispatch] = useReducer(A)

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}