import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authContextProvider = ({ children}) => {

    cont re

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}