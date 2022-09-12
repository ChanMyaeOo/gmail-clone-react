import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://png.monster/wp-content/uploads/2020/11/Gmail-Logo-8a7ef220.png"
                    alt=""
                />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default Login;
