import {useState} from "react";
import {app, auth} from "../config/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

import '../style/pages/login.css'
import { writeStorage } from "../utils/handleLocalStorage";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function doLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Usário logado")
                // Signed in
                const user = userCredential.user;
                // ...
                user.getIdToken().then((token) => writeStorage(token))
            })
            .catch((error) => {
                alert(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="container-login-main">
            <h1>Personal Finance</h1>
            <form className='container-form'>
                <h2>Login</h2>
                <label>Email
                    <input onChange={(e) => setEmail(e.target.value)} type="email" label="Email"/>
                </label>
                <label>Senha
                    <input onChange={(e) => setPassword(e.target.value)}type="password" label="Senha"/>
                </label>
                <button onClick={doLogin} type="button">Login</button>
            </form>
        </div>
    );
};

export default Login;