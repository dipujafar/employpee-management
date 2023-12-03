import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config'
import useAxiosSecure from "../hook/useAxiosSecure";





export const AuthContext = createContext(null);

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    };

    const singInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
 
    const updateUser= (name, photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    };

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            if(currentUser){
                console.log(currentUser)
                const userInfo = {email: currentUser.email};
                axiosSecure.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token);
                        setLoading(false);
                    }
                })
            }
           else{
            localStorage.removeItem("access-token"); 
            setLoading(false);
           }
        });

        return ()=>{
            return unsubscribe();
        }
    },[axiosSecure])

    const authInfo = {
        user,
        createUser,
        singInUser,
        updateUser,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvide.propTypes = {
    children: PropTypes.node
  };

export default AuthProvide;