import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/login.css";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useNavigate();
  const { logInUsingGoogle, signUpWithEmailAndPassword } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(email, password, name, history);
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle(history);
  };

  return (
    <div className="container  margin-bottom">
      <h1 className="text-center register-top">Register an account</h1>
      <div className="row align-items-md-center">
        <div className="col-md-6">
          <input
            type="text"
            className="w-75 mt-5"
            placeholder="Enter username"
            onBlur={handleNameChange}
          />
          <input
            type="email"
            className="w-75 my-2"
            placeholder="Enter Email"
            onBlur={handleEmailChange}
          />
          <input type="text" className="w-75" placeholder="Enter password" />
          <input
            type="text"
            className="w-75 my-2"
            placeholder="Confirm Password"
            onBlur={handlePasswordChange}
          />
          <button className="btn btn-dark w-75 my-4" onClick={handleSubmit}>
            Submit
          </button>
          <div className="mb-3">--------OR-----------</div>
          <button className="btn btn-dark w-75 " onClick={handleGoogleLogIn}>
            {" "}
            Register with google
          </button>
          <p className="lead my-2">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/FYdt88r/Mobile-login.jpg"
            className="w-75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
