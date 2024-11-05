import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import "../styles/authentication.css";

import arrowIcon from "../assets/icons/arrow-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import lockIcon from "../assets/icons/lock-icon.svg";
import appleIcon from "../assets/icons/apple-icon.svg";
import googleIcon from "../assets/icons/google-icon.svg";

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSignIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, mail, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user); // Logging the authenticated user
      })
      .catch(error => {
        let code = error.code.replaceAll("-", " ").replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }

  return (
    <section id="sign-in-page" className="page">
      <div className="header">
        <img src={arrowIcon} alt="Back" className="icon" />
        <h2>OFF THE PATH</h2>
      </div>
      <h1>Log In</h1>
      <p>Log in now to access all the features of <span>OffThePath!</span></p>
      
      <form id="sign-in-form" onSubmit={handleSignIn}>
        <div className="input-group">
          <label htmlFor="mail">Email</label>
          <div className="input-field">
            <img src={mailIcon} alt="Mail icon" className="icon" />
            <input
              id="mail"
              type="email"
              name="mail"
              placeholder="Ex: email@example.com"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="password">Your Password</label>
          <div className="input-field">
            <img src={lockIcon} alt="Lock icon" className="icon" />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autoComplete="current-password"
              required
            />
          </div>
        </div>

        <p className="forgot-password">Forgot Password?</p>

        <button type="submit" className="login-btn">Log In</button>
        
        <div className="social-login">
          <button className="apple-login">
            <img src={appleIcon} alt="Apple icon" className="icon" />
            Sign in with Apple
          </button>
          <button className="google-login">
            <img src={googleIcon} alt="Google icon" className="icon" />
            Continue with Google
          </button>
        </div>
      </form>

      <p className="register-link">
        Do not have an account? <Link to="/sign-up">Register</Link>
      </p>

      <div className="error-message">
        <p>{errorMessage}</p>
      </div>
    </section>
  );
}
