import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase, ref, set } from "firebase/database"
import { useEffect } from 'react';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCTLqpB-QuQa9KbAkw-c-TTnOC-WD5mRRI",
    authDomain: "uofgpreparechemphys.firebaseapp.com",
    databaseURL: "https://uofgpreparechemphys-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uofgpreparechemphys",
    storageBucket: "uofgpreparechemphys.appspot.com",
    messagingSenderId: "394889069292",
    appId: "1:394889069292:web:25964ec5110a1d7f5e9bc9"
})

export const db = getDatabase(app)

export const writeUserData = () => {
    var username = userRef.current?.value
    var email = emailRef.current?.value
    var todo = []

    db.ref('users/' + auth.currentUser.uuid).set({
        email: email,
        todo: todo
    })
};

export const readUserData = () => {
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map(todo => {
                    setTodos(oldArray => [...oldArray, todo]);
                });
            };
        });
    }, []);
}

export const auth = app.auth()
export default app