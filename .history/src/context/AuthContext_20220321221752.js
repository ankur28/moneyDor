import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authContextProvider = () => {

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}