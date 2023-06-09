import React, { useContext, useState } from "react";
import "./SignupPanel.css";
import "./SignupPanelMain.css";
import { Link } from "react-router-dom";
import { loginContext } from "../../store/LoginContext";
import LogIn from "../../Pages/LogIn";

function SignupPanel(props) {
  const { loginPopup, updateLoginPopup } = useContext(loginContext);
  const handleLoginPopup = () => {
    updateLoginPopup(!loginPopup);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation(); // Prevent event propagation when clicking on the popup component
  };
  const handleCloseLoginPopup = () => {
    updateLoginPopup(!loginPopup);
  };
  const mainStylesheet = props.main ? "main" : "";

  return (
    <div className={props.main ? "signupPanel-main" : "signupPanel"}>
      {props.main ? (
        <div
          className={
            props.main ? "signupPanel-main-title" : "signupPanel-title"
          }
        >
          <h3>Feedback</h3>
          <p className="application-description">
            Add your products and give us your valuable feedback
          </p>
        </div>
      ) : (
        <div
          className={
            props.main ? "signupPanel-main-title" : "signupPanel-title"
          }
        >
          <h3>Sign up to continue</h3>
        </div>
      )}

      <div
        className={props.main ? "signupPanel-main-form" : "signupPanel-form"}
      >
        <div
          className={
            props.main
              ? "signupPanel-main-name-container"
              : "signupPanel-name-container"
          }
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/name-icon.png"}
            alt="error"
          />
          <input
            type="text"
            className={
              props.main ? "signupPanel-main-name" : "signupPanel-email"
            }
            placeholder="Name"
          />
        </div>
        <div
          className={
            props.main
              ? "signupPanel-main-email-container"
              : "signupPanel-email-container"
          }
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/email-icon.png"}
            alt="error"
          />
          <input
            className={
              props.main ? "signupPanel-main-email" : "signupPanel-email"
            }
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div
          className={
            props.main
              ? "signupPanel-main-mobile-container"
              : "signupPanel-mobile-container"
          }
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/mobile-icon.png"}
            alt="error"
          />
          <input
            className={
              props.main ? "signupPanel-main-mobile" : "signupPanel-mobile"
            }
            type="tel"
            placeholder="Mobile"
            required
          />
        </div>

        <div
          className={
            props.main
              ? "signupPanel-main-password-container"
              : "signupPanel-password-container"
          }
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/password-icon.png"}
            alt="error"
          />
          <input
            className={
              props.main ? "signupPanel-main-password" : "signupPanel-password"
            }
            type="password"
            placeholder="password"
            required
          />
        </div>
        {props.main ? (
          <span className="existing-user">
            Already have an account?
            <Link className="new-user-link"
              to="/login"
              style={{
                textDecoration: "underline",
                color: "#36416A",
                cursor: "pointer",
                marginLeft:"10px"
              }}
            >
               <br className="mobile-line-break" />
              Log in
            </Link>
          </span>
        ) : (
          <span className="existing-user">
            {" "}
            Already have an account?{" "}
            <button
              onClick={handleLoginPopup}
              style={{
                textDecoration: "underline",
                color: "#36416A",
                cursor: "pointer",
                marginLeft:"10px"
              }}
            >
              Log in
            </button>
            {loginPopup && (
              <div className="overlay" onClick={handlePopupClick}>
                <LogIn main={false} />
              </div>
            )}
          </span>
        )}
        
        <button
          className={
            props.main ? "signupPanel-main-button" : "signupPanel-button"
          }
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignupPanel;
