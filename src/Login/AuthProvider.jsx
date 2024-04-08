import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./firebase.config";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider=new GoogleAuthProvider();
    const signUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const updateUserProfile=(name,role)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, role: role
           });
     }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            
            
        })
        return ()=>{
            return unSubscribe();
        }
        
        }    )
        const userInfo={
            user,loading,signUp,signIn,logOut,googleSignIn,updateUserProfile
        }
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;