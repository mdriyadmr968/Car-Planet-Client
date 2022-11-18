import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Register/register.css";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUsingGoogle, emailAndPasswordSignIn } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle(history, location);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    emailAndPasswordSignIn(email, password, location, history);
  };

  return (
    <div className="login-container margin-bottom">
      <h1 className="text-center my-2">Login</h1>
      <div className="row align-items-md-center">
        <div className="col-md-6">
          <input
            type="text"
            className="w-75 my-2"
            placeholder="Enter username"
          />
          <input type="text" className="w-75" placeholder="Enter password" />
          <button className="btn btn-dark w-75 my-4" onClick={handleLogIn}>
            Submit
          </button>
          <div className="mb-3">--------OR-----------</div>
          <button className="btn btn-dark w-75" onClick={handleGoogleLogIn}>
            Login with google
          </button>
          <p className="lead my-2">
            Don't have an account ? <Link to="/register">Register</Link>
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/SnJrMJP/4957136.jpg"
            className="w-75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
