import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
        <ul class="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
