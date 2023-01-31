import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

// creating context
export const AuthContext = createContext();


const UserContext = ({ children }) => {
    // import user to us anywhere
    // const [user] = useAuthState(auth);
    // console.log(user);
    // login with popup with google
    const createUserWithGoogle =  (provider) => {
         return signInWithPopup(auth, provider)
    }

    // logout when loggedin using google
    const googleLogout = () => {
       return signOut(auth)
    }
    // create user with email and password
    const cUserEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    } 

    const authInfo = { cUserEmailPass, loginWithEmailPass, createUserWithGoogle, googleLogout }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default UserContext;