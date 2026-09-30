import "./AuthForm.css";
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function AuthForm({ isSignUp, setIsSignUp }) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (isSignUp) {

            console.log("Sign Up Data:", formData);

        } else {

            console.log("Sign In Data:", formData);

        }

    };

    return (

        <div className="auth-form-container">

            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

            <p className="auth-switch">

                {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"
                }

                <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                >

                    {isSignUp ? "Sign In" : "Create an account"}

                </button>

            </p>


            <form onSubmit={handleSubmit}>

                {isSignUp && (

                    <div className="name-fields">

                        <div className="input-group">

                            <FiUser />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="input-group">

                            <FiUser />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                )}

                <div className="input-group">

                    <FiMail />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />

                </div>
                <div className="input-group">

                    <FiLock />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                </div>

                {isSignUp && (

                    <div className="input-group">

                        <FiLock />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                    </div>

                )}

                {isSignUp && (

                    <label className="terms">
                        <input type="checkbox" required />
                        <span>I agree to the Privacy Policy and Terms of Use.</span>
                    </label>

                )}

                <button
                    type="submit"
                    className="auth-submit"
                >

                    {isSignUp
                        ? "CREATE ACCOUNT"
                        : "SIGN IN"
                    }

                </button>

            </form>

            <p className="or">OR</p>

            <button className="social-btn"> 
                <FcGoogle />
                CONTINUE WITH GOOGLE </button>

            <button className="social-btn"> 
                <FaFacebook />
                CONTINUE WITH FACEBOOK </button>

            <button className="social-btn"> 
                <FaApple />
                CONTINUE WITH APPLE</button>

        </div>
    );
}

export default AuthForm;