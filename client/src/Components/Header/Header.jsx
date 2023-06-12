import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <p className="">Feedback</p>
      </div>
      <div className="header__hyperlinks">
        <span className="header__button-spacing"></span>
        <Link className="header__signin-button" to="/login">
          Log in
        </Link>
        <Link className="header__signin-button" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Header;
