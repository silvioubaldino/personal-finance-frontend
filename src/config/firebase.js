import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATk0cGZQuIcB00msCuIq47vuimU16FXNU",
    authDomain: "personal-finance-dd2e2.firebaseapp.com",
    projectId: "personal-finance-dd2e2",
    storageBucket: "personal-finance-dd2e2.appspot.com",
    messagingSenderId: "430154542742",
    appId: "1:430154542742:web:6614c2e9ab0b5ccd51dcb7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}
