import {useState} from "react";
import {app, auth} from "../config/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

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
                console.log(user.getIdToken())
            })
            .catch((error) => {
                alert(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="container-login">
            <form>
                <h1>Login</h1>
                <label>Email
                    <input onChange={(e) => setEmail(e.target.value)} type="email" label="Email"/>
                </label><br/>
                <label>Senha
                    <input onChange={(e) => setPassword(e.target.value)}type="password" label="Senha"/>
                </label><br/>
                <button onClick={doLogin} type="button">Login</button>
            </form>
        </div>
    );
};

export default Login;