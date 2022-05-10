import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        console.log('inside state change', user);
        setUser(loggedInUser);
      }
    });
  }, []);

  return {
    user,
    handleGoogleSignIn,
    logOut
  }

}


export default useFirebase;