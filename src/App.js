import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import MailList from "./MailList";
import SendMail from "./SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            }
        });
    }, []);
    return (
        <BrowserRouter>
            {!user ? (
                <Login />
            ) : (
                <div className="app">
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Routes>
                            <Route path="/" element={<MailList />} />
                            <Route path="mail" element={<Mail />} />
                        </Routes>
                    </div>
                    {sendMessageIsOpen && <SendMail />}
                </div>
            )}
        </BrowserRouter>
    );
}

export default App;
