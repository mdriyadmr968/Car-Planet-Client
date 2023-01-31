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
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogIn = async (e) => {
    e.preventDefault();
    try {
      await logInUsingGoogle(navigate, location);
      alert("Login successful");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    emailAndPasswordSignIn(email, password, location, navigate)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-container margin-bottom">
      <h1 className="text-center login-top">Login</h1>
      <div className="row align-items-md-center">
        <div className="col-md-6">
          <input
            type="text"
            className="w-75 my-2"
            placeholder="Enter username"
            onBlur={handleEmail}
          />
          <input
            type="text"
            className="w-75"
            placeholder="Enter password"
            onBlur={handlePassword}
          />
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
