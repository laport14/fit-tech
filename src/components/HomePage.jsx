import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="nav-container">
      <h3 className="nav-title">Select Your Workout Below</h3>
      <div className="icons">
        <Link to="/run">
          <img
            className="run-icon"
            alt="run icon"
            src="https://tinyurl.com/yy4ka48p"
            width="40px"
            height="40px"
          />
        </Link>{" "}
        <Link to="/bike">
          <img
            className="bike-icon"
            alt="bike icon"
            src="https://tinyurl.com/y44rxacf"
            width="40px"
            height="40px"
          />
        </Link>{" "}
        <Link to="/lift">
          <img
            className="lift-icon"
            alt="lift icon"
            src="https://tinyurl.com/y2wc6kww"
            width="40px"
            height="40px"
          />
        </Link>
        <Link to="/yoga">
          <img
            className="yoga-icon"
            alt="yoga icon"
            src="https://tinyurl.com/yyy5youa"
            width="40px"
            height="40px"
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
