import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase/firebase.config';

// creating context
export const AuthContext = createContext();

// get auth from firebase init
// const auth = getA

// create google provider
// const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    // login with popup with google
    // const createUserWithGoogle = async () => {
    //      return await signInWithPopup()
    // }

    // create user with email and password
    const cUserEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    } 

    const authInfo = { cUserEmailPass, loginWithEmailPass }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default UserContext;