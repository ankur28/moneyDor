import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state,user:null }
        default:
            return state;
    }
}
export const AuthContextProvider = ({ children }) => {

    const [state,dispatch] = useReducer(authReducer, {
        user : null,
        authIsReady:false
    })

    //checking if there is any change in authentication (means if we reload we get the user afer login)
    useEffect(() => {
        projectAuth.onAuthStateChanged(() => {

        })
      return () => {
        
      }
    }, [])
    
    console.log('AuthContext state:',state)
    
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}