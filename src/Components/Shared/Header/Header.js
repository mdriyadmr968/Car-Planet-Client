import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <header class="header">
        <a href="/" class="logo">
          CarPlanet
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu allnavLink">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore more cars</Link>
          </li>
          {/* CONDIOTIONAL RENDERING BASE ON THE AUNTHENTICATION STATUS OF USER */}
          {user.email ? (
            <>
              <li>
                <Link to={`/dashboard`}>Dashboard</Link>
              </li>
              <li>
                <Link to={`/admin`}>Admin</Link>
              </li>
              {user.displayName ? (
                <li>
                  <span>{user.displayName}</span>
                </li>
              ) : (
                <li>
                  <span>Your account</span>
                </li>
              )}

              <li>
                <button className="btn btn-danger" onClick={logOut}>
                  {" "}
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="btn btn-danger">Register</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
