import React, { useState } from "react";
import "./LoginPanel.css";
import "./LoginPanelMain.css";
import { Link } from "react-router-dom";

function LoginPanel(props) {
  const mainStylesheet = props.main ? "main" : "";

  return (
    <div className={props.main ? "loginPanel-main" : "loginPanel"}>
      <div
        className={props.main ? "loginPanel-main-title" : "loginPanel-title"}
      >
        {props.main ? (
          <>
            <h3>Feedback</h3>
            <p className="application-description">
              Add your products and give us your valuable feedback
            </p>
          </>
        ) : (
          <h3>Log in to continue</h3>
        )}
      </div>
      <div className={props.main ? "loginPanel-main-form" : "loginPanel-form"}>
        <div
          className={
            props.main
              ? "loginPanel-main-email-container"
              : "loginPanel-email-container"
          }
        >
          <img className="email-icon"
            src={process.env.PUBLIC_URL + "assets/img/email-icon.png"}
            alt="error"
          />
          <input
            className={
              props.main ? "loginPanel-main-email" : "loginPanel-email"
            }
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div
          className={
            props.main
              ? "loginPanel-main-password--container"
              : "loginPanel-password-container"
          }
        >
          <img className="password-icon"
            src={process.env.PUBLIC_URL + "assets/img/password-icon.png"}
            alt="error"
          />
          <input
            className={
              props.main ? "loginPanel-main-password" : "loginPanel-password"
            }
            type="password"
            placeholder="Password"
            required
          />
        </div>
        {props.main ? (
          <span className="new-user-container">
            Don't have an account? 
            <Link className="new-user-link"
              to="/signup"
              style={{
                textDecoration: "underline",
                color: "#36416A",
                cursor: "pointer",
                marginLeft:"10px"
              }}
            >
               <br className="mobile-line-break" />

              Sign up
            </Link>
          </span>
        ) : null}
        <button
          className={
            props.main ? "loginPanel-main-button" : "loginPanel-button"
          }
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default LoginPanel;
