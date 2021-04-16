import React, { useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Signup = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");

  const notify = (statement) => {
    toast.error(statement, { position: toast.POSITION.TOP_CENTER });
  };

  const signUp = (e) => {
    e.preventDefault();

    if (userPassword === confirmUserPassword) {
      auth
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then((auth) => {
          history.pushState("/");
        })
        .catch((error) => notify(error.message));
    } else notify("Password do not Match try again");
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form action="">
          <h5 className="signup__label">E-mail</h5>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            name=""
            id=""
          />
          <h5 className="signup__label">Password</h5>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            name=""
            id=""
          />
          <h5 className="signup__label">Confirm Password</h5>
          <input
            type="password"
            value={confirmUserPassword}
            onChange={(e) => setConfirmUserPassword(e.target.value)}
            name=""
            id=""
          />
          <button
            type="submit"
            onClick={signUp}
            className="signup__signupButton"
          >
            Sign up
          </button>
        </form>
        <p className="signup__terms">
          ℹ Passwords must be at least 6 characters.
        </p>
      </div>
      <div className="signup__login">
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="signup__loginButton">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
