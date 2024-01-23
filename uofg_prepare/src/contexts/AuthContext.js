import React, { useContext, useState } from 'react';
import {auth} from "../firebase";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState

  function signup(email, password) {
    return auth.createUserWithEmailAndPasswoard(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChnage(user => {
      setCurrentUser(user)
    })
    return unsubscribe
}, [])
  
  const value = {currentUser, signup}

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
