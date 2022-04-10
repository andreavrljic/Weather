import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../fire'
import { useHistory } from "react-router-dom";
import '../App.css';


const Login = () => {
    console.log(process.env.REACT_APP_API_KEY)

    const [user, setUser] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const history = useHistory();

    // const passwordValidation = () => {
    //     var validationCondition = /(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
    //     return validationCondition.test(password);
    // }

    // const handleInput = () => {
    //     if (passwordValidation()) {
    //       setEnable(false)
    //     }
    //     else {
    //       setEnable(true);
    //     };
    //   };

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        signInWithEmailAndPassword(auth, email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPassword(err.message);
                        break;
                }
            }).then((resp) => {
                if (resp.operationType == "signIn") {
                    console.log(resp)
                    history.push({ pathname: "/weather", state: { token: email } })
                }

            })
        // history.push({ pathname: "/weather", state: { token: email } })
    }

    const handleSignup = () => {
        clearErrors();
        createUserWithEmailAndPassword(auth, email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPassword(err.message);
                        break;
                }
            })
    }

    const handleLogout = () => {
        signOut(auth);
    }

    const authListener = () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                history.push({ pathname: "/weather", state: { token: email } })
                clearInputs();
            } else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])


    return (
        // <section>

        // user ?
        // <div onClick={() => { handleLogout() }}>{console.log("ovo je sada test")}You are in user</div> :
        <div className="login-box">
            <label>Username</label>
            <input
                type="text"
                id="email-input"
                placeholder="Email"
                required
                value={email}
                // onKeyUp={handleInput}
                onChange={(event) => { setEmail(event.target.value); /*setToken(event.target.value)*/ }}
            />
            <p>{emailError}</p>
            <label>Password</label>
            <input
                type="password"
                id="password-input"
                placeholder="Password"
                required
                // onKeyUp={handleInput}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <p>{passwordError}</p>
            <div>
                {hasAccount ? (
                    <>
                        <button onClick={() => handleLogin()}> Sign in</button>
                        <p>Don't hava an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ) :
                    (<>
                        <button onClick={() => handleSignup()}>Sign up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>)}
            </div>
        </div>


        // </section>
    )

}
export default Login;

{/* <div className="login-box">
                <label>Email</label>
                <input
                    type="text"
                    id="email-input"
                    placeholder="Email"
                // value={email}
                // onKeyUp={handleInput}
                // onChange={(event) => { setEmail(event.target.value); setToken(event.target.value) }}
                />
                <label>Password</label>
                <input
                    type="password"
                    id="password-input"
                    placeholder="Password"
                // onKeyUp={handleInput}
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                />
                {/* {isEnable ? <label className="passwordinfo">*At least: 8 characters, 1 uppercase,1 number and special character.</label> : null} */}
            //     <button
            //         className="button"
            //         type="submit"
            //         id="button-input"
            //      disabled={isEnable}
            //      onClick={() => handleSubmit(email, password)}
            //     >
            //         Login
            //     </button>
            // </div>