import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="logintitle">Welcome to AMJ bank</h1>
      <div className="login-options">
        <div className="login-option">
          <Link to="/login">
            <button>User Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">User Sign-up</button>
          </Link>
        </div>
        <div className="login-option">
          <Link to="/admin-login">
            <button>Admin Login</button>
          </Link>
          <Link to="/admin-signup">
            <button className="signup-btn">Admin Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;