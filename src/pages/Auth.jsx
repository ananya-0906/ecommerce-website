import "./Auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AuthForm from "../components/AuthForm";

function Auth() {

    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div className="auth-page">

            <div className="auth-left">

                <div className="auth-brand">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="auth-content">
                    <div className="upper-text">
                        <p className="auth-create-acc"> &ndash;CREATE YOUR ACCOUNT</p>
                        <p className="auth-small-title">WELCOME TO <i>sonicX </i></p>

                        <p>Sign up to explore the premium collection of audio products.</p>
                    </div>

                </div>

            </div>

            <div className="auth-right">

                <AuthForm
                    isSignUp={isSignUp}
                    setIsSignUp={setIsSignUp}
                />

            </div>

        </div>
    );
}

export default Auth;