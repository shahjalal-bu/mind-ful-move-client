/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import "../utils/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import Axios from "../utils/Axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user?.email) {
        Axios.post("/jwt", { email: user?.email }).then((res) =>
          localStorage.setItem("toy-access-token", res.data.token)
        );
      }
    });
    return unsubscribe;
  });

  //signup function
  async function signup(email, password, username, photoURL) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // Update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  //login function

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  //google sign in  function

  function googleSignIn() {
    const auth = getAuth();
    return signInWithPopup(auth, new GoogleAuthProvider());
  }
  // sign in  function

  function githubSignIn() {
    const auth = getAuth();
    return signInWithPopup(auth, new GithubAuthProvider());
  }

  //logout
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    googleSignIn,
    githubSignIn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
