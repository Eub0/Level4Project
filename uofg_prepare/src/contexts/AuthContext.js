import React, { useContext, useState, useEffect } from 'react';
import { auth, db, writeUserData } from "../firebase";
import { get, getDatabase, ref, remove, set, update } from "firebase/database"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password).then(function(result){
      console.log("Account created")
      var uuid = result.user.uid
      var uemail = email
      var todo = ["Add your own items and delete me."]
      console.log("Vars created")

      const db = getDatabase();
      console.log("got database")
      const reference = ref(db, 'users/' + uuid)
      console.log("Ref created")
      set(reference, {
          email: uemail,
          todo: todo
      })
      console.log("Database set")
      return ""
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

  async function getToDoList(){
    const db = getDatabase();
    const reference = ref(db, 'users/' + currentUser.uid)

    try {
      const snapshot = await get(reference);
  
      if (snapshot.exists()) {
        var data = snapshot.val();
        var userToDo = data["todo"]
        var index = Object.keys(userToDo)
        var showToDo = {}
        for (let i = 0; i < index.length; i++){
          showToDo[i] = userToDo[i]
        };
        return showToDo
      }
  
  
    }catch (error) {
      console.error("Error getting to do list: ", error)
    }
  }

  function addToDoItem(newItem){
    const db = getDatabase();
    const listRef = ref(db, 'users/' + currentUser.uid + '/todo');
    listRef.setValue(newItem)
    return ""
  }

  function updateToDoList(newList){
    const db = getDatabase();
    const listRef = ref(db, 'users/' + currentUser.uid + '/todo');
    set(listRef, newList)
    return ""
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
}, [])
  
  const value = {currentUser, signin, signup, signout, resetPassword, updateEmail, updatePassword, getToDoList, updateToDoList, addToDoItem}

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
