import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authContextProvider = ({ children}) => {

    cont [state,dispatch] = useReducer(authReducer)

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}