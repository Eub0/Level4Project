import React, { useContext, useState, useEffect } from 'react';
import { auth, db, writeUserData } from "../firebase";
import { uid } from "uid";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password).then(function(email){
      console.log("created account")
      {writeUserData(email)}
    })
  } 

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signout(){
    auth.signOut()
  }

  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email){
    return currentUser.updateEmail(email)
  }

  function updatePassword(password){
    return currentPassword.updateEmail(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
}, [])
  
  const value = {currentUser, signin, signup, signout, resetPassword, updateEmail, updatePassword}

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
