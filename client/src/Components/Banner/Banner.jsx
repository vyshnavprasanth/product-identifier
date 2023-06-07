import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__image">
        <img
          src={process.env.PUBLIC_URL + "assets/img/banner.png"}
          alt="banner"
        />
      </div>
      <div className="banner__information">
        <h1>Add your products and give your valuable feedback</h1>
        <p>Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time</p>
      </div>
    </div>
  );
}

export default Banner;
