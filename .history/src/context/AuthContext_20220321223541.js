import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { ...state, action.pa}
        default:
            return state;
    }
}
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