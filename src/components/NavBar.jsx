import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <Link to="/">
        <img
          className="home-icon"
          alt="Home Icon"
          src="home.png"
          width="25px"
          height="25px"
        />
      </Link>
      <h3 className="title">
        Fit
        <Link
          to="/motivation"
          style={{ textDecoration: "none", color: "black" }}
        >
          -
        </Link>
        Tech
      </h3>
    </div>
  );
}

export default NavBar;
