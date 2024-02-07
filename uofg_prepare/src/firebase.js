import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase, ref, set } from "firebase/database"
import { useState, useEffect } from 'react';

// const [todo, setTodo] = useState();
// const [email, setEmail] = useState();
// const [todos, setTodos] = useState([]);

const app = firebase.initializeApp({
    apiKey: "AIzaSyCTLqpB-QuQa9KbAkw-c-TTnOC-WD5mRRI",
    authDomain: "uofgpreparechemphys.firebaseapp.com",
    databaseURL: "https://uofgpreparechemphys-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uofgpreparechemphys",
    storageBucket: "uofgpreparechemphys.appspot.com",
    messagingSenderId: "394889069292",
    appId: "1:394889069292:web:25964ec5110a1d7f5e9bc9"
})

// const handleTodoChange = (e) => {
//     setTodo(e.target.value)
// };

function writeUserData = (thisEmail) => {
    const [todo, setTodo] = useState();
    const [email, setEmail] = useState();
    const uuid = uid();
    set(ref(db, `/${uid}`), {
        todo,
        email,
        uuid,
    });
    setEmail(thisEmail);
    setTodo("");
};

function readUserData = () => {
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
export const db = getDatabase(app)
export default app