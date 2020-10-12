import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <Link to="/">
        <img
          className="home-icon"
          alt="Home Icon"
          src="https://tinyurl.com/y2qvmk3x"
          width="25px"
          height="25px"
        />
      </Link>
      <h3>Fit-Tech</h3>
    </div>
  );
}

export default NavBar;
