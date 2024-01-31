import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCTLqpB-QuQa9KbAkw-c-TTnOC-WD5mRRI",
    authDomain: "uofgpreparechemphys.firebaseapp.com",
    projectId: "uofgpreparechemphys",
    storageBucket: "uofgpreparechemphys.appspot.com",
    messagingSenderId: "394889069292",
    appId: "1:394889069292:web:25964ec5110a1d7f5e9bc9"
})

export const auth = app.auth()
export default app