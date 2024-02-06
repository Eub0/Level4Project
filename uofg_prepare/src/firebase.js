import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase, ref, set } from "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCTLqpB-QuQa9KbAkw-c-TTnOC-WD5mRRI",
    authDomain: "uofgpreparechemphys.firebaseapp.com",
    databaseURL: "https://uofgpreparechemphys-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uofgpreparechemphys",
    storageBucket: "uofgpreparechemphys.appspot.com",
    messagingSenderId: "394889069292",
    appId: "1:394889069292:web:25964ec5110a1d7f5e9bc9"
})

export function writeUserData(userId, email, list){
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId)
  
    set(reference, {
      email: email,
      toDo: list
    })
  }

export const auth = app.auth()
export default app