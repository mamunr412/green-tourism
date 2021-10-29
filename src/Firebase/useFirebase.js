import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from 'react';
import authInit from "./firebase.init";

authInit();

const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).finally(() => {
            setIsLoading(false);
        });
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false);
            }
        });
    }, [])

    return {
        user,
        googleLogin,
        error,
        isLoading,
        setUser,
        setIsLoading,
        setError,
        logOut
    };
}

export default useFirebase;