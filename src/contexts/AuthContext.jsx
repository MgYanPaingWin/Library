import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'


let AuthContext=createContext();

let AuthReducer=()=>{

}

const AuthContextProvider=({children})=> {

    let [state,dispatch]=useReducer(AuthReducer,{user : null})

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            console.log(user)
        })
    },[])

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthContextProvider};