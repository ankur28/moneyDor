import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type)
}
export const authContextProvider = ({ children}) => {

    const [state,dispatch] = useReducer(authReducer, {
        user : null
    })

    dispatch

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}