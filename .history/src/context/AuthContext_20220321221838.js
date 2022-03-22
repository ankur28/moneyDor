import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authContextProvider = ({ children}) => {

    cont [state,dispatch]

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}